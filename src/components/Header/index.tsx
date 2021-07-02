import React, { ReactNode } from 'react'
import { View, Text } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

import { styles as S } from './styles'
import { theme } from '../../theme'

type Props = {
  title: string;
  action?: ReactNode;
}

export default function Header({ title, action }: Props) {
  const navigation = useNavigation()
  
  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <LinearGradient
    style={S.container}
      colors={[
        theme.colors.secondary100,
        theme.colors.secondary40
      ]}
    >
      <BorderlessButton onPress={handleGoBack}>
        <Feather
          name="arrow-left"
          size={24}
          color={theme.colors.heading}
        />

      </BorderlessButton>
      <Text style={S.title}>{title}</Text>
      {
        action && <View>{action}</View>
      }
    </LinearGradient>
  )
}