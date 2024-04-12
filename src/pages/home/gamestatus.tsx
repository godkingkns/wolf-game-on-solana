import { useState } from "react"

export const GameStatus = () => {

  const [status, setStatus] = useState([
    {
        animal: "sheep",
        isMinted: false,
        number: 0
    },
    {
        animal: "sheep",
        isMinted: true,
        number: 0
    },
    {
        animal: "wolves",
        isMinted: false,
        number: 0
    },
    {
        animal: "wolves",
        isMinted: true,
        number: 0
    },
  ])

  const [totalWoolSheared, setTotalWoolSheared] = useState(0)
    
  return (
    <div className="text-black space-y-4">
        {
            status.map((stat, index)=> (
                <p key={index}>Total {stat.animal} {stat.isMinted ? "Minted":"Staked"}: {stat.number}</p>
            ))
        }
        <p>Total $WOOL Sheared: {totalWoolSheared}</p>
    </div>
  )
}
