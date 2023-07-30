import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { CenteredTitle, HeaderRight, BracketedText, ImageHeader, PageHeader, SectionContentHeader, QuoteRight, QuoteLeft, GrayTextBeam, BodyText } from "../components/Text"
import { ButtonBlock, ButtonCentered } from "../components/Buttons"

import { ContentSection, Footer, LightGrayPlatform, TransparentPlatform, RedBeam, RedPlatform } from '../components/Layout'
import { dropShadow, lorem, loremShort, textBlockMaxWidth } from '../assets/style'
import { ImageContainer } from '../components/Images'
import { AcademicsChecklist } from './Checklists'
import { AppDrawerItemName, } from '../api/navigation'
import { Navbar, } from '../components/Navigation'

const faq = require("../assets/worcesterSkyline.jpeg")
const brickWall = require("../assets/brickWall.png")

export default function FAQ({navigation}) {

  return (
    <ScrollView>

      <Navbar n={navigation} title={AppDrawerItemName.FAQ}/>

      <View style={{backgroundColor: "#e4e4e4", width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <View style={{...dropShadow, backgroundColor: "#ffffff", width: "100%", maxWidth: 800, display: "flex", flexDirection: "column"}}>
          <PageHeader>FAQs and Tips</PageHeader>
          <BracketedText>We asked a diverse group of WPI students about their experiences engaging with campus as freshmen, and compiled some of the most important responses here.</BracketedText>


          <ContentSection>
            
            <ImageHeader image={faq}>Frequently Asked Questions</ImageHeader>
            <RedPlatform>
              <Text style={{textAlign: "center", color:"white"}}>
              We understand that beginning your journey at WPI can bring about a flurry of questions. To help you navigate your way, we've compiled a list of frequently asked questions from students just like you.
              </Text>
            </RedPlatform>
            <HeaderRight>Friendships</HeaderRight>
            <SectionContentHeader>
              <SectionContentHeader.Title>
                How do I start making friends on campus as a freshman?
              </SectionContentHeader.Title>
              <SectionContentHeader.Subtitle>
                It can be daunting to make new friends in Your first year, but rest assured, WPI has numberous resources and groups to help you connect with others.
              </SectionContentHeader.Subtitle>
            </SectionContentHeader>
            <GrayTextBeam>Attend NSO</GrayTextBeam>
            <GrayTextBeam>Go to the Activities Fair and join clubs and sports</GrayTextBeam>
            <GrayTextBeam>Talk to the people on your floor</GrayTextBeam>
            <GrayTextBeam>Put yourself out there! Don't be afraid of failure; everyone is in the same situation</GrayTextBeam>
            <GrayTextBeam>Share contact information with classmates</GrayTextBeam>
            <GrayTextBeam>Social media pages for each class— reach out before you arrive.</GrayTextBeam>
            
            <HeaderRight>Academics</HeaderRight>
            <SectionContentHeader>
              <SectionContentHeader.Title>
                How can I stay up to date on the resources offered on campus?
              </SectionContentHeader.Title>
              <SectionContentHeader.Subtitle>
                With so many resources available, you might feel overwhelmed. But don't worry, there are easy ways to stay updated on everything WPI offers.
              </SectionContentHeader.Subtitle>
            </SectionContentHeader>
            <GrayTextBeam>Many offices send out weekly newsletters— stay up to date with your Outlook</GrayTextBeam>
            <GrayTextBeam>Take note of the bulletin boards posted around campus, such as in the CC and Unity Hall</GrayTextBeam>
            <GrayTextBeam>Drop into the various offices and departments on campus</GrayTextBeam>
            <GrayTextBeam>Be wary of social media advice; before getting on Reddit, ask faculty or staff on campus!</GrayTextBeam>
            
            <HeaderRight>Getting Involved</HeaderRight>
            <SectionContentHeader>
              <SectionContentHeader.Title>
                How do I get involved with the WPI community as a BIPOC student, queer student, woman, first gen student, etc.?
              </SectionContentHeader.Title>
              <SectionContentHeader.Subtitle>
                At WPI, every student's voice matters. No matter your background or identity, there are plenty of ways for you to connect with and contribute to our inclusive community.
              </SectionContentHeader.Subtitle>
            </SectionContentHeader>
            <GrayTextBeam>Go to the activities fair</GrayTextBeam>
            <GrayTextBeam>Stay up to date via newsletters and other communications from ODIME and campus as a whole</GrayTextBeam>
            <GrayTextBeam>Sttend campus sponsored events by SAO, SAS, etc.</GrayTextBeam>
            <GrayTextBeam>Check out the various tables in the CC to interact with new clubs and organizations</GrayTextBeam>

          </ContentSection>

          
          <ContentSection>
            
            <ImageHeader image={brickWall}>Tips from WPI Students</ImageHeader>
            <RedPlatform>
              <Text style={{textAlign: "center", color:"white"}}>
               There's nothing quite as enlightening as hearing from those who have walked the path before you. In this section, you'll find an assortment of tips and wisdom from 
               WPI students who've navigated the university journey. From making the most of your relationships with professors, to learning the balance of academics and personal time, 
               these insights offer a firsthand glimpse into the WPI experience. Scroll through these valuable pieces of advice, and remember, every journey is unique—embrace the opportunities 
               and challenges that come your way.
              </Text>
            </RedPlatform>
          
              <HeaderRight>Engagament & Relationships:</HeaderRight>
              <QuoteRight color="white">
                "Reach out to your professors. In my experience, all of the professors here have a genuine interest in seeing where their students go, and wanting to know
                that their class had an impact on your life."
              </QuoteRight>
              <QuoteLeft color="white">
                "Make friends with people in your major, you can always help each other."
              </QuoteLeft>
              <QuoteRight color="white">
                "Don't be afraid to reach out to people. It's so overwhelming at first but once you talk to people you realize they're 
                just people. Your professor is just a human being and they’re actually super helpful."
              </QuoteRight>
          
              <HeaderRight>Self Reflection & Growth:</HeaderRight>
              <QuoteLeft color="white">
                "Push yourself to get uncomfortable. I think a lot of students hope to see results while staying in their comfort zone, but that's not always realistic."
              </QuoteLeft>
              <QuoteRight color="white">
                "Just do it, take the plunge . . . even if you're rejected from something you probably gain something from that rejection anyway"
              </QuoteRight>
              <QuoteLeft color="white">
                "Don’t be afraid of reinventing yourself, you get to be whoever you want."
              </QuoteLeft>
          
              <HeaderRight>Balance & Self-Care:</HeaderRight>
              <QuoteRight color="white">
                "Leave that free time for yourself. You don't have to fill it up with everything. Have your study time, have your class time, have your friend time, but also have like your me time."
              </QuoteRight>
              <QuoteLeft color="white">
                "Be aware of your own capacity."
              </QuoteLeft>
            
            

          </ContentSection>

          <Footer/>
        </View>
      </View>
      
    
    </ScrollView>
  )
}