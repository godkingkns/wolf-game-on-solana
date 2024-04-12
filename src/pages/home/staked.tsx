import { useState } from "react";
import SheepImg from "../../assets/images/sheep.png";
import CheckIcon from "../../assets/images/check.svg";
import { Button } from "../../components/button";

import { StakedType } from "../../types";

export const Staked = () => {
  // const [staked, setStaked] = useState([
  //   {
  //     id: 0,
  //     img: SheepImg,
  //     selected: false,
  //   },
  //   {
  //     id: 1,
  //     img: SheepImg,
  //     selected: false,
  //   },
  //   {
  //     id: 2,
  //     selected: false,
  //     img: SheepImg,
  //   },
  //   {
  //     id: 3,
  //     selected: false,
  //     img: SheepImg,
  //   },
  //   {
  //     id: 4,
  //     selected: false,
  //     img: SheepImg,
  //   },
  //   {
  //     id: 5,
  //     selected: false,
  //     img: SheepImg,
  //   },
  //   {
  //     id: 6,
  //     selected: false,
  //     img: SheepImg,
  //   },
  //   {
  //     id: 7,
  //     selected: false,
  //     img: SheepImg,
  //   },
  //   {
  //     id: 8,
  //     selected: false,
  //     img: SheepImg,
  //   },
  // ]);
  const [staked, setStaked] = useState<Array<StakedType>>([])

  const [woolInWallet, setWoolInWallet] = useState(0);

  const [selectAll, setSelectAll] = useState(false);

  const handleCheck = (id: number) => {
    const updatedStakedData = staked.map((stake) => {
      if (stake.id === id) {
        // Toggle the selected state for the clicked checkbox
        return {
          ...stake,
          selected: !stake.selected,
        };
      }
      return stake;
    });

    // Update the staked data with the new checkbox state
    setStaked(updatedStakedData);
  };

  const handleSelectAll = () => {
    // Toggle the selectAll state when the "select all" button is clicked
    setSelectAll(!selectAll);

    // Update the staked data to reflect the new checkbox states
    const updatedStakedData = staked.map((stake) => ({
      ...stake,
      selected: !selectAll, // Set all checkboxes to selected or unselected
    }));
    setStaked(updatedStakedData);
  };

  return (
    <div>
      <div
        className="flex justify-center flex-wrap gap-1.5 max-h-[220px] overflow-y-auto"
        id="staked"
      >
        {staked.length == 0 && 
          <div className="min-h-[100px] flex justify-center items-center">
            <span className="text-black text-[25px]">No staked NFTs</span>
          </div>
        }
        {staked.length > 0 && staked.map((stake) => (
          <div
            key={stake.id}
            className="relative w-[65px] h-[62px] sm:w-[72px] sm:h-[70px]"
          >
            <input
              type="checkbox"
              className="absolute top-1.5 right-1.5"
              checked={stake.selected}
              onChange={() => handleCheck(stake.id)}
            />
            <img src={stake.img} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className="py-2.5 flex justify-between flex-wrap">
        <button
          className="flex justify-center items-center gap-1 text-[8px] sm:text-[10px] underline"
          onClick={handleSelectAll}
        >
          {selectAll ? "deselect all" : "select all"}{" "}
          <img src={CheckIcon} className="w-3 h-3 -translate-y-0.5" />{" "}
        </button>
        <p className="text-black text-[8px] md:text-base">
          <span className="underline">$WOOL In your wallet:{" "}</span>
          <span className="text-brown">{woolInWallet} $WOOL</span>
        </p>
      </div>
      <div className="flex justify-center items-center gap-4">
        <Button title="claim" classes="w-[96px] sm:w-[155px]" />
        <Button title="unstake" classes="w-[118px] sm:w-[179px]" />
      </div>
    </div>
  );
};
