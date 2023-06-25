import { createDrawerNavigator } from '@react-navigation/drawer';
import { DefaultTheme, } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';
import { AppDrawerItemName } from '../api/navigation';
import { AppDrawerItemIcon } from '../api/image';
import DrawerPage from './DrawerPage';

/** 
 * The main App Stack navigator, allowing the user to visit pages not contained within the mainPage bottom tab navigation 
 * @constant
 */
export const AppDrawer = createDrawerNavigator();

/** 
 * AppDrawer navigation theme inherits from the {@link DefaultTheme} and sets the navigation's background color to transparent 
 * @constant
 * */
export const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

/**
 * AppDrawer navigation screens rendered from {@link AppDrawerItemName} enum values
 */
export function AppDrawerScreens() {

  // Get all members of AppDrawerItemName enum
  return Object.keys(AppDrawerItemName).map(key => {
    // Get drawer item label from enum
    const label = AppDrawerItemName[key];
    // Get drawer item icon from enum w/ same key
    const iconName = AppDrawerItemIcon[key];
    return (
      <AppDrawer.Screen
        component={<DrawerPage key={key} />}
        name={label}
        options={{
          drawerLabel: label,
          drawerIcon: ({ color, size }) => (
            <Icon name={iconName} size={size} color={color} />
          ),
        }}
      />
    )
  });
}