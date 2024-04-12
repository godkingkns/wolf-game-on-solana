import { Link } from "react-router-dom"
import { Card } from "../../components/card"
import { useEffect, useMemo, useState } from "react"
import { Button } from "../../components/button"
import { Dialog } from "../../components/dialog"
import { MintForm } from "./mintForm"
import { GameStatus } from "./gamestatus"
import { Leaderboard } from "./leaderboard"
import { Staked } from "./staked"
import { Wallet } from "./wallet"

import { useWolfNFTOverview } from "../../hooks/useWolfNFTOverview"
import { useAuth } from "../../contexts/AuthContextProvider"
import { WolfNFTData } from "../../types"

import { Level } from "../../types"
import { useMintNFT } from "../../hooks/useMintNFT"
import { useAssets } from "../../hooks/useAssets"
import { useStake } from "../../hooks/useStake"
import { useWallet } from "@solana/wallet-adapter-react"

import { toast } from "react-toastify"

const SmallBox = ({ levels }: { levels: Array<Level> }) => {
    return (
        <div className="relative w-full aspect-[6/1] max-w-[307px] max-h-[44px] mx-auto md:max-w-[500px] md:w-[500px] md:max-h-[70px] bg-[url('./assets/images/smallBox.svg')] bg-contain md:bg-cover bg-center flex justify-center items-center">
            {
                levels.map((level, index) => (
                    <p key={index} className={`px-1 py-1.5 md:py-3 border-[#3A221F] text-black flex justify-center items-center md:-translate-y-1 ${index===levels.length-1 ? "":"border-r-2 md:border-r-4"}`} >
                        <span className="md:translate-y-1 relative z-10 [font-size:_clamp(2px,2vw,8px)] md:text-base">{level.name}</span>
                        <span
                            className="absolute top-0 left-0 h-full bg-maroon"
                            style={{ width: `${level.progress}%` }}
                        ></span>
                    </p>
                ))
            }
        </div>
    )
}

