import { Token, WETH } from 'entities'
import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  FUSE = 122,
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = '0x1d1f1A7280D67246665Bb196F38553b469294f3a'

export const INIT_CODE_HASH = '0x04990f130515035f22e76663517440918b83941b25a4ec04ecdf4b2898e846aa'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

const WETH_ONLY = {
  [ChainId.MAINNET]: [WETH[ChainId.MAINNET]],
  [ChainId.ROPSTEN]: [WETH[ChainId.ROPSTEN]],
  [ChainId.RINKEBY]: [WETH[ChainId.RINKEBY]],
  [ChainId.GÖRLI]: [WETH[ChainId.GÖRLI]],
  [ChainId.KOVAN]: [WETH[ChainId.KOVAN]],
  [ChainId.FUSE]: [WETH[ChainId.FUSE]]
}

export const USDC = new Token(
  ChainId.FUSE,
  '0x620fd5fa44BE6af63715Ef4E65DDFA0387aD13F5',
  6,
  'USDC',
  'USD Coin on Fuse'
)
export const USDT = new Token(
  ChainId.FUSE,
  '0xFaDbBF8Ce7D5b7041bE672561bbA99f79c532e10',
  6,
  'USDT',
  'Tether USD on Fuse'
)
export const WBTC = new Token(
  ChainId.FUSE,
  '0x33284f95ccb7B948d9D352e1439561CF83d8d00d',
  8,
  'WBTC',
  'Wrapped BTC on Fuse'
)
export const FUSE_WETH = new Token(
  ChainId.FUSE,
  '0xa722c13135930332eb3d749b2f0906559d2c5b99',
  18,
  'WETH',
  'Wrapped Ether on Fuse'
)
export const FUSD = new Token(
  ChainId.FUSE,
  '0x249BE57637D8B013Ad64785404b24aeBaE9B098B',
  18,
  'fUSD',
  'Fuse Dollar'
)

export const BASES_TO_CHECK_TRADES_AGAINST = {
  ...WETH_ONLY,
  [ChainId.FUSE]: [...WETH_ONLY[ChainId.FUSE], USDC, USDT, WBTC, FUSE_WETH, FUSD ]
}
