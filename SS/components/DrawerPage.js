import { View, Text } from 'react-native'
import React from 'react'
import { AppDrawerItemName } from '../api/navigation'

/**
 * A component for rendering page data for drawer items by drawer item key
 * @param {string} params.pageKey - enum key for which page this will render 
 * @returns View with data by page key
 */
export default function DrawerPage({pageKey}) {
  return (
    <View style={{alignItems: "center", width: "100%", display: "flex", flexDirection: "column"}}>
      <Text>{AppDrawerItemName[pageKey]}</Text>
    </View>
  )
}