import { Text, View } from "react-native";

import {Image} from "expo-image";
import { crimson, textSecondary, dropShadowDark, dropShadowLeft, dropShadow } from "../assets/style";
import { Component } from "react";

const bubblePointRed = require("../assets/bubblePointRed.png");
const bubblePointWhite = require("../assets/bubblePointWhite.png");
const bubblePointGray = require("../assets/bubblePointGray.png");

export function HeaderRight(props) {
  return (
    <View 
      style={{
        display: "flex", 
        alignItems: "center",
        flexDirection: "row", 
        width: "100%", 
        justifyContent: "center",
        paddingRight: 28, 
        height: 32,
        marginTop: 14,
      }}
    >
      <View style={{height: 0, width: "100%", display: "flex", borderWidth: 2, borderStyle: "dashed", borderColor: crimson}} />
      <View 
        style={{
          borderLeftColor: crimson, 
          display: "flex", 
          paddingLeft: 14, 
          paddingRight: 14, 
          backgroundColor: "white", 
          position: "absolute", 
          top: 0, 
          right: 0
        }}
      >
        <Text style={{color: crimson, fontSize: 24, fontWeight: "bold"}}>
          {props.children}
        </Text>
      </View>
    </View>
  )
}


export function BracketedText(props) {
  return (
    <View 
      style={{
        display: "flex", 
        alignItems: "center",
        flexDirection: "row", 
        justifyContent: "space-between",
        width: "100%", 
        paddingLeft: 14, 
        paddingRight: 14, 
        marginTop: 14,
      }}
    >
      <View 
        style={{
          height: "100%",  
          flex: 1, 
          maxWidth: 28,
          borderTopWidth: 2, 
          borderBottomWidth: 2,
          borderLeftWidth: 2,
          borderTopColor: crimson,
          borderBottomColor: crimson,
          borderLeftColor: crimson,
        }}
      />
      <View style={{height: "100%", paddingTop: 28, paddingBottom: 28, flex: 10, textAlign:"center"}}>
        <Text>{props.children}</Text>
      </View>
      <View 
        style={{
          height: "100%", 
          flex: 1,
          maxWidth: 28,
          borderTopWidth: 2, 
          borderBottomWidth: 2,
          borderRightWidth: 2,
          borderTopColor: crimson,
          borderBottomColor: crimson,
          borderRightColor: crimson,
        }}
      />
    </View>
  )
}

export function ImageHeader(props) {
  return (
    <View 
      style={{
        ...dropShadowDark,
        width: "100%", 
        maxHeight: 300, 
        minHeight: 200,
      }}
    >
      <Image source={props.image} style={{width: "100%", height: "100%", maxHeight: 300, minHeight: 200, objectFit: "cover"}}/>
      <View 
        style={{
          height: "100%",
          width: "100%",
          zIndex: 2,
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          justifyContent:"flex-end",
        }}
      >
        <View 
          style={{
            width:"100%", 
            backgroundColor: "rgba(12,14,15, 0.8)", 
            height: 50, 
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{color:"#f4f4f4", fontSize: 24}}>{props.children}</Text>
        </View>
      </View>
    </View>
  )
}


export function PageHeader(props) {
  return (
    <View style={{width: "100%", height: 100, marginTop: 14, display: "flex", flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "flex-start"}}>
      <View style={{width: "80%", backgroundColor: crimson, paddingTop: 20, paddingBottom: 20, paddingLeft: 7, paddingRight: 7, }}>      
        <Text style={{color:"#f4f4f4", fontSize: 24}}>{props.children}</Text>
      </View>
      <View style={{width: 20, backgroundColor: crimson, marginLeft: 4, height:"100%"}} />      
      <View style={{width: 10, backgroundColor: crimson, marginLeft: 4, height:"100%"}} />      
    </View>
  )
}

export class SectionContentHeader extends Component {

  static Title(props) {
    return <Text style={{fontSize: 24, fontWeight: "500"}}>{props.children}</Text>
  }

  static Subtitle(props) {
    return <Text style={{fontSize: 14, color: textSecondary}}>{props.children}</Text>
  }
  
  render() {
    return (
      <View style={{paddingLeft: 7, paddingTop: 7, paddingBottom: 7}}>
        {this.props.children}
      </View>
    )
  }
}

const quoteStyle = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  alignItems: "center",
  paddingTop: 14, 
  paddingBottom: 14,
  paddingLeft: 7,
  paddingRight: 7,
}

