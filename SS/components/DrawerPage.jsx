import { View, Text } from 'react-native'
import React from 'react'
import Academics from "../navigation/Academics";
import { ScrollView } from 'react-native-gesture-handler'
import { dropShadow } from '../assets/style';

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
    <ScrollView>
      <View style={{backgroundColor: "#e4e4e4", width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <View style={{...dropShadow, backgroundColor: "#ffffff", width: "100%", maxWidth: 800, display: "flex", flexDirection: "column"}}>
          { renderPage() }
        </View>
      </View>
    </ScrollView>
  )
}