import { View, Text, Pressable } from 'react-native'
import { Component, useContext } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import CheckBox from "expo-checkbox"
import { crimson, dropShadow } from '../assets/style'
import { ChecklistsContext } from '../Context'
import { rippleRed } from '../components/Buttons'
import { AppDrawerItemName, } from '../api/navigation'
import { Navbar, } from '../components/Navigation'
import { Image } from 'expo-image'

export default function Checklists({ navigation }) {
  return (
    <ScrollView>
      <Navbar n={navigation} title={AppDrawerItemName.Checklists} />
      <View style={{ backgroundColor: "#e4e4e4", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <View style={{ ...dropShadow, backgroundColor: "#ffffff", width: "100%", maxWidth: 800, display: "flex", flexDirection: "column" }}>
          <AcademicsChecklist missionsPage />
          <WorcesterChecklist missionsPage />
          <CampusInvolvementChecklist missionsPage />
        </View>
      </View>

    </ScrollView>
  )
}

export function AcademicsChecklist({ missionsPage }) {
  return (
    <Checklist>
      <Checklist.Title>{missionsPage ? "Academics" : "Missions"}</Checklist.Title>
      <Checklist.Item
        itemKey="advisor"
        checklistKey="academics"
        description="Set up a meeting with your academic advisor as soon as you arrive on campus. They can provide guidance on course selection, discuss your academic goals, and help you understand university policies and requirements."
      >
        Meet with Your Academic Advisor
      </Checklist.Item>
      <Checklist.Item
        itemKey="library"
        checklistKey="academics"
        description="Familiarize yourself with the Gordon Library's layout, resources, and services. Knowing how to locate and borrow books, utilize research databases, and access study spaces can be invaluable to your academic success."
      >
        Visit the Gordon Library
      </Checklist.Item>
      <Checklist.Item
        itemKey="canvas"
        checklistKey="academics"
        description="Familiarize yourself with Canvas, where you'll often find course materials, assignments, and grades."
      >
        Explore Canvas
      </Checklist.Item>
      <Checklist.Item
        itemKey="academicSupport"
        checklistKey="academics"
        description="Identify and locate various academic support services like writing centers, tutoring services, and study groups. These resources can provide additional help if you struggle with certain courses or need to improve study skills."
      >
        Learn About Academic Support Services:
      </Checklist.Item>
      <Checklist.Item
        itemKey="calendar"
        checklistKey="academics"
        description="Set up an academic calendar to manage your time effectively. Include your class schedule, study hours, assignment deadlines, and exam dates. Regularly updating and checking this calendar can keep you on top of your academic responsibilities."
      >
        Set up Your Academic Calendar
      </Checklist.Item>
    </Checklist>
  )
}

export function WorcesterChecklist() {
  return (
    <Checklist>
      <Checklist.Title>Exploring Worcester</Checklist.Title>
      <Checklist.Item
        itemKey="downtown"
        checklistKey="worcester"
        description="Take a stroll through downtown Worcester to get a feel for the city's vibrant atmosphere and diverse array of shops, restaurants, and cultural attractions."
      >
        Visit Downtown Worcester
      </Checklist.Item>
      <Checklist.Item
        itemKey="museum"
        checklistKey="worcester"
        description="Explore the Worcester Art Museum or EcoTarium to immerse yourself in local art, history, and science exhibits."
      >
        Visit a Museum
      </Checklist.Item>
      <Checklist.Item
        itemKey="parks"
        checklistKey="worcester"
        description="Spend a day at one of Worcester's many beautiful parks, such as Elm Park or Green Hill Park, which offer walking trails, picnic spots, and recreational facilities."
      >
        Explore Worcester's Parks
      </Checklist.Item>
      <Checklist.Item
        itemKey="localCuisine"
        checklistKey="worcester"
        description="Try out local cuisine at one of the many unique restaurants in the city, which offer a variety of foods ranging from traditional New England fare to international cuisine."
      >
        Try Local Cuisine
      </Checklist.Item>
      <Checklist.Item
        itemKey="transport"
        checklistKey="worcester"
        description="Get to know the local public transport system. Understanding the bus routes, train schedules, and main transit points can help you navigate the city with ease."
      >
        Learn the Public Transport System
      </Checklist.Item>
    </Checklist>
  )
}

export function CampusInvolvementChecklist() {
  return (
    <Checklist>
      <Checklist.Title>Getting Involved on Campus</Checklist.Title>
      <Checklist.Item
        itemKey="clubs"
        checklistKey="campusInvolvement"
        description="Research and join student clubs and organizations that align with your interests. This is a great way to meet like-minded peers, develop new skills, and make the most of your university experience."
      >
        Join a Club or Organization
      </Checklist.Item>
      <Checklist.Item
        itemKey="events"
        checklistKey="campusInvolvement"
        description="Attend campus events like concerts, lectures, and sporting events. These are not only fun but also provide opportunities to engage with the broader campus community."
      >
        Attend Campus Events
      </Checklist.Item>
      <Checklist.Item
        itemKey="volunteer"
        checklistKey="campusInvolvement"
        description="Participate in volunteer opportunities or community service projects offered through the university. This can be a rewarding way to give back while strengthening your ties to the campus and local community."
      >
        Participate in Volunteer Opportunities
      </Checklist.Item>
      <Checklist.Item
        itemKey="sports"
        checklistKey="campusInvolvement"
        description="If you're into athletics, consider joining an intramural sports team, or try out for a varsity sport. If you prefer watching to playing, attend games to support your university's teams."
      >
        Get Involved in Sports
      </Checklist.Item>
      <Checklist.Item
        itemKey="leadership"
        checklistKey="campusInvolvement"
        description="Seek out leadership roles in student organizations, residence halls, or student government. These positions can provide valuable experience and are often looked upon favorably by future employers."
      >
        Seek Leadership Roles
      </Checklist.Item>
    </Checklist>
  )
}


export const defaultChecklistdata = {
  academics: {
    advisor: false,
    library: false,
    canvas: false,
    academicSupport: false,
    calendar: false,
  },
  worcester: {
    downtown: false,
    museum: false,
    parks: false,
    localCuisine: false,
    transport: false,
  },
  campusInvolvement: {
    clubs: false,
    events: false,
    volunteer: false,
    sports: false,
    leadership: false,
  },
}

export function StyledCheckbox(props) {
  const checkedImage = require("../assets/checkboxChecked.png");
  const uncheckedImage = require("../assets/checkboxUnchecked.png");
  return <Image source={props.checked ? checkedImage : uncheckedImage} style={{ width: 20, height: 20 }} />
}

export class Checklist extends Component {

  static Title(titleProps) {
    return (
      <View style={{ borderBottomColor: crimson, borderBottomWidth: 2, display: "flex", alignItems: "center", paddingTop: 7, paddingBottom: 7, marginBottom: 7 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{titleProps.children}</Text>
      </View>
    )
  }

  static Item(itemProps) {

    const { checklistsState, setChecklistsState } = useContext(ChecklistsContext)

    function updateChecklistState() {
      const newChecklistsState = { ...checklistsState };
      newChecklistsState[itemProps.checklistKey][itemProps.itemKey] = !newChecklistsState[itemProps.checklistKey][itemProps.itemKey];
      setChecklistsState(newChecklistsState)
    }

    return (
      <Pressable android_ripple={rippleRed} onPress={updateChecklistState} style={{ marginBottom: 7, paddingLeft: 20, paddingRight: 20, display: "flex", flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1, marginRight: 20 }}>
          <StyledCheckbox checked={checklistsState[itemProps.checklistKey][itemProps.itemKey]} />
        </View>
        <View style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start" }}>
          <Text style={{ marginBottom: 2, marginLeft: 14, borderBottomColor: crimson, borderBottomWidth: 1 }}>{itemProps.children}</Text>
          <Text style={{ marginLeft: 14, fontSize: 10 }}>{itemProps.description}</Text>
        </View>
      </Pressable>
    )
  }

  render() {
    return (
      <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        {this.props.children}
      </View>
    )
  }

}