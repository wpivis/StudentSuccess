import 'react-native-gesture-handler';

// Library Imports
import { createContext, useEffect, useState, } from "react";
import { Pressable, StatusBar, View, } from "react-native";
import { NavigationContainer, } from "@react-navigation/native";


// Component Imports
import { AppDrawer, renderAppDrawerScreens } from "./components/Navigation";


// API Imports
import { AppDrawerItemIcon } from "./api/image";
import { AppDrawerItemName, } from "./api/navigation";
import {PaperProvider} from 'react-native-paper';
import { ChecklistsContext } from "./Context";
import Checklists, { defaultChecklistdata } from "./navigation/Checklists";
import Academics from './navigation/Academics';
import { Image } from 'expo-image';

import Icon from 'react-native-vector-icons/Ionicons';
import HomePage from './navigation/HomePage';

/**
 * The entire StudentSuccessProject App component
 */
function App() {

  const [checklistsState, setChecklistsState] = useState(defaultChecklistdata);
  
  // Currently no Context / State to configure

  return (
    <PaperProvider>
      <ChecklistsContext.Provider value={{checklistsState, setChecklistsState}}>
      <View style={{height: '100%', color: "#1F2327", }}>
        <StatusBar />
        <NavigationContainer>
          <AppDrawer.Navigator
            initialRouteName={AppDrawerItemName.Welcome}
            screenOptions={{
              headerTintColor: "#FFFFFF",
              drawerStyle: {
                backgroundColor: "#1f2327",
              },
              headerShown: false
            }}
          >
          <AppDrawer.Screen
            component={HomePage}
            name={AppDrawerItemName.Welcome}
            options={{
              headerStyle: {
                backgroundColor: "#1F2327",
              },
              headerTitleStyle: {
                color: "#FFFFFF"
              },
              drawerActiveTintColor: "#FFFFFF",
              drawerInactiveTintColor: "#FFFFFF",
              drawerItemStyle: {
                borderBottomColor: "#FFFFFF",
                borderBottomWidth: 1,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              },
              drawerLabel: "Welcome: Student Success Handbook",
            }}
          />
          <AppDrawer.Screen
            component={Academics}
            name={AppDrawerItemName.Academics}
            options={{
              headerStyle: {
                backgroundColor: "#1F2327",
              },
              headerTitleStyle: {
                color: "#FFFFFF"
              },
              drawerActiveTintColor: "#FFFFFF",
              drawerInactiveTintColor: "#FFFFFF",
              drawerItemStyle: {
                borderBottomColor: "#FFFFFF",
                borderBottomWidth: 1,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              },
              drawerLabel: AppDrawerItemName.Academics,
            }}
          />
          <AppDrawer.Screen
            component={Checklists}
            name={AppDrawerItemName.Checklists}
            options={{
              headerStyle: {
                backgroundColor: "#1F2327",
              },
              headerTitleStyle: {
                color: "#FFFFFF"
              },
              drawerActiveTintColor: "#FFFFFF",
              drawerInactiveTintColor: "#FFFFFF",
              drawerItemStyle: {
                borderBottomColor: "#FFFFFF",
                borderBottomWidth: 1,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              },
              drawerLabel: AppDrawerItemName.Checklists,
            }}
          />
          </AppDrawer.Navigator>
        </NavigationContainer>
      </View>
      </ChecklistsContext.Provider>
     </PaperProvider>

  );
}

export function Navbar({n}) {
  return (
    <View style={{zIndex: 2, height: 80, width: '100%', backgroundColor: "#1f2327", display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: 'flex-start', position: "sticky", top: 0, left: 0}}>
      <Pressable style={{marginLeft: 20}} onPress={() => n.toggleDrawer()}>
        <Image source={require("./assets/menuIcon.png")} alt="menu-icon" style={{width: 40, height: 40}} />
      </Pressable>
    </View>
  )
}

export default App;