export function QuoteRight(props) {

  function getPointImage() {
    switch(props.color) {
      case "red":
        return <Image source={bubblePointRed} style={{height: 20, width: 20, marginLeft: -10}}/>
      case "white":
        return <Image source={bubblePointWhite} style={{height: 20, width: 20, marginLeft: -10}}/>
      case "gray":
        return <Image source={bubblePointGray} style={{height: 20, width: 20, marginLeft: -10}}/>
    }
  }

  function getBubbleColor() {
    switch(props.color) {
      case "red":
        return crimson;
      case "white":
        return "white";
      case "gray":
        return "#e4e4e4";
    }
  }

  function getTextColor() {
    if (props.color === "red") {
      return "#ffffff";
    }
    return null;
  }

  return (
    <View 
      style={{
        ...quoteStyle,
        ...dropShadow,
        justifyContent: "flex-end",
      }}
    >
      <View 
        style={{
          paddingLeft: 14, 
          paddingRight: 14, 
          paddingTop: 28, 
          paddingBottom: 28,
          backgroundColor: getBubbleColor(), 
          borderRadius: 14,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          width: "100%",
          maxWidth: 700,   
        }}
      >
        <Text 
          style={{
            color: getTextColor()
          }}
        >
          {props.children}
        </Text>
      </View>
      {getPointImage()}
    </View>
  )
}


export function QuoteLeft(props) {

  function getPointImage() {
    switch(props.color) {
      case "red":
        return <Image source={bubblePointRed} style={{height: 20, width: 20, marginLeft: -10, transform: [{rotate:"180deg"}]}}/>
      case "white":
        return <Image source={bubblePointWhite} style={{height: 20, width: 20, marginLeft: -10, transform: [{rotate:"180deg"}]}}/>
      case "gray":
        return <Image source={bubblePointGray} style={{height: 20, width: 20, marginLeft: -10, transform: [{rotate:"180deg"}]}}/>
    }
  }

  function getBubbleColor() {
    switch(props.color) {
      case "red":
        return crimson;
      case "white":
        return "white";
      case "gray":
        return "#e4e4e4";
    }
  }

  function getTextColor() {
    if (props.color === "red") {
      return "#ffffff";
    }
    return null;
  }

  return (
    <View 
      style={{
        ...quoteStyle,
        ...dropShadowLeft,
        justifyContent: "flex-start",
      }}
    >
      {getPointImage()}
      <View 
        style={{
          paddingLeft: 14, 
          paddingRight: 14, 
          paddingTop: 28, 
          paddingBottom: 28,
          backgroundColor: getBubbleColor(), 
          borderRadius: 14,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          width: "100%",
          maxWidth: 700,   
        }}
      >
        <Text 
          style={{
            color: getTextColor(),
          }}
        >
          {props.children}
        </Text>
      </View>
    </View>
  )
}

export function CenteredTitle(props) {
  return (
    <View style={{width: "100%", textAlign: "center", paddingTop: 14, paddingBottom: 14}}>
      <Text style={{fontWeight: "bold", fontSize: 24}}>{props.children}</Text>
    </View>
  )
}

export function BodyText(props){
  return (
    <View style={{width: "100%", textAlign: "left", paddingLeft: 14, paddingRight: 14, paddingTop: 7, paddingBottom: 7}}>
      <Text style={{fontWeight: "400", fontSize: 20, }}>{props.children}</Text>
    </View>
  )
}

export function GreayTextBeam(props) {
  return (
    <View style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#e4e4e4", textAlign:"center", marginBottom: 7, paddingTop: 7, paddingBottom: 7, paddingLeft: "10%", paddingRight: "10%"}}>
      <Text>{props.children}</Text>
    </View>
  )
}