import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { BodyText, CenteredTitle, ImageHeader, PageHeader } from "../components/Text"
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
    alignSelf: 'center',
    width: 250,
    objectFit: "contain",
    height: 250,
    marginBottom: 20,
    marginTop: 20,
  };
  return (
    <ScrollView>
      <Navbar n={navigation} />
      <View style={{backgroundColor: "#e4e4e4", width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <View style={{...dropShadow, backgroundColor: "#ffffff", width: "100%", maxWidth: 800, display: "flex", flexDirection: "column"}}>

          <PageHeader>Welcome to the WPI Student Success Handbook</PageHeader>

          <ContentSection>          
            <ImageHeader image={gompeiSunset}>Our Mission</ImageHeader>
            <BodyText> 
             The Student Success Handbook at WPI is specifically designed to ensure that all students, including those from diverse backgrounds, can access and benefit from the abundance of fundamental resources on campus that foster student success. We emphasize a range of strategies and tools tailored to support the diverse student body, making it easier for incoming students to find the right resources for their unique needs at WPI. Here, we emphasize strategies and available tools that promote the success of our diverse student body - there is something for everyone at WPI if you know where to look!
            </BodyText>
            <BodyText> 
             Our Values include Respect, Community, Inclusion, Innovation, and Achievement.
            </BodyText>
          </ContentSection>

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