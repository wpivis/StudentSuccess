import { View, Text, Button } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { CenteredTitle, HeaderRight, BracketedText, ImageHeader, PageHeader, SectionContentHeader, QuoteRight, QuoteLeft, GreayTextBeam, BodyText } from "../components/Text"
import { ButtonBlock, ButtonCentered } from "../components/Buttons"

import { ContentSection, Footer, LightGrayPlatform, TransparentPlatform, RedBeam } from '../components/Layout'
import { dropShadow, lorem, loremShort, textBlockMaxWidth } from '../assets/style'
import { ImageContainer } from '../components/Images'
import { AcademicsChecklist } from './Checklists'
import { Navbar } from '../App'
import { AppDrawerItemName } from '../api/navigation'

const odime = require("../assets/odime.jpg")
const lgbtqia = require("../assets/lgbtqia.jpg")
const womensgroups = require("../assets/womensgroups.jpg")
const cdc = require("../assets/cdc.png")

export default function Diversity({navigation}) {

  return (
    <ScrollView>

      <Navbar n={navigation} title={AppDrawerItemName.Diversity}/>

      <View style={{backgroundColor: "#e4e4e4", width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <View style={{...dropShadow, backgroundColor: "#ffffff", width: "100%", maxWidth: 800, display: "flex", flexDirection: "column"}}>
          <PageHeader>Cultural and Diversity Resources</PageHeader>
          
          <ContentSection>
            <BodyText>
              WPI offers a plethora of affinity groups and identity-specific support organizations and programs. These include student run groups, official campus offices, and academic programs. We suggest that you look into these organizations to find your community and tribe at WPI!
            </BodyText>
          </ContentSection>

          <ContentSection>
            <ImageHeader>Accessibility Services</ImageHeader>
            <ButtonCentered href="https://www.wpi.edu/student-experience/resources/accessibility-services">Visit Accessibility Services</ButtonCentered>
            <HeaderRight>Exam Proctoring</HeaderRight>
            <HeaderRight>Orientation</HeaderRight>
            <HeaderRight>Interactive Map</HeaderRight>
          </ContentSection>

          <ContentSection>
            <ImageHeader image={odime}>ODIME</ImageHeader>
            <ButtonCentered href="https://www.wpi.edu/offices/diversity">Visit ODIME</ButtonCentered>
            <HeaderRight>Diversity Programming</HeaderRight>
            <HeaderRight>ODIME Resources</HeaderRight>
          </ContentSection>
          
          <ContentSection>
            <ImageHeader>Collegiate Religious Center</ImageHeader>
            <HeaderRight>Campus Organizations</HeaderRight>
            <HeaderRight>Common Room</HeaderRight>
            <HeaderRight>Vegan Kitchen</HeaderRight>
            <HeaderRight>Multifaith Mindfulness Space</HeaderRight>
            <HeaderRight>Islamic Prayer Room</HeaderRight>
          </ContentSection>

          <ContentSection>
            <ImageHeader>International House</ImageHeader>
            <ButtonCentered href="https://www.wpi.edu/alumni/community/alumni-groups/womens-groups">Visit the International House</ButtonCentered>
            <HeaderRight>Appointments</HeaderRight>
            <HeaderRight>Immigration Assistance</HeaderRight>
          </ContentSection>
          
          <ContentSection>
            <ImageHeader image={womensgroups}>Gender, Sexuality, and Women's Studies</ImageHeader>
            <ButtonCentered href="https://www.wpi.edu/alumni/community/alumni-groups/womens-groups">Visit Women's Groups</ButtonCentered>
            <HeaderRight>Courses</HeaderRight>
            <HeaderRight>Programming</HeaderRight>
          </ContentSection>
          
          <ContentSection>
            <ImageHeader image={lgbtqia}>LGBTQIA+</ImageHeader>
            <ButtonCentered href="https://www.wpi.edu/offices/diversity/resources/lgbtq-support">Visit LGBTQIA+ Support</ButtonCentered>
            <HeaderRight>Gender Inclusive Housing</HeaderRight>
            <HeaderRight>Identity Resources</HeaderRight>
            <HeaderRight>WPI Alliance Chapter</HeaderRight>
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