import React from 'react'
import { View, Text } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { SvgProps } from 'react-native-svg'
import { LinearGradient } from 'expo-linear-gradient'

import { theme } from '../../theme'

import { styles as S } from './styles'

type Props = RectButtonProps & {
  title: string
  icon: React.FC<SvgProps>
  checked?: boolean
}

export default function CategoryItem({
  title,
  icon: Icon,
  checked = false,
  ...rest
}: Props) {
  return (
    <RectButton {...rest}>
      <LinearGradient
        style={S.container}
        colors={
          [
            theme.colors.secondary50,
            theme.colors.secondary70
          ]
        }>
        <View style={[S.content, { opacity: checked ? 1 : 0.4 }]}>
          <View style={checked ? S.checked : S.check} />
          <Icon width={48} height={48} />
          <Text style={S.title}>{title}</Text>
        </View>
      </LinearGradient>
    </RectButton>
  )
}