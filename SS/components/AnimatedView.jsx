import React, {useRef, useEffect, useState} from 'react';
import {Animated, Text, View} from 'react-native';

import { useSpring, animated } from '@react-spring/native'

export function Spring() {

  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 },
  })
  return (
    <animated.View
      style={{
        width: 80,
        height: 80,
        background: '#ff6d6d',
        borderRadius: 8,
      }}
    />
  )
}





export function FadeInView (props) {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  )
}

export function ScrollAnimation (){
  const [headerShown, setHeaderShown] = useState(false);
  const translation = useRef(new Animated.Value(-100)).current;
  const scrolling = useRef(new Animated.Value(0)).current;


  useEffect(() => {
    Animated.timing(translation, {
      toValue: headerShown ? 0 : -100,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [headerShown]);

  return (
    <>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 80,
          backgroundColor: 'tomato',
          transform: [
            { translateX: translation},
          ],
        }}
      />
      
      <Animated.ScrollView
        onScroll={Animated.event(
          [{
            nativeEvent: {
              contentOffset: {
                y: scrolling,
              },
            },
          }],
          { useNativeDriver: true },
        )}
        // onScroll will be fired every 16ms
        scrollEventThrottle={16}
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1, height: 1000 }} />
      </Animated.ScrollView>
    </>
  );
}