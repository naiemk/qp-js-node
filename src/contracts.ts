import { ethers, Signer } from "ethers";
import { QuantumPortalAuthorityMgrUpgradeable, QuantumPortalAuthorityMgrUpgradeable__factory, QuantumPortalLedgerMgrImplUpgradeable, QuantumPortalLedgerMgrImplUpgradeable__factory, QuantumPortalMinerMgrUpgradeable, QuantumPortalMinerMgrUpgradeable__factory } from "../typechain-types"

export interface CliConfig {
  role: 'miner' | 'finalizer';
  ledgerMgr: string;
  pairs: [number, number][];
  explorerApi: {
    [key: string]: {
      type: 'etherscan' | 'blockscout';
      url: string;
      apiKey: string;
    }
  }
}

export const Config = {
  role: null as 'miner' | 'finalizer' | null,
  ledgerMgr: '',
  wallet: null as Signer | null,
  provider: null as ethers.JsonRpcProvider | null,
  targetWallet: null as Signer | null,
  walletSk: '',
  chainId: 0 as number,
  explorerApi: {} as any,
};

export function expiryInFuture(): number {
  return Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 1; // 1 day
}

export function randomSalt(): string {
  return '0x' + Buffer.from(ethers.randomBytes(32)).toString('hex');
}

export class Contracts {
  static async ledgerMgr(wallet: Signer = Config.wallet!): Promise<QuantumPortalLedgerMgrImplUpgradeable> {
    console.log('ledgerMgr', (await wallet.provider!.getNetwork()).chainId);
    return QuantumPortalLedgerMgrImplUpgradeable__factory.connect(Config.ledgerMgr, wallet);
  }

  static async minerMgr(wallet: Signer = Config.wallet!): Promise<QuantumPortalMinerMgrUpgradeable> {
    const mgr = await Contracts.ledgerMgr(wallet);
    const mineAddress = await mgr.minerMgr();
    return QuantumPortalMinerMgrUpgradeable__factory.connect(mineAddress, wallet);
  }

  static async authorityMgr(wallet: Signer = Config.wallet!): Promise<QuantumPortalAuthorityMgrUpgradeable> {
    const mgr = await Contracts.ledgerMgr(wallet);
    const authorityAddress = await mgr.authorityMgr();
    return QuantumPortalAuthorityMgrUpgradeable__factory.connect(authorityAddress, wallet);
  }
};
