export type Staking = {
  version: '0.1.0';
  name: 'staking';
  instructions: [
    {
      name: 'initialize';
      accounts: [
        {
          name: 'stakeDetails';
          isMut: true;
          isSigner: false;
          docs: ['Stake Details'];
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'stake';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'Mint';
                path: 'wolf_collection';
              },
              {
                kind: 'account';
                type: 'publicKey';
                path: 'owner';
              },
            ];
          };
        },
        {
          name: 'woolMint';
          isMut: false;
          isSigner: false;
          docs: ['Wool Token Mint'];
        },
        {
          name: 'tokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['Wool Token Account'];
        },
        {
          name: 'stakeTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['Stake Token Vault'];
        },
        {
          name: 'wolfCollection';
          isMut: false;
          isSigner: false;
          docs: ['Wolf Collection Address'];
        },
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
          docs: ['Barn Owner'];
        },
        {
          name: 'tokenAuthority';
          isMut: false;
          isSigner: false;
          docs: ['Token Authority'];
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'token-authority';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details';
              },
            ];
          };
        },
        {
          name: 'nftAuthority';
          isMut: false;
          isSigner: false;
          docs: ['NFT Authority'];
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'nft-authority';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details';
              },
            ];
          };
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'wolfGame';
          type: 'publicKey';
        },
        {
          name: 'woolMint';
          type: 'publicKey';
        },
        {
          name: 'wolfCollection';
          type: 'publicKey';
        },
        {
          name: 'totalReward';
          type: 'u64';
        },
        {
          name: 'dailyWoolRate';
          type: 'u64';
        },
        {
          name: 'minimumStakePeriod';
          type: 'i64';
        },
      ];
    },
    {
      name: 'initializePool';
      accounts: [
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'stakeDetails';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'stake';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.wolf_collection';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.owner';
              },
            ];
          };
          relations: ['owner'];
        },
        {
          name: 'globalStakingPool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'initializeUserPool';
      accounts: [
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'userPool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'staker';
          type: 'publicKey';
        },
      ];
    },
    {
      name: 'activeStaking';
      accounts: [
        {
          name: 'stakeDetails';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'stake';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.wolf_collection';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.owner';
              },
            ];
          };
          relations: ['owner'];
        },
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: 'isActive';
          type: 'bool';
        },
      ];
    },
    {
      name: 'initializeDiamondPool';
      accounts: [
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'userPool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'staker';
          type: 'publicKey';
        },
      ];
    },
    {
      name: 'diamondStake';
      accounts: [
        {
          name: 'stakeDetails';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'stake';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.wolf_collection';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.owner';
              },
            ];
          };
          relations: ['owner'];
        },
        {
          name: 'userPool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: 'mintList';
          type: {
            vec: 'publicKey';
          };
        },
        {
          name: 'alphaScoreList';
          type: {
            vec: 'u32';
          };
        },
      ];
    },
    {
      name: 'diamondClaim';
      accounts: [
        {
          name: 'stakeDetails';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'stake';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.wolf_collection';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.owner';
              },
            ];
          };
          relations: ['wool_mint'];
        },
        {
          name: 'userPool';
          isMut: true;
          isSigner: false;
          relations: ['owner'];
        },
        {
          name: 'woolMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'stakeTokenVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'rewardReceiveAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenAuthority';
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'token-authority';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details';
              },
            ];
          };
        },
        {
          name: 'recentSlothashes';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'diamondUnstake';
      accounts: [
        {
          name: 'stakeDetails';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'stake';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.wolf_collection';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.owner';
              },
            ];
          };
          relations: ['owner'];
        },
        {
          name: 'userPool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'woolMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rewardReceiveAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'stakeTokenVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'tokenAuthority';
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'token-authority';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details';
              },
            ];
          };
        },
        {
          name: 'staker';
          isMut: true;
          isSigner: false;
          docs: ['CHECK - address'];
        },
        {
          name: 'recentSlothashes';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'mintList';
          type: {
            vec: 'publicKey';
          };
        },
      ];
    },
    {
      name: 'initializeGoldenPool';
      accounts: [
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'userPool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'staker';
          type: 'publicKey';
        },
      ];
    },
    {
      name: 'goldenStake';
      accounts: [
        {
          name: 'stakeDetails';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'stake';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.wolf_collection';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.owner';
              },
            ];
          };
          relations: ['owner'];
        },
        {
          name: 'userPool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: 'mintList';
          type: {
            vec: 'publicKey';
          };
        },
        {
          name: 'alphaScoreList';
          type: {
            vec: 'u32';
          };
        },
      ];
    },
    {
      name: 'goldenClaim';
      accounts: [
        {
          name: 'stakeDetails';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'stake';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.wolf_collection';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.owner';
              },
            ];
          };
          relations: ['wool_mint'];
        },
        {
          name: 'userPool';
          isMut: true;
          isSigner: false;
          relations: ['owner'];
        },
        {
          name: 'woolMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'stakeTokenVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'rewardReceiveAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenAuthority';
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'token-authority';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details';
              },
            ];
          };
        },
        {
          name: 'recentSlothashes';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'goldenUnstake';
      accounts: [
        {
          name: 'stakeDetails';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'stake';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.wolf_collection';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.owner';
              },
            ];
          };
          relations: ['owner'];
        },
        {
          name: 'userPool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'woolMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rewardReceiveAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'stakeTokenVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'tokenAuthority';
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'token-authority';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details';
              },
            ];
          };
        },
        {
          name: 'staker';
          isMut: true;
          isSigner: false;
          docs: ['CHECK - address'];
        },
        {
          name: 'recentSlothashes';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'mintList';
          type: {
            vec: 'publicKey';
          };
        },
      ];
    },
    {
      name: 'initializeSilverPool';
      accounts: [
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'userPool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'staker';
          type: 'publicKey';
        },
      ];
    },
    {
      name: 'silverStake';
      accounts: [
        {
          name: 'stakeDetails';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'stake';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.wolf_collection';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.owner';
              },
            ];
          };
          relations: ['owner'];
        },
        {
          name: 'userPool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: 'mintList';
          type: {
            vec: 'publicKey';
          };
        },
        {
          name: 'alphaScoreList';
          type: {
            vec: 'u32';
          };
        },
      ];
    },
    {
      name: 'silverClaim';
      accounts: [
        {
          name: 'stakeDetails';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'stake';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.wolf_collection';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.owner';
              },
            ];
          };
          relations: ['wool_mint'];
        },
        {
          name: 'userPool';
          isMut: true;
          isSigner: false;
          relations: ['owner'];
        },
        {
          name: 'woolMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'stakeTokenVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'rewardReceiveAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenAuthority';
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'token-authority';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details';
              },
            ];
          };
        },
        {
          name: 'recentSlothashes';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'silverUnstake';
      accounts: [
        {
          name: 'stakeDetails';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'stake';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.wolf_collection';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.owner';
              },
            ];
          };
          relations: ['owner'];
        },
        {
          name: 'userPool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'woolMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rewardReceiveAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'stakeTokenVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'tokenAuthority';
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'token-authority';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details';
              },
            ];
          };
        },
        {
          name: 'staker';
          isMut: true;
          isSigner: false;
          docs: ['CHECK - address'];
        },
        {
          name: 'recentSlothashes';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'mintList';
          type: {
            vec: 'publicKey';
          };
        },
      ];
    },
    {
      name: 'initializeBrozenPool';
      accounts: [
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'userPool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'staker';
          type: 'publicKey';
        },
      ];
    },
    {
      name: 'brozenStake';
      accounts: [
        {
          name: 'stakeDetails';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'stake';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.wolf_collection';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.owner';
              },
            ];
          };
          relations: ['owner'];
        },
        {
          name: 'userPool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: 'mintList';
          type: {
            vec: 'publicKey';
          };
        },
        {
          name: 'alphaScoreList';
          type: {
            vec: 'u32';
          };
        },
      ];
    },
    {
      name: 'brozenClaim';
      accounts: [
        {
          name: 'stakeDetails';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'stake';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.wolf_collection';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.owner';
              },
            ];
          };
          relations: ['wool_mint'];
        },
        {
          name: 'userPool';
          isMut: true;
          isSigner: false;
          relations: ['owner'];
        },
        {
          name: 'woolMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'stakeTokenVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'rewardReceiveAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenAuthority';
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'token-authority';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details';
              },
            ];
          };
        },
        {
          name: 'recentSlothashes';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'brozenUnstake';
      accounts: [
        {
          name: 'stakeDetails';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'stake';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.wolf_collection';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.owner';
              },
            ];
          };
          relations: ['owner'];
        },
        {
          name: 'userPool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'woolMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rewardReceiveAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'stakeTokenVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'tokenAuthority';
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'token-authority';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details';
              },
            ];
          };
        },
        {
          name: 'staker';
          isMut: true;
          isSigner: false;
          docs: ['CHECK - address'];
        },
        {
          name: 'recentSlothashes';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'mintList';
          type: {
            vec: 'publicKey';
          };
        },
      ];
    },
    {
      name: 'stake';
      accounts: [
        {
          name: 'stakeDetails';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'stake';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.wolf_collection';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.owner';
              },
            ];
          };
        },
        {
          name: 'userPool';
          isMut: true;
          isSigner: false;
          relations: ['owner'];
        },
        {
          name: 'nftTrait';
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'nft_trait';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'Mint';
                path: 'nft_mint';
              },
            ];
            programId: {
              kind: 'account';
              type: 'publicKey';
              account: 'StakeDetails';
              path: 'stake_details.wolf_game';
            };
          };
        },
        {
          name: 'nftMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'nftToken';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'nftMetadata';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'nftAuthority';
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'nft-authority';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details';
              },
            ];
          };
        },
        {
          name: 'nftCustody';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'multiStake';
      accounts: [
        {
          name: 'stakeDetails';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'stake';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.wolf_collection';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.owner';
              },
            ];
          };
          relations: ['owner'];
        },
        {
          name: 'userPool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: 'mintList';
          type: {
            vec: 'publicKey';
          };
        },
        {
          name: 'alphaScoreList';
          type: {
            vec: 'u32';
          };
        },
      ];
    },
    {
      name: 'claimReward';
      accounts: [
        {
          name: 'stakeDetails';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'stake';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.wolf_collection';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.owner';
              },
            ];
          };
          relations: ['wool_mint'];
        },
        {
          name: 'userPool';
          isMut: true;
          isSigner: false;
          relations: ['owner'];
        },
        {
          name: 'woolMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'stakeTokenVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'rewardReceiveAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenAuthority';
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'token-authority';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details';
              },
            ];
          };
        },
        {
          name: 'recentSlothashes';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'unstake';
      accounts: [
        {
          name: 'stakeDetails';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'stake';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.wolf_collection';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.owner';
              },
            ];
          };
          relations: ['wool_mint'];
        },
        {
          name: 'userPool';
          isMut: true;
          isSigner: false;
          relations: ['owner'];
        },
        {
          name: 'woolMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'stakeTokenVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'rewardReceiveAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'nftMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'nftReceiveAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'nftCustody';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenAuthority';
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'token-authority';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details';
              },
            ];
          };
        },
        {
          name: 'nftAuthority';
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'nft-authority';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details';
              },
            ];
          };
        },
        {
          name: 'recentSlothashes';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'multiUnstake';
      accounts: [
        {
          name: 'stakeDetails';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'stake';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.wolf_collection';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.owner';
              },
            ];
          };
          relations: ['owner'];
        },
        {
          name: 'userPool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'woolMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rewardReceiveAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'stakeTokenVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'tokenAuthority';
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'token-authority';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details';
              },
            ];
          };
        },
        {
          name: 'staker';
          isMut: true;
          isSigner: false;
          docs: ['CHECK - address'];
        },
        {
          name: 'recentSlothashes';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'mintList';
          type: {
            vec: 'publicKey';
          };
        },
      ];
    },
    {
      name: 'updateConfig';
      accounts: [
        {
          name: 'stakeDetails';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'stake';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.wolf_collection';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'StakeDetails';
                path: 'stake_details.owner';
              },
            ];
          };
          relations: ['owner'];
        },
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: 'dailyWoolRate';
          type: 'u64';
        },
        {
          name: 'minimumStakePeriod';
          type: 'i64';
        },
        {
          name: 'woolClaimTaxPercentage';
          type: 'u16';
        },
      ];
    },
  ];
  accounts: [
    {
      name: 'brozenUserPool';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'owner';
            type: 'publicKey';
          },
          {
            name: 'itemCount';
            type: 'u64';
          },
          {
            name: 'items';
            type: {
              array: [
                {
                  defined: 'StakedNFT';
                },
                100,
              ];
            };
          },
          {
            name: 'rewardTime';
            type: 'i64';
          },
          {
            name: 'isLock';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'diamondUserPool';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'owner';
            type: 'publicKey';
          },
          {
            name: 'itemCount';
            type: 'u64';
          },
          {
            name: 'items';
            type: {
              array: [
                {
                  defined: 'StakedNFT';
                },
                1000,
              ];
            };
          },
          {
            name: 'rewardTime';
            type: 'i64';
          },
          {
            name: 'isLock';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'goldenUserPool';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'owner';
            type: 'publicKey';
          },
          {
            name: 'itemCount';
            type: 'u64';
          },
          {
            name: 'items';
            type: {
              array: [
                {
                  defined: 'StakedNFT';
                },
                500,
              ];
            };
          },
          {
            name: 'rewardTime';
            type: 'i64';
          },
          {
            name: 'isLock';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'silverUserPool';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'owner';
            type: 'publicKey';
          },
          {
            name: 'itemCount';
            type: 'u64';
          },
          {
            name: 'items';
            type: {
              array: [
                {
                  defined: 'StakedNFT';
                },
                300,
              ];
            };
          },
          {
            name: 'rewardTime';
            type: 'i64';
          },
          {
            name: 'isLock';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'stakeDetails';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'owner';
            docs: ['The creator of the stake record (32)'];
            type: 'publicKey';
          },
          {
            name: 'wolfGame';
            docs: ['The Wolf Game (32)'];
            type: 'publicKey';
          },
          {
            name: 'woolMint';
            docs: ['The mint of the token to be given as reward (32)'];
            type: 'publicKey';
          },
          {
            name: 'wolfCollection';
            docs: ['The verified collection address of the NFT (32)'];
            type: 'publicKey';
          },
          {
            name: 'globalStakingPool';
            docs: ['The global staking pool (32)'];
            type: 'publicKey';
          },
          {
            name: 'tokenAuthority';
            docs: ['The token authority (32)'];
            type: 'publicKey';
          },
          {
            name: 'totalReward';
            docs: ['The total reward to staking with Wool (8)'];
            type: 'u64';
          },
          {
            name: 'currentBalance';
            docs: ['The current balance in Stake Vault (8)'];
            type: 'u64';
          },
          {
            name: 'unaccountedReward';
            docs: ['Unaccounted reward (8)'];
            type: 'u64';
          },
          {
            name: 'dailyWoolRate';
            docs: ['Daily wool rate (8)'];
            type: 'u64';
          },
          {
            name: 'woolPerAlpha';
            docs: ['Wool per alpha (8)'];
            type: 'u64';
          },
          {
            name: 'minimumStakePeriod';
            docs: ['Minimum Staking Period (8)'];
            type: 'i64';
          },
          {
            name: 'totalWoolEarned';
            docs: ['Total wool earned (8)'];
            type: 'u64';
          },
          {
            name: 'totalAlphaStaked';
            docs: ['Total alpha staked (4)'];
            type: 'u32';
          },
          {
            name: 'totalWolfStaked';
            docs: ['Total sheep staked (2)'];
            type: 'u16';
          },
          {
            name: 'totalSheepStaked';
            docs: ['Total sheep staked (2)'];
            type: 'u16';
          },
          {
            name: 'woolClaimTaxPercentage';
            docs: ['Wool claim tax percentage (2)'];
            type: 'u16';
          },
          {
            name: 'isActive';
            docs: ['The status of the staking (1)'];
            type: 'bool';
          },
          {
            name: 'stakeBump';
            docs: ['The bump of the stake record PDA (1)'];
            type: 'u8';
          },
          {
            name: 'tokenAuthBump';
            type: 'u8';
          },
          {
            name: 'nftAuthBump';
            docs: ['The bump of the nft authority PDA (1)'];
            type: 'u8';
          },
        ];
      };
    },
    {
      name: 'globalStakingPool';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'stakeItems';
            type: {
              array: [
                {
                  defined: 'StakeItem';
                },
                50000,
              ];
            };
          },
          {
            name: 'itemCount';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'userPool';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'owner';
            type: 'publicKey';
          },
          {
            name: 'itemCount';
            type: 'u64';
          },
          {
            name: 'items';
            type: {
              array: [
                {
                  defined: 'StakedNFT';
                },
                300,
              ];
            };
          },
          {
            name: 'rewardTime';
            type: 'i64';
          },
          {
            name: 'isLock';
            type: 'u64';
          },
        ];
      };
    },
  ];
  types: [
    {
      name: 'StakeItem';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'owner';
            type: 'publicKey';
          },
          {
            name: 'nftAddr';
            type: 'publicKey';
          },
          {
            name: 'stakedAt';
            type: 'i64';
          },
          {
            name: 'isWolf';
            type: 'u8';
          },
          {
            name: 'padding';
            type: {
              array: ['u8', 7];
            };
          },
        ];
      };
    },
    {
      name: 'StakedNFT';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'nftAddr';
            type: 'publicKey';
          },
          {
            name: 'alphaStakedValue';
            type: 'u64';
          },
          {
            name: 'alphaValue';
            type: 'u32';
          },
          {
            name: 'rewardTime';
            type: 'u32';
          },
        ];
      };
    },
  ];
  errors: [
    {
      code: 6000;
      name: 'ReentrancyDetect';
      msg: 'Reentrancy Detect';
    },
    {
      code: 6001;
      name: 'StakeBumpError';
      msg: 'unable to get stake details bump';
    },
    {
      code: 6002;
      name: 'NftBumpError';
      msg: 'unable to get nft record bump';
    },
    {
      code: 6003;
      name: 'InvalidStakedValue';
      msg: 'No staked nft to get rewards';
    },
    {
      code: 6004;
      name: 'NegativePeriodValue';
      msg: "the minimum staking period in secs can't be negative";
    },
    {
      code: 6005;
      name: 'InvalidStakeEndTime';
      msg: 'stake ends time must be greater than the current time & start time';
    },
    {
      code: 6006;
      name: 'TokenNotNFT';
      msg: "the given mint account doesn't belong to NFT";
    },
    {
      code: 6007;
      name: 'TokenAccountEmpty';
      msg: 'the given token account has no token';
    },
    {
      code: 6008;
      name: 'CollectionNotVerified';
      msg: 'the collection field in the metadata is not verified';
    },
    {
      code: 6009;
      name: 'InvalidCollection';
      msg: "the collection doesn't match the staking details";
    },
    {
      code: 6010;
      name: 'MaxStakersReached';
      msg: 'max staker count reached';
    },
    {
      code: 6011;
      name: 'IneligibleForReward';
      msg: 'the minimum stake period for the rewards not completed yet';
    },
    {
      code: 6012;
      name: 'StakingIsOver';
      msg: 'the nft stake time is greator than the staking period';
    },
    {
      code: 6013;
      name: 'StakingNotLive';
      msg: 'the staking is not yet started';
    },
    {
      code: 6014;
      name: 'StakingInactive';
      msg: 'the staking is not currently active';
    },
    {
      code: 6015;
      name: 'InsufficientBalInVault';
      msg: 'Insufficient tokens in Vault to extend the period or reward';
    },
    {
      code: 6016;
      name: 'FailedTimeConversion';
      msg: 'failed to convert the time to u64';
    },
    {
      code: 6017;
      name: 'FailedWeightConversion';
      msg: 'failed to convert the weight to u64';
    },
    {
      code: 6018;
      name: 'ProgramAddError';
      msg: 'unable to add the given values';
    },
    {
      code: 6019;
      name: 'ProgramSubError';
      msg: 'unable to subtract the given values';
    },
    {
      code: 6020;
      name: 'ProgramMulError';
      msg: 'unable to multiply the given values';
    },
    {
      code: 6021;
      name: 'ProgramDivError';
      msg: 'unable to divide the given values';
    },
    {
      code: 6022;
      name: 'InvalidUserPool';
      msg: 'Invalid User Pool';
    },
    {
      code: 6023;
      name: 'InvalidPoolError';
      msg: 'Invalid pool number';
    },
    {
      code: 6024;
      name: 'InvalidNFTAddress';
      msg: 'No Matching NFT to withdraw';
    },
    {
      code: 6025;
      name: 'InvalidOwner';
      msg: 'NFT Owner key mismatch';
    },
    {
      code: 6026;
      name: 'InvalidWithdrawTime';
      msg: 'Staking Locked Now';
    },
    {
      code: 6027;
      name: 'IndexOverflow';
      msg: 'Withdraw NFT Index OverFlow';
    },
    {
      code: 6028;
      name: 'LackLamports';
      msg: 'Insufficient Lamports';
    },
    {
      code: 6029;
      name: 'VectorLengthMismatch';
      msg: 'Vector length mismatch';
    },
    {
      code: 6030;
      name: 'NoStakedNFT';
      msg: 'No Staked NFT';
    },
  ];
};

