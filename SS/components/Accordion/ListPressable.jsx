import * as React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Linking } from 'react-native';
import { Image } from "expo-image"
import { crimson } from '../../assets/style';

export function ListPressableAccordion(props){
  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };
  if(props.bulleted){
    return (
      <View>
        <FlatList
          data={props.data}
          renderItem={({ item }) => (
              <TouchableOpacity onPress={() => item.href ? handleLinkPress(item.href): null}>
            <View style={{paddingTop:0,marginVertical:0, borderWidth: item.href ? 2:0, borderColor:crimson, borderRadius:6, flexDirection: 'row', alignItems: 'center', justifyContent:"space-between", maxWidth:250}}>
              <Text style={{color: crimson, fontSize: 16, paddingLeft:10, paddingRight:0, paddingVertical: 6, maxWidth:250 }}>• {item.key}</Text>
              {item.href && (
                  <Image source={externalLink} style={{width: 14, height: 14, marginRight:6}} />
                  )}
            </View>
             </TouchableOpacity>
          )}
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
              <TouchableOpacity onPress={() => item.href ? handleLinkPress(item.href): null}>
            <View style={{paddingTop:0,marginVertical:0, borderWidth: item.href ? 2:0, borderColor:crimson, borderRadius:6, flexDirection: 'row', alignItems: 'center', justifyContent:"space-between", maxWidth:250}}>
              <Text style={{color: crimson, fontSize: 16, paddingLeft:10, paddingRight:0, paddingVertical: 6, maxWidth:250 }}>{item.key}</Text>
              {item.href && (
                  <Image source={externalLink} style={{width: 14, height: 14, marginRight:6}} />
                  )}
            </View>
             </TouchableOpacity>
          )}
        />
      </View>
    );
  }
};