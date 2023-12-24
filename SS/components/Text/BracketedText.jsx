import { Text, View } from "react-native";
import { crimson } from "../../assets/style";

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