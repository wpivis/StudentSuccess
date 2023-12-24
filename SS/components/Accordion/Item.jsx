import * as React from 'react';
import { StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import { crimson } from '../../assets/style';

const WPICrimson = "#AC2B37";

export function AccordionItem(props){
  return (
    <List.Item style={styles.item} title= {props.title} titleStyle={{ color: 'black' }} description={props.description}/>
  )
}

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