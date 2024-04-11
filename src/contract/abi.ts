export const abi = [
  {
    inputs: [
      {
        internalType: 'address payable',
        name: '_bank1',
        type: 'address',
      },
      {
        internalType: 'address payable',
        name: '_bank2',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'minedMinerals',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'minedUniverts',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'miner',
        type: 'address',
      },
    ],
    name: 'Collected',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'planet',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'yield',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'boostYield',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'minerals2',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'miner',
        type: 'address',
      },
    ],
    name: 'ExtraRigBought',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'galaxitsAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'miner',
        type: 'address',
      },
    ],
    name: 'GalaxitsBought',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'boostLevel',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'boostYield',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'minerals2',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'miner',
        type: 'address',
      },
    ],
    name: 'RefBoosted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'planet',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'rig',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'galaxitsPrice',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'yield',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'boostYield',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'minerals2',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'miner',
        type: 'address',
      },
    ],
    name: 'RigBought',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'boostLevel',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'boostYield',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'minerals2',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'miner',
        type: 'address',
      },
    ],
    name: 'RigsBoosted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'mineralsAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'miner',
        type: 'address',
      },
    ],
    name: 'Sold',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'boostLevel',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'boostYield',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'minerals2',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'miner',
        type: 'address',
      },
    ],
    name: 'SpaceshipBoosted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'minerals',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'galaxits',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'miner',
        type: 'address',
      },
    ],
    name: 'SwappedMinerals',
    type: 'event',
  },
  {
    inputs: [],
    name: 'BANK_IN_FEE',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'BANK_OUT_FEE',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'BOOST_PRICE',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'DAY',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'HOUR',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MAX_REFARRALS_BOOST',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MAX_RIGS_BOOST',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MAX_SPACESHIP_BOOST',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'RIG_MINE_CONST',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'bank1',
    outputs: [
      {
        internalType: 'address payable',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'bank2',
    outputs: [
      {
        internalType: 'address payable',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'planets',
    outputs: [
      {
        internalType: 'uint256',
        name: 'miners',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'rigs',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'minePerHour',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'discoveredAt',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'discoverer',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'spaceships',
    outputs: [
      {
        internalType: 'uint256',
        name: 'galaxits',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'minerals',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'minerals2',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'univerts',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'yield',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'boostYield',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'lastUpdate',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'ref',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'refs',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'boost',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'refsBoost',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'rigsBoost',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalInvested',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalMiners',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalRigs',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_ref',
        type: 'address',
      },
    ],
    name: 'buyGalaxits',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_planet',
        type: 'uint256',
      },
    ],
    name: 'buyRig',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_planet',
        type: 'uint256',
      },
    ],
    name: 'buyExtraRig',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'boostRigs',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_miner',
        type: 'address',
      },
    ],
    name: 'minePerHour',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'upgradeSpaceship',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'sellMinerals',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'collectMinerals',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'swapMinerals',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_miner',
        type: 'address',
      },
    ],
    name: 'minedMinerals',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_planet',
        type: 'uint256',
      },
    ],
    name: 'getRigsOnPlanet',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_planet',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_rig',
        type: 'uint256',
      },
    ],
    name: 'getUpgradePrice',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_planet',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_rig',
        type: 'uint256',
      },
    ],
    name: 'getYield',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_miner',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_planet',
        type: 'uint256',
      },
    ],
    name: 'rigs',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]
