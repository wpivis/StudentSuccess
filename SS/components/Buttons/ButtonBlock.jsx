import { View, Text, Pressable } from 'react-native'
import { crimson, dropShadow, textSecondary } from '../../assets/style'

import { Image } from "expo-image"

const arrowRight = require("../../assets/icons/arrowRight.png")


export const rippleRed = {color: crimson} 
export const rippleGray = {color: textSecondary} 

export function ButtonBlock({header, text, onClick}) {
  return (
    <View style={{...dropShadow, paddingBottom: 14, display: "flex", flexDirection: "row"}}>
      <View style={{marginLeft: 4, marginRight: 4, padding: 14, flex: 1, backgroundColor: "#e4e4e4", display:"flex", flexDirection: "column", alignItems:"flex-start", justifyContent:"center"}}>
        <Text style={{fontWeight: "bold"}}>{header}</Text>
        <View style={{width: "100%", height: 1, backgroundColor: "#1F2327", marginTop: 7, marginBottom: 7}}/>
        <Text>{text}</Text>
      </View>
      <Pressable 
        onPress={onClick} 
        style={{
          width: 100,
          marginLeft: 4, 
          marginRight: 4,
          backgroundColor: crimson, 
          display:"flex", 
          flexDirection: "column", 
          alignItems:"center", 
          justifyContent:"center"
        }}
        android_ripple={rippleGray}
      >
        <Image source={arrowRight} style={{width: 24, height: 40}}/>
      </Pressable>
    </View>
  )
}