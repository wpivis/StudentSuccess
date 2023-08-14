import { View, Text, Button, Dimensions } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { BodyText, CenteredTitle, HeaderRight, BracketedText, ImageHeader, PageHeader, SectionContentHeader, QuoteRight, QuoteLeft, GreayTextBeam, GrayTextBeam } from "../components/Text"
import { ButtonBlock, ButtonCentered } from "../components/Buttons"

import { ContentSection, Footer, HeaderSubtitle, LightGrayPlatform, TransparentPlatform, RedBeam, Spacer } from '../components/Layout'
import { dropShadow, lorem, loremShort, textBlockMaxWidth } from '../assets/style'
import { ImageContainer } from '../components/Images'
import { AcademicsChecklist } from './Checklists'
import { AppDrawerItemName, } from '../api/navigation'
import { Navbar, } from '../components/Navigation'

import Carousel from 'react-native-reanimated-carousel';


//images
//library
const lib1 = require("../assets/Library1.jpg")
const lib2 = require("../assets/Library2.jpg")
const lib3 = require("../assets/Library3.jpg")
const lib4 = require("../assets/Library4.jpg")
//gym
const gym1 = require("../assets/Gym1.jpg")
const gym2 = require("../assets/Gym2.jpg")
const gym3 = require("../assets/Gym3.jpg")
const gym4 = require("../assets/Gym4.jpg")
const gym5 = require("../assets/Gym5.jpg")
const gym6 = require("../assets/Gym6.jpg")
//Placeholder
const atc = require("../assets/ATC.jpg")
const arc = require("../assets/ARC.jpg")


export default function Services({ navigation }) {
    const width = Dimensions.get('window').width;
    const carouselWidth = width > 800 ? 800 : width;
    const carouselHeight = 200;

    return (
        <ScrollView>

            <Navbar n={navigation} title={AppDrawerItemName.Facilities} />

            <View style={{ backgroundColor: "#e4e4e4", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <View style={{ ...dropShadow, backgroundColor: "#ffffff", width: "100%", maxWidth: 800, display: "flex", flexDirection: "column" }}>
                    <PageHeader>Facilities and Amenities at WPI</PageHeader>

                    <ContentSection>
                        <View style={{ flex: 1, backgroundColor: "#f4f4f4", }}>
                            <Carousel
                                loop
                                width={carouselWidth}
                                data={LibraryCarouselData}
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
                                        <ImageHeader image={LibraryCarouselData[index].image}>Gordan Library</ImageHeader>
                                    </View>
                                )}
                            />
                        </View>
                        <HeaderSubtitle>WPI Gordon Library is a helpful resource providing vast study spaces, computers, printers, as well as recreational and textbook rentals</HeaderSubtitle>
                        <ButtonCentered href="https://hub.wpi.edu/spread/2/student-resources">ITS Hub</ButtonCentered>
                        <ButtonCentered href="https://www.wpi.edu/library">WPI Library Search</ButtonCentered>
                    </ContentSection>

                    <ContentSection>
                        <View style={{ flex: 1, backgroundColor: "#f4f4f4", }}>
                            <Carousel
                                loop
                                width={carouselWidth}
                                data={GymCarouselData}
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
                                        <ImageHeader image={GymCarouselData[index].image}>Sports and Recreation Center</ImageHeader>
                                    </View>
                                )}
                            />

                        </View>
                        <HeaderSubtitle>The Rec Center at WPI provides a number of fitness resources to help students stay active.</HeaderSubtitle>
                        <Spacer />
                        <GrayTextBeam>Indoor Track</GrayTextBeam>
                        <GrayTextBeam>Swimming Pool</GrayTextBeam>
                        <GrayTextBeam>Racketball and Squash courts in basement</GrayTextBeam>
                        <GrayTextBeam>Intramural and Club Sports Available</GrayTextBeam>
                        <QuoteLeft color="red">
                            “Definitely use the gym, exercising is helpful for your mental health.”
                        </QuoteLeft>
                        <ButtonCentered href='https://www.wpi.edu/student-experience/sports-recreation/sports-recreation-center'>Rec Center Hours</ButtonCentered>
                    </ContentSection>

                    <ContentSection>
                        <ImageHeader image={atc}>Academic Technology Center</ImageHeader>
                        <HeaderSubtitle>The Academic Technology Center (ATC), located in Fuller Laboratory, supports students through providing group work spaces, equipment, workshops, and other technological support on campus.</HeaderSubtitle>
                        <Spacer />
                        <GrayTextBeam>Renting Equipment</GrayTextBeam>
                        <GrayTextBeam>Printing Posters</GrayTextBeam>
                        <GrayTextBeam>Hosting Workshops</GrayTextBeam>
                    </ContentSection>
                    <ContentSection>
                        <ImageHeader image={arc}>Academic and Research Computing</ImageHeader>
                        <HeaderSubtitle>Academic and Research Computing (the other ARC) consists of laboratory and computing facilities, providing students with research resources and workshops.</HeaderSubtitle>
                        <View style={{ paddingTop: 10 }}>
                            <ButtonCentered href='https://www.wpi.edu/offices/vice-provost-research/academic-research-computing'>Visit the ARC</ButtonCentered>
                        </View>
                    </ContentSection>

                    <ContentSection>
                        <HeaderRight>Gender Inclusive Restrooms</HeaderRight>
                        <BracketedText>WPI offers several gender inclusive restrooms around campus. </BracketedText>
                        <ButtonCentered href="https://maps.wpi.edu/?id=609&_gl=1*176mf9c*_ga*MTk5NjIyODU2LjE2ODQ3ODA0NTY.*_ga_RE35PKQB7J*MTY5MDQ3MTY1Mi4xNDMuMS4xNjkwNDcxOTc2LjQxLjAuMA..#!s/">Map to Gender Inclusive Restrooms</ButtonCentered>
                    </ContentSection>

                    <ContentSection>
                        <HeaderRight>Free Menstrual Hygiene Products</HeaderRight>
                        <BracketedText>The Period Agenda (TPA) is a student organization dedicated to period poverty, menstrual equity, and educating the campus on menstrual-related subjects. WPI offers free menstrual hygiene products at various locations on campus. </BracketedText>
                        <ButtonCentered href="https://www.wpi.edu/news/announcements/tpa-and-odime-offer-free-menstrual-hygiene-products-wpi-community">TPA and product locations</ButtonCentered>
                    </ContentSection>

                    <Footer />
                </View>
            </View>


        </ScrollView>
    )
}

const LibraryCarouselData = [
    {
        image: lib1,
        text: ""
    },
    {
        image: lib2,
        text: ""
    },
    {
        image: lib3,
        text: ""
    },
    {
        image: lib4,
        text: ""
    },
]

const GymCarouselData = [
    {
        image: gym1,
        text: ""
    },
    {
        image: gym2,
        text: ""
    },
    {
        image: gym3,
        text: ""
    },
    {
        image: gym4,
        text: ""
    },
    {
        image: gym5,
        text: ""
    },
    {
        image: gym6,
        text: ""
    },
]
