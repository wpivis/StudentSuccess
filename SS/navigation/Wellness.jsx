import { View, Text, Button, Dimensions } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { BodyText, BracketedText, ImageHeader, PageHeader, QuoteRight, QuoteLeft } from "../components/Text"
import { ButtonBlock, ButtonCentered } from "../components/Buttons"
import { AccordionTitle, AccordionLink, ListSectionAccordion, LinkListAccordion } from "../components/Accordion"
import { ImageCarousel } from '../components/Images'

import { ContentSection, Footer, LightGrayPlatform, TransparentPlatform, RedBeam, HeaderSubtitle } from '../components/Layout'
import { dropShadow, lorem, loremShort, textBlockMaxWidth } from '../assets/style'
import { AcademicsChecklist, WellnessChecklist } from './Checklists'
import { AppDrawerItemName, } from '../api/navigation'
import { Navbar, } from '../components/Navigation'

import Carousel from 'react-native-reanimated-carousel'
import { logEvent } from 'firebase/analytics'
import { analytics } from '../firebase'

// Images
//SDCC
const sdcc = require("../assets/Wellness/sdcc.jpg")
const sdccBuilding = require("../assets/Wellness/SDCCBuilding.jpg")
const sdccRoomOne = require("../assets/Wellness/SDCCRoom1.jpg")
const sdccSession = require("../assets/Wellness/SDCCSession.jpg")
const sdccTraining = require("../assets/Wellness/SDCCTraining.jpg")

//Health Services
const healthLobby = require("../assets/Wellness/HealthServicesLobby.jpg")
const healthRoomOne = require("../assets/Wellness/HealthServicesRoom1.jpg")
const healthSeat = require("../assets/Wellness/HealthServicesSeat.jpg")
const healthTools = require("../assets/Wellness/HealthServicesTools.jpg")

//Center for Wellbeing
const cwb = require("../assets/Wellness/CWB.jpg")
const cwbCoffee = require("../assets/Wellness/CWBCoffee.jpg")
const cwbLobby = require("../assets/Wellness/CWBLobby.jpg")
const cwbSeat = require("../assets/Wellness/CWBSeat.jpg")
const CWBZen = require("../assets/Wellness/CWBZen.jpg")

//Title IX
const cc = require("../assets/Wellness/CC.jpg")
const eeoDesk = require("../assets/Wellness/EEODesk.jpg")

