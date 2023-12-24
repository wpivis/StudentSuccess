import * as React from 'react';
import { View} from 'react-native';
import { crimson } from '../../assets/style';

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