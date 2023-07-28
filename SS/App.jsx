import 'react-native-gesture-handler';

// Library Imports
import { useState, } from "react";
import { Pressable, StatusBar, View, } from "react-native";
import { NavigationContainer, } from "@react-navigation/native";
// Rest of the import statements
import { useFonts } from 'expo-font';

// Component Imports
import { AppDrawer } from "./components/Navigation";


// API Imports
import { AppDrawerItemName, } from "./api/navigation";
import {PaperProvider} from 'react-native-paper';
import { ChecklistsContext } from "./Context";
import Checklists, { defaultChecklistdata } from "./navigation/Checklists";
import Academics from './navigation/Academics';
import { Image } from 'expo-image';

import Icon from 'react-native-vector-icons/Ionicons';
import HomePage from './navigation/HomePage';
import Wellness from './navigation/Wellness';
import Services from './navigation/Services';
import Financial from './navigation/Financial';
import FAQ from './navigation/FAQ';
import Development from './navigation/Development';
import Diversity from './navigation/Diversity';
import Social from './navigation/Social';

/**
 * The entire StudentSuccessProject App component
 */
function App() {

  const [checklistsState, setChecklistsState] = useState(defaultChecklistdata);
  const [fontsLoaded] = useFonts({
    'MyriadProSemibold': require('./assets/fonts/MyriadProSemibold.ttf'),
  });
  // Currently no Context / State to configure

  return (
    <PaperProvider>
      <ChecklistsContext.Provider value={{checklistsState, setChecklistsState}}>
      <View style={{height: '100%', color: "#1F2327", }}>
        <StatusBar />
        <NavigationContainer>
          <AppDrawer.Navigator
            initialRouteName={AppDrawerItemName.Services}
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
            component={Diversity}
            name={AppDrawerItemName.Diversity}
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
              drawerLabel: AppDrawerItemName.Diversity,
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
            component={Wellness}
            name={AppDrawerItemName.Wellness}
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
              drawerLabel: AppDrawerItemName.Wellness,
            }}
          />
          <AppDrawer.Screen
            component={Social}
            name={AppDrawerItemName.Social}
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
              drawerLabel: AppDrawerItemName.Social,
            }}
          />
          <AppDrawer.Screen
            component={Financial}
            name={AppDrawerItemName.Financial}
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
              drawerLabel: AppDrawerItemName.Financial,
            }}
          />
          <AppDrawer.Screen
            component={Development}
            name={AppDrawerItemName.Development}
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
              drawerLabel: AppDrawerItemName.Development,
            }}
          />
          <AppDrawer.Screen
            component={Services}
            name={AppDrawerItemName.Services}
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
              drawerLabel: AppDrawerItemName.Services,
            }}
          />
          <AppDrawer.Screen
            component={FAQ}
            name={AppDrawerItemName.FAQ}
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
              drawerLabel: AppDrawerItemName.FAQ,
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
