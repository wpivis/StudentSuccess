import { View } from "react-native";

export function ContentSection(props) {
  return (
    <View style={{paddingTop: 28, paddingBottom: 28}}>
      {props.children}
    </View>
  )
}