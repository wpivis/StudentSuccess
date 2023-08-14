import { Text, View } from "react-native";

import {Image} from "expo-image";

import { crimson, dropShadow, textSecondary } from "../assets/style";
const tower = require("../assets/tower.png");

export function TransparentPlatform(props) {
  return (
    <View 
      style={{
        backgroundColor: props.backgroundColor ? props.backgroundColor : null, 
        width: "100%", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center",
        filter: props.backgroundColor && "drop-shadow(1px 1px 5px rgba(0,0,0,0.5)",
        paddingLeft: !props.noPadding ? 14 : 0,
        paddingRight: !props.noPadding ? 14 : 0,
        paddingTop: 7,
        paddingBottom: 7,
      }}
    >
      <View style={{width: "100%", maxWidth: props.maxWidth}}>
        {props.children}
      </View>
    </View>
  )
}

export function LightGrayPlatform(props) {
  return <TransparentPlatform maxWidth={props.maxWidth} backgroundColor={"#E4E4E4"} noPadding={props.noPadding}>{props.children}</TransparentPlatform>
}

export function RedPlatform(props) {
  return <TransparentPlatform maxWidth={props.maxWidth} backgroundColor={crimson} noPadding={props.noPadding}>{props.children}</TransparentPlatform>
}

export function ContentSection(props) {
  return (
    <View style={{paddingTop: 28, paddingBottom: 28}}>
      {props.children}
    </View>
  )
}

export function Footer() {
  return (
    <View style={{height: 110, width: "100%", backgroundColor: "#1F2327", marginTop: 14, display: "flex", flexDirection: "row", alignItems: "flex-end"}}>
      <View style={{paddingLeft: 7, paddingRight: 7, paddingTop: 14, paddingBottom: 14, height: "100%", flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start"}}>
        <View>
          <Text style={{fontSize: 16, color: "white"}}>WPI Student Success Handbook</Text>
          <Text style={{fontSize: 12, color: "white"}}>Submit feedback <a style={{fontSize:12, color:'white'}} href="https://forms.gle/gQTh5QA2qcN7uZkDA">here</a></Text>
        </View>
      </View>
      <Image source={tower} style={{width: 100, height: 100}}/>
    </View>
  )
}

export function RedBeam({title, text}) {
  return (
    <View style={{...dropShadow, paddingBottom: 14, paddingHoizontal: 42, width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <View style={{backgroundColor: crimson, width: "100%", paddingTop: 14, paddingBottom: 14, display: "flex", flexDirection: "column", alignItems:"center", justifyContent:"center"}}>
        <Text style={{color: "white", fontSize: 20}}>{title}</Text>
        <View style={{marginTop: 7, marginBottom: 7, borderRadius: 1, height: 2, width: "70%", backgroundColor: "white"}}/>
        <Text style={{textAlign: "center", width: "80%", color: "white"}}>{text}</Text>
      </View>
    </View>
  )
}

export function HeaderSubtitle(props) {
  return <RedPlatform><Text style={{color: "white", fontSize: 16}}>{props.children}</Text></RedPlatform>
}

export function Spacer() {
  return <View style={{marginBottom: 7}}/>
}