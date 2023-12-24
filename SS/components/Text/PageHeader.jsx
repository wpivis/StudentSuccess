import { Text, View } from "react-native";
import { crimson } from "../../assets/style";

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