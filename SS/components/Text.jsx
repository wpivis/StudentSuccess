import { Text, View } from "react-native";
import { crimson } from "../assets/style";


export function HeaderRight(props) {
  return (
    <View 
      style={{
        display: "flex", 
        alignItems: "center",
        flexDirection: "row", 
        width: "100%", 
        paddingHorizontal: "2rem", 
        height: 32
      }}
    >
      <View style={{height: 0, width: "100%", display: "flex",  border: `2px dashed ${crimson}`}} />
      <View style={{display: "flex", width: "fit-content", paddingHorizontal: "1rem", backgroundColor: "white", position: "absolute", top:"center", right: 0  }}>
        <Text style={{color: crimson, fontSize: 24, fontWeight: "semibold"}}>
          {props.children}
        </Text>
      </View>
    </View>
  )
}