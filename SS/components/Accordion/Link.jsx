import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Image } from "expo-image"
import { List } from 'react-native-paper';
import { crimson } from '../../assets/style';

const WPICrimson = "#AC2B37";

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
    color: "white",
    fontSize:16
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: crimson,
    borderBottomStyle: "solid",
  },
});