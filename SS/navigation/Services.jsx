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

const res = require("../assets/res.jpg")
const housing = require("../assets/housing.jpg")

export default function Services({navigation}) {

  return (
    <ScrollView>

      <Navbar n={navigation}/>

      <View style={{backgroundColor: "#e4e4e4", width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <View style={{...dropShadow, backgroundColor: "#ffffff", width: "100%", maxWidth: 800, display: "flex", flexDirection: "column"}}>
          <PageHeader>Campus Services at WPI</PageHeader>
          
          <ContentSection>
            <ImageHeader image={res}>Residential Services</ImageHeader>
            <ButtonCentered href="https://www.wpi.edu/offices/residential-services-office">Visit Res Services</ButtonCentered>
          </ContentSection>
          
          <ContentSection>
            <ImageHeader>Office Directory</ImageHeader>
          </ContentSection>

          <ContentSection>
            <ImageHeader image={housing}>Housing</ImageHeader>
            <ButtonCentered href="https://www.wpi.edu/student-experience/housing-dining/living-on-campus/current-students/residences">Visit Housing</ButtonCentered>
          </ContentSection>
          
          <Footer/>
        </View>
      </View>
      
    
    </ScrollView>
  )
}