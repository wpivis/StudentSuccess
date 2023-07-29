import { View, Text, Button, Dimensions } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { BodyText, CenteredTitle, HeaderRight, BracketedText, ImageHeader, PageHeader, SectionContentHeader, QuoteRight, QuoteLeft, GreayTextBeam } from "../components/Text"
import { ButtonBlock, ButtonCentered } from "../components/Buttons"

import { ContentSection, Footer, LightGrayPlatform, TransparentPlatform, RedBeam } from '../components/Layout'
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
const morgan = require("../assets/Morgan.jpg")
const schussler = require("../assets/Schussler.jpg")

//Dining
const diningHall = require("../assets/DiningHall.jpg")
const loveFood = require("../assets/LoveFood.jpg")
const veggies = require("../assets/Veggies.jpg")

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
          <View style={{ flex: 1, backgroundColor: "#f4f4f4",}}>
                <Carousel
                  loop
                  width={carouselWidth}
                  data={HousingCarouselData}
                  height={carouselHeight}
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
            <BodyText>
            WPI Residential Services provides valuable information about the residential halls on campus and offers helpful tips for those looking for off-campus apartments. They are committed to gender-inclusive housing and have two affinity-based spaces, namely Black Excellence and Lavender Lane, which students can apply for. Additionally, the Office of Accessibility ensures suitable accommodations for students who need them. Over breaks, they offer accommodations for students who choose to stay, and some may be moved to spaces with kitchen facilities. If needed, they also provide grocery purchasing assistance. <a href="https://www.wpi.edu/offices/id-services">ID Services</a> are available to assist you with any WPI ID card issues. Rest assured, you'll find all the support you need for your housing journey at WPI Residential Services.
            </BodyText>
            <ButtonCentered href="https://www.wpi.edu/offices/residential-services-office">Residential Services</ButtonCentered>
          </ContentSection>
          
          <ContentSection>
          <View style={{ flex: 1, backgroundColor: "#f4f4f4",}}>
                <Carousel
                  loop
                  width={carouselWidth}
                  data={DiningCarouselData}
                  height={carouselHeight}
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
            <BodyText>
            WPI Dining provides a wide array of meal plan options to cater to various preferences. You can visit their <a href="https://www.wpi.edu/offices/dining-services">website</a>  to find detailed information about their operating hours, locations, and their menu. If you have specific dietary needs, don't worry—Dining Services also offers vegetarian and allergen-friendly options to accommodate everyone. For those looking to explore diverse culinary experiences in Worcester, be sure to refer to the <a href="https://www.wpi.edu/sites/default/files/inline-image/Body%20of%20International%20Student%20Handbook%202022-2023.pdf">International Student Handbook</a> for some fantastic recommendations.
            </BodyText>
          </ContentSection>

          <ContentSection>
            <ImageHeader image={shuttle}>Transportation</ImageHeader>
            <BodyText>
              WPI offers free transportation services on and around campus, including SNAP, Gateway Shuttle, Price Chopper Shuttle, and South Village Shuttle. These services ensure convenient travel for our students, making it easier to get where you need to go. Enjoy the benefits of hassle-free transportation at WPI!
            </BodyText>
            <BodyText>
              Click <a href="http://bustracker.therta.com/bustime/home.jsp">here</a> for transportation info off campus in Worcester.
            </BodyText>
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
    text: "Housing & Residential Services"
  },
  {
    image: daniels,
    text: "Daniels Hall"
  },
  {
    image: morgan,
    text: "Morgan Hall"
  },
  {
    image: schussler,
    text: "Schussler House"
  },
  {
    image: dorm,
    text: ""
  },
]

const DiningCarouselData = [
  {
    image: diningHall,
    text: "Dining"
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