# PUPSys Native
## Development Tools
![React](https://img.shields.io/badge/React-%20-blue?style=for-the-badge&logo=react&logoColor=white&color=61dafb) ![JavaScript](https://img.shields.io/badge/JavaScript-%20-blue?style=for-the-badge&logo=javascript&logoColor=white&color=f7df1e) ![Git](https://img.shields.io/badge/git-%20-blue?style=for-the-badge&logo=git&logoColor=white&color=F05032)
## Development Team
### Lead Software Developer ([Joe Dobbelaar](https://github.com/r2pen2))

## Design and Architecture
### Strategy
### Scope
### Structure
### Skeleton
### Surface
## Developer Manual
### Best Pactices
#### JSX Styling
I've been doing my best to keep this styling scheme throughout all of my JSX elements:
```js
<View                                       // If we use multiple lines...
  style={{                                  // Props indented with 2 spaces 
    width: props.size ? props.size : 50,    // Style props indented with 4 spaces
    height: props.size ? props.size : 50,
  }} 
  display="flex" 
  flexDirection="column" 
  justifyContent="center" 
  alignItems="center"
  pointerEvents="none"
  // > and < on the same indent level
>
    <StyledText text="Welcome to the README.md!" />
</View>
```
#### Imports
Imports are separated into sections based on their utility, organized alphabetically, and on multiple lines if excessively long.
No unused modules are included in the imports section.
Sections are in no particular order.
Example from navigation/Status.js:
```js
// Library Imports
import { useContext, } from 'react';
import { Dimensions, Image, View, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createBottomTabNavigator, } from '@react-navigation/bottom-tabs';
import { LineChart } from "react-native-chart-kit";

// Style Imports
import { darkTheme, globalColors, lightTheme, } from '../assets/styles';

// Context Imports
import { DarkContext, DevicesContext, } from '../Context';

// API Imports
import { buttonImages, navigationImages, statusImages, } from "../api/image";
import { statusTabsPages, } from "../api/navigation";
import { averagedAdc, getGraphLabels, getScaledAdc,thresholds, } from '../api/sensor';

// Component Imports
import { PauseButton, } from "../components/Button";
import { Divider, GradientCard, } from "../components/Card";
import { StyledText, } from '../components/Text';
```
#### JSDOC
A list of all JSDOC tags can be found [here](https://jsdoc.app/)

Classes, enums, methods, functions, etc. should be well documented using JSDOC. Here are some examples:
```js
/**
 * Thresholds for status colors by reading type
 * @example
 * thresholds.humidity.RED = 50;
 * thresholds.humidity.ORANGE = 25;
 * thresholds.temperature.RED = 50;
 * thresholds.temperature.ORANGE = 40;
 * thresholds.pressure.RED = 350;
 * thresholds.pressure.ORANGE = 325;
 * @readonly
 * @enum {Object}
 */
export const thresholds = {
  /**
   * Humidity thresholds
   * @example
   * thresholds.humidity.RED = 50;
   * thresholds.humidity.ORANGE = 25;
   * @readonly
   * @enum {number}
   */
  humidity: {
    RED: 50,
    ORANGE: 25,
  },
  /**
   * Temperature thresholds
   * @example
   * thresholds.temperature.RED = 50;
   * thresholds.temperature.ORANGE = 40;
   * @readonly
   * @enum {number}
   */
  temperature: {
    RED: 50,
    ORANGE: 40,
  },
  /**
   * Pressure thresholds
   * @example
   * thresholds.pressure.RED = 350;
   * thresholds.pressure.ORANGE = 325;
   * @readonly
   * @enum {number}
   */
  pressure: {
    RED: 350,
    ORANGE: 325,
  },
}

/**
 * Get a list of strings representing the time of day for each sensor reading, assuming the last reading happened at the current time
 * @param {number[]} sensorReadings - A list of sensor readings
 * @param {number} y - The number of seconds between readings
 * @returns {string[]} - A list of strings representing the time of day for each sensor reading, formatted as "hh:mm AM/PM"
 */
function getReadingTimes(sensorReadings, y) {
  const currentTime = new Date();
  const readingTimes = [];
  
  for (let i = 0; i < sensorReadings.length; i++) {
    const readingTime = new Date(currentTime.getTime() - y * 1000 * (sensorReadings.length - 1 - i));
    const hours24 = readingTime.getHours();
    const hours12 = hours24 % 12 || 12;
    const minutes = readingTime.getMinutes();
    const amPm = hours24 < 12 ? 'AM' : 'PM';

    const formattedTime = `${hours12.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${amPm}`;
    readingTimes.push(formattedTime);
  }
  
  return readingTimes;
}

/**
 * Checkbox component styled to theme
 * @param {Object} props - Component properties
 * @param {boolean} props.checked - Whether checkbox is checked
 * @returns {React.Component} - A custom styled Checkbox component
 */
export function StyledCheckbox(props) {
  return (
    <CheckBox 
      value={props.checked} 
      color="#767676"
      onValueChange={props.onChange}
    />
  )
}
```
### Misc. Notes
Here's a list of some things I discovered in writing this app.
#### useEffect Async
Great care must be taken when calling async functions from a useEffect hook!
```js
async function doSomething() {
    await something();
}

// This breaks the whole app lol
useEffect(doSomething, []);
// This is because you're returning the result of calling doSomething() from the useEffect function.
// If you return anything from useEffect, it has to be a callback function.

// We can fix this by writing the useEffect as follows:
useEffect(() => { doSomething(); }, []);
```
#### PointerEvents
Sometimes, child elements will completely cancel onClick events. Child elements can be told to pass onClicks to their parents by adding the "pointerEvents = 'none'" parameter to their container.
```js
// Text blocks Pressable's onPress from being called:
<Pressable onPress={() => console.log("Pressed!")}>
    <Text>
        I'm a nuisance!
    </Text>
</Pressable>

// Text does not block Pressable's onPress from being called:
<Pressable onPress={() => console.log("Pressed!")}>
    <Text pointerEvents="none">
        I'm a nuisance!
    </Text>
</Pressable>
```
