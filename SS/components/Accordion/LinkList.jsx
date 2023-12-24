import * as React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Linking } from 'react-native';
import { crimson } from '../../assets/style';



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