import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper';


const WPICrimson = "#AC2B37";
const WPIGray = '#A9B0B7';

const accordionStyle = {
  backgroundColor: WPICrimson,
}
const accordionItemStyle = {
  backgroundColor: WPICrimson,
}
List.Item.style = {accordionItemStyle};



export function AccordionList (props) {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

  const {name, items} = props.content;
  return (
    <View>
      <List.Accordion titleStyle={{ color: 'white' }} style = {styles.heading}
        title= {name}>
        {/* create list items */}
        {items.map((description) => {
        return accordionItem(description);
        })}

      </List.Accordion>
    </View>
  )
}

function accordionItem(description){
  return(
<List.Item style={styles.item} title= {description} titleStyle={{ color: 'black' }} />
  )
}

const styles = StyleSheet.create({
  heading: {
    backgroundColor: WPICrimson,
  },
  item: {
    backgroundColor: WPIGray,
  },
});

//create function to load accordion
//props is an array of accordion sections
export function renderAccordion (props){
  const accordionArray = props.content;
  console.log(accordionArray);
}
  // render each accordion section
  function renderAccordionSection(section){

  }
     //render title
     //render items