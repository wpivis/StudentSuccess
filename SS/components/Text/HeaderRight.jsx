import { Text, View } from "react-native";
import { crimson } from "../../assets/style";


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
        <Text style={{ color: crimson, fontSize: 20, fontWeight: "bold" }}>
          {props.children}
        </Text>
      </View>
    </View>
  )
}