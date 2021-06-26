import React from 'react'
import {
  View,
} from 'react-native'

import { Profile } from '../../components'

import { styles as S } from './styles'

export function Home() {
  return (
    <View style={S.container}>
      <View style={S.header}>
        <Profile />
      </View>
    </View>
  )
}