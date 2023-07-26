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

const odime = require("../assets/odime.jpg")
const lgbtqia = require("../assets/lgbtqia.jpg")
const womensgroups = require("../assets/womensgroups.jpg")
const cdc = require("../assets/cdc.png")

export default function Diversity({navigation}) {

  return (
    <ScrollView>

      <Navbar n={navigation}/>

      <View style={{backgroundColor: "#e4e4e4", width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <View style={{...dropShadow, backgroundColor: "#ffffff", width: "100%", maxWidth: 800, display: "flex", flexDirection: "column"}}>
          <PageHeader>Cultural and Diversity Resources</PageHeader>
          
          <ContentSection>
            <ImageHeader image={odime}>ODIME</ImageHeader>
            <ButtonCentered href="https://www.wpi.edu/offices/diversity">Visit ODIME</ButtonCentered>
          </ContentSection>
          
          <ContentSection>
            <ImageHeader>Cultural Events</ImageHeader>
          </ContentSection>
          
          <ContentSection>
            <ImageHeader>Student-Led Affinity Groups</ImageHeader>
          </ContentSection>
          
          <ContentSection>
            <ImageHeader>Workshops and Programs</ImageHeader>
          </ContentSection>
          
          <ContentSection>
            <ImageHeader image={lgbtqia}>LGBTQIA+</ImageHeader>
            <ButtonCentered href="https://www.wpi.edu/offices/diversity/resources/lgbtq-support">Visit LGBTQIA+ Support</ButtonCentered>
          </ContentSection>
          
          <ContentSection>
            <ImageHeader image={womensgroups}>Women's Groups</ImageHeader>
            <ButtonCentered href="https://www.wpi.edu/alumni/community/alumni-groups/womens-groups">Visit Women's Groups</ButtonCentered>
          </ContentSection>
          
          <ContentSection>
            <ImageHeader>Accessibility Services</ImageHeader>
            <ButtonCentered href="https://www.wpi.edu/student-experience/resources/accessibility-services">Visit Accessibility Services</ButtonCentered>
          </ContentSection>
          
          <ContentSection>
            <ImageHeader>Equal Opportunity and Outreach</ImageHeader>
            <ButtonCentered href="https://www.wpi.edu/offices/equal-opportunity-outreach">Visit Equal Opportunity and Outreach</ButtonCentered>
          </ContentSection>
          
          <ContentSection>
            <ImageHeader>Title IX</ImageHeader>
            <ButtonCentered href="https://www.wpi.edu/offices/title-ix/title-ix-and-sexual-misconduct-policy">Visit Title IX</ButtonCentered>
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