import MintingImg from "../../assets/images/minting.gif";
import ClaimingPackImg from '../../assets/images/claiming-pack.gif'
import UnstakingBarnImg from '../../assets/images/unstaking-barn.gif'
import UnstakingPackImg from '../../assets/images/unstaked-pack.gif'
import StakingBarnImg from '../../assets/images/staked-barn.gif'
import StakingPackImg from '../../assets/images/staking-pack.gif'
// import ShearedImg from '../../assets/images/sheared.gif'
import ShearingImg from '../../assets/images/shearing.gif'
// import MintStolenImg from '../../assets/images/mint-stolen.gif'
import MintCostImg from '../../assets/images/Token_minting_costs.png'
import SheepChart1 from '../../assets/images/sheepchart1.png'
import SheepChart2 from '../../assets/images/sheepchart2.png'
import Redacted from '../../assets/images/REDACTED.png'

import { Card } from "../../components/card";

export const WhitePaper = () => {
  return (
    <div className="w-full max-w-4xl mx-auto pt-10 space-y-8 h-[120vh]">
      <h1 className="font-pixel text-[34px] sm:text-[44px] text-red text-outline text-center">
        white paper
      </h1>
      <Card classes="mx-5 sm:mx-0 h-screen flex items-center">
        <div className="pr-5 mx-8 sm:mx-16 h-5/6 space-y-6 text-base sm:text-2xl leading-[45px] overflow-y-auto" id="staked">
          <h2 className="text-black">Introduction</h2>
          <div className="flex items-start gap-10 flex-wrap">
            <div className="text-base space-y-8">
              <p>
                Wolf Game on SOL is an on-chain risk-based game inspired by the original Wolf Game on ETH. 
                We pay homage to those who came before us and walk in their footsteps to trailblaze a path of innovation, 
                on-chain fun and game theory on Solana.
              </p>
              <p>
                There are 3 Seasons planned for Wolf Game on SOL with the initial season drawing inspiration from OG Wolf Game mechanics 
                and the following 2 seasons having our own spin on on-chain risk, play-to-earn and innovation.
              </p>
              <p>
                Introducing Wolf Game on SOL,  a daring protocol for NFTs boasting innovative tokenomics that demonstrate 
                the dynamic potential of interactions between different SPL token standards, inspired by the original Wolf Game on ETH.
              </p>
              <p>
                For the very first time on SOL, your NFT possesses the ability to pilfer other NFTs on your behalf. 
                The rarity of your NFT determines the probabilistic accumulation of tokens. Wolf Game on SOL is at the forefront 
                of pioneering new NFT mechanics, driving innovation, offering a fully decentralised experience devoid of roadmaps or 
                hollow assurances, presenting tried and tested game theory within the metaverse ready for immediate mass consumption.
              </p>
              <p>
                To ensure a fair and even playing field for all involved, the game will begin once the initial 
                10,000 GEN 0 tokens have been minted.
              </p>
              <p className="text-black">Innovative Features:</p>
              <p>
                Wolf Game introduces a groundbreaking NFT mechanic never before achieved on SOL, allowing your NFT to 
                plunder NFT SPL and coin SPL tokens. Operated entirely on-chain, the protocol is divided among three smart contracts 
                that seamlessly integrate with one another, ensuring transparency and coherence.
              </p>
              <p>
                Wolf Game on SOL presents an immersive experience where participants navigate risk and reward. 
                Will you farm and pay the tax?... Maintain your liquidity with NFTs?... maximise your $WOOL gains? 
                The choice is all yours anon…
              </p>
              <p>
                The symbolism of wolves preying on sheep mirrors the dynamics within the wider crypto space, 
                a hierarchy of individuals in the know, with alpha, alongside a multitude following the collective herd.
              </p>
              <p className="text-black">The TL;DR:</p>
              <p>
                10,000 GEN 0 minted for a flat price of 0.2 SOL.<br />
                40,000 GEN 1 minted for $WOOL with a bonding curve.
              </p>
              <p>
                Sheep can be staked to generate $WOOL(10,000/day).<br />
                New sheep can be minted for $WOOL(10% chance to mint a wolf).
              </p>
              <p>
                Wolves collect a guaranteed 20% tax on all claimed $WOOL proportionate to an alpha score.<br />
                Wolves have a chance to steal a newly minted NFT, proportionate to alpha score.
              </p>
              <p>
                *Sheep need a minimum of 2 days of accumulated $WOOL to unstake.<br />
                Any sheep leaving the barn(unstaking) has a 50% chance to lose all accumulated $WOOL to wolves.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-start mt-2 flex-wrap">
            <h2 className="text-black">SEASON 1:</h2>
            <div className="text-base space-y-8">
              <p className="text-black">Prologue: </p>
              <p>
                In a picturesque digital farm, a herd of sheep frollicks, consistently generating a bountiful yield of $WOOL 
                for their caretaker. Nestled snugly within a barn, they undergo regular shearing by their caretakers to harvest 
                the valuable $WOOL that the farmer then sells at the market. The more $WOOL accumulated, the greater the ability 
                for the farmers to expand their flock! However, lurking beyond the safety of the barn are fearsome adversaries 
                that strike terror into the hearts of the sheep and are only kept at bay by the safety of the barn... these are the wolves.
              </p>
              <p>
                These wolves prowl the outskirts, relentlessly seeking out sheep and their highly sought-after and coveted $WOOL. 
                By any means necessary, they will abscond with the precious resource, either through outright theft or by seizing baby 
                sheep unaware. In a bid to safeguard their assets, the caretakers have brokered a deal with the wolves: 
                a levy is imposed on all $WOOL production, ensuring the safety of sheep within the confines of the barn.
              </p>
              <p>
                Yet, the moment a sheep ventures beyond the farm's borders(unstaking) or when new sheep are brought into the world(minted), 
                the wolves pounce without hesitation.
              </p>
              <p className="text-black">The nitty gritty: </p>
              <p>
                A limited 10,000 Gen 0 tokens will ever be minted, each priced at 0.2 SOL.<br></br>
                An additional 40,000 Gen 1 tokens can be minted through $WOOL farming with a bonding curve.
              </p>
              <p className="text-black text-center">The bonding curve</p>
              <div className="flex justify-center">
                <img src={MintCostImg} className="object-contain w-[80%]" alt=""></img>
              </div>
              <p>
                Sheep may be staked in the Barn to earn $WOOL, subject to a tax upon claim.<br></br>
                Wolves collect a guaranteed 20% tax on all claimed $WOOL, distributed among all wolves proportionate to the wolf's alpha score.
              </p>
              <p>
                A sheep may only be unstaked if it has a minimum of 2 days of $WOOL accumulated on it to prevent the sheep from getting cold.<br></br>
                Unstaking a Sheep exposes it to a 50% risk of losing all accumulated $WOOL to Wolves.
              </p>
              <p>
                Minting a new Sheep using $WOOL has a 10% chance of yielding a Wolf instead, this newly minted NFT has a chance of 
                being stolen by staked Wolves.
              </p>
              <p className="text-black">Contract Addresses:</p>
              <p>
                Sheep/Wolf NFT: <br />
                Barn/Gang Staking:
                <br />
                $WOOL Token: <br></br> 
                Minting:
              </p>
              <p className="text-black">Sheep</p>
              <p>
                Each minted Sheep boasts unique traits and has a 90% chance of being produced. 
                To unstake a sheep it must wear a minimum of 2 days of $WOOL (20,000)  to ensure it doesn’t catch a cold.
              </p>
              <p className="text-black text-center">
                Sheep actions 
              </p>
              <div className="flex justify-center">
                <img src={SheepChart1} className="object-contain w-[90%]" alt=""></img>
              </div>
              <p className="text-black">Wolves</p>
              <p>
                Each minted Wolf possesses unique traits, including an Alpha value ranging from 5 to 8, this alpha value dictates:
              </p>
              <p>
                The proportion of $WOOL earned from taxes.<br />
                The likelihood of stealing newly minted sheep or wolves.<br />
                *Only staked Wolves can engage in theft or earn $WOOL taxes.
              </p>
              <p>Only staked Wolves can engage in theft or earn $WOOL taxes.</p>
              <p className="text-black text-center">
                Wolf actions 
              </p>
              <div className="flex justify-center">
                <img src={SheepChart2} className="object-contain w-[90%]" alt=""></img>
              </div>
              <p className="text-black">$WOOL</p>
              <p>
                The maximum $WOOL supply is capped at 5,000,000,000 $WOOL.
              </p>
              <p>
                The staking "faucet" ceases upon reaching 2,400,000,000 $WOOL.<br />
                Once the staking faucet ceases OR all generations of wolves and sheep are minted, 
                whichever comes first, developers can unlock 600,000,000 $WOOL to help fund development costs for Seasons 2 and 3.
              </p>
              <p>1,000,000,000 $WOOL is allocated for community rewards and airdrops.</p>
              <p>1,000,000,000 $WOOL is allocated for token liquidity.</p>
              <p>
                Season 1 is inflationary.<br></br>
                Season 2 and 3 will use the same NFTs and $WOOL token as Season 1 BUT will be deflationary.
              </p>
          </div>
          </div>
          <h2 className="text-black">SEASON 2 & 3:</h2>
          <div className="flex justify-center">
            <img src={Redacted} className="oject-contain w-[70%]" alt="" />
          </div>
        </div>
      </Card>
    </div>
  );
};
