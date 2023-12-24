import { View, Text, Pressable, Linking, Alert } from 'react-native'
import React, {useCallback} from 'react'
import { crimson, textSecondary } from '../../assets/style'

export const rippleRed = {color: crimson} 
export const rippleGray = {color: textSecondary} 

export function ButtonCentered(props) {

  const href = props.href ? props.href : null;
  
  const handleClick = useCallback(async () => {
    if (href) {
      const supported = await Linking.canOpenURL(href);
      if (supported) {
        await Linking.openURL(href);
      } else {
        Alert.alert(`Don't know how to open this URL: ${href}`);
      }
    }
  }, [href]);

  
  return (
    <View 
      style={{
        display: "flex", 
        flexDirection: "row", 
        width: "100%", 
        alignItems: "center",
        justifyContent: "center",
        marginTop: 14,
      }}
    >
      <Pressable 
        onPress={props.href ? handleClick : props.onClick} 
        style={{
          display: "flex", 
          width: "100%", 
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 2,
          borderRadius: 6,
          borderColor: '#9f353c',
          backgroundColor: '#9f353c',
          width: "90%",
          maxWidth: 400,
          padding: 10,
        }}
        android_ripple={rippleRed}
      >
        <View style={{paddingRight: 14}}>
          <Text style={{width: "100%", color: 'white', fontWeight: "500"}}>{props.children}</Text>
        </View>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
</svg>
      </Pressable>
    </View>
  )
}