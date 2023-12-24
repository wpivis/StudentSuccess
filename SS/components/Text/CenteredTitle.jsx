import { Text, View } from "react-native";
import { useFonts } from 'expo-font';

export function CenteredTitle(props) {
  const [fontsLoaded] = useFonts({
    
    'BebasNeue': require('../../assets/fonts/BebasNeue-Regular.ttf'),
    'FjallaOne': require('../../assets/fonts/FjallaOne-Regular.ttf'),
  });
  return (
    <View style={{ width: "100%", textAlign: "center", paddingTop: 14, paddingBottom: 14 }}>
      <Text style={{ fontWeight: "550", fontSize: (props.fontSize ? props.fontSize : 24), fontFamily: 'BebasNeue' }}>{props.children}</Text>
    </View>
  )
}