import { useWallet, useConnection } from '@solana/wallet-adapter-react'

import { MintNFTMessage } from '../constants'
import { apiGetMintAmount, apiCheckMintAvailable, apiMintNFT } from '../api'

import base58 from 'bs58'
import { PublicKey, SystemProgram, Transaction } from '@solana/web3.js'
import { createTransferInstruction } from '@solana/spl-token'

export const useMintNFT = (authToken : string | null) => {
    const { connected, wallet, publicKey, sendTransaction, signMessage } = useWallet();
    const { connection } = useConnection()

    const sendSOL = async (amount: number, treasuryWallet: string) : Promise<string | undefined> => {
        try {
            const toPubKey = new PublicKey(treasuryWallet)
            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: publicKey!,
                    toPubkey: toPubKey,
                    lamports: amount
                })
            );
            
            const signature = await sendTransaction(transaction, connection);

            return signature;
        }
        catch (err) {
            console.log(err)
        }
    }

    const sendWOOL = async (amount: number, treasuryWallet: string, woolMintAddress: string) : Promise<string | undefined> => {
        try {
            const woolMintPubKey = new PublicKey(woolMintAddress)
            const toPubKey = new PublicKey(treasuryWallet)

            const transaction = new Transaction();
            
            transaction.add(
                createTransferInstruction(
                    woolMintPubKey,
                    publicKey!,
                    toPubKey,
                    amount,
                    []
                )
            )

            const signature = await sendTransaction(transaction, connection);
            
            return signature;
        }
        catch (err) {

        }
    }

    const mintNFT = async (mintCount : number, treasuryWallet : string, woolMintAddress : string) : Promise<{ data: string } | null | undefined> => {
        if (!connected || !wallet || !publicKey) return null;

        const checkData = await apiCheckMintAvailable({ authToken: authToken! });
        if (!checkData || checkData!.data == false) {
            return null;
        }
        const mintData = await apiGetMintAmount({ authToken: authToken!, amount: mintCount });
        if (!mintData) {
            return null;
        }

        const message = new TextEncoder().encode(MintNFTMessage)
        const signature = await signMessage!(message);
        if (!signature) return null;

        const serializedSignature = base58.encode(signature);

        let mintSignature : string | undefined = undefined;
        if (mintData.data.sol > 0) {
            mintSignature = await sendSOL(mintData.data.sol, treasuryWallet);
        }
        else if (mintData.data.wool > 0) {
            mintSignature = await sendWOOL(mintData.data.wool, treasuryWallet, woolMintAddress);
        }

        if (!mintSignature) return null;

        const data = await apiMintNFT({ authToken: authToken!, message: MintNFTMessage, signature: serializedSignature, publicKey: publicKey!.toString(), mintCount: mintCount, mintSignature: mintSignature!, isStaking: 0 });
        if (!data) return null;

        return data;
    }

    return { mintNFT }
}