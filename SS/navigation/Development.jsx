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
import { AppDrawerItemName } from '../api/navigation'

const internships = require("../assets/internships.jpg")
const coops = require("../assets/coops.jpg")
const cdc = require("../assets/cdc.png")

export default function Development({navigation}) {

  return (
    <ScrollView>

      <Navbar n={navigation} title={AppDrawerItemName.Development}/>

      <View style={{backgroundColor: "#e4e4e4", width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <View style={{...dropShadow, backgroundColor: "#ffffff", width: "100%", maxWidth: 800, display: "flex", flexDirection: "column"}}>
          <PageHeader>Academic and Career Development at WPI</PageHeader>
          
          <ContentSection>
            <ImageHeader image={internships}>Internships</ImageHeader>
            <ButtonCentered href="https://www.wpi.edu/student-experience/career-development/internships">Visit Internships</ButtonCentered>
          </ContentSection>
          
          <ContentSection>
            <ImageHeader image={coops}>Co-ops</ImageHeader>
            <ButtonCentered href="https://www.wpi.edu/student-experience/career-development/co-ops">Visit Co-ops</ButtonCentered>
          </ContentSection>

          <ContentSection>
            <ImageHeader image={cdc}>Career Development Resources</ImageHeader>
            <ButtonCentered href="https://www.wpi.edu/offices/career-development-center">Visit the CDC</ButtonCentered>
          </ContentSection>
          
          <Footer/>
        </View>
      </View>
      
    
    </ScrollView>
  )
}