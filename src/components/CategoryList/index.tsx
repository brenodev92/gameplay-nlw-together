import React from 'react'
import { View, ScrollView } from 'react-native'

import { CategoryItem } from '..'

import { categories } from '../../utils/categories'

import { styles as S } from './styles'

type Props = {
  categorySelected: string,
  setCategory: (categoryId: string) => void
}

export default function CategoryList(
  { categorySelected, setCategory }: Props) {
  return (
    <ScrollView
      style={S.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map(category => (
        <CategoryItem
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </ScrollView>
  )
}