const Cards = () => {
    const solPriceGen0 = import.meta.env.VITE_APP_SOL_PRICE_GEN_0;
    const woolPriceGen1 = import.meta.env.VITE_APP_WOOL_PRICE_GEN_1;
    const woolPriceGen2 = import.meta.env.VITE_APP_WOOL_PRICE_GEN_2;
    const woolPriceGen3 = import.meta.env.VITE_APP_WOOL_PRICE_GEN_3;

    const [totalMinted, setTotalMinted] = useState('0/0')
    const [miningLevels, setMiningLevels] = useState<Array<Level>>([
        {
            name: `gen 0`,
            progress: 0
        },
        {
            name: `${Number(woolPriceGen1).toLocaleString()} $wool`,
            progress: 0
        },
        {
            name: `${Number(woolPriceGen2).toLocaleString()} $wool`,
            progress: 0
        },
        {
            name: `${Number(woolPriceGen3).toLocaleString()} $wool`,
            progress: 0
        }
    ])
    const [isMintOpen, setIsMintOpen] = useState(false)
    const [isMintStakeOpen, setIsMintStakeOpen] = useState(false)
    const { connected } = useWallet();
    const [pricePerSheep, setPricePerSheep] = useState(0)
    const [generation, setGeneration] = useState(0)

    const { authToken } = useAuth();
    const wolfNFTData : WolfNFTData | undefined = useWolfNFTOverview();
    const { mintNFT } = useMintNFT(authToken);
    const { stakeNFTs } = useStake(wolfNFTData, authToken)

    const assets = useAssets(wolfNFTData);

    const [tab, setTab] = useState(0)
    const [tab2, setTab2] = useState(0)

    useEffect(() => {
        if (wolfNFTData) {
            setTotalMinted(`${wolfNFTData.totalSupply}/${wolfNFTData.totalMinted}`)
            setMiningLevels([
                {
                    name: `gen 0`,
                    progress: wolfNFTData.totalMinted / wolfNFTData.genZeroSupply * 100
                },
                {
                    name: `${Number(woolPriceGen1).toLocaleString()} $wool`,
                    progress: wolfNFTData.totalMinted / wolfNFTData.totalSupply * 100
                },
                {
                    name: `${Number(woolPriceGen2).toLocaleString()} $wool`,
                    progress: wolfNFTData.totalMinted / wolfNFTData.totalSupply * 100
                },
                {
                    name: `${Number(woolPriceGen3).toLocaleString()} $wool`,
                    progress: wolfNFTData.totalMinted / wolfNFTData.totalSupply * 100
                }
            ])

            if (wolfNFTData.totalMinted > wolfNFTData.totalSupply * 4 / 5) {
                setGeneration(3);
                setPricePerSheep(woolPriceGen3);
            }
            else if (wolfNFTData.totalMinted > wolfNFTData.totalSupply * 2 / 5 ) {
                setGeneration(2);
                setPricePerSheep(woolPriceGen2);
            }
            else if (wolfNFTData.totalMinted > wolfNFTData.totalSupply * 1 / 5) {
                setGeneration(1);
                setPricePerSheep(woolPriceGen1);
            }
            else {
                setGeneration(0);
                setPricePerSheep(solPriceGen0);
            }
        }
    }, [wolfNFTData])

    const isLoading = useMemo(() => !connected || !authToken || !wolfNFTData, [connected, authToken, wolfNFTData])

    const onClickMintButton = () => {
        if (!wolfNFTData) {
            toast.error("Please connect a wallet first.");
            return;
        } else {
            setIsMintOpen(true);
        }
    }

    const onClickMintStakeButton = () => {
        if (!wolfNFTData) {
            toast.error("Please connect a wallet first.");
            return;
        } else {
            setIsMintStakeOpen(true);
        }
    }

    return (
        <>
            <div className="flex justify-center items-center flex-wrap gap-14 py-6 mx-3 md:mx-auto max-w-[1250px]">
                <Card classes="w-full max-w-[557px] md:h-[343px]">
                    <div className="p-12 space-y-5">
                        <p className="text-base sm:text-[21px] leading-[23px] sm:leading-[38.3px] text-center tracking-wide">Sheep and Wolves competing for $WOOL on a farm in the metaverse. Nothing but Solana blockchain.</p>
                        <div className="md:space-x-14 space-y-4 underline text-base sm:text-2xl">
                            <Link to={'/white-paper'} className="hover:text-dark-brown  w-full text-center block md:block">White paper</Link>
                            {/* <Link to={'/terms-of-service'} className="hover:text-dark-brown w-full text-center block md:inline">Terms of service</Link> */}
                        </div>
                    </div>
                </Card>
                <Card classes="w-full max-w-[574px] md:h-[343px]">
                    <div className="px-4 p-12 sm:px-9 space-y-5">
                        <p className="text-[22px] sm:text-4xl text-center leading-[38.3px] tracking-wide">Minting(test)</p>
                        <SmallBox levels={miningLevels} />
                        <p className="text-black text-center text-sm sm:text-base">{totalMinted} minted</p>
                        <div className="flex justify-center items-center gap-4 flex-wrap">
                            <Button title="Mint" classes={'w-[141px]'} onClick={onClickMintButton} />
                            <Button title="Mint & Stake" classes={'w-[217px]'} onClick={onClickMintStakeButton} />
                        </div>
                    </div>
                </Card>
                <Card classes="w-full max-w-[574px] md:h-[470px] ">
                    <div className="p-12 px-5 sm:px-8 md:px-14 space-y-6">
                        <div className="text-base md:text-[26px] flex justify-between break-words break-all text-left">
                            <button className={tab === 0 ? "text-brown underline" : "text-light-gray"} onClick={() => setTab(0)}>Game status</button>
                            <button className={tab === 1 ? "text-brown underline" : "text-light-gray"} onClick={() => setTab(1)}>leaderboard</button>
                        </div>
                        {
                            tab === 0 && <GameStatus />
                        }
                        {
                            tab === 1 && <Leaderboard />
                        }
                    </div>
                </Card>
                <Card classes="w-full max-w-[574px] md:h-[470px]">
                    <div className="p-12 px-5 sm:px-8 md:px-14 space-y-6">
                        <div className="text-base md:text-[26px] flex justify-between break-words break-all text-left">
                            <button className={tab2 === 0 ? "text-brown underline" : "text-light-gray"} onClick={() => setTab2(0)}>Staked</button>
                            <button className={tab2 === 1 ? "text-brown underline" : "text-light-gray"} onClick={() => setTab2(1)}>My Wallet</button>
                        </div>
                        {
                            tab2 === 0 && <Staked />
                        }
                        {
                            tab2 === 1 && <Wallet assets={assets} stakeNFTs = {stakeNFTs}/>
                        }
                    </div>
                </Card>
            </div>
            {
                isMintOpen && <Dialog setIsOpen={setIsMintOpen} classes="max-w-[435px] h-[344px]"><MintForm pricePerSheep={pricePerSheep} generation={generation} wolfNFTData={wolfNFTData!} mintNFT={mintNFT} isLoading={isLoading}/></Dialog>
            }
            {
                isMintStakeOpen && <Dialog setIsOpen={setIsMintStakeOpen} classes="max-w-[435px] h-[344px]"><MintForm pricePerSheep={pricePerSheep} generation={generation} wolfNFTData={wolfNFTData!} mintNFT={mintNFT} isLoading={isLoading}/></Dialog>
            }
        </>
    )
}

export default Cards