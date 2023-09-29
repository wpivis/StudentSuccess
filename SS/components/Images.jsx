import { View, Dimensions } from "react-native";
import {Image} from "expo-image"
import Carousel from 'react-native-reanimated-carousel';
import { ImageHeader } from "./Text";

export function ImageContainer(props) {
  return (
    <View style={{width: "100%", maxHeight: 400, minHeight: 200, display: "flex", padding: (!props.noMargin ? 14 : 0), flexDirection: "column"}}>
      <Image source={props.imageSource} style={{height: "100%", width: "100%", objectFit: "cover"}}/>
    </View>
  )
}

export function ImageCarousel(props){
  const width = Dimensions.get('window').width;
  const carouselWidth = width > 800 ? 800 : width;
  const carouselHeight = 200;
  return(
  <View style={{ flex: 1, backgroundColor: "#f4f4f4",}}>
                <Carousel
                  loop
                  width={carouselWidth}
                  data={props.data}
                  height={carouselHeight}
                  autoPlay
                  autoPlayInterval={4000}
                  scrollAnimationDuration={1000}
                  renderItem={({ index }) => (
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'flex-start',
                      }}
                    >
                      <ImageHeader image={props.data[index].image}>{props.data[index].text}</ImageHeader>
                    </View>
                  )}
                />
              </View>  
              )
}