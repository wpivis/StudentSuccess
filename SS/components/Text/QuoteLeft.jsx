import { Text, View } from "react-native";

import { Image } from "expo-image";
import { crimson } from "../../assets/style";

const bubblePointRedLeft = require("../../assets/icons/bubblePointRedLeft.png");
const bubblePointWhiteLeft = require("../../assets/icons/bubblePointWhiteLeft.png");
const bubblePointGrayLeft = require("../../assets/icons/bubblePointGrayLeft.png");

export function QuoteLeft(props) {

  function getPointImage() {
    switch (props.color) {
      case "red":
        return <Image source={bubblePointRedLeft} style={{ height: 20, width: 20, }} />
      case "white":
        return <Image source={bubblePointWhiteLeft} style={{ height: 20, width: 20 }} />
      case "gray":
        return <Image source={bubblePointGrayLeft} style={{ height: 20, width: 20 }} />
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