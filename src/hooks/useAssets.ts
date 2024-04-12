import axios from 'axios'
import { useWallet } from '@solana/wallet-adapter-react'
import { useEffect, useState } from 'react';

import { NFTMetadataInfo, WolfNFTData } from '../types';
import { devnetHTTPProvider } from '../constants'

import { apiGetNFTMetadata } from '../api';

export const useAssets = (wolfNFTData: WolfNFTData | undefined) => {
    const [assets, setAssets] = useState<Array<NFTMetadataInfo>>();
    const { connected, publicKey } = useWallet()

    const fetchAssets = async () => {
        if (!connected || !wolfNFTData) return;

        try {
            // JSON RPC Call
            const data = {
              id: 'rpd-op-123',
              jsonrpc: '2.0',
              method: 'getAssetsByOwner',
              params: {
                ownerAddress: publicKey!.toString(),
              },
            };
      
            const txResponse = await axios.post(
                devnetHTTPProvider,
                data,
            );
      
            const txResult = txResponse?.data?.result;

            if (!txResult) return;

            const items = txResult.items.filter((item : any) => item.compression.compressed === true && item.grouping[0].group_value === wolfNFTData.wolfCollection && item.compression.tree === wolfNFTData.wolfMerkleTree)
            const assetArray = new Array<NFTMetadataInfo>();

            for (let i = 0; i < items.length; i ++) {
                const asset : NFTMetadataInfo | undefined | null = await apiGetNFTMetadata(items[i].content.json_uri);
                if (asset) {
                    asset.assetId = items[i].id;
                    assetArray.push(asset);
                }
            }
            setAssets(assetArray);
        } catch (err: any) {
            console.log('MetaplexService: getAssetsByOwner ', err.message);
            return null;
        }
    }

    useEffect(() => {
        if (!connected || !wolfNFTData) return;

        fetchAssets();

        const interval = setInterval(() => {
            fetchAssets()
        }, 2000);

        return () => clearInterval(interval);
    }, [connected, wolfNFTData, publicKey])

    return assets;
}