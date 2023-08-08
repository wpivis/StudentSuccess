import * as React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Linking } from 'react-native';
import { Image } from "expo-image"
import { List } from 'react-native-paper';
import { DirectoryEntry } from './Directory';
import { crimson } from '../assets/style';

const WPICrimson = "#AC2B37";
const WPIGray = '#A9B0B7';
const externalLink = require("../assets/externalLink.png")

export function AccordionTitle ({title, isExpanded, children}) {
  const [expanded, setExpanded] = React.useState(isExpanded);
  const handlePress = () => setExpanded(!expanded);

  const childElements = React.Children.map(children, child => {
    return <React.Fragment>{child}</React.Fragment>;
  });
  return ( <View>
  <List.Accordion titleStyle={{ color: 'white' }} style = {styles.heading} title= {title} expanded={expanded} onPress={handlePress}>
    {childElements}
  </List.Accordion>
</View>
  )
};

export function ListSectionAccordion({children}){
  
  const childElements = React.Children.map(children, child => {
    return <React.Fragment>{child}</React.Fragment>;
  });

  return(
    <View style={{borderBottomWidth: 1,borderBottomColor:crimson,paddingVertical:10, paddingHorizontal:20}}>
      {childElements}
    </View>
  )
} 
export function SectionTitleAccordion(props){
  if(props.href === undefined){
    return(
      <a style={{fontSize:18, paddingBottom:6}} href={props.href}>{props.children}</a>
      )
  }
  else{
    return(
      <a style={{color:'black',fontSize:18,paddingBottom:6}} href={props.href}>{props.children}</a>
      )
  }
  
}

export function ListAccordion(props){
  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };
  if(props.notBulleted){
    return (
      <View>
        <FlatList
          data={props.data}
          renderItem={({item}) => <Text style={{fontSize:16, paddingLeft:10,paddingBottom:6}}>{item.key}</Text>}
        />
      </View>
    );
  }
  else{
    return (
      <View>
        <FlatList
          data={props.data}
          // renderItem={({item}) => <Text style={{fontSize:16, paddingLeft:10,paddingBottom:6}}>• {item.key}</Text>}
          renderItem={({ item }) => (
              <TouchableOpacity onPress={() => item.href ? handleLinkPress(item.href): null}>
            <View style={{paddingTop:4,marginVertical:0, borderWidth: item.href ? 2:0, borderColor:crimson, borderRadius:6, flexDirection: 'row', alignItems: 'center', justifyContent:"space-between", maxWidth:500}}>
              <Text style={{ flex:1, color: crimson, fontSize: 16, paddingLeft:10, paddingRight:0, paddingBottom: 6 }}>{item.key}</Text>
              {item.href && (
                  <Image source={externalLink} style={{ width: 14, height: 14, marginRight:6}} />
                  )}
            </View>
             </TouchableOpacity>
          )}
        />
      </View>
    );
  }
};


export function LinkListAccordion(props){
  
    return (
      <View>
        <FlatList
          data={props.data}
          renderItem={({item}) => <Text style={{fontSize:16, paddingLeft:10, paddingBottom:10}}><a style={{color:crimson}} href={item.href}>{item.key}</a></Text>}
        />
      </View>
    );
};


export function AccordionItem(props){
  return (
    <List.Item style={styles.item} title= {props.title} titleStyle={{ color: 'black' }} description={props.description}/>
  )
}

export function AccordionLink(props){
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      <List.Item style={styles.item} title={props.title} titleStyle={{ color: 'blue' }} description={props.description}/>
    </a>
  )
}

const styles = StyleSheet.create({
  heading: {
    backgroundColor: WPICrimson,
    paddingBottom: 5,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: crimson,
    borderBottomStyle: "solid",
  },
});
