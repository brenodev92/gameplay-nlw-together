import React from 'react'
import {
  View,
} from 'react-native'

import { Profile, ButtonAdd, CategoryList } from '../../components'

import { styles as S } from './styles'

export function Home() {
  return (
    <View style={S.container}>
      <View style={S.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <View>
        <CategoryList />
      </View>
    </View>
  )
}