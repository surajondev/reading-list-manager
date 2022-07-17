import {
    useMetamask,
    useWalletConnect,
    useCoinbaseWallet,
    useNetwork,
    useAddress,
    useDisconnect,
  } from "@thirdweb-dev/react";

  export const ConnectWallet = () => {
    // const connectWithCoinbaseWallet = useCoinbaseWallet();
    const connectWithMetamask = useMetamask();
    // const connectWithWalletConnect = useWalletConnect();
    const disconnectWallet = useDisconnect();
    const address = useAddress();
    const network = useNetwork();
    // If a wallet is connected, show address, chainId and disconnect button
    if (address) {
      return (
        <div>
          {/* Address: {address}
          <br />
          Chain ID: {network[0].data.chain && network[0].data.chain.id}
          <br /> */}
          <button className="secondary" onClick={disconnectWallet}>Disconnect</button>
        </div>
      );
    }
    // If no wallet is connected, show connect wallet options
    return (
      <div>
        {/* <button onClick={() => connectWithCoinbaseWallet()}>
          Connect Coinbase Wallet
        </button> */}
        <button className="primary" onClick={() => connectWithMetamask()}>Connect Wallet</button>
        {/* <button onClick={() => connectWithWalletConnect()}>
          Connect WalletConnect
        </button> */}
      </div>
    );
  };