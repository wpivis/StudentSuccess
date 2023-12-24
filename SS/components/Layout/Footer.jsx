import { Text, View } from "react-native";
import {Image} from "expo-image";
const tower = require("../../assets/icons/tower.png");



export function Footer() {
  return (
    <View style={{height: 110, width: "100%", backgroundColor: "#1F2327", marginTop: 14, display: "flex", flexDirection: "row", alignItems: "flex-end"}}>
      <View style={{paddingLeft: 7, paddingRight: 7, paddingTop: 14, paddingBottom: 14, height: "100%", flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start"}}>
        <View>
          <Text style={{fontSize: 16, color: "white"}}>WPI Student Success Handbook</Text>
          <Text style={{fontSize: 12, color: "white"}}>Submit feedback <a style={{fontSize:12, color:'white'}} href="https://wpi.qualtrics.com/jfe/form/SV_8AoAFLceG5ZVPeK">here</a></Text>
        </View>
      </View>
      <Image source={tower} style={{width: 100, height: 100}}/>
    </View>
  )
}