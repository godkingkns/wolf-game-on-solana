import { useState, useRef, useEffect } from "react"
import { Dialog } from "../dialog"

import PhantomIcon from "../../assets/images/phantomWallet.svg"
import CoinbaseIcon from '../../assets/images/coinbaseWallet.svg'
import SolflareIcon from '../../assets/images/solflareWallet.svg'

import { useWallet } from '@solana/wallet-adapter-react'
import { CoinbaseWalletName, PhantomWalletName, SolflareWalletName } from "@solana/wallet-adapter-wallets"
import { formatAddress } from '../../utils'

import { SignInMessage } from "../../constants"

import base58 from "bs58"

import walletCopyIcon from '../../assets/images/walletCopy.svg'
import walletCheckIcon from '../../assets/images/check.svg'
import dropdownIcon from '../../assets/images/dropdown.svg'
import { WalletName } from "@solana/wallet-adapter-base"

import { useAuth } from "../../contexts/AuthContextProvider"

const Button = ({ title, icon, isPopular, onClick }: { title: string, icon: string, isPopular: boolean, onClick: React.MouseEventHandler<HTMLButtonElement> }) => {
    return (
        <button className="bg-brown px-6 py-2 text-white w-full flex justify-between items-center hover:bg-dark-brown" onClick={onClick}>
            <div className="flex items-center gap-6">
                <img src={icon} alt={title} className="h-[34px] w-auto" />
                {title}
            </div>
            {isPopular && <span className="font-poppins text-[10px] px-2.5 py-1 bg-white bg-opacity-10 rounded-full">Popular</span>}
        </button>
    )
}

const Content = ({ setIsOpen } : { setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const { select, connect } = useWallet();

    const onConnect = async (walletName : WalletName) => {
        try {
            await select(walletName);
            await connect()
            setIsOpen(false)  
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="space-y-6">
            <h2 className="text-brown">Connect your wallet</h2>
            <div className="space-y-1.5">
                <Button title="Phantom Wallet" icon={PhantomIcon} isPopular={true} onClick={() => onConnect(PhantomWalletName)}/>
                <Button title="Solflare" icon={SolflareIcon} isPopular={false} onClick={() => onConnect(SolflareWalletName)} />
                <Button title="Coinbase" icon={CoinbaseIcon} isPopular={false} onClick={() => onConnect(CoinbaseWalletName)} />
            </div>
        </div>
    )
}

const DropdownMenu = ({ setIsOpen, signOut, icon } : { setIsOpen: React.Dispatch<React.SetStateAction<boolean>>, signOut: any, icon: string }) => {
    const { connected, publicKey, disconnect } = useWallet();
    const [ isCopied, setIsCopied ] = useState(false);

    const menuRef = useRef<HTMLDivElement>(null);

    const onDisconnect = async () => {
        try {
            await disconnect();
            await signOut();
            setIsOpen(false);
        } catch (err) {
            console.log(err);
        }
    }

    const copyToClipboard = () => {
        if (connected) {
            navigator.clipboard.writeText(publicKey!.toString());
            setIsCopied(true);
        }
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setIsOpen]);

    return (
        <div ref={menuRef} className="absolute top-full right-0 bg-brown z-10 w-[177px]">
            <div className="p-[10px] flex items-center justify-center flex-col">
                <hr className="border-[0.5px] border-[rgba(255,255,255,0.2)] w-full" />
                <div className="flex items-center justify-between mt-[10px] text-xs text-white w-full">
                    <div className="flex items-center">
                        <img src={icon} className="h-5 w-auto mr-2" />
                        <span className="mt-1">{connected ? formatAddress(publicKey!.toString()) : ''}</span>
                    </div>
                    <button onClick={copyToClipboard}>
                        <img src={!isCopied ? walletCopyIcon : walletCheckIcon} alt="Copy Wallet" className="w-4 h-4 mr-1" />
                    </button>
                </div>
                <hr className="border-[0.5px] border-[rgba(255,255,255,0.2)] w-full mt-[10px]" />
                <button 
                    onClick={onDisconnect}
                    className="block w-full px-4 pb-1.5 pt-2 text-xs text-brown mt-[10px] bg-white hover:bg-brown-100 hover:text-gray-900"
                >
                    Disconnect
                </button>
            </div>
        </div>
    );
};

export const WalletButton = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const { connected, wallet, publicKey, signMessage } = useWallet();

    const { address, authToken, signIn, signOut } = useAuth();

    const onClickWalletButton = async () => {
        if (!connected) {
            setIsOpen(!isOpen);
        }
        else {
            setIsDropdownOpen(!isDropdownOpen);
        }
    }

    const getIcon = () => {
        let icon = PhantomIcon;
        if ( wallet?.adapter.name === PhantomWalletName ) {
            icon = PhantomIcon;
        }
        else if ( wallet?.adapter.name === SolflareWalletName ) {
            icon = SolflareIcon;
        }
        else if ( wallet?.adapter.name === CoinbaseWalletName ) {
            icon = CoinbaseIcon;
        }

        return icon;
    }

    useEffect(() => {
        const signData = async () => {
            const message = new TextEncoder().encode(SignInMessage)
            const signature = await signMessage!(message);
            const serializedSignature = base58.encode(signature);
            
            await signIn({ message: SignInMessage, signature: serializedSignature, publicKey: publicKey!.toString() });
        }

        if (connected && !authToken && (!address || address.toLowerCase() != publicKey!.toString().toLowerCase())) {
            signData()
        }
    }, [connected, authToken, address])

    return (
        <>
            <div className="relative inline-block">
                <button className={`bg-brown w-[177px] text-white pb-3 pt-3.5 px-4 text-xs border-4 border-black hover:bg-dark-brown flex ${connected? 'justify-between' : 'justify-center'} items-center`} onClick={onClickWalletButton}>
                    { connected ?
                    <>
                        <div className="flex items-center">
                            <img src={getIcon()} className="h-5 w-auto mr-2" />
                            <span className="mt-1">{formatAddress(publicKey!.toString())}</span>
                        </div>
                        <img src={dropdownIcon} className="w-auto h-2"/>
                    </>
                    : 'Connect Wallet'
                    }
                </button>
                {
                    isDropdownOpen && <DropdownMenu setIsOpen={setIsDropdownOpen} signOut={signOut} icon={getIcon()} />
                }
            </div>
            {
                isOpen && <Dialog setIsOpen={setIsOpen} classes="max-w-[435px] !h-[266px]" ><Content setIsOpen={setIsOpen}/></Dialog>
            }
        </>
    )
}
