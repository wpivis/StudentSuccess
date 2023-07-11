import { Text } from "react-native";

const WPICrimson = "#AC2B37";
const WPIGray = '#A9B0B7';

export function Header1({text}) {
 return (
  <Text 
    style={{
      color: WPICrimson, 
      fontSize: "2rem",
      marginBottom: "1rem"
    }}
  >
    {text}
  </Text>
 )
}

export function Header2({text}) {
    return (
     <Text 
       style={{
         color: WPICrimson, 
         fontSize: "1.75rem",
         marginBottom: "1rem",
         textAlignVertical: 'center', // Aligns the text vertically in the center
         flex: 1
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
        fontSize: "2rem",
        marginBottom: "1rem"
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
        marginBottom: "1rem"
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
        fontSize: "1rem"
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
  return (
    <Text 
      style={{
        color: 'black', 
        fontSize: "1rem"
      }}
    >
      {text}
    </Text>
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
        color: 'black', 
        fontSize: "1rem"
      }}
    >
      {text}
    </Text>
   )

}