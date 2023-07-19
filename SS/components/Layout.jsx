import { Image, Text, View } from "react-native";

import tower from "../assets/images/tower.png";
import { crimson, textSecondary } from "../assets/style";

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
        paddingHorizontal: !props.noPadding && "1rem",
        paddingVertical: ".5rem",
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

export function ContentSection(props) {
  return (
    <View style={{paddingVertical: "2rem"}}>
      {props.children}
    </View>
  )
}

export function Footer() {
  return (
    <View style={{height: 110, width: "100%", backgroundColor: "#1F2327", marginTop: "1rem", display: "flex", flexDirection: "row", alignItems: "flex-end"}}>
      <View style={{paddingHorizontal: "0.5rem", paddingVertical: "1rem", height: "100%", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start"}}>
        <View>
          <Text style={{fontSize: 16, color: "white"}}>WPI Student Success Project</Text>
          <Text style={{color: "white"}}>Subtitle / mission statement</Text>
        </View>
        <View>
          <Text style={{color: "#8C8C8C"}}>Bottom - maybe something legal?</Text>
        </View>
      </View>
      <Image source={tower} style={{width: 100, height: 100}}/>
    </View>
  )
}

export function RedBeam({title, text}) {
  return (
    <View style={{filter: "drop-shadow(1px 1px 5px rgba(0,0,0,0.5))", paddingBottom: "1rem", paddingHoizontal: "3rem", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <View style={{backgroundColor: crimson, width: "100%", paddingVertical: "1rem", display: "flex", flexDirection: "column", alignItems:"center", justifyContent:"center"}}>
        <Text style={{color: "white", fontSize: 20}}>{title}</Text>
        <View style={{marginVertical: "0.5rem", borderRadius: 1, height: 2, width: "70%", backgroundColor: "white"}}/>
        <Text style={{textAlign: "center", width: "80%", color: "white"}}>{text}</Text>
      </View>
    </View>
  )
}