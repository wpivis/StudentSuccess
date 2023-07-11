import { Text } from "react-native";

const WPICrimson = "#AC2B37";

export function Header1({text}) {
 return (
  <Text 
    style={{
      color: WPICrimson, 
      fontSize: "4rem"
    }}
  >
    {text}
  </Text>
 )
}

export function Header2({text}) {
  
}

export function Header3({text}) {

}

export function Header4({text}) {

}

export function Paragraph({text}) {

}

/**
 * Text that sends the user somewhere
 * @param {} param0 
 */
export function Anchor({text, href}) {

}

/**
 * Text with a little bullet in front of it
 * @param {} param0 
 */
export function ListItem({text}) {

}