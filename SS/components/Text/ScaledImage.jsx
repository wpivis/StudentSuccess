import { View, StyleSheet, Dimensions } from "react-native";
import { Image } from "expo-image";

export function ScaledImage(props) {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    }
  });

  const win_width = Dimensions.get('window').width;

  const width = Math.min(win_width * 0.8, 800 * 0.9)
  return (

    <View
      style={[
        styles.container,
        {
          flexDirection: 'row',
          width: "100%",
          gap: 10,
          justifyContent: "space-around",
          //marginBottom: 80,
          paddingBottom: 100,
        },
      ]}>
      <Image source={props.img} style={{
        width: width,
        height: width / 1.7,
        // paddingBottom: 100,
      }} /></View>);


}