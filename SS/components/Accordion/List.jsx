import * as React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Linking } from 'react-native';
import { BodyText } from '../Text';



export function ListAccordion(props){
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
          renderItem={({ item }) => (
            <View style={{marginBottom:7}}>
              
              <BodyText>• {item.key}</BodyText>
                          
            </View>
          )}
        />
      </View>
    );
  }
};