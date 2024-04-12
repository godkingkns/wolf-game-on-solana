import { useState, useEffect } from 'react'

import { apiWolfNFTOverview } from '../api'

import { WolfNFTData } from '../types'

export const useWolfNFTOverview = () => {
    const [wolfNFTData, setWolfNFTData] = useState<WolfNFTData | undefined>()

    useEffect(() => {
        const fetchWolfNFTOverview = async () => {
            const data = await apiWolfNFTOverview();

            if (data) {
                setWolfNFTData(data!.data);
            } else {
                setWolfNFTData(undefined);
            }
        }

        fetchWolfNFTOverview()
    }, [])

    return wolfNFTData;
}