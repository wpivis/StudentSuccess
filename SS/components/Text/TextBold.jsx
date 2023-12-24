import { Text } from "react-native";

export function TextBold(props) {
  return (
    <Text style={{ fontWeight: 600 }}>{props.children}</Text>
  )

}