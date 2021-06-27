import React, { useState } from 'react'
import {
  View,
} from 'react-native'

import { Profile, ButtonAdd, CategoryList } from '../../components'

import { styles as S } from './styles'

export function Home() {
  const [category, setCategory] = useState('')

  function handleCategorySelected(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  return (
    <View style={S.container}>
      <View style={S.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <View>
        <CategoryList categorySelected={category} setCategory={handleCategorySelected} />
      </View>
    </View>
  )
}