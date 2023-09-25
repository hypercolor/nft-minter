import LoggedIn from '../LoggedIn';
import LoggedOut from '../LoggedOut';
import { createPublicClient, http } from 'viem';
import { createConfig, mainnet, WagmiConfig } from 'wagmi';

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http(),
  }),
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
