import { Text, View, StyleSheet } from "react-native";

import { Image } from "expo-image";
import { crimson, textSecondary, dropShadowDark, dropShadowLeft, dropShadow, textBlockMaxWidth } from "../assets/style";
import { Component } from "react";
import { LightGrayPlatform, RedPlatform, TransparentPlatform } from "./Layout";


const bubblePointRed = require("../assets/bubblePointRed.png");
const bubblePointWhite = require("../assets/bubblePointWhite.png");
const bubblePointGray = require("../assets/bubblePointGray.png");
const bubblePointRedLeft = require("../assets/bubblePointRedLeft.png");
const bubblePointWhiteLeft = require("../assets/bubblePointWhiteLeft.png");
const bubblePointGrayLeft = require("../assets/bubblePointGrayLeft.png");

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
      <View style={{ height: 0, width: "100%", display: "flex", borderWidth: 2, borderStyle: "dashed", borderColor: crimson }} />
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
        <Text style={{ color: crimson, fontSize: 24, fontWeight: "bold" }}>
          {props.children}
        </Text>
      </View>
    </View>
  )
}


export function BracketedText(props) {

  const textAlign = "center";
  const alignItems = props.left ? "flex-start" : "center";

  return (
    <View
      style={{
        display: "flex",
        alignItems: alignItems,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingLeft: 14,
        paddingRight: 14,
        marginTop: props.noMargin ? null : 14,
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
      <View style={{ height: "100%", paddingTop: 28, paddingBottom: 28, flex: 10 }}>
        <Text style={{ fontSize: 16 }}>{props.children}</Text>
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
      <Image source={props.image} style={{ width: "100%", height: "100%", maxHeight: 300, minHeight: 200, objectFit: "cover" }} />
      <View
        style={{
          height: "100%",
          width: "100%",
          zIndex: 2,
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <View
          style={isText(props.children)}
        >
          <Text style={{ color: "#f4f4f4", fontSize: 24 }}>{props.children}</Text>
        </View>
      </View>
    </View>
  )
}

function isText(string) {
  if (string === "") {
    return (
      {
        width: "100%",
        backgroundColor: "rgba(12,14,15, 0)",
        height: 50,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }
    )
  }
  else {
    return (
      {
        width: "100%",
        backgroundColor: "rgba(12,14,15, 0.8)",
        height: 50,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }
    )
  }
}


export function PageHeader(props) {
  return (
    <View style={{ width: "100%", height: 100, marginTop: 14, marginBottom: 14, display: "flex", flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
      <View style={{ width: "80%", backgroundColor: crimson, paddingTop: 20, paddingBottom: 20, paddingLeft: 7, paddingRight: 7, justifyContent: "space-around" }}>
        <Text style={{ color: "#f4f4f4", fontSize: 24 }}>{props.children}</Text>
      </View>
      <View style={{ width: 20, backgroundColor: crimson, paddingTop: 20, paddingBottom: 20, paddingLeft: 7, paddingRight: 7, marginLeft: 4, height: "100%", justifyContent: "space-around" }} />
      <View style={{ width: 10, backgroundColor: crimson, paddingTop: 20, paddingBottom: 20, paddingLeft: 7, paddingRight: 7, marginLeft: 4, height: "100%", justifyContent: "space-around" }} />
    </View>
  )
}

export class SectionContentHeader extends Component {

  static Title(props) {
    return <Text style={{ fontSize: 24, fontWeight: 500 }}>{props.children}</Text>
  }

  static Subtitle(props) {
    return <Text style={{ fontSize: 14, color: textSecondary }}>{props.children}</Text>
  }

  render() {
    return (
      <View style={{ paddingLeft: 14, paddingTop: 14, paddingBottom: 14, maxWidth: 700 }}>
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
    switch (props.color) {
      case "red":
        return <Image source={bubblePointRed} style={{ height: 20, width: 20, marginLeft: -10 }} />
      // case "white":
      //   return <Image source={bubblePointWhite} style={{ height: 20, width: 20, marginLeft: -10 }} />
      case "gray":
        return <Image source={bubblePointGray} style={{ height: 20, width: 20, marginLeft: -10 }} />
    }
  }

  function getBubbleColor() {
    switch (props.color) {
      case "red":
        return crimson;
      // case "white":
      //   return white;
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
        //...dropShadow,
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
          width: "96%",
          maxWidth: 700,
        }}
      >
        <Text
          style={{
            color: getTextColor(),
            // maxWidth: "90%",
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
    switch (props.color) {
      case "red":
        return <Image source={bubblePointRedLeft} style={{ height: 20, width: 20, }} />
      // case "white":
      //   return <Image source={bubblePointWhiteLeft} style={{ height: 20, width: 20 }} />
      case "gray":
        return <Image source={bubblePointGrayLeft} style={{ height: 20, width: 20 }} />
    }
  }

  function getBubbleColor() {
    switch (props.color) {
      case "red":
        return crimson;
      // case "white":
      //   return white;
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
        //...dropShadowLeft,
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
          justifyContent: "flex-start",
          width: "96%",
          maxWidth: 700,
          marginLeft: -10
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
    <View style={{ width: "100%", textAlign: "center", paddingTop: 14, paddingBottom: 14 }}>
      <Text style={{ fontWeight: "bold", fontSize: (props.fontSize ? props.fontSize : 24) }}>{props.children}</Text>
    </View>
  )
}

/**
 * Margined and styled body text with an optional background platform
 * @param {boolean} gray - whether to place body text on gray platform 
 * @param {boolean} red - whether to place body text on red platform 
 * @returns 
 */
export function BodyText(props) {

  // Get the right playform from props
  let Platform = TransparentPlatform;
  if (props.gray) { Platform = LightGrayPlatform; }
  if (props.red) { Platform = RedPlatform; }

  return (
    <View style={{ marginBottom: 7 }}>
      <Platform maxWidth={textBlockMaxWidth}>
        <Text style={{ textIndent: 28 }}>{props.children}</Text>
      </Platform>
    </View>
  )
}

export function GrayTextBeam(props) {
  return (
    <View style={{ width: "100%", display: "flex", alignItems: "flex-start", justifyContent: "center", backgroundColor: "#e4e4e4", textAlign: "left", marginBottom: 7, paddingTop: 7, paddingBottom: 7, paddingLeft: 14, paddingRight: 14 }}>
      <Text>{props.children}</Text>
    </View>
  )
}

export function RedTextBoxes(props) {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    box: {
      width: 250,
      height: 250,
      padding: 200,
    },
  });

  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'row',
          gap: 10,
          justifyContent: "space-around",
          //marginBottom: 80,
          paddingBottom: 10,
        },
      ]}>

      <View style={[styles.box, { backgroundColor: crimson, alignItems: "center", justifyContent: "space-around", backgroundColor: crimson, textAlign: "center", paddingTop: 7, paddingBottom: 7, paddingLeft: 14, paddingRight: 14 }]}>
        <Text style={{ fontWeight: "bold", fontSize: (props.fontSize ? props.fontSize : 24), color: "#ffffff" }}>{props.text[0]}</Text>
      </View>
      <View style={[styles.box, { backgroundColor: crimson, alignItems: "center", justifyContent: "space-around", backgroundColor: "#e4e4e4", textAlign: "center", paddingTop: 7, paddingBottom: 7, paddingLeft: 14, paddingRight: 14 }]}>
        <Text style={{ fontWeight: "bold", fontSize: (props.fontSize ? props.fontSize : 24), color: "#dc143c" }}>{props.text[1]}</Text>
      </View>
      <View style={[styles.box, { backgroundColor: crimson, alignItems: "center", justifyContent: "space-around", backgroundColor: crimson, textAlign: "center", paddingTop: 7, paddingBottom: 7, paddingLeft: 14, paddingRight: 14 }]}>
        <Text style={{ fontWeight: "bold", fontSize: (props.fontSize ? props.fontSize : 24), color: "#ffffff" }}>{props.text[2]}</Text>
      </View>
    </View>
  );

};
