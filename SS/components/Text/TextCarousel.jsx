import { Text, View, Dimensions } from "react-native";
import Carousel from 'react-native-reanimated-carousel';

export function TextCarousel(props){
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
                      <Text>test</Text>
                    </View>
                  )}
                />
              </View>  
              )
}