import { View, Text } from 'react-native'
import React from 'react'
import { AppDrawerItemName } from '../api/navigation'

export default function DrawerPage({key}) {
  return (
    <View>
      <Text>{AppDrawerItemName[key]}</Text>
    </View>
  )
}