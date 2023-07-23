// Library Imports
import { createContext, useEffect, useState, } from "react";
import { StatusBar, View, } from "react-native";
import { NavigationContainer, } from "@react-navigation/native";


// Component Imports
import { AppDrawer, renderAppDrawerScreens, navTheme, } from "./components/Navigation";


// API Imports
import { AppDrawerItemIcon } from "./api/image";
import { AppDrawerItemName, } from "./api/navigation";
import {PaperProvider} from 'react-native-paper';
import { ChecklistsContext } from "./Context";
import { defaultChecklistdata } from "./navigation/Checklists";


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
        <NavigationContainer theme={navTheme}>
          <AppDrawer.Navigator
            initialRouteName={AppDrawerItemName.Checklists}
            screenOptions={{
              headerTintColor: "#FFFFFF",
              drawerStyle: {
                backgroundColor: "#1f2327",
              },
            }}
          >
            { renderAppDrawerScreens() }
          </AppDrawer.Navigator>
        </NavigationContainer>
      </View>
      </ChecklistsContext.Provider>
     </PaperProvider>

  );
}

export default App;