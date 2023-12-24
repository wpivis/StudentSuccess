import { Text, View } from "react-native";
import { textSecondary } from "../../assets/style";
import { Component } from "react";

export class SectionContentHeader extends Component {

  static Title(props) {
    return <Text style={{ fontSize: 24, fontWeight: 500 }}>{props.children}</Text>
  }

  static Subtitle(props) {
    return <Text style={{ fontSize: 14, color: textSecondary }}>{props.children}</Text>
  }

  render() {
    return (
      <View style={{ paddingLeft: 14, paddingTop: 14, paddingBottom: 14, maxWidth: 700 }}>
        {this.props.children}
      </View>
    )
  }
}