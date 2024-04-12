import { StakedType } from "../types";
import { walletAdapterIdentity } from '@metaplex-foundation/umi-signer-wallet-adapters'
import { publicKey, TransactionBuilder, Transaction, transactionBuilderGroup, Umi } from "@metaplex-foundation/umi";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { MPL_BUBBLEGUM_PROGRAM_ID } from "@metaplex-foundation/mpl-bubblegum";
import { transfer, mplBubblegum, getAssetWithProof } from "@metaplex-foundation/mpl-bubblegum";
import { PublicKey } from "@solana/web3.js";
import { devnetHTTPProvider } from '../constants'
import { WalletContextState } from "@solana/wallet-adapter-react";

export const formatAddress = (address: string) => {
    return address? `${address.substring(0, 4)}...${address.substring(address.length-5, address.length-1)}` : '';
}

export const compareArrays = (originArr: Array<StakedType>, newArr : Array<StakedType>) : boolean => {
    const originImgSet = new Set(originArr.map(item => item.img));

    for (const newItem of newArr) {
        if (!originImgSet.has(newItem.img)) {
            return true;
        }
    }

    return false;
}

export const getAssetProof = async (assetId : string) => {
    const response = await fetch(devnetHTTPProvider, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            jsonrpc: '2.0',
            id: 'my-id',
            method: 'getAssetProof',
            params: {
              id: assetId
            },
        }),
    })
    const { result } = await response.json();
    return result;
}

export const getAsset = async (assetId: string) => {
    const response = await fetch(devnetHTTPProvider, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            jsonrpc: '2.0',
            id: 'my-id',
            method: 'getAsset',
            params: {
              id: assetId
            },
        }),
    })
    const { result } = await response.json();
    return result;
}

export const transferCNFT = async (assetId: string, currentLeafOwner: string, newLeafOwner: string, merkleTree: string, umi: Umi) => {

    const assetWithProof = await getAssetWithProof(umi, publicKey(assetId));

    let transactionBuilder : TransactionBuilder = await transfer(umi, {
        ...assetWithProof,
        merkleTree: publicKey(merkleTree),
        leafOwner: publicKey(currentLeafOwner),
        newLeafOwner: publicKey(newLeafOwner)
    })
    transactionBuilder = await transactionBuilder.setLatestBlockhash(umi);

    return transactionBuilder;
}

export const transferMultipleCNFTs = async (assetIds : Array<string>, currentLeafOwner: string, newLeafOwner: string, merkleTree: string, wallet: WalletContextState ) : Promise<void> => {
    const umi = createUmi(devnetHTTPProvider).use(mplBubblegum()).use(walletAdapterIdentity(wallet))
    let group = transactionBuilderGroup();
    for(let i = 0; i < assetIds.length; i ++) {
        const assetId = assetIds[i];
        const transactionBuilder = await transferCNFT(assetId, currentLeafOwner, newLeafOwner, merkleTree, umi);
        group = group.add(transactionBuilder)
    }
    const tx = await group.sendAndConfirm(umi);
    console.log(tx);
}