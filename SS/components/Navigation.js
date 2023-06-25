import { createDrawerNavigator } from '@react-navigation/drawer';
import { DefaultTheme, } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';

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
 * Custom drawer item component with an icon
 * @deprecated as of 4/2/23 - ReactNavigation does not like custom components inside of a navigation container!
 * @param {Object} props - Component properties
 * @param {string} props.label - The text label for the drawer item
 * @param {string} props.iconName - The name of the icon to use from the Icon library
 * @param {string} props.name - Name of drawer screen
 * @param {React.Component} props.component - The screen component to render for the drawer item
 * @returns {React.Component} - A custom drawer component with an icon
 */
export function CustomDrawerItem({ label, iconName, component, name }) {
  return (
    <AppDrawer.Screen
      component={component}
      name={name}
      options={{
        drawerLabel: label,
        drawerIcon: ({ color, size }) => (
          <Icon name={iconName} size={size} color={color} />
        ),
      }}
    />
  );
}