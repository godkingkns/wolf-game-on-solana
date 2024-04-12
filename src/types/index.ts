export interface UserData {
    address: string;
    balance: string;
    stakingPool: string;
    poolType: number;
    id: string;
    createdAt: string | null;
    updatedAt: string | null;
    deletedAt: string | null;
}

export interface WolfNFTData {
    totalMinted: number;
    totalSupply: number;
    genZeroSupply: number;
    wolfStaking: string;
    woolMint: string;
    wolfCollection: string;
    wolfMerkleTree: string;
    treasury: string;
    stakingTreasury: string;
    maxMintAmount: number;
    mintStartTime: number;
    isStakingActive: boolean;
}

export interface NFTAttribute {
    trait_type: string;
    value: string | number;
}

export enum POOL_SIZE {
    Diamond = 1000,
    Golden = 500,
    Silver = 300,
    Brozen = 100
}

export enum POOL_TYPE {
    Diamond = 0,
    Golden = 1,
    Silver = 2,
    Brozen = 3
}

export interface NFTProperties {
    category: string;
}

export interface NFTMetadataInfo {
    assetId: string;
    name: string;
    symbol: string;
    description: string;
    image: string;
    external_url?: string;
    attributes: Array<NFTAttribute>;
    properties: NFTProperties;
}

export interface CurrencyType {
    sol: number;
    wool: number;
}

export interface StakedType {
    id: number,
    assetId: string,
    selected: boolean,
    img: string
}

export interface AuthData {
    authToken: string | null;
    address: string | null;
    stakingPool?: string | null;
}

export interface AuthContextType extends AuthData {
    signIn: ({ message, signature, publicKey } : { message: string, signature: string, publicKey: string }) => void;
    signOut: () => void;
}

export interface Level {
    name: string,
    progress: number,
}

export interface LeaderItem {
    id: number,
    position: string,
    wools: number
}