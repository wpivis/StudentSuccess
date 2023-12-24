import { Text, View } from "react-native";
import { Image } from "expo-image";
import { dropShadowDark } from "../../assets/style";

import { useFonts } from 'expo-font';

export function ImageHeader(props) {
  const [fontsLoaded] = useFonts({
    'BebasNeue': require('../../assets/fonts/BebasNeue-Regular.ttf'),
    'FjallaOne': require('../../assets/fonts/FjallaOne-Regular.ttf'),
  });
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
          <Text style={{ color: "#f4f4f4", fontSize: 26, fontFamily: 'BebasNeue', lineHeight: 30}}>{props.children}</Text>
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
        height: "100%",
        backgroundColor: "rgba(12,14,15, 0)",
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
        height: "100%",
        backgroundColor: "rgba(12,14,15, 0.7)",
        padding: 14,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }
    )
  }
}