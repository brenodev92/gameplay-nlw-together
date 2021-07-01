import React from 'react'
import { View, Text } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import {Fontisto} from '@expo/vector-icons'

import { BasePage, Header } from '../../components'
import { theme } from '../../theme'


export function AppointmentDetails() {
  return (
    <BasePage>
      <Header 
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto 
              name="share"
              color={theme.colors.primary}
              size={24}
            />
          </BorderlessButton>
        }
      />

    </BasePage>
  )
}