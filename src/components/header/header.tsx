import { Link } from "react-router-dom"
import TwitterIcon from "../../assets/images/twitter.png"
import TelegramIcon from "../../assets/images/telegram.svg"
import MenuOpenIcon from "../../assets/images/menu.svg"
import MenuCloseIcon from "../../assets/images/menu_close.svg"
import SolanaIcon from "../../assets/images/logo.png"
import { WalletButton } from "./button"
import { useState } from "react"

interface linkitem {
    title: string,
    path: string,
    isComingSoon: boolean,
    classes?: string
}
const LinkItem = ({ title, path, isComingSoon, classes }: linkitem) => {
    return (
        <Link to={path} className={classes}><span className="hover:underline">{title}</span> {isComingSoon && <span className="bg-brown text-white text-[8px] p-1 px-1.5 rounded-full pt-1.5 leading-[8.8px] group-hover:no-underline">soon</span>}</Link>
    )
}

const Links = ({ links }: { links: Array<linkitem> }) => {
    return (
        <div className="space-x-11 hidden lg:block">
            {
                links.map((link: linkitem, index: number) => (
                    <LinkItem path={link.path} title={link.title} isComingSoon={link.isComingSoon} key={index} />
                ))
            }
        </div>
    )
}

const Socials = ({classes}:{classes?:string}) => {
    return (
        <div className={`gap-6 hidden lg:flex ${classes}`}>
            <div className="flex gap-4">
                <Link to="https://twitter.com/wolfgamesol" target="_blank" className="flex items-center"><img src={TwitterIcon} alt="Wolf Game on SOL Twitter" className="cursor-pointer hover:scale-105 w-[30px] h-[30px]" /></Link>
                {/* <img src={TelegramIcon} alt="Wolf Game on SOL Telegram" className="cursor-pointer hover:scale-105" /> */}
            </div>
            <WalletButton />
        </div>
    )
}

const menu_links = [
    {
        title: "Season 1",
        path: "/",
        isComingSoon: false,
    },
    {
        title: "Season 2",
        path: "/",
        isComingSoon: true,
    },
    {
        title: "Season 3",
        path: "/",
        isComingSoon: true,
    },
]

const MobileMenu = () => {
    return (
        <div className="flex flex-col fixed top-0 left-0 right-0 -z-10 bg-[#7B2E2E] text-white gap-6 pb-8" id="mob_menu">
            <div className="flex flex-col">
                <div className="bg-[url('./assets/images/largeButton.png')] bg-[#7B2E2E] bg-cover h-20"></div>
                {
                    menu_links.map((link: linkitem, index: number) => (
                        <LinkItem path={link.path} title={link.title} isComingSoon={link.isComingSoon} key={index} classes="flex items-start gap-2 py-6 px-5 border-t border-b border-white" />
                    ))
                }
            </div>
            <Socials classes="!flex justify-between px-5" />
        </div>
    )
}

export const Header = () => {

    const [open, setOpen] = useState(false)
    return (
        <nav className="px-6 lg:px-20 py-5 bg-[url('./assets/images/largeButton.png')] bg-repeat-x bg-[#65c0ed] bg-cover font-console relative z-50">
            <div className="w-full flex justify-between items-center">
                <Link to={'/'} className="font-pixel text-[28px] text-red text-outline">
                    <img alt="solana icon" src={SolanaIcon} className="w-[270px]"></img></Link>
                <Links links={menu_links} />
                <Socials />
                <button className="block lg:hidden" onClick={() => setOpen(!open)}>{open ? <img src={MenuCloseIcon} alt="close" title="Close Menu" /> : <img src={MenuOpenIcon} alt="menu" title="Menu" />}</button>
                {open && <MobileMenu />}
            </div>
        </nav>
    )
}
