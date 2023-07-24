import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { BodyText, CenteredTitle, PageHeader } from "../components/Text"
import { ImageContainer } from "../components/Images"
import { AccordionTitle, AccordionItem, AccordionLink } from "../components/Accordion"
import { dropShadow, lorem, loremShort, textBlockMaxWidth } from '../assets/style'

import { ContentSection, Footer } from '../components/Layout'
import { Image } from 'expo-image'
import { Navbar } from '../App'
import { View } from 'react-native'
// images
const wpiIcon = require("../assets/adaptive-icon.png")
const wpiSky = require("../assets/worcesterSkyline.jpeg")
const gompeiSunset = require("../assets/gompeiSunset.jpg")

export default function HomePage({navigation}) {
  const imageStyles = {
    width: '50%',
    alignSelf: 'center',
    maxWidth: 250,
    paddingBottom: 20,
    paddingTop: 20,
  };
  return (
    <ScrollView>
      <Navbar n={navigation} />
      <View style={{backgroundColor: "#e4e4e4", width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <View style={{...dropShadow, backgroundColor: "#ffffff", width: "100%", maxWidth: 800, display: "flex", flexDirection: "column"}}>

          <PageHeader>Welcome to WPI!</PageHeader>

            <Image source={wpiIcon} alt="WPI" style={imageStyles}/>
            <BodyText> 
              WPI transforms lives, turns knowledge into action to confront global challenges, and revolutionizes STEM through distinctive and inclusive education, projects, and research.
            </BodyText>
            <BodyText> 
              Our Values include Respect, Community, Inclusion, Innovation, and Achievement.
            </BodyText>

            <ImageContainer imageSource= {gompeiSunset}></ImageContainer>
            <BodyText>{lorem}</BodyText>
          {/* Resources */}
          <ContentSection>
            <CenteredTitle>WPI Emergency Resources</CenteredTitle>
            <AccordionTitle title="WPI Police">
              <AccordionItem title ="Emergency: 508-831-5555"/>
              <AccordionItem title ="Non-emergency: 508-831-5433"/>
              <AccordionLink title ="More Info" href="https://www.wpi.edu/offices/police"/>
            </AccordionTitle>
            <AccordionTitle title="SDCC">
              <AccordionItem title ="Phone Number: 508-831-5540"/>
              <AccordionLink title ="Concerned About a student?" href="https://fs28.formsite.com/webteamwpiedu/concerned-about-student/index.html?_gl=1*1qw7e0w*_ga*MTk5NjIyODU2LjE2ODQ3ODA0NTY.*_ga_RE35PKQB7J*MTY4NzIwMDY1Ni4xMTMuMS4xNjg3MjAwOTQyLjU1LjAuMA.."/>
            </AccordionTitle>
            <AccordionTitle title="Campus Shuddles">
              <AccordionItem title ="Phone Number: 508-831-5645"/>
            </AccordionTitle>
            <AccordionTitle title="Health Services">
              <AccordionItem title ="Phone Number: 508-831-5520"/>
            </AccordionTitle>
            <AccordionTitle title="Title IX">
              <AccordionItem title ="Phone Number: 508-831-6514"/>
            </AccordionTitle>

            <CenteredTitle>Additional Emergency Resources</CenteredTitle>
          </ContentSection>

          <Footer/>
        </View>
      </View>
    
    </ScrollView>
  )
}