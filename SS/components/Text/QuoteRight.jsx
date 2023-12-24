import { Text, View } from "react-native";

import { Image } from "expo-image";
import { crimson } from "../../assets/style";

const bubblePointRed = require("../../assets/icons/bubblePointRed.png");
const bubblePointWhite = require("../../assets/icons/bubblePointWhite.png");
const bubblePointGray = require("../../assets/icons/bubblePointGray.png");


export function QuoteRight(props) {

  function getPointImage() {
    switch (props.color) {
      case "red":
        return <Image source={bubblePointRed} style={{ height: 20, width: 20, marginLeft: -10 }} />
      case "white":
        return <Image source={bubblePointWhite} style={{ height: 20, width: 20, marginLeft: -10 }} />
      case "gray":
        return <Image source={bubblePointGray} style={{ height: 20, width: 20, marginLeft: -10 }} />
    }
  }

  function getBubbleColor() {
    switch (props.color) {
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