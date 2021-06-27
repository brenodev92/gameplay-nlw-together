import React from 'react'
import { View, Text } from 'react-native'

import { styles as S } from './styles'

type Props = {
  title: string,
  subtitle: string,
}

export default function ListHeader({ title, subtitle }: Props) {
  return (
    <View style={S.container}>
      <Text style={S.title}>
        {title}
      </Text>
      <Text style={S.subtitle}>
        {subtitle}
      </Text>
    </View>
  )
}