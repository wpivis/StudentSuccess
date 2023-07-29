import { View, Text, Pressable, Linking, Alert } from 'react-native'
import React, {Component, useCallback} from 'react'
import { crimson, dropShadow, textSecondary } from '../assets/style'

import { Image } from "expo-image"

const externalLink = require("../assets/externalLink.png")

const arrowRight = require("../assets/arrowRight.png")

export const rippleRed = {color: crimson} 
export const rippleGray = {color: textSecondary} 

export function ButtonCentered(props) {

  const href = props.href ? props.href : null;
  
  const handleClick = useCallback(async () => {
    if (href) {
      const supported = await Linking.canOpenURL(href);
      if (supported) {
        await Linking.openURL(href);
      } else {
        Alert.alert(`Don't know how to open this URL: ${href}`);
      }
    }
  }, [href]);

  
  return (
    <View 
      style={{
        display: "flex", 
        flexDirection: "row", 
        width: "100%", 
        alignItems: "center",
        justifyContent: "center",
        marginTop: 14,
      }}
    >
      <Pressable 
        onPress={props.href ? handleClick : props.onClick} 
        style={{
          display: "flex", 
          width: "100%", 
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 2,
          borderColor: crimson,
          maxWidth: "80%",
          padding: 5,
        }}
        android_ripple={rippleRed}
      >
        <View style={{paddingRight: 14}}>
          <Text style={{width: "100%", color: crimson, fontWeight: "500"}}>{props.children}</Text>
        </View>
        <Image source={externalLink} style={{height: 14, width: 14}}/>
      </Pressable>
    </View>
  )
}

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