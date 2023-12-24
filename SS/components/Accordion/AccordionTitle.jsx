import * as React from 'react';
import { View, Text, } from 'react-native';
import { Image } from "expo-image"
import { crimson } from '../../assets/style';
import { Pressable, StyleSheet } from 'react-native';

const arrow = require("../../assets/icons/arrow.png")
const arrowDown = require("../../assets/icons/arrowDown.png")

const WPICrimson = "#AC2B37";

/* Main bar for an Accordion */
export function AccordionTitle ({title, isExpanded, children}) {
  const [expanded, setExpanded] = React.useState(isExpanded);
  const handlePress = () => setExpanded(!expanded);

  const childElements = React.Children.map(children, child => {
    return <React.Fragment>{child}</React.Fragment>;
  });
  return ( 
    <>
  <Pressable onPress={handlePress}>
      <View style = {{ transform: [{rotateY: 20}],height:44, flexDirection:'row', alignItems:'center', justifyContent:'space-between', backgroundColor:crimson, paddingHorizontal:20}} title= {title}>
      <Text style={styles.heading}>{title}</Text>
      {expanded && <Image style={{ height:14, width:14}} source={arrowDown}/>}
      {!expanded && <Image style={{ height:14, width:14}} source={arrow}/>}
      
      </View>
  </Pressable>
    <View>
      {expanded && childElements}
    </View>
    </>
  )
};

const styles = StyleSheet.create({
  heading: {
    backgroundColor: WPICrimson,
    paddingBottom: 5,
    color: "white",
    fontSize:16
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: crimson,
    borderBottomStyle: "solid",
  },
});