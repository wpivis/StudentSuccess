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
        marginTop: "1rem",
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
          padding: "5px",
        }}
      >
        <View style={{paddingRight: "1rem"}}>
          <Text style={{width: "100%", color: crimson, fontWeight: 500}}>{props.children}</Text>
        </View>
        <Image source={externalLink} style={{height: 14, width: 14}}/>
      </Pressable>
    </View>
  )
}

export function ButtonBlock({header, text, onClick}) {
  return (
    <View style={{...dropShadow, paddingBottom: "1rem", display: "flex", flexDirection: "row"}}>
      <View style={{marginHorizontal: "0.25rem", padding: "1rem", flex: 1, backgroundColor: "#e4e4e4", display:"flex", flexDirection: "column", alignItems:"start", justifyContent:"center"}}>
        <Text style={{fontWeight: "bold"}}>{header}</Text>
        <View style={{width: "100%", height: 1, backgroundColor: "#1F2327", marginVertical: '0.5rem'}}/>
        <Text>{text}</Text>
      </View>
      <Pressable 
        onPress={onClick} 
        style={{
          width: 100,
          marginHorizontal: "0.25rem",
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