import { View } from "react-native";
import {Image} from "expo-image"

export function ImageContainer(props) {
  return (
    <View style={{width: "100%", maxHeight: 400, minHeight: 200, display: "flex", padding: (!props.noMargin ? 14 : 0), flexDirection: "column"}}>
      <Image source={props.imageSource} style={{height: "100%", width: "100%", objectFit: "cover"}}/>
    </View>
  )
}