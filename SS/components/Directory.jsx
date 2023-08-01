import { Text, View } from "react-native";

import {Image} from "expo-image";
import { crimson, textSecondary, dropShadowDark, dropShadowLeft, dropShadow } from "../assets/style";
import { Component } from "react";

export function DirectoryEntry(props){
  return (
    <View style={{borderBottomWidth: 2,borderBottomColor:"black",paddingVertical:10, paddingHorizontal:20}}>
      <a href={props.href}><DirectoryTitle>{props.DirectoryTitle}</DirectoryTitle></a> 
      <View style={{display: "flex",flexDirection:"row"}}>
      <DisplayDescription Address={props.Address} Phone={props.Phone}/>
      </View>
    </View>
    )
}

function DirectoryTitle(props){
  return(
    <Text>{props.children}</Text>
  )
}

function Address(props){
  return(
    <Text>{props.children}</Text>
  )
}

function Phone(props){
  return(
    <Text>{props.children}</Text>
  )
}

function DisplayDescription(props){
  if(props.Address && props.Phone){
    return(
      <>
      <Phone>{props.Phone}</Phone>
        <Text> | </Text>
        <Address>{props.Address}</Address>
      </>
    )
  }
  if(props.Phone){
    return(
      <>
      <Phone>{props.Phone}</Phone>
      </>
    )
  }
  else{
    return(
      null
      )
  }
}