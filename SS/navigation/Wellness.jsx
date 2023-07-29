import { View, Text, Button, Dimensions } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { BodyText, CenteredTitle, HeaderRight, BracketedText, ImageHeader, PageHeader, SectionContentHeader, QuoteRight, QuoteLeft, GreayTextBeam } from "../components/Text"
import { ButtonBlock, ButtonCentered } from "../components/Buttons"
import { AccordionTitle, AccordionLink } from "../components/Accordion"

import { ContentSection, Footer, LightGrayPlatform, TransparentPlatform, RedBeam } from '../components/Layout'
import { dropShadow, lorem, loremShort, textBlockMaxWidth } from '../assets/style'
import { ImageContainer } from '../components/Images'
import { AcademicsChecklist } from './Checklists'
import { Navbar } from '../App'
import { AppDrawerItemName } from '../api/navigation'

import Carousel from 'react-native-reanimated-carousel';

// Images
//SDCC
const sdcc = require("../assets/sdcc.jpg")
const sdccBuilding = require("../assets/SDCCBuilding.jpg")
const sdccRoomOne = require("../assets/SDCCRoom1.jpg")
const sdccSession = require("../assets/SDCCSession.jpg")
const sdccTraining = require("../assets/SDCCTraining.jpg")

//Health Services
const healthLobby = require("../assets/HealthServicesLobby.jpg")
const healthRoomOne = require("../assets/HealthServicesRoom1.jpg")
const healthSeat = require("../assets/HealthServicesSeat.jpg")
const healthTools = require("../assets/HealthServicesTools.jpg")

//Center for Wellbeing
const cwb = require("../assets/CWB.jpg")
const cwbCoffee = require("../assets/CWBCoffee.jpg")
const cwbLobby = require("../assets/CWBLobby.jpg")
const cwbSeat = require("../assets/CWBSeat.jpg")
const CWBZen = require("../assets/CWBZen.jpg")

//Title IX
const cc = require("../assets/CC.jpg")
const eeoDesk = require("../assets/EEODesk.jpg")

