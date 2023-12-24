import { View, Text } from "react-native";
import { crimson } from "../../assets/style";

export function DirectoryEntry(props){
  return (
    <View style={{borderBottomWidth: 1,borderBottomColor:crimson,paddingVertical:10, paddingHorizontal:20}}>
      <a href={props.href}><DirectoryTitle>{props.DirectoryTitle}</DirectoryTitle></a> 
      <View style={{display: "flex",flexDirection:"row"}}>
      <DisplayDescription Address={props.Address} Phone={props.Phone}/>
      </View>
    </View>
    )
}

function DirectoryTitle(props){
  return(
    <Text style={{fontWeight: 450}}>{props.children}</Text>
  )
}

function Address(props){
  return(
    <Text>{props.children}</Text>
  )
}

function Phone(props){
  return(
    <Text>{props.children}</Text>
  )
}

function DisplayDescription(props){
  if(props.Address && props.Phone){
    return(
      <>
      <Phone>{props.Phone}</Phone>
        <Text> | </Text>
        <Address>{props.Address}</Address>
      </>
    )
  }
  if(props.Phone){
    return(
      <>
      <Phone>{props.Phone}</Phone>
      </>
    )
  }
  else{
    return(
      null
      )
  }
}