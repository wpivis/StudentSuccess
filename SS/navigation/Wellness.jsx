import { View, Text, Button } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { CenteredTitle, HeaderRight, BracketedText, ImageHeader, PageHeader, SectionContentHeader, QuoteRight, QuoteLeft, GreayTextBeam } from "../components/Text"
import { ButtonBlock, ButtonCentered } from "../components/Buttons"

import { ContentSection, Footer, LightGrayPlatform, TransparentPlatform, RedBeam } from '../components/Layout'
import { dropShadow, lorem, loremShort, textBlockMaxWidth } from '../assets/style'
import { ImageContainer } from '../components/Images'
import { AcademicsChecklist } from './Checklists'
import { Navbar } from '../App'

const sdcc = require("../assets/sdcc.jpg")
const wellbeing = require("../assets/wellbeing.jpg")
const health = require("../assets/health.jpg")

export default function Wellness({navigation}) {

  return (
    <ScrollView>

      <Navbar n={navigation}/>

      <View style={{backgroundColor: "#e4e4e4", width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <View style={{...dropShadow, backgroundColor: "#ffffff", width: "100%", maxWidth: 800, display: "flex", flexDirection: "column"}}>
          <PageHeader>Wellness Resources at WPI</PageHeader>
          
          <ContentSection>
            <ImageHeader image={sdcc}>SDCC</ImageHeader>
            <ButtonCentered href="https://www.wpi.edu/offices/student-development-counseling-center">Visit the SDCC</ButtonCentered>
          </ContentSection>
          
          <ContentSection>
            <ImageHeader image={wellbeing}>Center for Well-Being</ImageHeader>
            <ButtonCentered href="https://www.wpi.edu/student-experience/health-wellness/center-for-well-being">Visit the Wellness Center</ButtonCentered>
          </ContentSection>

          <ContentSection>
            <ImageHeader image={health}>Health Services</ImageHeader>
            <ButtonCentered href="https://www.wpi.edu/student-experience/health-counseling/health-services">Visit Health Services</ButtonCentered>
          </ContentSection>
          
          <Footer/>
        </View>
      </View>
      
    
    </ScrollView>
  )
}