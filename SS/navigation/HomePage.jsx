import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { BodyText, CenteredTitle, ImageHeader, PageHeader, QuoteLeft, QuoteRight } from "../components/Text"
import { ImageContainer } from "../components/Images"
import { AccordionTitle, AccordionItem, AccordionLink } from "../components/Accordion"
import { dropShadow, lorem, loremShort, textBlockMaxWidth } from '../assets/style'

import { ContentSection, Footer, LightGrayPlatform } from '../components/Layout'
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
             The Student Success Handbook at WPI is specifically designed to ensure that all students,
              including those from diverse backgrounds, can access and benefit from the abundance of fundamental 
              resources on campus that foster student success. We emphasize a range of strategies and tools tailored 
              to support the diverse student body, making it easier for incoming students to find the right resources 
              for their unique needs at WPI. Here, we emphasize strategies and available tools that promote the success 
              of our diverse student body - there is something for everyone at WPI if you know where to look! For more general 
              student information check out <a href="https://www.wpi.edu/sites/default/files/2023-04/GompeisGuide_2022_DIgital.pdf" target='_blank'>gompei's guide</a>
            </BodyText>
            <BodyText> 
             Our Values include Respect, Community, Inclusion, Innovation, and Achievement.
            </BodyText>
          </ContentSection>
          <ContentSection>
              <QuoteRight color="red">“I define success as doing what you enjoy, but also like feeling secure in what you're doing. So just finding that balance between having pieces that you can enjoy while still making sure that you're doing everything that you need to do.”</QuoteRight>
              <QuoteRight color="gray">“Success is to me failing over and over until you find a satisfactory point. So like the continuation of just learning from your failures, and instead of just giving up, you keep going until you get to your end goal, that’s success to me.” </QuoteRight>
          </ContentSection>

          {/* Resources */}
          <ContentSection>
            <AccordionTitle title="WPI Emergency Resources">
              <AccordionLink title ="WPI Police" href="https://www.wpi.edu/offices/police"/>
              <AccordionLink title ="Student Development & Counseling Center" href="https://www.wpi.edu/offices/student-development-counseling-center"/>
              <AccordionLink title ="Campus Shuttles" href="https://www.wpi.edu/student-experience/resources/safety/campus-transportation"/>
              <AccordionLink title ="Health Services" href="https://www.wpi.edu/student-experience/health-counseling/health-services"/>
              <AccordionLink title ="Title IX" href="https://www.wpi.edu/offices/title-ix/how-to-report-sexual-misconduct"/>
            </AccordionTitle>
            <AccordionTitle title="Additional Emergency Resources">
              <AccordionItem title ="State Police: 508-829-8326"/>
              <AccordionItem title ="UMass Medical Center: 508-334-1000"/>
              <AccordionItem title ="St. Vincent Hospital: 508-334-5000"/>
              <AccordionLink title ="Pathways for change" href="https://pathwaysforchange.help/"/>
              <AccordionLink title ="YWCA Daybreak" href="https://ywcacm.org/domestic-violence/"/>
              <AccordionLink title ="Suicide and Crisis Hotline" href="https://988lifeline.org/?utm_source=google&utm_medium=web&utm_campaign=onebox"/>
            </AccordionTitle>
          </ContentSection>

          <Footer/>
        </View>
      </View>
    
    </ScrollView>
  )
}