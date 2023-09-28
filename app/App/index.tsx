import React from 'react';
import LoggedIn from '../LoggedIn';
import LoggedOut from '../LoggedOut';
import { configureChains, createConfig, mainnet, WagmiConfig } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { publicProvider } from 'wagmi/providers/public'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

if (typeof window !== 'undefined') {
  window.Buffer = window.Buffer || require("buffer").Buffer;
}

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mainnet],
    [publicProvider()],
);

const config = createConfig({
  autoConnect: true,
  connectors: [
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new MetaMaskConnector({ 
      chains,
      options: {
        shimDisconnect: true,
      }
     }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        getProvider() {
          if (typeof window !== 'undefined' && window.ethereum) {
            return window.ethereum;
          }
        },
        shimDisconnect: true,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});

const App = () => {
  const loggedIn = false;

  return (
      <WagmiConfig config={config}>
        {loggedIn ? <LoggedIn/> : <LoggedOut/>}
      </WagmiConfig>
  );
};

export default App;
