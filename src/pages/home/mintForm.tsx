import { MouseEvent, useState, useEffect } from "react"

import { WolfNFTData } from "../../types";
import { toast } from "react-toastify"

export const MintForm = ({ pricePerSheep, generation, wolfNFTData, mintNFT, isLoading } : { pricePerSheep : number, generation : number, 
    wolfNFTData : WolfNFTData, mintNFT: (mintCount: number, treasuryWallet: string, woolMintAddress: string) => Promise<{data: string} | null | undefined>, isLoading: boolean }) => {
    const [quantity, setQuantity] = useState(1)
    const [totalCost, setTotalCost] = useState(0)

    const mintMAX = import.meta.env.VITE_APP_MINT_MAX;
    const woolPrice1 = import.meta.env.VITE_APP_WOOL_PRICE_GEN_1;
    const woolPrice2 = import.meta.env.VITE_APP_WOOL_PRICE_GEN_2;
    const woolPrice3 = import.meta.env.VITE_APP_WOOL_PRICE_GEN_3;

    const setMaxQuantity = (e: MouseEvent) => {
        e.preventDefault()
        setQuantity(Number(mintMAX))
    }

    const onMint = async () => {
        if (isLoading) {
            toast.error("Please connect a wallet first.");
            return;
        }
        if (quantity <= 0) return;
        
        const data = await mintNFT(quantity, wolfNFTData.treasury, wolfNFTData.woolMint);
        if (!data) return;
        console.log(data)
    }

    useEffect(() => {
        if (wolfNFTData.totalMinted + quantity > wolfNFTData.totalSupply * 2 / 5) {
            const woolAmount = (wolfNFTData.totalSupply * 2 / 5 - wolfNFTData.totalMinted) * woolPrice1 + (wolfNFTData.totalMinted + quantity - wolfNFTData.totalSupply * 2 / 5 + 1) * woolPrice2;
            setTotalCost(woolAmount)
        }
        else if (wolfNFTData.totalMinted + quantity > wolfNFTData.totalSupply * 4 / 5) {
            const woolAmount = (wolfNFTData.totalSupply * 4 / 5 - wolfNFTData.totalMinted) * woolPrice2 + (wolfNFTData.totalMinted + quantity - wolfNFTData.totalSupply * 4 / 5 + 1) * woolPrice3;
            setTotalCost(woolAmount)
        }
        else {
            setTotalCost(pricePerSheep * quantity);
        }
    }, [quantity])

    return (
        <div className="-space-y-1">
            <div className="pb-3 flex items-center justify-center">Mint Detail</div>
            <form className="space-y-4 border-t border-brown py-4">
                <div className="text-xs">
                    <label>Price Per Sheep</label>
                    <input value={`${pricePerSheep} ${generation > 0 ? '$WOOL' : 'SOL'}`} readOnly className="border border-maroon bg-transparent py-2.5 px-4 w-full focus:outline-none focus:border-black" />
                </div>
                <div className="text-xs relative">
                    <label className="flex items-center justify-between">Quantity <span className="text-black underline text-[10px]">Maximum {mintMAX} per TRX</span></label>
                    <input type="number" className="border border-maroon bg-transparent py-2.5 px-4 w-full pr-20 focus:outline-none focus:border-black" onChange={(e) => setQuantity(Number(e.target.value))} min={0} max={mintMAX} value={quantity} />
                    <button className="bg-brown text-white px-2.5 py-2 absolute right-[3px] bottom-[3px]" onClick={setMaxQuantity}>max</button>
                </div>
                <p className="flex items-center justify-between border-t border-brown py-2">Total Cost <span>{totalCost.toFixed(2)} {generation > 0 ? '$WOOL' : 'SOL'}</span></p>
            </form>
            <button className="bg-brown w-full py-2.5 text-xs text-white hover:bg-light-brown" onClick={onMint}>Mint Now</button>
        </div>
    )
}
