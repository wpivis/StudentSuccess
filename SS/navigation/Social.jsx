import { View, Text, Button, Dimensions } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { CenteredTitle, HeaderRight, BracketedText, ImageHeader, PageHeader, SectionContentHeader, QuoteRight, QuoteLeft, GreayTextBeam, GrayTextBeam } from "../components/Text"
import { ButtonBlock, ButtonCentered } from "../components/Buttons"

import { ContentSection, Footer, LightGrayPlatform, TransparentPlatform, RedBeam, RedPlatform } from '../components/Layout'
import { dropShadow, lorem, loremShort, textBlockMaxWidth } from '../assets/style'
import { ImageContainer } from '../components/Images'
import { AcademicsChecklist } from './Checklists'
import { AppDrawerItemName, } from '../api/navigation'
import { Navbar, } from '../components/Navigation'
import Carousel from 'react-native-reanimated-carousel'

const width = Dimensions.get('window').width;
const carouselWidth = width > 800 ? 800 : width;
const carouselHeight = 150;

const clubs = require("../assets/clubs.png")
const connections = require("../assets/connections.jpg")
const greek = require("../assets/greek.jpg")
const sports = require("../assets/sports.jpg")
const hockey = require("../assets/hockey.jpg")

export default function Social({navigation}) {


  return (
    <ScrollView>

      <Navbar n={navigation} title={AppDrawerItemName.Social}/>

      <View style={{backgroundColor: "#e4e4e4", width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <View style={{...dropShadow, backgroundColor: "#ffffff", width: "100%", maxWidth: 800, display: "flex", flexDirection: "column"}}>
          <PageHeader>Social Life: On Campus at WPI</PageHeader>


          
        <ContentSection>
          <ImageHeader image={connections}>Connections</ImageHeader>
          <BracketedText>
            How did other WPI students jumpstart their social lives at WPI? Many students emphasized the importance of Connections in their experiences integrating at WPI.
          </BracketedText>
          <ButtonCentered href="https://www.wpi.edu/offices/diversity/success-programs/connections">See more on Connections</ButtonCentered>
          <ContentSection>
            <LightGrayPlatform>
              <Carousel
                  loop
                  width={carouselWidth}
                  data={carouselItems}
                  height={carouselHeight}
                  autoPlay
                  autoPlayInterval={2000}
                  scrollAnimationDuration={1000}
                  renderItem={({ index }) => (carouselItems[index])}
                  />
            </LightGrayPlatform>
          </ContentSection>

          <ContentSection>
            <QuoteRight color="white">
              "Connections was actually really fun. Honestly, I feel like everyone, if they have the chance, should go through it. The best way I could describe it is it's like a sleepover camp...
              because this is a new environment, a bunch of new people and we're not getting into classes just yet and things are fun."
            </QuoteRight>
          </ContentSection>
        </ContentSection>
        
        <ContentSection>
          <ImageHeader image={clubs}>Student Organizations at WPI</ImageHeader>
          <BracketedText>WPI has over 235 student clubs and organizations; rest assured, there is something for everyone!</BracketedText>
          <ContentSection>
            <GrayTextBeam>Make sure to theck out the activities fair to see what clubs WPI has to offer.</GrayTextBeam>
            <GrayTextBeam>ODIME offers a number of different identity-based affinity groups.</GrayTextBeam>
            <ButtonCentered href="https://www.wpi.edu/offices/diversity/resources">Visit ODIME Affinity Groups</ButtonCentered>
            <QuoteLeft color="white">
              "Definitely try out other clubs, not even just the big ones... don't be afraid to try the smaller clubs. That's where I met my favorite people ever."
            </QuoteLeft>
          </ContentSection>
        </ContentSection>
        
        <ContentSection>
          <ImageHeader image={greek}>Greek Life at WPI</ImageHeader>
          <BracketedText>WPI has 20 active chapters at WPI: 13 fraternities, and 7 sororities.</BracketedText>
          
          <HeaderRight>GZeta Phi Beta</HeaderRight>
          <SectionContentHeader>
            <SectionContentHeader.Title>
              GZeta Phi Beta is a historically black sorority.
            </SectionContentHeader.Title>
          </SectionContentHeader>
          
          <HeaderRight>Theta Nu Xi</HeaderRight>
          <SectionContentHeader>
            <SectionContentHeader.Title>
              Theta Nu Xi is a multicultural sorority.
            </SectionContentHeader.Title>
          </SectionContentHeader>

        </ContentSection>

        
        <ContentSection>
          <ImageHeader image={sports}>Sports at WPI</ImageHeader>
          <BracketedText>Sports are a great way to get involved, find your group of people, and take a mental break from academics.</BracketedText>
          <ButtonCentered href="https://www.wpi.edu/student-experience/sports-recreation/sports-recreation-center/intramurals">Visit Intramural Sports</ButtonCentered>
          <ButtonCentered href="https://www.wpi.edu/student-experience/sports-recreation/sports-recreation-center/club-sports">Visit Club Sports</ButtonCentered>
          <ButtonCentered href="https://athletics.wpi.edu/landing/index?_ga=1.252353354.2135926216.1470656950&_gl=1*7ebl94*_ga*MTk5NjIyODU2LjE2ODQ3ODA0NTY.*_ga_RE35PKQB7J*MTY4ODQwODY2Ni4xMjUuMS4xNjg4NDA5NjY5LjM3LjAuMA..">Visit Varsity Sports</ButtonCentered>
        </ContentSection>

        <ContentSection>
          <ImageHeader image={hockey}>Club Spotlights</ImageHeader>
        
          <HeaderRight>First Generation Student Association (FiGSA)</HeaderRight>
          <SectionContentHeader>
            <SectionContentHeader.Title>
              How can new students connect with your organization?
            </SectionContentHeader.Title>
          </SectionContentHeader>
          <LightGrayPlatform>
            <BracketedText noMargin>
              "We will be attending the activity fairs to sign up for our alias and advertise the club. Our contact information is also linked 
              in the weekly ODIME alias and those at ODIME can contact our exec easily for any questions from students. For events, we always 
              post on Instagram and often print flyers to put in the CC, Unity Hall, the Innovation Studio, and residence halls."
            </BracketedText>
          </LightGrayPlatform>
          <SectionContentHeader>
            <SectionContentHeader.Title>
              What events do you hold throughout the year?
            </SectionContentHeader.Title>
          </SectionContentHeader>
          <LightGrayPlatform>
            <BracketedText noMargin>
              "We host many social events, usually around 3-4 per term, to try to get to know students and have people socialize... We accept anyone 
              who comes, and encourage people to bring their friends. Some of our meetings each term also revolve around resources at the school. For 
              example, in October, we always host a FAFSA and financial aid info session with the financial aid office. We also have a newsletter where 
              we highlight campus resources, advertise our events, and provide links to scholarships and internships."
            </BracketedText>
          </LightGrayPlatform>
        
          <HeaderRight>Society of Asian Scientists and Engineers (SASE)</HeaderRight>
          <SectionContentHeader>
          <SectionContentHeader.Title>
              How can new students utilize your organization?
            </SectionContentHeader.Title>
          </SectionContentHeader>
          <LightGrayPlatform>
            <BracketedText noMargin>
              "SASE helps integrate new members into our organization mainly through our chapter's mentor mentee program. This program is run during the A 
              term, with final mentor-mentee pairings made at the beginning of B term. This program helps introduce incoming freshmen to upperclassmen both in 
              and outside of their major, as well as to other incoming freshmen they may or may not have had the chance to meet outside of our organization. 
              Through our mentor-mentee program, all participant members are able to make new connections to form a close-knit community on campus."
            </BracketedText>
          </LightGrayPlatform>
          <SectionContentHeader>
            <SectionContentHeader.Title>
              What resources do you have available?
            </SectionContentHeader.Title>
          </SectionContentHeader>
          <LightGrayPlatform>
            <BracketedText noMargin>
              "As a professional society on campus, we are able to provide both new and returning members of our organization with help and resources in 
              professional development. We offer events focusing on resume reviews, LinkedIn workshops, company information sessions, and visits, etc. In 
              addition to events on campus, our WPI SASE chapter provides our members the opportunity to attend both National and Regional Conferences during the 
              school year. These conferences offer new opportunities to network outside of campus, as well as provide exposure to company recruiters."
            </BracketedText>
          </LightGrayPlatform>
        
        </ContentSection>

          <Footer/>
        </View>
      </View>
      
    
    </ScrollView>
  )
}

function CarouselItemText(props) {
  return <Text style={{fontSize: 16, marginBottom: 7}}>"{props.children}"</Text>
}

const carouselItems = [
  (
    <View style={{height: carouselHeight, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
      <View style={{display: "flex", flexDirection: "column", flex: 1, alignItems: "center", justifyContent: "center"}}>
        <CarouselItemText>First Year Experience Week</CarouselItemText>
        <CarouselItemText>Dining halls</CarouselItemText>
        <CarouselItemText>The people next to me in lectures</CarouselItemText>
        <CarouselItemText>Mutual friends</CarouselItemText>
        <CarouselItemText>Haunted Higgins House</CarouselItemText>
      </View>
      <View style={{display: "flex", flexDirection: "column", flex: 1, alignItems: "center", justifyContent: "center"}}>
        <CarouselItemText>Joining clubs</CarouselItemText>
        <CarouselItemText>FIGSA</CarouselItemText>
        <CarouselItemText>NSBE</CarouselItemText>
        <CarouselItemText>BSU</CarouselItemText>
        <CarouselItemText>Cheese Club</CarouselItemText>
      </View>
    </View>
  ),
  (
    <View style={{height: carouselHeight, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
      <View style={{display: "flex", flexDirection: "column", flex: 1, alignItems: "center", justifyContent: "center"}}>
        <CarouselItemText>ASA</CarouselItemText>
        <CarouselItemText>Asian oriented student associations</CarouselItemText>
        <CarouselItemText>Sports</CarouselItemText>
        <CarouselItemText>Campus events</CarouselItemText>
        <CarouselItemText>ODIME</CarouselItemText>
      </View>
      <View style={{display: "flex", flexDirection: "column", flex: 1, alignItems: "center", justifyContent: "center"}}>
        <CarouselItemText>Soccom events</CarouselItemText>
        <CarouselItemText>NSO/Insight</CarouselItemText>
        <CarouselItemText>Social media</CarouselItemText>
        <CarouselItemText>Quad Fest</CarouselItemText>
      </View>
    </View>
  ),
]