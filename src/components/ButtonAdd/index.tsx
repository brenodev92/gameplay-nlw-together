import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { theme } from '../../theme'

import { styles as S } from './styles'

export default function ButtonAdd({ ...rest }: RectButtonProps) {
  return (
    <RectButton {...rest} style={S.container}>
      <MaterialCommunityIcons name="plus" color={theme.colors.heading} size={24} />
    </RectButton>
  )
}