import { Text, View, Image } from "react-native";
import { crimson, textSecondary } from "../assets/style";
import { Component } from "react";


export function HeaderRight(props) {
  return (
    <View 
      style={{
        display: "flex", 
        alignItems: "center",
        flexDirection: "row", 
        width: "100%", 
        justifyContent: "center",
        paddingRight: "2rem", 
        paddingLeft: "1rem", 
        height: 32,
        marginTop: "1rem",
      }}
    >
      <View style={{height: 0, width: "100%", display: "flex",  border: `2px dashed ${crimson}`}} />
      <View style={{display: "flex", width: "fit-content", paddingHorizontal: "1rem", backgroundColor: "white", position: "absolute", top:"center", right: 0  }}>
        <Text style={{color: crimson, fontSize: 24, fontWeight: "semibold"}}>
          {props.children}
        </Text>
      </View>
    </View>
  )
}


export function BracketedText(props) {
  return (
    <View 
      style={{
        display: "flex", 
        alignItems: "center",
        flexDirection: "row", 
        justifyContent: "space-between",
        width: "100%", 
        paddingHorizontal: "1rem",
        marginTop: "1rem",
      }}
    >
      <View 
        style={{
          height: "100%",  
          flex: 1, 
          maxWidth: "2rem",
          borderTopWidth: "2px", 
          borderBottomWidth: "2px",
          borderLeftWidth: "2px",
          borderTopColor: crimson,
          borderBottomColor: crimson,
          borderLeftColor: crimson,
        }}
      />
      <View style={{height: "100%", paddingVertical: "2rem", flex: 10, textAlign:"center"}}>
        <Text>{props.children}</Text>
      </View>
      <View 
        style={{
          height: "100%", 
          flex: 1,
          maxWidth: "2rem",
          borderTopWidth: "2px", 
          borderBottomWidth: "2px",
          borderRightWidth: "2px",
          borderTopColor: crimson,
          borderBottomColor: crimson,
          borderRightColor: crimson,
        }}
      />
    </View>
  )
}

export function ImageHeader(props) {
  return (
    <View style={{width: "100%", height: 200, filter: "drop-shadow(1px 1px 5px black)"}}>
      <Image source={props.image} style={{width: "100%", height: 200, objectFit: "cover"}}/>
      <View 
        style={{
          width:"100%", 
          backgroundColor: "rgba(12,14,15, 0.8)", 
          height: 50, 
          top: 150, 
          left: 0, 
          position: "absolute", 
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{color:"#f4f4f4", fontSize: 24}}>{props.children}</Text>
      </View>
    </View>
  )
}


export function PageHeader(props) {
  return (
    <View style={{width: "100%", height: 100, marginVertical: "1rem"}}>
      <View style={{width: "80%", backgroundColor: crimson, paddingVertical: "1.5rem", paddingHorizontal: ".5rem"}}>      
        <Text style={{color:"#f4f4f4", fontSize: 24}}>{props.children}</Text>
      </View>
    </View>
  )
}

export class SectionContentHeader extends Component {

  static Title(props) {
    return <Text style={{fontSize: 24, fontWeight: 500}}>{props.children}</Text>
  }

  static Subtitle(props) {
    return <Text style={{fontSize: 14, color: textSecondary}}>{props.children}</Text>
  }
  
  render() {
    return (
      <View style={{paddingLeft: ".5rem", paddingVertical: ".5rem"}}>
        {this.props.children}
      </View>
    )
  }
}

const quoteStyle = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  alignItems: "center",
  paddingVertical: "1rem",
  paddingHorizontal: "0.5rem",
}

export function QuoteRight(props) {

  function getPointImage() {
    switch(props.color) {
      case "red":
        return require("../assets/images/bubblePointRed.png");
      case "white":
        return require("../assets/images/bubblePointWhite.png");
      case "gray":
        return require("../assets/images/bubblePointGray.png");
    }
  }

  function getBubbleColor() {
    switch(props.color) {
      case "red":
        return crimson;
      case "white":
        return "white";
      case "gray":
        return "#e4e4e4";
    }
  }

  function getTextColor() {
    if (props.color === "red") {
      return "#ffffff";
    }
    return null;
  }

  return (
    <View 
      style={{
        ...quoteStyle,
        justifyContent: "flex-end",
        filter: "drop-shadow(-1px 1px 5px rgba(0,0,0,0.5)",
      }}
    >
      <View 
        style={{
          paddingHorizontal: "1rem", 
          paddingVertical: "2rem", 
          backgroundColor: getBubbleColor(), 
          borderRadius: "1rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          width: "100%",
          maxWidth: 700,   
        }}
      >
        <Text 
          style={{
            color: getTextColor()
          }}
        >
          {props.children}
        </Text>
      </View>
      <Image source={getPointImage()} style={{height: 20, width: 20, marginLeft: -10}}/>
    </View>
  )
}


export function QuoteLeft(props) {

  function getPointImage() {
    switch(props.color) {
      case "red":
        return require("../assets/images/bubblePointRed.png");
      case "white":
        return require("../assets/images/bubblePointWhite.png");
      case "gray":
        return require("../assets/images/bubblePointGray.png");
    }
  }

  function getBubbleColor() {
    switch(props.color) {
      case "red":
        return crimson;
      case "white":
        return "white";
      case "gray":
        return "#e4e4e4";
    }
  }

  function getTextColor() {
    if (props.color === "red") {
      return "#ffffff";
    }
    return null;
  }

  return (
    <View 
      style={{
        ...quoteStyle,
        justifyContent: "flex-start",
        filter: "drop-shadow(-1px 1px 5px rgba(0,0,0,0.5)",
      }}
    >
      <Image source={getPointImage()} style={{height: 20, width: 20, marginRight: -10, transform: "rotate(-180deg)"}}/>
      <View 
        style={{
          paddingHorizontal: "1rem", 
          paddingVertical: "2rem", 
          backgroundColor: getBubbleColor(), 
          borderRadius: "1rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          width: "100%",
          maxWidth: 700,   
        }}
      >
        <Text 
          style={{
            color: getTextColor(),
          }}
        >
          {props.children}
        </Text>
      </View>
    </View>
  )
}

export function CenteredTitle(props) {
  return (
    <View style={{width: "100%", textAlign: "center", paddingVertical: "1rem", paddingHorizontal: "1rem"}}>
      <Text style={{fontWeight: "bold", fontSize: 24}}>{props.children}</Text>
    </View>
  )
}

export function BodyText(props){
  return (
    <View style={{width: "100%", textAlign: "left", paddingVertical: "0.5rem", paddingHorizontal: "1rem"}}>
      <Text style={{fontWeight: "400", fontSize: 20, }}>{props.children}</Text>
    </View>
  )
}

export function GreayTextBeam(props) {
  return (
    <View style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#e4e4e4", textAlign:"center", marginBottom: "0.5rem", paddingVertical: "0.5rem", paddingHorizontal: "10%"}}>
      <Text>{props.children}</Text>
    </View>
  )
}