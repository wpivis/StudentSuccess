import { View, Text, Pressable, Image } from 'react-native'
import React, {Component} from 'react'
import { crimson, dropShadow, textSecondary } from '../assets/style'

import externalLink from "../assets/images/externalLink.png"

import arrowRight from "../assets/images/arrowRight.png"

const rippleRed = {color: crimson, radius: 25} 
const rippleGray = {color: textSecondary, radius: 25} 

export function ButtonCentered(props) {
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
        onPress={props.onClick} 
        style={{
          display: "flex", 
          width: "100%", 
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          border: `2px solid ${crimson}`,
          maxWidth: "80%",
          padding: 5,
        }}
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