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
          <WellnessChecklist missionsPage />
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
        description="Set up a meeting with your academic advisor to get familiar with them and open a conversation about your academic goals. Put your mind at ease and start developing your personal trajectory."
      >
        Meet with your academic advisor
      </Checklist.Item>
      <Checklist.Item
        itemKey="outlook"
        checklistKey="academics"
        description="Get familiar with your email and calendar - both are important resources for academic (and social) success at WPI!"
      >
        Set up your Outlook
      </Checklist.Item>
      <Checklist.Item
        itemKey="contacts"
        checklistKey="academics"
        description="The people in your classes are great resources throughout the term, and you may find yourself on similar paths over the course of the next four years. Make those connections early!"
      >
        Exchange contact info with the person next to you in lecture!
      </Checklist.Item>
      <Checklist.Item
        itemKey="officeHours"
        checklistKey="academics"
        description="Reading your course syllabi is important for staying on track with assignments, due dates, and course policies. Even more important: these syllabi often contain your professors' office hours! Office hours are a great way to ask questions and foster relationships with faculty."
      >
        Locate your professors' office hours on your syllabi
      </Checklist.Item>
      <Checklist.Item
        itemKey="tracking"
        checklistKey="academics"
        description="Knowing where your major tracking sheet is located and how to use it is a great way to stay organized and make sure you're in the know about required coursework for your degree."
      >
        Download or print out your major tracking sheet
      </Checklist.Item>
    </Checklist>
  )
}

export function WellnessChecklist({ missionsPage }) {
  return (
    <Checklist>
    <Checklist.Title>{missionsPage ? "Wellness" : "Missions"}</Checklist.Title>
      <Checklist.Item
        itemKey="rec"
        checklistKey="wellness"
        description="Getting in a workout at the Rec Center is a great way to boost your seratonin levels and take a break from academia. If fitness isn't your thing, stop in and support one of WPI's clubn or varsity teams."
      >
        Check out the Rec Center / Sports
      </Checklist.Item>
      <Checklist.Item
        itemKey="wellnessCenter"
        checklistKey="wellness"
        description="The Wellness Center is a great place to unwind, grab a snack, or learn more about wellness resources on campus. Go alone or bring a friend, and enjoy!"
      >
        Stop by the Wellness Center
      </Checklist.Item>
      <Checklist.Item
        itemKey="wellnessActivity"
        checklistKey="wellness"
        description="Wellness days happen once a term, and are a great time to relaxm reflect, and connect with campus. Slow down, attend a wellness event, or just take a nice nap!"
      >
        Attend a Wellness Day activity
      </Checklist.Item>
      <Checklist.Item
        itemKey="explore"
        checklistKey="wellness"
        description="Visit the Worcester Art Museum, try delicious local and international cuisine, or just relax in one of the various parks nearby campus."
      >
        Explore Worcester
      </Checklist.Item>
      <Checklist.Item
        itemKey="oasis"
        checklistKey="wellness"
        description="The OASIS House is a great place to unwind and socialize with other WPI students. Stop in to relax, study, or attend a program."
      >
        Check out the OASIS Multicultural Center
      </Checklist.Item>
    </Checklist>
  )
}

export function CampusInvolvementChecklist({ missionsPage }) {
  return (
    <Checklist>
    <Checklist.Title>{missionsPage ? "Getting Involved" : "Missions"}</Checklist.Title>
      <Checklist.Item
        itemKey="fair"
        checklistKey="campusInvolvement"
        description="The activities fair is a perfect way to learn what WPI has to offer. Hear about the clubs and organizations on campus, and maybe even sign up for one."
      >
        Attend the activities fair
      </Checklist.Item>
      <Checklist.Item
        itemKey="club"
        checklistKey="campusInvolvement"
        description="Signing up for a club doesn't have to be scary— put down your email, and stay up to date with club events! WPI offers a large assortment of affinity-based organizations; there is something for everyone."
      >
        Sign up for a club
      </Checklist.Item>
      <Checklist.Item
        itemKey="homecoming"
        checklistKey="campusInvolvement"
        description="Homecoming is a great way to get involved on campus and immerse yourself in school spirit. Hang out on the quad, watch the comingcoming game... maybe even wqin a Superfan t-shirt or bucket hat!"
      >
        Go to at least one homecoming event!
      </Checklist.Item>
      <Checklist.Item
        itemKey="raca"
        checklistKey="campusInvolvement"
        description="Your resident advisor and community advisor are great people to contact with any questions: academic, social, or otherwise. As upperclassmen, they will be able to chat with you about any varietyof WPI related concerns; take advantage of this opportunity!"
      >
        Have a chat with your RA or CA
      </Checklist.Item>
      <Checklist.Item
        itemKey="lunch"
        checklistKey="campusInvolvement"
        description="Your roommates and insight group are all engaged with the first year experience at the same time as you are. Grab lunch with them in one of the on campus dining locations, and take some time to talk about how freshman year is going."
      >
        Get lunch with your roommates / neighbors
      </Checklist.Item>
    </Checklist>
  )
}


export const defaultChecklistdata = {
  academics: {
    advisor: false,
    outlook: false,
    contacts: false,
    officeHours: false,
    tracking: false,
  },
  wellness: {
    rec: false,
    wellnessCenter: false,
    wellnessActivity: false,
    explore: false,
    oasis: false,
  },
  campusInvolvement: {
    fair: false,
    club: false,
    homecoming: false,
    raca: false,
    lunch: false,
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
      setChecklistsState(newChecklistsState);
      localStorage.setItem("wpi-student-success-checklists", JSON.stringify(newChecklistsState));
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