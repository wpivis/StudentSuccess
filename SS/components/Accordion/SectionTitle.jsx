import * as React from 'react';

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