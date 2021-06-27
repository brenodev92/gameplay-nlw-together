import React from 'react'
import { View, Text } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { SvgProps } from 'react-native-svg'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

import { theme } from '../../theme'

import { categories } from '../../utils/categories'

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
          <View style={S.checked}>
            {checked && (
              <View style={S.iconChecked}>
                <MaterialCommunityIcons
                  name="plus"
                  color={theme.colors.heading}
                  size={24}
                />
              </View>
            )}
          </View>
          <Icon width={48} height={48} />
          <Text style={S.title}>{title}</Text>
        </View>
      </LinearGradient>
    </RectButton>
  )
}