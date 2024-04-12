import leftBorder from "../assets/images/leftBorder.svg"
import rightBorder from "../assets/images/rightBorder.svg"
import topBorder from "../assets/images/topBorder.svg"
import bottomBorder from "../assets/images/bottomBorder.svg"


export const Card = ({ classes, children }: { classes?: string, children: JSX.Element }) => {
    return (
        <div className={`relative bg-[#E9D2B7] bg-opacity-85 ${classes}`}>
            <img
                className="absolute top-0 w-full min-h-4 object-cover"
                src={topBorder}
                alt="Top Left"
            />
            {/* Top Right Image */}
            <img
                className="absolute right-0 h-full max-w-8 w-3 sm:w-auto object-cover"
                src={rightBorder}
                alt="Top Right"
            />
            {/* Bottom Left Image */}
            <img
                className="absolute left-0 h-full max-w-8 w-3 sm:w-auto object-cover"
                src={leftBorder}
                alt="Bottom Left"
            />
            {/* Bottom Right Image */}
            <img
                className="absolute bottom-0 w-full object-cover"
                src={bottomBorder}
                alt="Bottom Right"
            />
            {children}
        </div>
    )
}
