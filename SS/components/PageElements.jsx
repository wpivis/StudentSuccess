import { useCallback } from "react";
import { Text, View, Linking, Pressable } from "react-native";

const WPICrimson = "#AC2B37";
const WPIGray = '#A9B0B7';

export function Header1({text}) {
 return (
  <View style = {{ alignItems: 'center' }}>
  <Text 
    style={{
      color: WPICrimson, 
      fontSize: 28,
      marginBottom: 14
    }}
  >
    {text}
  </Text>
  </View>
 )
}

export function Header2({text}) {
    return (
     <Text 
       style={{
         color: WPICrimson, 
         fontSize: 20,
         marginBottom: 7,
         marginTop: 14,
         marginBottom: 14,
         textAlign: 'left'
       }}
     >
       {text}
     </Text>
    )
   }

export function Header3({text}) {
  return (
    <Text 
      style={{
        color: WPICrimson, 
        fontSize: 16,
        marginBottom: 14,
        marginTop: 14,
        marginBottom: 14,
      }}
    >
      {text}
    </Text>
   )
}

export function Header4({text}) {
  return (
    <Text 
      style={{
        color: WPICrimson, 
        fontSize: 14,
        marginBottom: 14,
        marginTop: 14,
        marginBottom: 14,
      }}
    >
      {text}
    </Text>
   )
}

export function Paragraph({text}) {
  return (
    <Text 
      style={{
        color: 'black', 
        fontSize: 14,
        marginTop: 14,
        marginBottom: 14,
      }}
    >
      {text}
    </Text>
   )
}

/**
 * Text that sends the user somewhere
 * @param {} param0 
 */
export function Anchor({href,text}) {
  
  const handleClick = useCallback(async () => {
    const supported = await Linking.canOpenURL(href);
    if (supported) {
      await Linking.openURL(href);
    } else {
      Alert.alert(`Don't know how to open this URL: ${href}`);
    }
  }, [href]);

  return (
    <Pressable onPress={handleClick}>
      <Text 
        style={{
          color: 'blue', 
          fontSize: 14,
          textDecorationLine: 'underline',
          marginTop: 14,
          marginBottom: 14,
        }}
      >
        {text}
      </Text>
    </Pressable>
   )
}

/**
 * Text with a little bullet in front of it
 * @param {} param0 
 */
export function ListItem({text}) {
  return (
    <Text 
      style={{
        fontSize: 20,
        marginLeft: 8, 
        marginRight: 8,
      }}
    >
      {'\u2022'} {text}
    </Text>
   )
}