import type { ChakraTheme } from '@chakra-ui/react'
import React from 'react'
import Color from 'color'
import { css, Global } from '@emotion/react'

function getShades (color: string) {
  return {
    50: Color(color).lighten(0.5).hex(),
    100: Color(color).lighten(0.4).hex(),
    200: Color(color).lighten(0.3).hex(),
    300: Color(color).lighten(0.2).hex(),
    400: Color(color).lighten(0.1).hex(),
    500: color,
    600: Color(color).darken(0.1).hex(),
    700: Color(color).darken(0.2).hex(),
    800: Color(color).darken(0.3).hex(),
    900: Color(color).darken(0.4).hex(),
  }
}

const colors = {
  primary: getShades('#049987'),
}

export const defaultTheme: Partial<ChakraTheme> = {
  colors,
  fonts: {
    heading: 'Poppins',
    body: 'poppins',
  },
  shadows: {
    outline: `0 0 0 3px ${Color(colors.primary[500]).fade(0.7).toString()}`,
  },
}

export const GlobalStyle: React.FC = () => (
  <Global
    styles={css`
      ::selection {
        color: white;
        background-color: ${colors.primary[500]};
      }
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600&display=swap');
    `}
    
  />
)