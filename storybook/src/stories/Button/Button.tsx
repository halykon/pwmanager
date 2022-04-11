import React from 'react'
import {Button as ChakraButton} from '@chakra-ui/react'

export const Button: React.FC<{text: string}> = ({text}) => {
  return (
    <ChakraButton> {text} </ChakraButton>
  )
}

Button.defaultProps = {
  text: 'Button'
}