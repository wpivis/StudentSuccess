import { View, Text, Button } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { CenteredTitle, HeaderRight, BracketedText, ImageHeader, PageHeader, SectionContentHeader, QuoteRight, QuoteLeft, GreayTextBeam } from "../components/Text"
import { ButtonBlock, ButtonCentered } from "../components/Buttons"

import { ContentSection, Footer, LightGrayPlatform, TransparentPlatform, RedBeam, DirectorySection } from '../components/Layout'
import { dropShadow, lorem, loremShort, textBlockMaxWidth } from '../assets/style'
import { ImageContainer } from '../components/Images'
import { AcademicsChecklist } from './Checklists'
import { AppDrawerItemName, } from '../api/navigation'
import { Navbar, } from '../components/Navigation'

export default function Directory({navigation}) {

  return (
    <ScrollView>

      <Navbar n={navigation} title={AppDrawerItemName.Directory}/>

      <View style={{backgroundColor: "#e4e4e4", width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <View style={{...dropShadow, backgroundColor: "#ffffff", width: "100%", maxWidth: 800, display: "flex", flexDirection: "column"}}>
          <PageHeader>Office & Resource Directory</PageHeader>

          <ContentSection>
            <CenteredTitle>
              <Text>Offices</Text>
            </CenteredTitle>

            <DirectorySection>
              <DirectorySection.Title source="https://www.wpi.edu/offices/residential-services-office">Residential Services</DirectorySection.Title>
              <DirectorySection.Address>title</DirectorySection.Address>
              <DirectorySection.Phone>508-831-5645</DirectorySection.Phone>
            </DirectorySection>
          </ContentSection>
          

          <Footer/>
        </View>
      </View>
      
    
    </ScrollView>
  )
}