export const IDL: Staking = {
  version: '0.1.0',
  name: 'staking',
  instructions: [
    {
      name: 'initialize',
      accounts: [
        {
          name: 'stakeDetails',
          isMut: true,
          isSigner: false,
          docs: ['Stake Details'],
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'stake',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'Mint',
                path: 'wolf_collection',
              },
              {
                kind: 'account',
                type: 'publicKey',
                path: 'owner',
              },
            ],
          },
        },
        {
          name: 'woolMint',
          isMut: false,
          isSigner: false,
          docs: ['Wool Token Mint'],
        },
        {
          name: 'tokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['Wool Token Account'],
        },
        {
          name: 'stakeTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['Stake Token Vault'],
        },
        {
          name: 'wolfCollection',
          isMut: false,
          isSigner: false,
          docs: ['Wolf Collection Address'],
        },
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
          docs: ['Barn Owner'],
        },
        {
          name: 'tokenAuthority',
          isMut: false,
          isSigner: false,
          docs: ['Token Authority'],
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'token-authority',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details',
              },
            ],
          },
        },
        {
          name: 'nftAuthority',
          isMut: false,
          isSigner: false,
          docs: ['NFT Authority'],
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'nft-authority',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details',
              },
            ],
          },
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'wolfGame',
          type: 'publicKey',
        },
        {
          name: 'woolMint',
          type: 'publicKey',
        },
        {
          name: 'wolfCollection',
          type: 'publicKey',
        },
        {
          name: 'totalReward',
          type: 'u64',
        },
        {
          name: 'dailyWoolRate',
          type: 'u64',
        },
        {
          name: 'minimumStakePeriod',
          type: 'i64',
        },
      ],
    },
    {
      name: 'initializePool',
      accounts: [
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'stakeDetails',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'stake',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.wolf_collection',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.owner',
              },
            ],
          },
          relations: ['owner'],
        },
        {
          name: 'globalStakingPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'initializeUserPool',
      accounts: [
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'userPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'staker',
          type: 'publicKey',
        },
      ],
    },
    {
      name: 'activeStaking',
      accounts: [
        {
          name: 'stakeDetails',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'stake',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.wolf_collection',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.owner',
              },
            ],
          },
          relations: ['owner'],
        },
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'isActive',
          type: 'bool',
        },
      ],
    },
    {
      name: 'initializeDiamondPool',
      accounts: [
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'userPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'staker',
          type: 'publicKey',
        },
      ],
    },
    {
      name: 'diamondStake',
      accounts: [
        {
          name: 'stakeDetails',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'stake',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.wolf_collection',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.owner',
              },
            ],
          },
          relations: ['owner'],
        },
        {
          name: 'userPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'mintList',
          type: {
            vec: 'publicKey',
          },
        },
        {
          name: 'alphaScoreList',
          type: {
            vec: 'u32',
          },
        },
      ],
    },
    {
      name: 'diamondClaim',
      accounts: [
        {
          name: 'stakeDetails',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'stake',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.wolf_collection',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.owner',
              },
            ],
          },
          relations: ['wool_mint'],
        },
        {
          name: 'userPool',
          isMut: true,
          isSigner: false,
          relations: ['owner'],
        },
        {
          name: 'woolMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'stakeTokenVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'rewardReceiveAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenAuthority',
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'token-authority',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details',
              },
            ],
          },
        },
        {
          name: 'recentSlothashes',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'diamondUnstake',
      accounts: [
        {
          name: 'stakeDetails',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'stake',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.wolf_collection',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.owner',
              },
            ],
          },
          relations: ['owner'],
        },
        {
          name: 'userPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'woolMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rewardReceiveAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'stakeTokenVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenAuthority',
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'token-authority',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details',
              },
            ],
          },
        },
        {
          name: 'staker',
          isMut: true,
          isSigner: false,
          docs: ['CHECK - address'],
        },
        {
          name: 'recentSlothashes',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'mintList',
          type: {
            vec: 'publicKey',
          },
        },
      ],
    },
    {
      name: 'initializeGoldenPool',
      accounts: [
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'userPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'staker',
          type: 'publicKey',
        },
      ],
    },
    {
      name: 'goldenStake',
      accounts: [
        {
          name: 'stakeDetails',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'stake',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.wolf_collection',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.owner',
              },
            ],
          },
          relations: ['owner'],
        },
        {
          name: 'userPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'mintList',
          type: {
            vec: 'publicKey',
          },
        },
        {
          name: 'alphaScoreList',
          type: {
            vec: 'u32',
          },
        },
      ],
    },
    {
      name: 'goldenClaim',
      accounts: [
        {
          name: 'stakeDetails',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'stake',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.wolf_collection',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.owner',
              },
            ],
          },
          relations: ['wool_mint'],
        },
        {
          name: 'userPool',
          isMut: true,
          isSigner: false,
          relations: ['owner'],
        },
        {
          name: 'woolMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'stakeTokenVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'rewardReceiveAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenAuthority',
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'token-authority',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details',
              },
            ],
          },
        },
        {
          name: 'recentSlothashes',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'goldenUnstake',
      accounts: [
        {
          name: 'stakeDetails',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'stake',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.wolf_collection',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.owner',
              },
            ],
          },
          relations: ['owner'],
        },
        {
          name: 'userPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'woolMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rewardReceiveAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'stakeTokenVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenAuthority',
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'token-authority',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details',
              },
            ],
          },
        },
        {
          name: 'staker',
          isMut: true,
          isSigner: false,
          docs: ['CHECK - address'],
        },
        {
          name: 'recentSlothashes',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'mintList',
          type: {
            vec: 'publicKey',
          },
        },
      ],
    },
    {
      name: 'initializeSilverPool',
      accounts: [
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'userPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'staker',
          type: 'publicKey',
        },
      ],
    },
    {
      name: 'silverStake',
      accounts: [
        {
          name: 'stakeDetails',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'stake',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.wolf_collection',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.owner',
              },
            ],
          },
          relations: ['owner'],
        },
        {
          name: 'userPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'mintList',
          type: {
            vec: 'publicKey',
          },
        },
        {
          name: 'alphaScoreList',
          type: {
            vec: 'u32',
          },
        },
      ],
    },
    {
      name: 'silverClaim',
      accounts: [
        {
          name: 'stakeDetails',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'stake',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.wolf_collection',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.owner',
              },
            ],
          },
          relations: ['wool_mint'],
        },
        {
          name: 'userPool',
          isMut: true,
          isSigner: false,
          relations: ['owner'],
        },
        {
          name: 'woolMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'stakeTokenVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'rewardReceiveAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenAuthority',
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'token-authority',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details',
              },
            ],
          },
        },
        {
          name: 'recentSlothashes',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'silverUnstake',
      accounts: [
        {
          name: 'stakeDetails',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'stake',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.wolf_collection',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.owner',
              },
            ],
          },
          relations: ['owner'],
        },
        {
          name: 'userPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'woolMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rewardReceiveAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'stakeTokenVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenAuthority',
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'token-authority',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details',
              },
            ],
          },
        },
        {
          name: 'staker',
          isMut: true,
          isSigner: false,
          docs: ['CHECK - address'],
        },
        {
          name: 'recentSlothashes',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'mintList',
          type: {
            vec: 'publicKey',
          },
        },
      ],
    },
    {
      name: 'initializeBrozenPool',
      accounts: [
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'userPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'staker',
          type: 'publicKey',
        },
      ],
    },
    {
      name: 'brozenStake',
      accounts: [
        {
          name: 'stakeDetails',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'stake',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.wolf_collection',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.owner',
              },
            ],
          },
          relations: ['owner'],
        },
        {
          name: 'userPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'mintList',
          type: {
            vec: 'publicKey',
          },
        },
        {
          name: 'alphaScoreList',
          type: {
            vec: 'u32',
          },
        },
      ],
    },
    {
      name: 'brozenClaim',
      accounts: [
        {
          name: 'stakeDetails',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'stake',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.wolf_collection',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.owner',
              },
            ],
          },
          relations: ['wool_mint'],
        },
        {
          name: 'userPool',
          isMut: true,
          isSigner: false,
          relations: ['owner'],
        },
        {
          name: 'woolMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'stakeTokenVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'rewardReceiveAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenAuthority',
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'token-authority',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details',
              },
            ],
          },
        },
        {
          name: 'recentSlothashes',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'brozenUnstake',
      accounts: [
        {
          name: 'stakeDetails',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'stake',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.wolf_collection',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.owner',
              },
            ],
          },
          relations: ['owner'],
        },
        {
          name: 'userPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'woolMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rewardReceiveAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'stakeTokenVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenAuthority',
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'token-authority',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details',
              },
            ],
          },
        },
        {
          name: 'staker',
          isMut: true,
          isSigner: false,
          docs: ['CHECK - address'],
        },
        {
          name: 'recentSlothashes',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'mintList',
          type: {
            vec: 'publicKey',
          },
        },
      ],
    },
    {
      name: 'stake',
      accounts: [
        {
          name: 'stakeDetails',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'stake',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.wolf_collection',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.owner',
              },
            ],
          },
        },
        {
          name: 'userPool',
          isMut: true,
          isSigner: false,
          relations: ['owner'],
        },
        {
          name: 'nftTrait',
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'nft_trait',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'Mint',
                path: 'nft_mint',
              },
            ],
            programId: {
              kind: 'account',
              type: 'publicKey',
              account: 'StakeDetails',
              path: 'stake_details.wolf_game',
            },
          },
        },
        {
          name: 'nftMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'nftToken',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nftMetadata',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'nftAuthority',
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'nft-authority',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details',
              },
            ],
          },
        },
        {
          name: 'nftCustody',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'multiStake',
      accounts: [
        {
          name: 'stakeDetails',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'stake',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.wolf_collection',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.owner',
              },
            ],
          },
          relations: ['owner'],
        },
        {
          name: 'userPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'mintList',
          type: {
            vec: 'publicKey',
          },
        },
        {
          name: 'alphaScoreList',
          type: {
            vec: 'u32',
          },
        },
      ],
    },
    {
      name: 'claimReward',
      accounts: [
        {
          name: 'stakeDetails',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'stake',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.wolf_collection',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.owner',
              },
            ],
          },
          relations: ['wool_mint'],
        },
        {
          name: 'userPool',
          isMut: true,
          isSigner: false,
          relations: ['owner'],
        },
        {
          name: 'woolMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'stakeTokenVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'rewardReceiveAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenAuthority',
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'token-authority',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details',
              },
            ],
          },
        },
        {
          name: 'recentSlothashes',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'unstake',
      accounts: [
        {
          name: 'stakeDetails',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'stake',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.wolf_collection',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.owner',
              },
            ],
          },
          relations: ['wool_mint'],
        },
        {
          name: 'userPool',
          isMut: true,
          isSigner: false,
          relations: ['owner'],
        },
        {
          name: 'woolMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'stakeTokenVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'rewardReceiveAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nftMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'nftReceiveAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nftCustody',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenAuthority',
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'token-authority',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details',
              },
            ],
          },
        },
        {
          name: 'nftAuthority',
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'nft-authority',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details',
              },
            ],
          },
        },
        {
          name: 'recentSlothashes',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'multiUnstake',
      accounts: [
        {
          name: 'stakeDetails',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'stake',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.wolf_collection',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.owner',
              },
            ],
          },
          relations: ['owner'],
        },
        {
          name: 'userPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'woolMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rewardReceiveAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'stakeTokenVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenAuthority',
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'token-authority',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details',
              },
            ],
          },
        },
        {
          name: 'staker',
          isMut: true,
          isSigner: false,
          docs: ['CHECK - address'],
        },
        {
          name: 'recentSlothashes',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'mintList',
          type: {
            vec: 'publicKey',
          },
        },
      ],
    },
    {
      name: 'updateConfig',
      accounts: [
        {
          name: 'stakeDetails',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'stake',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.wolf_collection',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'StakeDetails',
                path: 'stake_details.owner',
              },
            ],
          },
          relations: ['owner'],
        },
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'dailyWoolRate',
          type: 'u64',
        },
        {
          name: 'minimumStakePeriod',
          type: 'i64',
        },
        {
          name: 'woolClaimTaxPercentage',
          type: 'u16',
        },
      ],
    },
  ],
  accounts: [
    {
      name: 'brozenUserPool',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'owner',
            type: 'publicKey',
          },
          {
            name: 'itemCount',
            type: 'u64',
          },
          {
            name: 'items',
            type: {
              array: [
                {
                  defined: 'StakedNFT',
                },
                100,
              ],
            },
          },
          {
            name: 'rewardTime',
            type: 'i64',
          },
          {
            name: 'isLock',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'diamondUserPool',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'owner',
            type: 'publicKey',
          },
          {
            name: 'itemCount',
            type: 'u64',
          },
          {
            name: 'items',
            type: {
              array: [
                {
                  defined: 'StakedNFT',
                },
                1000,
              ],
            },
          },
          {
            name: 'rewardTime',
            type: 'i64',
          },
          {
            name: 'isLock',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'goldenUserPool',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'owner',
            type: 'publicKey',
          },
          {
            name: 'itemCount',
            type: 'u64',
          },
          {
            name: 'items',
            type: {
              array: [
                {
                  defined: 'StakedNFT',
                },
                500,
              ],
            },
          },
          {
            name: 'rewardTime',
            type: 'i64',
          },
          {
            name: 'isLock',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'silverUserPool',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'owner',
            type: 'publicKey',
          },
          {
            name: 'itemCount',
            type: 'u64',
          },
          {
            name: 'items',
            type: {
              array: [
                {
                  defined: 'StakedNFT',
                },
                300,
              ],
            },
          },
          {
            name: 'rewardTime',
            type: 'i64',
          },
          {
            name: 'isLock',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'stakeDetails',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'owner',
            docs: ['The creator of the stake record (32)'],
            type: 'publicKey',
          },
          {
            name: 'wolfGame',
            docs: ['The Wolf Game (32)'],
            type: 'publicKey',
          },
          {
            name: 'woolMint',
            docs: ['The mint of the token to be given as reward (32)'],
            type: 'publicKey',
          },
          {
            name: 'wolfCollection',
            docs: ['The verified collection address of the NFT (32)'],
            type: 'publicKey',
          },
          {
            name: 'globalStakingPool',
            docs: ['The global staking pool (32)'],
            type: 'publicKey',
          },
          {
            name: 'tokenAuthority',
            docs: ['The token authority (32)'],
            type: 'publicKey',
          },
          {
            name: 'totalReward',
            docs: ['The total reward to staking with Wool (8)'],
            type: 'u64',
          },
          {
            name: 'currentBalance',
            docs: ['The current balance in Stake Vault (8)'],
            type: 'u64',
          },
          {
            name: 'unaccountedReward',
            docs: ['Unaccounted reward (8)'],
            type: 'u64',
          },
          {
            name: 'dailyWoolRate',
            docs: ['Daily wool rate (8)'],
            type: 'u64',
          },
          {
            name: 'woolPerAlpha',
            docs: ['Wool per alpha (8)'],
            type: 'u64',
          },
          {
            name: 'minimumStakePeriod',
            docs: ['Minimum Staking Period (8)'],
            type: 'i64',
          },
          {
            name: 'totalWoolEarned',
            docs: ['Total wool earned (8)'],
            type: 'u64',
          },
          {
            name: 'totalAlphaStaked',
            docs: ['Total alpha staked (4)'],
            type: 'u32',
          },
          {
            name: 'totalWolfStaked',
            docs: ['Total sheep staked (2)'],
            type: 'u16',
          },
          {
            name: 'totalSheepStaked',
            docs: ['Total sheep staked (2)'],
            type: 'u16',
          },
          {
            name: 'woolClaimTaxPercentage',
            docs: ['Wool claim tax percentage (2)'],
            type: 'u16',
          },
          {
            name: 'isActive',
            docs: ['The status of the staking (1)'],
            type: 'bool',
          },
          {
            name: 'stakeBump',
            docs: ['The bump of the stake record PDA (1)'],
            type: 'u8',
          },
          {
            name: 'tokenAuthBump',
            type: 'u8',
          },
          {
            name: 'nftAuthBump',
            docs: ['The bump of the nft authority PDA (1)'],
            type: 'u8',
          },
        ],
      },
    },
    {
      name: 'globalStakingPool',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'stakeItems',
            type: {
              array: [
                {
                  defined: 'StakeItem',
                },
                50000,
              ],
            },
          },
          {
            name: 'itemCount',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'userPool',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'owner',
            type: 'publicKey',
          },
          {
            name: 'itemCount',
            type: 'u64',
          },
          {
            name: 'items',
            type: {
              array: [
                {
                  defined: 'StakedNFT',
                },
                300,
              ],
            },
          },
          {
            name: 'rewardTime',
            type: 'i64',
          },
          {
            name: 'isLock',
            type: 'u64',
          },
        ],
      },
    },
  ],
  types: [
    {
      name: 'StakeItem',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'owner',
            type: 'publicKey',
          },
          {
            name: 'nftAddr',
            type: 'publicKey',
          },
          {
            name: 'stakedAt',
            type: 'i64',
          },
          {
            name: 'isWolf',
            type: 'u8',
          },
          {
            name: 'padding',
            type: {
              array: ['u8', 7],
            },
          },
        ],
      },
    },
    {
      name: 'StakedNFT',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'nftAddr',
            type: 'publicKey',
          },
          {
            name: 'alphaStakedValue',
            type: 'u64',
          },
          {
            name: 'alphaValue',
            type: 'u32',
          },
          {
            name: 'rewardTime',
            type: 'u32',
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: 'ReentrancyDetect',
      msg: 'Reentrancy Detect',
    },
    {
      code: 6001,
      name: 'StakeBumpError',
      msg: 'unable to get stake details bump',
    },
    {
      code: 6002,
      name: 'NftBumpError',
      msg: 'unable to get nft record bump',
    },
    {
      code: 6003,
      name: 'InvalidStakedValue',
      msg: 'No staked nft to get rewards',
    },
    {
      code: 6004,
      name: 'NegativePeriodValue',
      msg: "the minimum staking period in secs can't be negative",
    },
    {
      code: 6005,
      name: 'InvalidStakeEndTime',
      msg: 'stake ends time must be greater than the current time & start time',
    },
    {
      code: 6006,
      name: 'TokenNotNFT',
      msg: "the given mint account doesn't belong to NFT",
    },
    {
      code: 6007,
      name: 'TokenAccountEmpty',
      msg: 'the given token account has no token',
    },
    {
      code: 6008,
      name: 'CollectionNotVerified',
      msg: 'the collection field in the metadata is not verified',
    },
    {
      code: 6009,
      name: 'InvalidCollection',
      msg: "the collection doesn't match the staking details",
    },
    {
      code: 6010,
      name: 'MaxStakersReached',
      msg: 'max staker count reached',
    },
    {
      code: 6011,
      name: 'IneligibleForReward',
      msg: 'the minimum stake period for the rewards not completed yet',
    },
    {
      code: 6012,
      name: 'StakingIsOver',
      msg: 'the nft stake time is greator than the staking period',
    },
    {
      code: 6013,
      name: 'StakingNotLive',
      msg: 'the staking is not yet started',
    },
    {
      code: 6014,
      name: 'StakingInactive',
      msg: 'the staking is not currently active',
    },
    {
      code: 6015,
      name: 'InsufficientBalInVault',
      msg: 'Insufficient tokens in Vault to extend the period or reward',
    },
    {
      code: 6016,
      name: 'FailedTimeConversion',
      msg: 'failed to convert the time to u64',
    },
    {
      code: 6017,
      name: 'FailedWeightConversion',
      msg: 'failed to convert the weight to u64',
    },
    {
      code: 6018,
      name: 'ProgramAddError',
      msg: 'unable to add the given values',
    },
    {
      code: 6019,
      name: 'ProgramSubError',
      msg: 'unable to subtract the given values',
    },
    {
      code: 6020,
      name: 'ProgramMulError',
      msg: 'unable to multiply the given values',
    },
    {
      code: 6021,
      name: 'ProgramDivError',
      msg: 'unable to divide the given values',
    },
    {
      code: 6022,
      name: 'InvalidUserPool',
      msg: 'Invalid User Pool',
    },
    {
      code: 6023,
      name: 'InvalidPoolError',
      msg: 'Invalid pool number',
    },
    {
      code: 6024,
      name: 'InvalidNFTAddress',
      msg: 'No Matching NFT to withdraw',
    },
    {
      code: 6025,
      name: 'InvalidOwner',
      msg: 'NFT Owner key mismatch',
    },
    {
      code: 6026,
      name: 'InvalidWithdrawTime',
      msg: 'Staking Locked Now',
    },
    {
      code: 6027,
      name: 'IndexOverflow',
      msg: 'Withdraw NFT Index OverFlow',
    },
    {
      code: 6028,
      name: 'LackLamports',
      msg: 'Insufficient Lamports',
    },
    {
      code: 6029,
      name: 'VectorLengthMismatch',
      msg: 'Vector length mismatch',
    },
    {
      code: 6030,
      name: 'NoStakedNFT',
      msg: 'No Staked NFT',
    },
  ],
};
