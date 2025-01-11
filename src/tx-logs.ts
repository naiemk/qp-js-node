import { ethers } from "ethers";
import { Config } from "./contracts";
import { QuantumPortalLedgerMgrImplUpgradeable__factory } from "../typechain-types";
import axios from "axios";

async function fetchAbiFromExplorer(contractAddress: string, chainId: number): Promise<string | null> {
  const explorer = Config.explorerApi[chainId.toString()];
  if (!explorer) {
    console.error(`Explorer API configuration not found for chain ID: ${chainId}`);
    return null;
  }

  try {
    let response;
    if (explorer.type === "etherscan") {
      response = await axios.get(explorer.url, {
        params: {
          module: "contract",
          action: "getabi",
          address: contractAddress,
          apikey: explorer.apiKey, // Include API key if necessary
        },
      });
      if (response.data.status === "1") {
        return response.data.result; // ABI as a JSON string
      } else {
        console.error(`Failed to fetch ABI from Etherscan: ${response.data.result}`);
        return null;
      }
    } else if (explorer.type === "blockscout") {
      response = await axios.get(`${explorer.url}/api`, {
        params: {
          module: "contract",
          action: "getabi",
          address: contractAddress,
        },
      });
      if (response.data.status === "1") {
        return response.data.result; // ABI as a JSON string
      } else {
        console.error(`Failed to fetch ABI from Blockscout: ${response.data.result}`);
        return null;
      }
    }
    return null;
  } catch (error) {
    console.error("Error fetching ABI from explorer:", error);
    return null;
  }
}

export async function getTxLogs(txHash: string, contractAddress: string = Config.ledgerMgr) {
  const tx = await Config.provider!.getTransactionReceipt(txHash);
  if (!tx) {
    throw new Error("Transaction not found");
  }

  // console.log("> Transaction Receipt:", tx);
  if (tx.status !== 1) {
    console.log("> Transaction failed");
    return;
  }
  const contractInterface = QuantumPortalLedgerMgrImplUpgradeable__factory.createInterface();

  for (const log of tx.logs) {
    if (log.address.toLowerCase() === contractAddress.toLowerCase()) {
      try {
        const parsedLog = contractInterface.parseLog(log);
        console.log("> Parsed Log:", parsedLog);
      } catch (error) {
        console.error("> Error parsing log:", error);
      }
    } else {
      // Attempt to fetch the ABI dynamically for unrelated contracts
      try {
        console.log(`> Fetching ABI for unrelated log from address: ${log.address}`);
        const abiJson = await fetchAbiFromExplorer(log.address, Config.chainId);
        if (abiJson) {
          try {
            const unrelatedContractInterface = new ethers.Interface(JSON.parse(abiJson));
            const parsedLog = unrelatedContractInterface.parseLog(log);
            console.log(`> Parsed Log (Unrelated Contract - ${log.address}):`, parsedLog);
          } catch (error) {
            console.error(`> Error parsing log for unrelated contract: ${(error as Error).message}`);
          }
        } else {
          console.log(`> ABI not available for address: ${log.address}`);
        }
      } catch (error) {
        console.error(`> Error fetching ABI for unrelated contract (${log.address}): ${(error as Error).message}`);
      }
    }
  }
}
