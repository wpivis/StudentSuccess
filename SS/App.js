// Library Imports
import { useEffect, useState, } from "react";
import { StatusBar, View, } from "react-native";
import { NavigationContainer, } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons" 

// Component Imports
import { AppDrawer, renderAppDrawerScreens, navTheme, } from "./components/Navigation";

// API Imports
import { AppDrawerItemIcon } from "./api/image";
import { AppDrawerItemName, } from "./api/navigation";

/**
 * The entire StudentSuccessProject App component
 */
function App() {
  
  // Currently no Context / State to configure

  return (
    <View style={{height: '100%'}}>
      <StatusBar />
      <NavigationContainer theme={navTheme}>
        <AppDrawer.Navigator
          initialRouteName={AppDrawerItemName.Welcome}
        >
          { renderAppDrawerScreens() }
        </AppDrawer.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;