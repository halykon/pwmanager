import { createTamagui, createTokens, createFont } from 'tamagui'

const interFont = createFont({
  family: 'Inter, Helvetica, Arial, sans-serif',
  size: {
    1: 12,
    2: 14,
    3: 15,
  },
  lineHeight: {
    1: 17,
    2: 22,
    3: 25,
  },
  weight: {
    4: 'regular',
    6: 'bold',
  },
  letterSpacing: {
    4: 0,
    8: -1,
  },
})

const size = {
  0: 0,
  1: 5,
  2: 10
}

export const tokens = createTokens({
  font: { body: interFont },
  size,
  space: { ...size, '-1': -5, '-2': -10 },
  radius: { 0: 0, 1: 3 },
  zIndex: { 0: 0, 1: 100, 2: 200 },
  color: {
    white: '#fff',
    black: '#000'
  },
})

const config = {
  tokens,
  themes: {
    light: {
      bg: '#f2f2f2',
      color: tokens.color.black,
    },
    dark: {
      bg: '#111',
      color: tokens.color.white,
    },
  },
  media: {
    sm: { maxWidth: 860 },
    gtSm: { minWidth: 860 + 1 },
    short: { maxHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  },
  shorthands: {
    px: 'paddingHorizontal',
    f: 'flex',
    w: 'width',
  },
}




const conf = createTamagui(config)
type Conf = typeof conf

// this will give you types for your components
declare module 'tamagui' {
  type TamaguiCustomConfig = Conf
}
export default conf
