import { View, Text, Button, Dimensions } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { BodyText, CenteredTitle, HeaderRight, BracketedText, ImageHeader, PageHeader, SectionContentHeader, QuoteRight, QuoteLeft, GreayTextBeam, GrayTextBeam } from "../components/Text"
import { ButtonBlock, ButtonCentered } from "../components/Buttons"
import { Image } from "expo-image"

import { ContentSection, Footer, HeaderSubtitle, LightGrayPlatform, TransparentPlatform, RedBeam } from '../components/Layout'
import { dropShadow, lorem, loremShort, textBlockMaxWidth } from '../assets/style'
import { ImageContainer } from '../components/Images'
import { AcademicsChecklist } from './Checklists'
import { AppDrawerItemName, } from '../api/navigation'
import { Navbar, } from '../components/Navigation'

import { ImageCarousel } from '../components/Images'
import Carousel from 'react-native-reanimated-carousel';


//images
//housing

const housing = require("../assets/Services/housing.jpg")
const daniels = require("../assets/Services/Daniels.jpg")
const founders = require("../assets/Services/FoundersHall.jpg")
const institute = require("../assets/Services/InstituteHall.jpg")
const messenger = require("../assets/Services/Messenger.jpg")
const morgan = require("../assets/Services/Morgan.jpg")
const sanford = require("../assets/Services/SanfordRileyHall.jpg")
const stodd = require("../assets/Services/Stodd.jpg")
const trowbridge = require("../assets/Services/TrowbridgeHouse.jpg")
const wachusett = require("../assets/Services/Wachusett.jpg")

//Dining
const diningHall = require("../assets/Services/DiningHall.jpg")
const loveFood = require("../assets/Services/LoveFood.jpg")
const veggies = require("../assets/Services/Veggies.jpg")
const halal = require("../assets/Services/halal.jpg")
const starbucks = require("../assets/Services/starbucks.jpg")

//Tranportation
const shuttle = require("../assets/Services/Shuttle.jpg")


export default function Services({ navigation }) {
  const width = Dimensions.get('window').width;

  return (
    <ScrollView>

      <Navbar n={navigation} title={AppDrawerItemName.Services} />

      <View style={{ backgroundColor: "#e4e4e4", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <View style={{ ...dropShadow, backgroundColor: "#ffffff", width: "100%", maxWidth: 800, display: "flex", flexDirection: "column" }}>
          <PageHeader>Campus Services at WPI</PageHeader>

          <ContentSection>
          <LightGrayPlatform>
            <BodyText>Hello new WPI community members!</BodyText>
            <BodyText>My name is Matt Foster, he/him/his, and I am the Director of Residential Services. I have been at WPI for over a decade and love the community that is WPI. My few pieces of advice are included here to help you in your success. Always be open to asking any questions you have of any staff or faculty member because everyone is willing to help in any way they can. Take the time to talk with your roommates/project team members/ group members/etc. about anything going on or if you have a conflict before it gets too far and your experience suffers because you feel like you can’t handle it. Lastly, get involved and join something on campus that you are passionate about!</BodyText>
            <BodyText>Feel free to say hi to me if you see me on campus and reach out to our office anytime you have a question!</BodyText>
            </LightGrayPlatform>
            <HeaderRight>Housing & Residential</HeaderRight>
            <ImageCarousel data={HousingCarouselData}></ImageCarousel>
            <HeaderSubtitle>WPI Residential Services provides valuable information about the residential halls on campus and offers helpful tips for those looking for off-campus apartments.</HeaderSubtitle>
            <View style={{ paddingTop: 10 }}>
              <GrayTextBeam >
                Gender-inclusive housing available
              </GrayTextBeam>
            </View>
            <GrayTextBeam>
              <Text>Offers 2 affinity-based spaces upon application: Center for Black Excellence and Lavender Lounge</Text>
            </GrayTextBeam>
            <GrayTextBeam>
              <Text>Accommodated housing through the Office of Accessibility</Text>
            </GrayTextBeam>
            <GrayTextBeam>
              <Text>Accommodations available over breaks for students: grocery purchasing assistance, housing with kitchens, etc.</Text>
            </GrayTextBeam>
            <ButtonCentered href="https://www.wpi.edu/offices/id-services">ID Services</ButtonCentered>
            <ButtonCentered href="https://www.wpi.edu/offices/residential-services-office">Residential Services</ButtonCentered>
          </ContentSection>

          <ContentSection>
            <HeaderRight>Dining Services</HeaderRight>
            <ImageCarousel data={DiningCarouselData}></ImageCarousel>
            <HeaderSubtitle>WPI Dining offers a variety of meal plan options. See their website for hours, locations, and offerings. </HeaderSubtitle>
            <View style={{ paddingTop: 10 }}><GrayTextBeam>Dining services highlights international cuisine</GrayTextBeam> </View>
            <GrayTextBeam>Vegetarian and allergy friendly options are available</GrayTextBeam>
            <ButtonCentered href="https://www.wpi.edu/sites/default/files/inline-image/Body%20of%20International%20Student%20Handbook%202022-2023.pdf">International Student Handbook</ButtonCentered>
            <ButtonCentered href="https://www.wpi.edu/offices/dining-services">Dining Services</ButtonCentered>
          </ContentSection>

          <ContentSection>
            <HeaderRight>Transportation</HeaderRight>
            <Image style={{width:'100%', height:200}} source={shuttle}/>
            <HeaderSubtitle>WPI offers free transportation services on and around campus, including SNAP, Gateway Shuttle, Price Chopper Shuttle, and South Village Shuttle.</HeaderSubtitle>
            <ButtonCentered href="https://www.wpi.edu/student-experience/resources/safety/campus-transportation">VPA Bus</ButtonCentered>
            <ButtonCentered href="http://bustracker.therta.com/bustime/home.jsp">WRTA Bus</ButtonCentered>
          </ContentSection>
          <Footer />
        </View>
      </View>


    </ScrollView>
  )
}

const HousingCarouselData = [
  {
    image: housing,
    text: "Housing"
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