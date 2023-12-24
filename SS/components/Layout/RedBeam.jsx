import { Text, View } from "react-native";
import { crimson, dropShadow } from "../../assets/style";

export function RedBeam({title, text}) {
  return (
    <View style={{...dropShadow, paddingBottom: 14, paddingHoizontal: 42, width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <View style={{backgroundColor: crimson, width: "100%", paddingTop: 14, paddingBottom: 14, display: "flex", flexDirection: "column", alignItems:"center", justifyContent:"center"}}>
        <Text style={{color: "white", fontSize: 20}}>{title}</Text>
        <View style={{marginTop: 7, marginBottom: 7, borderRadius: 1, height: 2, width: "70%", backgroundColor: "white"}}/>
        <Text style={{textAlign: "center", width: "80%", color: "white"}}>{text}</Text>
      </View>
    </View>
  )
}