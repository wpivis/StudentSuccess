import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import { DirectoryEntry } from './Directory';

const WPICrimson = "#AC2B37";
const WPIGray = '#A9B0B7';

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

export function AccordionItem(props){
  return (
    <List.Item style={styles.item} title= {props.title} titleStyle={{ color: 'black' }} />
  )
}

export function AccordionLink(props){
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      <List.Item style={styles.item} title={props.title} titleStyle={{ color: 'blue' }} />
    </a>
  )
}

const styles = StyleSheet.create({
  heading: {
    backgroundColor: WPICrimson,
    paddingBottom: 5,
  },
  item: {
    backgroundColor: WPIGray,
  },
});