export default function Wellness({ navigation }) {

  logEvent(analytics, "page_view", {
    page_location: "wellness"
  });

  const width = Dimensions.get('window').width;
  const carouselWidth = width > 800 ? 800 : width;
  const carouselHeight = 200;

  return (
    <ScrollView>

      <Navbar n={navigation} title={AppDrawerItemName.Wellness} />

      <View style={{ backgroundColor: "#e4e4e4", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <View style={{ ...dropShadow, backgroundColor: "#ffffff", width: "100%", maxWidth: 800, display: "flex", flexDirection: "column" }}>
          <PageHeader>Wellness Resources at WPI</PageHeader>
          <ContentSection>
          <BracketedText>
            WPI offers various health and wellness resources to its students. Finding and asking for help
            does not have to be difficult. Finding the balance between academics and personal wellbeing
            is our goal.
          </BracketedText>
          </ContentSection>
          <LightGrayPlatform>
             <BodyText>Welcome to the WPI Community. I expect your time here at WPI to be rich and rewarding and at times challenging, both intellectually and personally. You will weather all of life’s challenges more successfully from a firm foundation of well-being. I encourage you to take ownership of strengthening this foundation in the many choices you’ll make. Healthy choices include establishing and enhancing relationships with others, getting enough sleep each night, maintaining a steady and healthy diet, regular exercise, making time for rest, reflection, and rejuvenation. Also important is asking for help when needed from the many wonderful support resources WPI provides. Sometimes it’s hard to know where to turn for help, a great place to start is WPI’s Center for Well-Being located right next to Morgan dining hall. Come and let us help you build that solid well-being foundation! </BodyText>             
             <BodyText>Charlie Morse <br />Dean of Student Wellness <br />WPI</BodyText>
            </LightGrayPlatform>
          <ContentSection>

          <ImageCarousel data={sdccCarouselData}></ImageCarousel>

            <HeaderSubtitle>Suicide and crisis hotline: 988</HeaderSubtitle>
            <QuoteRight color="red">
              <Text>“My counselor really listened to my concerns, related to my problems, and validated my feelings.”</Text>
            </QuoteRight>
            <QuoteLeft color="gray">
              <Text>“It's great having someone to vent to... it's free, and super accessible.”</Text>
            </QuoteLeft>
            <QuoteRight color="red">
              <Text>“The SDCC is the biggest contributor to me finding my own happiness”</Text>
            </QuoteRight>
            <ButtonCentered href="https://forms.office.com/pages/responsepage.aspx?id=9XacWBXK-UGIS1XsFaBnKoK6q-y0N7BHuoBOlDglFLpUOFo1WkRQWDU4MElJQU1LWVI2UTNEUlJXRC4u&utm_source=marketing_cloud_email&utm_medium=January_12_2022&utm_campaign=UMC_3005745&utm_mc_suscriber_id=8468850">
              Schedule an Appointment
            </ButtonCentered>
            <ButtonCentered href="https://fs28.formsite.com/webteamwpiedu/concerned-about-student/index.html?_gl=1*1qw7e0w*_ga*MTk5NjIyODU2LjE2ODQ3ODA0NTY.*_ga_RE35PKQB7J*MTY4NzIwMDY1Ni4xMTMuMS4xNjg3MjAwOTQyLjU1LjAuMA..">
              Concerned About a Student?
            </ButtonCentered>
            <ButtonCentered href="https://www.wpi.edu/offices/student-development-counseling-center">
              Visit the SDCC
            </ButtonCentered>
          </ContentSection>

          <ContentSection>
            
          <ImageCarousel data={healthServicesCarouselData}></ImageCarousel>
            <HeaderSubtitle>
              WPI Health Services provides comprehensive, cost-free healthcare.
            </HeaderSubtitle>
            <BracketedText>
              WPI Health Services offers inclusive healthcare to all students, without billing insurance or charging a copay for
              office visits and services. Offered services include but are not limited to evaluation and
              treatment of illness and injury, immunization assistance, referral services, sexual health services, and prescription management.
            </BracketedText>
            <QuoteRight color="red">
              <Text>“Health services is very underrated, they do a lot of stuff for free, but nobody knows about it. You can literally get plan B for free at health services.”</Text>
            </QuoteRight>
            <ButtonCentered href="https://www.wpi.edu/offices/diversity/resources/lgbtq-support">
              LGBTQIA+ Inclusive Healthcare Services
            </ButtonCentered>
            <ButtonCentered href="https://www.wpi.edu/student-experience/health-wellness/health-services/policies-forms/student-health-forms">
              New Student Health Forms
            </ButtonCentered>
            <ButtonCentered href="https://www.wpi.edu/student-experience/health-counseling/health-services">
              Visit Health Services
            </ButtonCentered>
          </ContentSection>

          <ContentSection>

          <ImageCarousel data={wellbeingCarouselData}></ImageCarousel>
            <HeaderSubtitle>
              The Center for Well-Being at WPI is a sanctuary for students.
            </HeaderSubtitle>
            <BracketedText>
              The Center for Well-Being provides students with both a physical space to relax, as well as in-office, trained students
              whom they can ask for directions to resources. There are sponsored programs and activities on wellness days where you
              can take some time off from classes and spend time doing the things that make you feel fulfilled.
            </BracketedText>
            <QuoteLeft color="gray">
              <Text>“This year has been so much better than last year because of wellness days and the Center for Well-Being.”</Text>
            </QuoteLeft>
            <ButtonCentered href="https://www.wpi.edu/student-experience/health-wellness/center-for-well-being">Visit the Wellness Center</ButtonCentered>
          </ContentSection>
          <ContentSection>
          <ImageCarousel data={EOOCarouselData}></ImageCarousel>
            <HeaderSubtitle>
              The Office of Equal Opportunity and Outreach (Title IX) is a dedicated resource committed to supporting individuals in situations involving sexual misconduct.
            </HeaderSubtitle>
            <BracketedText>
              WPI has resources available to support you through all situations, including sexual misconduct. The Office of
              Equal Opportunity and Outreach is there to provide you the pathways needed to report these cases.
            </BracketedText>
            <ButtonCentered href="https://www.wpi.edu/offices/equal-opportunity-outreach">Visit the EEO office</ButtonCentered>
          </ContentSection>
          <AccordionTitle title="Off-Campus Resources">
            <ListSectionAccordion>
          <LinkListAccordion data={[
            {key: 'Pathways for Change', href: 'https://pathwaysforchange.help/'},
            {key: 'YWCA Daybreak', href: 'https://ywcacm.org/domestic-violence/'},
          ]} />
          </ListSectionAccordion>
          </AccordionTitle>
          <WellnessChecklist />
          <Footer />
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
    text: "SDCC"
  },
  {
    image: sdccSession,
    text: "SDCC"
  },
  {
    image: sdccTraining,
    text: "SDCC"
  },
  {
    image: sdccRoomOne,
    text: "SDCC"
  },
]

const healthServicesCarouselData = [
  {
    image: healthLobby,
    text: "Health Services"
  },
  {
    image: healthRoomOne,
    text: "Health Services"
  },
  {
    image: healthSeat,
    text: "Health Services"
  },
  {
    image: healthTools,
    text: "Health Services"
  },
]

const wellbeingCarouselData = [
  {
    image: cwb,
    text: "Center for Well-Being"
  },
  {
    image: cwbLobby,
    text: "Center for Well-Being"
  },
  {
    image: cwbSeat,
    text: "Center for Well-Being"
  },
  {
    image: CWBZen,
    text: "Center for Well-Being"
  },
  {
    image: cwbCoffee,
    text: "Center for Well-Being"
  },
]

const EOOCarouselData = [
  {
    image: cc,
    text: "Equal Opportunity & Outreach"
  },
  {
    image: eeoDesk,
    text: "Equal Opportunity & Outreach"
  },
]