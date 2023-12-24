import { Text, View, StyleSheet, Dimensions } from "react-native";
import { crimson } from "../../assets/style";

export function RedTextBoxes(props) {

  const width = Dimensions.get('window').width;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
    },
    box: {
      width: width * 0.25,
      //height: window.screen.width * 0.3,
      maxWidth: 800 * 0.3,
      height: width * 0.25,
      maxHeight: 800 * 0.3,
    },
  });

  const bg1 = 0;
  const txt1 = 1;
  const bg2 = 2;
  const txt2 = 3;

  function getColors() {
    if (props.type == 1) {
      return [crimson, "#ffffff", "#e4e4e4", crimson]
    } else if (props.type == 2) {
      return ["#e4e4e4", crimson, crimson, "#ffffff"]
    }
  }

  const fontSize = Math.min(styles.box.width * 0.16, 800 * 0.3 * 0.16)

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'row',
          width: "100%",
          gap: 10,
          justifyContent: "space-around",
        },
      ]}>

      <View style={[styles.box, { alignItems: "center", justifyContent: "space-around", backgroundColor: getColors()[bg1], textAlign: "center", paddingBottom: 7, paddingLeft: 14, paddingRight: 14 }]}>
        <Text style={{ fontWeight: "bold", fontSize: (props.fontSize ? props.fontSize : fontSize), color: getColors()[txt1] }}>{props.text[0]}</Text>
      </View>
      <View style={[styles.box, { alignItems: "center", justifyContent: "space-around", backgroundColor: getColors()[bg2], textAlign: "center", paddingBottom: 7, paddingLeft: 14, paddingRight: 14 }]}>
        <Text style={{ fontWeight: "bold", fontSize: (props.fontSize ? props.fontSize : fontSize), color: getColors()[txt2] }}>{props.text[1]}</Text>
      </View>
      <View style={[styles.box, { alignItems: "center", justifyContent: "space-around", backgroundColor: getColors()[bg1], textAlign: "center", paddingBottom: 7, paddingLeft: 14, paddingRight: 14 }]}>
        <Text style={{ fontWeight: "bold", fontSize: (props.fontSize ? props.fontSize : fontSize), color: getColors()[txt1] }}>{props.text[2]}</Text>
      </View>
    </View >
  );

};