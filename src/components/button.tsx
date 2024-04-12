import buttonBg from "../assets/images/smallButton.png"

export const Button = ({ title, classes, onClick }: { title: string, classes?:string, onClick?:()=>void }) => {
    return (
        <button className={`relative flex items-center justify-center h-[54px] hover:opacity-90 ${classes}`} onClick={onClick}>
            <img src={buttonBg} className="absolute w-full h-full object-fill"></img>
            <span className="relative z-20 text-white">
                {title}
            </span>
        </button>
    )
}
