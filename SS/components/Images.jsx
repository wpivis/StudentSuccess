import { Image, View } from "react-native";


export function ImageContainer(props) {
  return (
    <View style={{width: "100%", height: "50vw", maxHeight: 400, minHeight: 200, display: "flex", padding: (!props.noMargin && "1rem"), flexDirection: "column"}}>
      <Image source={props.imageSource} style={{height: "100%", width: "100%", objectFit: "cover"}}/>
    </View>
  )
}