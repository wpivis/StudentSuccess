import { View, Text, Button } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { CenteredTitle, HeaderRight, BracketedText, ImageHeader, PageHeader, SectionContentHeader, QuoteRight, QuoteLeft, GreayTextBeam } from "../components/Text"
import { ButtonBlock, ButtonCentered } from "../components/Buttons"

import { ContentSection, Footer, LightGrayPlatform, TransparentPlatform, RedBeam } from '../components/Layout'
import { dropShadow, lorem, loremShort, textBlockMaxWidth } from '../assets/style'
import { ImageContainer } from '../components/Images'
import { AcademicsChecklist } from './Checklists'
import { AppDrawerItemName, } from '../api/navigation'
import { Navbar, } from '../components/Navigation'

const res = require("../assets/res.jpg")
const financialaid = require("../assets/financialaid.jpg")
const bursar = require("../assets/bursar.jpg")

export default function Financial({navigation}) {

  return (
    <ScrollView>

      <Navbar n={navigation} title={AppDrawerItemName.Financial}/>

      <View style={{backgroundColor: "#e4e4e4", width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <View style={{...dropShadow, backgroundColor: "#ffffff", width: "100%", maxWidth: 800, display: "flex", flexDirection: "column"}}>
          <PageHeader>Financial Resources at WPI</PageHeader>
          
          <ContentSection>
            <ImageHeader>Scholarships</ImageHeader>
            <ButtonCentered href="https://www.wpi.edu/admissions/tuition-aid/types-of-aid/scholarships-grants/wpi-merit">Visit Merit-Based Scholarhips</ButtonCentered>
          </ContentSection>
          
          <ContentSection>
            <ImageHeader>Grants</ImageHeader>
            <ButtonCentered href="https://www.wpi.edu/admissions/tuition-aid/types-of-aid/scholarships-grants">Visit Scholarships and Grants</ButtonCentered>
          </ContentSection>

          <ContentSection>
            <ImageHeader image={financialaid}>Financial Aid Office</ImageHeader>
            <ButtonCentered href="https://www.wpi.edu/admissions/tuition-aid">Visit Bursar</ButtonCentered>
          </ContentSection>

          <ContentSection>
            <ImageHeader image={bursar}>Bursar</ImageHeader>
            <ButtonCentered href="https://www.wpi.edu/offices/bursar">Visit Housing</ButtonCentered>
          </ContentSection>
          
          <Footer/>
        </View>
      </View>
      
    
    </ScrollView>
  )
}