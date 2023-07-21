// Library Imports
import { useEffect, useState, } from "react";
import { StatusBar, View, } from "react-native";
import { NavigationContainer, } from "@react-navigation/native";


// Component Imports
import { AppDrawer, renderAppDrawerScreens, navTheme, } from "./components/Navigation";


// API Imports
import { AppDrawerItemIcon } from "./api/image";
import { AppDrawerItemName, } from "./api/navigation";
import {PaperProvider} from 'react-native-paper';

/**
 * The entire StudentSuccessProject App component
 */
function App() {
  
  // Currently no Context / State to configure

  return (
    <PaperProvider>
      <View style={{height: '100%', color: "#1F2327", }}>
        <StatusBar />
        <NavigationContainer theme={navTheme}>
          <AppDrawer.Navigator
            initialRouteName={AppDrawerItemName.HomePage}
            screenOptions={{
              headerTintColor: "#FFFFFF",
            }}
          >
            { renderAppDrawerScreens() }
          </AppDrawer.Navigator>
        </NavigationContainer>
      </View>
    </PaperProvider>
  );
}

export default App;