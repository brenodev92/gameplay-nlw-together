import React from 'react'
import { View, ScrollView } from 'react-native'

import { categories } from '../../utils/categories'
import CategoryItem from '../CategoryItem'

import { styles as S } from './styles'

type Props = {
  categorySelected: string
}

export default function CategoryList({ categorySelected }: Props) {
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
        />
      ))}
    </ScrollView>
  )
}