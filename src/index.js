import HookedWalletSubprovider from "web3-provider-engine/subproviders/hooked-wallet";
import LedgerWallet from "./LedgerWallet";

export default function(web3, path_override) {
  const ledger = new LedgerWallet(web3, path_override);
  const LedgerWalletSubprovider = new HookedWalletSubprovider(ledger);

  // This convenience method lets you handle the case where your users browser doesn't support U2F
  // before adding the LedgerWalletSubprovider to a providerEngine instance.
  LedgerWalletSubprovider.isSupported = ledger.isU2FSupported;
  LedgerWalletSubprovider.ledger = ledger;

  return LedgerWalletSubprovider;
}
