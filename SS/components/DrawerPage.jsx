import { View, Text } from 'react-native'
import React from 'react'
import Academics from "../navigation/Academics";
import { ScrollView } from 'react-native-gesture-handler'

/**
 * A component for rendering page data for drawer items by drawer item key
 * @param {string} params.pageKey - enum key for which page this will render 
 * @returns View with data by page key
 */
export default function DrawerPage({pageKey}) {
  
  function renderPage() {
    switch(pageKey) {
      case "Academics":
        return <Academics />
      default:
        return <Text>In Progress...</Text>
    }
  }

  return (
    <View style={{backgroundColor: "#e4e4e4", width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
      <ScrollView style={{filter: "drop-shadow(1px 1px 5px rgba(0,0,0,0.5))", backgroundColor: "#ffffff", width: "100%", maxWidth: 800, display: "flex", flexDirection: "column"}}>
        { renderPage() }
      </ScrollView>
    </View>
  )
}