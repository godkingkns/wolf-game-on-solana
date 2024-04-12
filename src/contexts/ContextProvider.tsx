import { WalletAdapterNetwork, WalletError } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider as ReactUIWalletModalProvider } from '@solana/wallet-adapter-react-ui';
import {
    CoinbaseWalletAdapter,
    PhantomWalletAdapter,
    SolflareWalletAdapter,
    TorusWalletAdapter,
    // LedgerWalletAdapter,
    // SlopeWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { FC, ReactNode, useCallback, useMemo } from 'react';

export const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const network = import.meta.env.VITE_APP_ACTIVE_NETWORK
    // const endpoint = useMemo(() => clusterApiUrl(network), [network]);
    const mainnet_endpoint = "https://solana-mainnet.g.alchemy.com/v2/DDH4MchOrbrexCCKordy9QBGWM8ukagJ";
    const devnet_endpoint = "https://solana-devnet.g.alchemy.com/v2/R4W5m1n95p7tgK4nQDERakAUvcn91IBS";

    let endpoint = mainnet_endpoint;
    if (network === WalletAdapterNetwork.Devnet) {
        endpoint = devnet_endpoint;
    }

    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
            new SolflareWalletAdapter(),
            new CoinbaseWalletAdapter(),
            new TorusWalletAdapter(),
            // new LedgerWalletAdapter(),
            // new SlopeWalletAdapter(),
        ],
        [network]
    );

    const onError = useCallback(
        (error: WalletError) => {
            // notify({ type: 'error', message: error.message ? `${error.name}: ${error.message}` : error.name });
            console.error(error);
        },
        []
    );

    return (
        // TODO: updates needed for updating and referencing endpoint: wallet adapter rework
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} onError={onError} autoConnect={true}>
                <ReactUIWalletModalProvider>{children}</ReactUIWalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};