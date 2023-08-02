import { View, Text, Button, Dimensions, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { BodyText, CenteredTitle, HeaderRight, BracketedText, ImageHeader, PageHeader, SectionContentHeader, QuoteRight, QuoteLeft, GreayTextBeam, GrayTextBeam } from "../components/Text"
import { ButtonBlock, ButtonCentered } from "../components/Buttons"

import { ContentSection, Footer, HeaderSubtitle, LightGrayPlatform, TransparentPlatform, RedBeam } from '../components/Layout'
import { dropShadow, lorem, loremShort, textBlockMaxWidth } from '../assets/style'
import { ImageContainer } from '../components/Images'
import { AcademicsChecklist } from './Checklists'
import { AppDrawerItemName, } from '../api/navigation'
import { Navbar, } from '../components/Navigation'

import Carousel from 'react-native-reanimated-carousel';


//images
//housing
const dorm = require("../assets/res.jpg")
const housing = require("../assets/housing.jpg")
const daniels = require("../assets/Daniels.jpg")
const founders = require("../assets/FoundersHall.jpg")
const institute = require("../assets/InstituteHall.jpg")
const messenger = require("../assets/Messenger.jpg")
const morgan = require("../assets/Morgan.jpg")
const sanford = require("../assets/SanfordRiley Hall.jpg")
const stodd = require("../assets/Stodd.jpg")
const trowbridge = require("../assets/TrowbridgeHouse.jpg")
const wachusett = require("../assets/Wachusett.jpg")

//Dining
const diningHall = require("../assets/DiningHall.jpg")
const loveFood = require("../assets/LoveFood.jpg")
const veggies = require("../assets/Veggies.jpg")
const halal = require("../assets/halal.jpg")
const starbucks = require("../assets/starbucks.jpg")

//Tranportation
const shuttle = require("../assets/Shuttle.jpg")


export default function Services({navigation}) {
  const width = Dimensions.get('window').width;
  const carouselWidth = width > 800 ? 800 : width;
  const carouselHeight = 200;

  return (
    <ScrollView>

      <Navbar n={navigation} title={AppDrawerItemName.Services}/>

      <View style={{backgroundColor: "#e4e4e4", width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <View style={{...dropShadow, backgroundColor: "#ffffff", width: "100%", maxWidth: 800, display: "flex", flexDirection: "column"}}>
          <PageHeader>Campus Services at WPI</PageHeader>
          
          <ContentSection>
          <HeaderRight>Housing & Residential</HeaderRight>
          <View style={{ flex: 1, backgroundColor: "#f4f4f4",}}>
                <Carousel
                  loop
                  width={carouselWidth}
                  data={HousingCarouselData}
                  height={carouselHeight}
                  autoPlay
                  autoPlayInterval={4000}
                  scrollAnimationDuration={1000}
                  renderItem={({ index }) => (
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'flex-start',
                      }}
                    >
                      <ImageHeader image={HousingCarouselData[index].image}>{HousingCarouselData[index].text}</ImageHeader>
                    </View>
                  )}
                />
              </View>
              <HeaderSubtitle>WPI Residential Services provides valuable information about the residential halls on campus and offers helpful tips for those looking for off-campus apartments.</HeaderSubtitle>
            <View style={{ paddingTop: 10 }}>
            <GrayTextBeam >
              Gender-inclusive housing available
            </GrayTextBeam>
            </View>
            <GrayTextBeam>
              <Text>Offers 2 affinity-based spaces upon application: Black Excellence and Lavender Lane</Text>
            </GrayTextBeam>
            <GrayTextBeam>
              <Text>Accommodated housing through the Office of Accessibility</Text>
            </GrayTextBeam>
            <GrayTextBeam>
              <Text>Accommodations available over breaks for students: Grocery purchasing assistance, housing with kitchens, etc.</Text>
            </GrayTextBeam>
            <ButtonCentered href="https://www.wpi.edu/offices/id-services">ID Services</ButtonCentered>
            <ButtonCentered href="https://www.wpi.edu/offices/residential-services-office">Residential Services</ButtonCentered>
          </ContentSection>
          
          <ContentSection>
          <HeaderRight>Dining Services</HeaderRight>
          <View style={{ flex: 1, backgroundColor: "#f4f4f4",}}>
                <Carousel
                  loop
                  width={carouselWidth}
                  data={DiningCarouselData}
                  height={carouselHeight}
                  autoPlay
                  autoPlayInterval={4000}
                  scrollAnimationDuration={1000}
                  renderItem={({ index }) => (
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'flex-start',
                      }}
                    >
                      <ImageHeader image={DiningCarouselData[index].image}>{DiningCarouselData[index].text}</ImageHeader>
                    </View>
                  )}
                />
              </View>
              <HeaderSubtitle>WPI Dining offers a variety of meal plan options. See their website for hours, locations, and offerings. </HeaderSubtitle>
              <View style={{paddingTop: 10}}><GrayTextBeam>Dining services highlights international cuisine</GrayTextBeam> </View>
              <GrayTextBeam>Vegetarian and allergy friendly options are available</GrayTextBeam>    
            <ButtonCentered href="https://www.wpi.edu/sites/default/files/inline-image/Body%20of%20International%20Student%20Handbook%202022-2023.pdf">International Student Handbook</ButtonCentered>
            <ButtonCentered href="https://www.wpi.edu/offices/dining-services">Dining Services</ButtonCentered>
          </ContentSection>

          <ContentSection>
          <HeaderRight>Transportation</HeaderRight>           
      <Image source={shuttle} style={{width: "100%",height: 200, maxHeight: 300, minHeight: 200, objectFit: "cover"}}/>
            <HeaderSubtitle>WPI offers free transportation services on and around campus, including SNAP, Gateway Shuttle, Price Chopper Shuttle, and South Village Shuttle.</HeaderSubtitle>                       
            <ButtonCentered href="https://www.wpi.edu/student-experience/resources/safety/campus-transportation">VPA Bus</ButtonCentered>
            <ButtonCentered href="http://bustracker.therta.com/bustime/home.jsp">WRTA Bus</ButtonCentered>
          </ContentSection>
          <Footer/>
        </View>
      </View>
      
    
    </ScrollView>
  )
}

const HousingCarouselData = [
  {
    image: housing,
    text: ""
  },
  {
    image: daniels,
    text: "Daniels Hall"
  },
  {
    image: founders,
    text: "Founders Hall"
  },
  {
    image: institute,
    text: "Institute Hall"
  },
  {
    image: messenger,
    text: "Messenger Hall"
  },
  {
    image: morgan,
    text: "Morgan Hall"
  },
  {
    image: sanford,
    text: "Sanford Riley Hall"
  },
  {
    image: stodd,
    text: "Stoddard Complex"
  },
  {
    image: trowbridge,
    text: "Trowbridge House"
  },
  {
    image: wachusett,
    text: "Wachusett House"
  },
]

const DiningCarouselData = [
  {
    image: diningHall,
    text: ""
  },
  {
    image: halal,
    text: ""
  },
  {
    image: starbucks,
    text: ""
  },
  {
    image: loveFood,
    text: ""
  },
  {
    image: veggies,
    text: ""
  },
]