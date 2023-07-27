import { View, Text, Button, Dimensions } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { BodyText, CenteredTitle, HeaderRight, BracketedText, ImageHeader, PageHeader, SectionContentHeader, QuoteRight, QuoteLeft, GreayTextBeam } from "../components/Text"
import { ButtonBlock, ButtonCentered } from "../components/Buttons"

import { ContentSection, Footer, LightGrayPlatform, TransparentPlatform, RedBeam } from '../components/Layout'
import { dropShadow, lorem, loremShort, textBlockMaxWidth } from '../assets/style'
import { ImageContainer } from '../components/Images'
import { AcademicsChecklist } from './Checklists'
import { Navbar } from '../App'

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

export default function Wellness({navigation}) {
  const width = Dimensions.get('window').width;
  const carouselWidth = width > 800 ? 800 : width;
  const carouselHeight = 200;

  return (
    <ScrollView>

      <Navbar n={navigation}/>

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
            WPI Health Services offers inclusive healthcare to all students, without billing insurance or charging a copay for office visits and services.
            </BodyText>
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
            The Center for Wellbeing provides students with both a physical space to relax, as well as in-office, trained students whom they can ask for directions to resources.
            </BodyText>
            <ButtonCentered href="https://www.wpi.edu/student-experience/health-wellness/center-for-well-being">Visit the Wellness Center</ButtonCentered>
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
    text: ""
  },
  {
    image: cwbCoffee,
    text: ""
  },
]