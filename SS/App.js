// Library Imports
import { useEffect, useState, } from "react";
import { StatusBar, View, } from "react-native";
import { NavigationContainer, } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons" 

// Component Imports
import { AppDrawer, navTheme, } from "./components/Navigation";

// Style Imports
import { } from "./assets/styles";

// API Imports
import { AppDrawerItemIcon } from "./api/image";
import { AppDrawerItemName, } from "./api/navigation";

/**
 * The entire StudentSuccessProject App component
 */
function App() {
  
  // Currently no Context / State to configure

  return (
    <FocusContext.Provider  value={{focus, setFocus}}>  
    <SensorContext.Provider  value={{sensorData, setSensorData}}>  
    <PatientContext.Provider  value={{patient, setPatient}}>  
    <DarkContext.Provider     value={{dark, setDark}}>  
    <DevicesContext.Provider  value={{devices, setDevices}}>  
      <StatusBar backgroundColor={dark ? darkTheme.statusBarColor : lightTheme.statusBarColor} />
      <View style={{height: '100%'}}>
        <NavigationContainer theme={navTheme}>
          <AppDrawer.Navigator
            initialRouteName={appDrawerPages.STATUS}
          >
            <AppDrawer.Screen
              component={Status}
              name={appDrawerPages.STATUS}
              options={{
                drawerLabel: "Sensors",
                drawerIcon: ({ color, size }) => (
                  <Icon name={navigationImages.appDrawer.SENSORS} size={size} color={color} />
                ),
              }}
            />
            <AppDrawer.Screen
              component={Patient}
              name={appDrawerPages.PATIENT}
              options={{
                drawerLabel: "Patient Details",
                drawerIcon: ({ color, size }) => (
                  <Icon name={navigationImages.appDrawer.PATIENT} size={size} color={color} />
                ),
              }}
            />
            <AppDrawer.Screen
              component={Calibration}
              name={appDrawerPages.CALIBRATION}
              options={{
                drawerLabel: "Calibration",
                drawerIcon: ({ color, size }) => (
                  <Icon name={navigationImages.appDrawer.CALIBRATION} size={size} color={color} />
                ),
              }}
            />
          </AppDrawer.Navigator>
        </NavigationContainer>
      </View>
    </DevicesContext.Provider>
    </DarkContext.Provider>
    </PatientContext.Provider>
    </SensorContext.Provider>
    </FocusContext.Provider>
  );
}3

export default App;