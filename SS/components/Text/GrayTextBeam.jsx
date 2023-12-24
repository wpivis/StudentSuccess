import { Text, View } from "react-native";

export function GrayTextBeam(props) {
  return (
    <View style={{ width: "100%", display: "flex", alignItems: "flex-start", justifyContent: "center", backgroundColor: "#e4e4e4", textAlign: "left", marginBottom: 7, paddingTop: 7, paddingBottom: 7, paddingLeft: 14, paddingRight: 14 }}>
      <Text>{props.children}</Text>
    </View>
  )
}