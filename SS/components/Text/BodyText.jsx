import { Text, View } from "react-native";
import { textBlockMaxWidth } from "../../assets/style";
import { LightGrayPlatform, RedPlatform, TransparentPlatform } from "../Layout";

/**
 * Margined and styled body text with an optional background platform
 * @param {boolean} gray - whether to place body text on gray platform 
 * @param {boolean} red - whether to place body text on red platform 
 * @returns 
 */
export function BodyText(props) {

  // Get the right playform from props
  let Platform = TransparentPlatform;
  if (props.gray) { Platform = LightGrayPlatform; }
  if (props.red) { Platform = RedPlatform; }

  return (
    <View style={{ marginBottom: 7, marginTop: 7 }}>
      <Platform maxWidth={textBlockMaxWidth}>
        <Text>{props.children}</Text>
      </Platform>
    </View>
  )
}