export default function Wellness({navigation}) {
  const width = Dimensions.get('window').width;
  const carouselWidth = width > 800 ? 800 : width;
  const carouselHeight = 200;

  return (
    <ScrollView>

      <Navbar n={navigation} title={AppDrawerItemName.Wellness}/>

      <View style={{backgroundColor: "#e4e4e4", width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <View style={{...dropShadow, backgroundColor: "#ffffff", width: "100%", maxWidth: 800, display: "flex", flexDirection: "column"}}>
          <PageHeader>Wellness Resources at WPI</PageHeader>
          <BodyText>
          WPI offers various health and wellness resources to its students. Finding and asking for help
does not have to be difficult. Finding the balance between academics and personal wellbeing
is our goal.

          </BodyText>
          <ContentSection>
          <View style={{ flex: 1, backgroundColor: "#f4f4f4",}}>
                <Carousel
                  loop
                  width={carouselWidth}
                  data={sdccCarouselData}
                  height={carouselHeight}
                  scrollAnimationDuration={1000}
                  renderItem={({ index }) => (
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'flex-start',
                      }}
                    >
                      <ImageHeader image={sdccCarouselData[index].image}>{sdccCarouselData[index].text}</ImageHeader>
                    </View>
                  )}
                />
              </View>
            <BodyText>
              The Student Development and Counseling Center offers free and confidential help, 24/7. Students and staff alike stress that it is there not just for if you have a problem, go before things get overwhelming.
            </BodyText>
            
            <BodyText>
              <a href="https://forms.office.com/pages/responsepage.aspx?id=9XacWBXK-UGIS1XsFaBnKoK6q-y0N7BHuoBOlDglFLpUOFo1WkRQWDU4MElJQU1LWVI2UTNEUlJXRC4u&utm_source=marketing_cloud_email&utm_medium=January_12_2022&utm_campaign=UMC_3005745&utm_mc_suscriber_id=8468850">Schedule an appointment</a>
            </BodyText>
            <BodyText>
            <a href="https://fs28.formsite.com/webteamwpiedu/concerned-about-student/index.html?_gl=1*1qw7e0w*_ga*MTk5NjIyODU2LjE2ODQ3ODA0NTY.*_ga_RE35PKQB7J*MTY4NzIwMDY1Ni4xMTMuMS4xNjg3MjAwOTQyLjU1LjAuMA..">Concerned about a student?</a>
            </BodyText>
            <BodyText>
            Suicide and crisis hotline: 988
            </BodyText>
            <ButtonCentered href="https://www.wpi.edu/offices/student-development-counseling-center">Visit the SDCC</ButtonCentered>
          </ContentSection>

          <ContentSection>
            <View style={{ flex: 1, backgroundColor: "#f4f4f4",}}>
                <Carousel
                  loop
                  width={carouselWidth}
                  data={healthServicesCarouselData}
                  height={carouselHeight}
                  scrollAnimationDuration={1000}
                  renderItem={({ index }) => (
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'flex-start',
                      }}
                    >
                      <ImageHeader image={healthServicesCarouselData[index].image}>{healthServicesCarouselData[index].text}</ImageHeader>
                    </View>
                  )}
                />
              </View>
            <BodyText>
              <a href="https://wpi.medicatconnect.com/home.aspx">WPI Health Services</a> offers inclusive healthcare to all students, without billing insurance or charging a copay for office visits and services. Offered services include but are not limited to sexual health services, evaluation and treatment of illness and injury, immunization assistance, referral services, and prescription management
            </BodyText>
            <BodyText>
              Additional LGBTQIA+ inclusive healthcare services can be found <a href="https://www.wpi.edu/offices/diversity/resources/lgbtq-support">here.</a>
            </BodyText>
            <BodyText>A list of new student health forms can be found <a href="https://www.wpi.edu/student-experience/health-wellness/health-services/policies-forms/student-health-forms">here.</a></BodyText>
            <ButtonCentered href="https://www.wpi.edu/student-experience/health-counseling/health-services">Visit Health Services</ButtonCentered>
          </ContentSection>
          
          <ContentSection>
            <View style={{ flex: 1, backgroundColor: "#f4f4f4",}}>
                <Carousel
                  loop
                  width={carouselWidth}
                  data={wellbeingCarouselData}
                  height={carouselHeight}
                  scrollAnimationDuration={1000}
                  renderItem={({ index }) => (
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'flex-start',
                      }}
                    >
                      <ImageHeader image={wellbeingCarouselData[index].image}>{wellbeingCarouselData[index].text}</ImageHeader>
                    </View>
                  )}
                />
              </View>
            <BodyText>
            The Center for Wellbeing provides students with both a physical space to relax, as well as in-office, trained students whom they can ask for directions to resources. There are sponsored programs and activities on wellness days where you can take some time off from classes and spend time doing the things that make you feel fulfilled.

            </BodyText>
            <ButtonCentered href="https://www.wpi.edu/student-experience/health-wellness/center-for-well-being">Visit the Wellness Center</ButtonCentered>
          </ContentSection>

          <ContentSection>
            <View style={{ flex: 1, backgroundColor: "#f4f4f4",}}>
                <Carousel
                  loop
                  width={carouselWidth}
                  data={EOOCarouselData}
                  height={carouselHeight}
                  scrollAnimationDuration={1000}
                  renderItem={({ index }) => (
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'flex-start',
                      }}
                    >
                      <ImageHeader image={EOOCarouselData[index].image}>{EOOCarouselData[index].text}</ImageHeader>
                    </View>
                  )}
                />
              </View>
            <BodyText>
              WPI has resources available to support you through all situations, including sexual misconduct. The Office of Equal Opportunity and Outreach is there to provide you the pathways needed to report these cases.
            </BodyText>
            <AccordionTitle title="Off campus resources">
              <AccordionLink title ="Pathways for change" href="https://pathwaysforchange.help/"/>
              <AccordionLink title ="YWCA Daybreak" href="https://ywcacm.org/domestic-violence/"/>
            </AccordionTitle>
            <ButtonCentered href="https://www.wpi.edu/offices/equal-opportunity-outreach">Visit the EEO office</ButtonCentered>
          </ContentSection>

          <Footer/>
        </View>
      </View>
      
    
    </ScrollView>

  )
}

const sdccCarouselData = [
  {
    image: sdcc,
    text: "SDCC"
  },
  {
    image: sdccBuilding,
    text: ""
  },
  {
    image: sdccSession,
    text: "Group & Individual Counseling"
  },
  {
    image: sdccTraining,
    text: "Peer Support and training"
  },
  {
    image: sdccRoomOne,
    text: "Self Help & online Resources"
  },
]

const healthServicesCarouselData = [ 
  {
    image: healthLobby,
    text: "Health Services"
  },
  {
    image: healthRoomOne,
    text: ""
  },
  {
    image: healthSeat,
    text: ""
  },
  {
    image: healthTools,
    text: ""
  },
]

const wellbeingCarouselData = [ 
  {
    image: cwb,
    text: "Center for Well-being"
  },
  {
    image: cwbLobby,
    text: ""
  },
  {
    image: cwbSeat,
    text: ""
  },
  {
    image: CWBZen,
    text: "Games & tools for relaxation"
  },
  {
    image: cwbCoffee,
    text: "Snacks & Tea available"
  },
]

const EOOCarouselData = [ 
  {
    image: cc,
    text: "Equal Opportunity & Outreach"
  },
  {
    image: eeoDesk,
    text: ""
  },
]