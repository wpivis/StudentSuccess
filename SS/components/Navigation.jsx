import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppDrawerItemName } from '../api/navigation';
import { AppDrawerItemIcon } from '../api/image';
import { Pressable, Text, View } from 'react-native';
import { Image } from 'expo-image';

/** 
 * The main App Stack navigator, allowing the user to visit pages not contained within the mainPage bottom tab navigation 
 * @constant
 */
export const AppDrawer = createDrawerNavigator();

/**
 * AppDrawer navigation screens rendered from {@link AppDrawerItemName} enum values
 */
export function renderAppDrawerScreens() {

  // Get all members of AppDrawerItemName enum
  return Object.keys(AppDrawerItemName).map(key => {
    // Get drawer item label from enum
    const label = AppDrawerItemName[key];
    // Get drawer item icon from enum w/ same key
    const iconName = AppDrawerItemIcon[key];
    return (
      <AppDrawer.Screen
        key={key} // Important to note that "key" and "pageKey" are different. "key" is a React prop for differentiating elements rendered in a map()
        children={<DrawerPage pageKey={key} />} // pageKey tells DrawerPage which page we want to render.
        name={label}
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
          drawerLabel: label,
          drawerIcon: ({ color, size }) => (
            <Icon name={iconName} size={size} color={color} />
          ),
        }}
      />
    )
  });
}

export function Navbar({n, title}) {
  return (
    <View style={{zIndex: 2, height: 80, width: '100%', backgroundColor: "#1f2327", display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: 'flex-start', position: "sticky", top: 0, left: 0}}>
      <Pressable style={{marginLeft: 20}} onPress={() => n.toggleDrawer()}>
      <Image source={require("../assets/icons/menuIcon.png")} alt="menu-icon" style={{width: 40, height: 40}} />
      </Pressable>
      <Text style={{marginLeft: 14, fontSize: 20, color: "white"}}>{title}</Text>
    </View>
  )
}