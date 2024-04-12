import { useState, useEffect } from "react";
import { PublicKey, Keypair, SystemProgram, Connection } from "@solana/web3.js";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { POOL_TYPE, WolfNFTData } from "../types";

import { apiUpdateNFTOwners, apiGetWallet, apiUpdateStakingPool, apiStakingNFTs } from "../api";
import { transferMultipleCNFTs } from "../utils";

import { StakedType, POOL_SIZE } from "../types";

export const useStake = (wolfNFTData: WolfNFTData | undefined, authToken : string | null) => {
  const wallet = useWallet();
  const { connected, publicKey, sendTransaction, signMessage, signAllTransactions } = wallet;
  const { connection } = useConnection()

  const createUserPoolAccount = async (size: POOL_SIZE, type: POOL_TYPE) : Promise<string | undefined | null> => {
    if (!wolfNFTData || !authToken) return null;
    try {
      const walletInfo = await apiGetWallet({ authToken });
      const stakingPool = walletInfo!.data.stakingPool;

      if (stakingPool) {
        return stakingPool;
      }
      else {
        const userPool = Keypair.generate();
        const stakingProgram = new PublicKey(wolfNFTData.wolfStaking);
        const userPoolAccount = await SystemProgram.createAccount({
          fromPubkey: publicKey!,
          newAccountPubkey: userPool.publicKey,
          lamports: await connection.getMinimumBalanceForRentExemption(size),
          space: size,
          programId: stakingProgram
        })
        const stakingPool = userPool.publicKey.toString();
        const data = await apiUpdateStakingPool({ authToken, stakingPool, poolType : type})

        if (!data) return null;
        return stakingPool;
      }
    } catch (err: any) {
      console.log("createUserPoolAccount ", err.message)
    }
  }

  const stakeNFTs = async (assets : Array<StakedType>) : Promise<{ data: string } | null | undefined> => {
    if (!wolfNFTData || !authToken || !publicKey) return;

    try {
      console.log(assets);      
      const poolData = await createUserPoolAccount(POOL_SIZE.Brozen, POOL_TYPE.Brozen);
      if (!poolData) return null;
      console.log(poolData)
      const assetIdList : Array<string> = assets.map(asset => asset.assetId);
      const data = await apiUpdateNFTOwners({ authToken, assetIdList });
      if (!data) return null;
      console.log(wolfNFTData.stakingTreasury)
      await transferMultipleCNFTs(assetIdList, publicKey!.toString(), wolfNFTData.stakingTreasury, wolfNFTData.wolfMerkleTree, wallet);
      console.log("AAAA");
      const result = await apiStakingNFTs({ authToken, assetIdList });
      if (!result) return null;

    } catch (err : any) {
      console.log(err)
    }

    return null;
  }

  useEffect(() => {
    if (!authToken || !connected || !wolfNFTData) return;

  }, [authToken, connected, wolfNFTData])

  return { stakeNFTs }
}