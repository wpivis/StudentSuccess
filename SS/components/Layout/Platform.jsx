import { Text, View } from "react-native";
import { crimson } from "../../assets/style";

export function TransparentPlatform(props) {
  return (
    <View 
      style={{
        backgroundColor: props.backgroundColor ? props.backgroundColor : null, 
        width: "100%", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center",
        filter: props.backgroundColor && "drop-shadow(1px 1px 5px rgba(0,0,0,0.5)",
        paddingLeft: !props.noPadding ? 14 : 0,
        paddingRight: !props.noPadding ? 14 : 0,
        paddingTop: 7,
        paddingBottom: 7,
      }}
    >
      <View style={{width: "100%", maxWidth: props.maxWidth}}>
        {props.children}
      </View>
    </View>
  )
}

export function LightGrayPlatform(props) {
  return <TransparentPlatform maxWidth={props.maxWidth} backgroundColor={"#E4E4E4"} noPadding={props.noPadding}>{props.children}</TransparentPlatform>
}

export function RedPlatform(props) {
  return <TransparentPlatform maxWidth={props.maxWidth} backgroundColor={crimson} noPadding={props.noPadding}>{props.children}</TransparentPlatform>
}

export function HeaderSubtitle(props) {
  return <RedPlatform><Text style={{color: "white", fontSize: 16, lineHeight:22}}>{props.children}</Text></RedPlatform>
}