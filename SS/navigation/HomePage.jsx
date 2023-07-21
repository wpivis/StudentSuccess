import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { BodyText, CenteredTitle, HeaderRight, BracketedText, ImageHeader, PageHeader, SectionContentHeader, QuoteRight, QuoteLeft, GreayTextBeam } from "../components/Text"
import { AccordionList, renderAccordion } from "../components/Accordion"


import { ContentSection, Footer, LightGrayPlatform, TransparentPlatform, RedBeam } from '../components/Layout'
import wpiIcon from "../assets/adaptive-icon.png"

export default function HomePage() {
  const emergencyResources = require('../assets/emergencyResources.json');
  const imageStyles = {
    width: '50%',
    alignSelf: 'center',
    maxWidth: '250px',
    paddingBottom: '20px'
  };
  console.log(emergencyResources);
  return (
    <ScrollView>

      <PageHeader>Welcome to WPI!</PageHeader>
        <img src = {wpiIcon} alt="Worcester Skyline" style={imageStyles}/>
        <BodyText> 
          WPI transforms lives, turns knowledge into action to confront global challenges, and revolutionizes STEM through distinctive and inclusive education, projects, and research.
        </BodyText>
        <BodyText> 
          Our Values include Respect, Community, Inclusion, Innovation, and Achievement.
        </BodyText>
      <ContentSection>
        <CenteredTitle>WPI Emergency Resources</CenteredTitle>
        <AccordionList content = {emergencyResources} />
        <AccordionList content = {emergencyResources} />
        <></>
        <CenteredTitle>Additional Emergency Resources</CenteredTitle>
      </ContentSection>
      
      <Footer/>
    
    </ScrollView>
  )
}