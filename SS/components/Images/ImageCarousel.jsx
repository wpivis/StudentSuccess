import { View, Dimensions } from "react-native";
import Carousel from 'react-native-reanimated-carousel';
import { ImageHeader } from "../Text";

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