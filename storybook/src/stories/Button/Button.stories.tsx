import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { Button } from './Button'

const meta: ComponentMeta<typeof Button> = {
  title: 'Button',
  component: Button,
}

export default meta

export const Default: ComponentStory<typeof Button> = (args, context) => <Button {...args}/>