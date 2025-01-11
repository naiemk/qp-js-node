"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTxLogs = getTxLogs;
const ethers_1 = require("ethers");
const contracts_1 = require("./contracts");
const typechain_types_1 = require("../typechain-types");
const axios_1 = __importDefault(require("axios"));
const logger = contracts_1.CONSOLE_LOGGER;
async function fetchAbiFromExplorer(contractAddress, chainId) {
    const explorer = contracts_1.Config.explorerApi[chainId.toString()];
    if (!explorer) {
        console.error(`Explorer API configuration not found for chain ID: ${chainId}`);
        return null;
    }
    try {
        let response;
        if (explorer.type === "etherscan") {
            response = await axios_1.default.get(explorer.url, {
                params: {
                    module: "contract",
                    action: "getabi",
                    address: contractAddress,
                    apikey: explorer.apiKey, // Include API key if necessary
                },
            });
            if (response.data.status === "1") {
                return response.data.result; // ABI as a JSON string
            }
            else {
                console.error(`Failed to fetch ABI from Etherscan: ${response.data.result}`);
                return null;
            }
        }
        else if (explorer.type === "blockscout") {
            response = await axios_1.default.get(`${explorer.url}/api`, {
                params: {
                    module: "contract",
                    action: "getabi",
                    address: contractAddress,
                },
            });
            if (response.data.status === "1") {
                return response.data.result; // ABI as a JSON string
            }
            else {
                console.error(`Failed to fetch ABI from Blockscout: ${response.data.result}`);
                return null;
            }
        }
        return null;
    }
    catch (error) {
        console.error("Error fetching ABI from explorer:", error);
        return null;
    }
}
async function getTxLogs(txHash, contractAddress = contracts_1.Config.ledgerMgr) {
    const tx = await contracts_1.Config.provider.getTransactionReceipt(txHash);
    if (!tx) {
        throw new Error("Transaction not found");
    }
    // log.debug("> Transaction Receipt:", tx);
    if (tx.status !== 1) {
        contracts_1.CONSOLE_LOGGER.error("> Transaction failed");
        return;
    }
    const contractInterface = typechain_types_1.QuantumPortalLedgerMgrImplUpgradeable__factory.createInterface();
    for (const log of tx.logs) {
        if (log.address.toLowerCase() === contractAddress.toLowerCase()) {
            try {
                const parsedLog = contractInterface.parseLog(log);
                logger.info("> Parsed Log:", parsedLog);
            }
            catch (error) {
                console.error("> Error parsing log:", error);
            }
        }
        else {
            // Attempt to fetch the ABI dynamically for unrelated contracts
            try {
                logger.info(`> Fetching ABI for unrelated log from address: ${log.address}`);
                const abiJson = await fetchAbiFromExplorer(log.address, contracts_1.Config.chainId);
                if (abiJson) {
                    try {
                        const unrelatedContractInterface = new ethers_1.ethers.Interface(JSON.parse(abiJson));
                        const parsedLog = unrelatedContractInterface.parseLog(log);
                        logger.info(`> Parsed Log (Unrelated Contract - ${log.address}):`, parsedLog);
                    }
                    catch (error) {
                        console.error(`> Error parsing log for unrelated contract: ${error.message}`);
                    }
                }
                else {
                    logger.warn(`> ABI not available for address: ${log.address}`);
                }
            }
            catch (error) {
                console.error(`> Error fetching ABI for unrelated contract (${log.address}): ${error.message}`);
            }
        }
    }
}
