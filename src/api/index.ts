import axios from "axios"

import { API_URL } from "../constants"

import { CurrencyType, UserData, WolfNFTData, NFTMetadataInfo, POOL_TYPE } from "../types";

export const apiSignIn = async ({ message, signature, publicKey } : { message: string, signature: string, publicKey: string }) => {
    try {
        const res = await axios.post(`${API_URL}/wallet/connect`, { message, signature, publicKey });
        const data = res.data;

        if (data.status == "error") {
            console.log(data.message);
            return null;
        }
        else {
            return { data: data.data, accessToken: data.accessToken }
        }
    }
    catch (err) {
        console.log(err)
    }
}

export const apiGetWallet = async ({ authToken } : { authToken: string }) : Promise<{ data: UserData } | null | undefined> => {
    try {
        const res = await axios.get(`${API_URL}/wallet`, { 
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        })
        const data = res.data;

        if (data.status == "error") {
            console.log(data.message);
            return null;
        }
        else {
            return { data: data.data }
        }
    }
    catch (err) {
        console.log(err)
    }
}

export const apiWolfNFTOverview = async () : Promise<{ data: WolfNFTData } | null | undefined > => {
    try {
        const res = await axios.get(`${API_URL}/wolf/nft/overview`)
        const data = res.data;

        if (data.status == "error") {
            console.log(data.message);
            return null;
        }
        else {
            return { data: data.data }
        }
    }
    catch (err) {
        console.log(err)
    }
}

export const apiGetNFTMetadata = async (jsonURI : string) : Promise<NFTMetadataInfo | null | undefined> => {
    try {
        const res = await axios.get(jsonURI)
        const data: NFTMetadataInfo = res.data;

        return data;
    }
    catch (err) {
        console.log(err)
    }
}

export const apiUpdateNFTOwners = async ({ authToken, assetIdList } : { authToken: string, assetIdList: Array<string> }) : Promise<{ data: string} | null | undefined> => {
    try {
        const res = await axios.put(`${API_URL}/staking/nft/owners`, 
        {
            assetIdList: assetIdList
        },
        { 
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        })
        const data = res.data;

        if (data.status == "error") {
            return null;
        }
        else {
            return { data: data.data }
        }
    }
    catch (err) {
        console.log(err)
    }
}

export const apiUpdateStakingPool = async ({ authToken, stakingPool, poolType } : { authToken: string, stakingPool: string, poolType: POOL_TYPE }) : Promise<{ data: string} | null | undefined> => {
    try {
        const res = await axios.put(`${API_URL}/wallet/staking`, 
        {
            stakingPool: stakingPool,
            poolType: poolType
        },
        { 
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        })
        const data = res.data;

        if (data.status == "error") {
            return null;
        }
        else {
            return { data: data.message }
        }
    }
    catch (err) {
        console.log(err)
    }
}

export const apiStakingNFTs = async ({ authToken, assetIdList } : { authToken: string, assetIdList: Array<string> }) : Promise<{ data: string} | null | undefined> => {
    try {
        const res = await axios.post(`${API_URL}/staking/multi-stake`, 
        {
            assetIdList: assetIdList
        },
        { 
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        })
        const data = res.data;

        if (data.status == "error") {
            console.log(data);
            return null;
        }
        else {
            return { data: data.data }
        }
    }
    catch (err) {
        console.log(err)
    }
}

export const apiGetMintAmount = async ({ authToken, amount } : { authToken: string, amount: number }) : Promise<{ data: CurrencyType } | undefined | null> => {
    try {
        const res = await axios.get(`${API_URL}/wolf/nft/amount?mintCount=${amount}`, { 
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        })
        const data = res.data;

        if (data.status == "error") {
            console.log(data.message);
            return null;
        }
        else {
            return { data: data.data }
        }
    }
    catch (err) {
        console.log(err)
    }
}

export const apiCheckMintAvailable = async ({ authToken } : { authToken: string }) : Promise<{data: boolean} | undefined | null> => {
    try {
        const res = await axios.get(`${API_URL}/wolf/nft/mint/available`, { 
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        })
        const data = res.data;

        if (data.status == "error") {
            console.log(data.message);
            return null;
        }
        else {
            return { data: data.data }
        }
    }
    catch (err) {
        console.log(err)
    }
}

export const apiMintNFT = async ({ authToken, message, signature, publicKey, mintCount, mintSignature, isStaking } : { authToken: string, message: string, signature: string, publicKey: string, mintCount: number, mintSignature: string, isStaking: number}) : Promise<{ data: string} | null | undefined> => {
    try {
        const res = await axios.post(`${API_URL}/wolf/nft/mint`, 
        {
            message,
            signature,
            publicKey,
            mintCount,
            mintSignature,
            isStaking
        },
        { 
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        })
        const data = res.data;

        if (data.status == "error") {
            console.log(data.message);
            return null;
        }
        else {
            return { data: data.message }
        }
    }
    catch (err) {
        console.log(err)
    }
}