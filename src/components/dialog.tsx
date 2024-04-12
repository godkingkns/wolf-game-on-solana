import CloseIcon from "../assets/images/close.svg"
import { Card } from "./card"


export const Dialog = ({ children, setIsOpen, classes }: { children:JSX.Element, classes?:string, setIsOpen: (isOpen: boolean) => void }) => {
    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-white bg-opacity-70">
            <Card classes={`relative w-full ${classes}`}>
                <div className=" px-8 py-9">
                    <img src={CloseIcon} title="close" className="absolute top-5 right-6 w-6 h-6 cursor-pointer" onClick={() => setIsOpen(false)} />
                    {children}
                </div>
            </Card>
        </div>
    )
}
