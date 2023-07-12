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
      fontSize: "2rem",
      marginBottom: "1rem"
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
         fontSize: "1.5rem",
         marginBottom: "0.5rem",
         marginHorizontal: "1rem",
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
        fontSize: "1.25rem",
        marginBottom: "1rem",
        marginHorizontal: "1rem",
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
        fontSize: "1rem",
        marginBottom: "1rem",
        marginHorizontal: "1rem",
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
        fontSize: "1rem",
        marginHorizontal: "1rem"
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
          fontSize: "1rem",
          textDecorationLine: 'underline',
          marginHorizontal: "1rem",
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
        fontSize: "1.4rem",
        marginHorizontal: "1.2rem",
      }}
    >
      {'\u2022'} {text}
    </Text>
   )
}