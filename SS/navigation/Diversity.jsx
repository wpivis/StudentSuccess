import { View, Text, Button, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { CenteredTitle, HeaderRight, BracketedText, ImageHeader, PageHeader, SectionContentHeader, QuoteRight, QuoteLeft, GreayTextBeam, BodyText, GrayTextBeam, SubHeader, TextBold } from "../components/Text"
import { ButtonBlock, ButtonCentered } from "../components/Buttons"

import { ContentSection, Footer, LightGrayPlatform, TransparentPlatform, RedBeam, HeaderSubtitle } from '../components/Layout'
import { dropShadow, lorem, loremShort, textBlockMaxWidth } from '../assets/style'
import { ImageContainer } from '../components/Images'
import { AcademicsChecklist } from './Checklists'
import { AppDrawerItemName, } from '../api/navigation'
import { Navbar, } from '../components/Navigation'
import { AccordionItem, AccordionLink, AccordionTitle } from '../components/Accordion'

const imposter = require("../assets/Diversity/imposter-syndrome.jpeg")
const bias = require("../assets/Diversity/bias.jpeg")
const microaggressions = require("../assets/Diversity/microaggression.jpeg")
const cdc = require("../assets/cdc.png")

export default function Diversity({ navigation }) {

  return (
    <ScrollView>

      <Navbar n={navigation} title={AppDrawerItemName.Diversity} />

      <View style={{ backgroundColor: "#e4e4e4", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <View style={{ ...dropShadow, backgroundColor: "#ffffff", width: "100%", maxWidth: 800, display: "flex", flexDirection: "column" }}>
          <PageHeader>Cultural and Diversity Resources</PageHeader>

          <ContentSection>
{/* Intro */}
            <BodyText>As you step into this new chapter of your life as a university student at WPI, it's essential to recognize that each student's experience is unique, shaped by their individual backgrounds, identities, and perspectives. Diversity enriches our campus and our collective learning experience at WPI. It allows us to gain insights from many cultures, races, genders, sexual orientations, abilities, religions, and socio-economic backgrounds. As we learn from one another, we also learn about ourselves. </BodyText>
            <BodyText>In this handbook section, we aim to help you understand and prepare for these potential challenges. We believe that awareness is the first step towards promoting an inclusive and equitable academic environment, and we hope that this resource will equip you to navigate better and adapt to these various situations.</BodyText>
{/* Diversity Challenges */}
            <HeaderRight>Navigating Diversity Challenges</HeaderRight>
              <BodyText>Navigating the college landscape as a diverse student may present unique challenges. These could range from feelings of isolation or imposter syndrome to experiences of unconscious bias or microaggressions. Additionally, transitioning into the culture of the college environment could be exceptionally overwhelming for first-generation college students, international students, or others who might feel they are entering unfamiliar territory. Below are some online resources that can help you learn about diversity, as well as strategies for coping with these experiences.</BodyText>
              <BracketedText>
                The Implicit Association Test (IAT) created by Project Implicit is a key assessment tool for learning about one's own biases by measuring attitudes and
                beliefs that people may be unwilling or unable to report.
              </BracketedText>
              <ButtonCentered href="https://implicit.harvard.edu/implicit/takeatest.html">Take the IAT</ButtonCentered>
{/* Psychosocial Challenges */}
            <HeaderRight>Psychosocial Challenges</HeaderRight>
              
                <SubHeader>Imposter Syndrome</SubHeader>
                  <Image style={{width:"100%", height:200}} source={imposter}></Image>
                    <HeaderSubtitle>Imposter syndrome was a term coined by Pauline Clance and Suzanne Imes in 1978 and describes the way a person feels when they doubt their skills, talents, or accomplishments and has a persistent fear of being exposed as a "fraud" even though they show external evidence of their competence. </HeaderSubtitle>
                    <GrayTextBeam>Feeling like a fake or fraud and fearing you will be discovered.</GrayTextBeam>              
                    <GrayTextBeam>Attributing success to luck or chance rather than your own ability or hard work.</GrayTextBeam>              
                    <GrayTextBeam>Downplaying your own expertise, even in areas where you are very knowledgeable.</GrayTextBeam>              
                    <GrayTextBeam>Comparing yourself to others and feeling like you're not as good as they are.</GrayTextBeam>              
                    <GrayTextBeam>Having high standards for yourself and feeling disappointed if you don't meet them.</GrayTextBeam>              
                <ContentSection>
                  <SubHeader>Unconscious Bias</SubHeader>
                    <Image style={{width:"100%", height:200}} source={bias}></Image>
                      <HeaderSubtitle>Unconscious bias is when we have quick judgments or opinions about people without realizing it. These thoughts come from our background, experiences, and things we've heard or seen in society. These biases can be positive or negative and influence how we treat others. Becoming aware of these biases and understanding how they influence your behavior is the first step toward minimizing their impact. </HeaderSubtitle>
                      <GrayTextBeam>Affinity bias is warming-up or being comfortable with people like ourselves.</GrayTextBeam>
                      <GrayTextBeam>Halo effect is thinking everything about someone is good because you like them.</GrayTextBeam>
                      <GrayTextBeam>Perception bias is forming assumptions about certain groups that make objective decisions impossible.</GrayTextBeam>
                      <GrayTextBeam>Confirmation bias is interpreting information in a way that confirms your preexisting beliefs.</GrayTextBeam>
                      <GrayTextBeam>Gender bias is preferring one gender over another.</GrayTextBeam>                             
                  </ContentSection>
              <SubHeader>Microaggressions</SubHeader>
                <Image style={{width:"100%", height:200}} source={microaggressions}></Image>  
                  <HeaderSubtitle>Microaggressions refer to subtle comments that convey derogatory, prejudiced, or discriminatory attitudes towards individuals or groups based on race, gender, ethnicity, sexual orientation, disability, or other characteristics. These actions may seem unintentional, but they can have a significant impact on the recipients, contributing to feelings of alienation and invalidation.</HeaderSubtitle>                            
{/* Strategies for Psychosocial Challenges */}
              <HeaderRight>Strategies</HeaderRight>
                <GrayTextBeam><TextBold>Speak up:</TextBold> Communicate your feelings and ask the person to stop biased behavior using "I" statements. For instance, say, "I feel disrespected when you... Could you please stop doing that?"</GrayTextBeam>
                <GrayTextBeam><TextBold>Find Support:</TextBold> Reach out to supportive friends, family, community groups, peers further along in their studies, staff in academic affairs, and your professors. Sharing your experiences can provide emotional relief and practical advice.</GrayTextBeam>
                <GrayTextBeam><TextBold>Document:</TextBold> Record incidents, including dates, times, locations, what happened, and any witnesses. This could be useful if you decide to report the behavior.</GrayTextBeam>
                <GrayTextBeam><TextBold>Report:</TextBold> Report the incident to appropriate authorities, including Residence Advisor, ODIME Director, Assistant VP for Diversity, Title IX office, Counseling Services, or law enforcement, as you feel comfortable.</GrayTextBeam>
                <GrayTextBeam><TextBold>Self-Care:</TextBold> Bias incidents can be emotionally draining. Prioritize your mental health by engaging in activities like exercise, meditation, or seeking support from a therapist or counselor.</GrayTextBeam>
                <GrayTextBeam><TextBold>Education:</TextBold> Encourage, develop and/or support educational programs related to your identity. We need more diverse representation, so joining and creating affinity programs are welcomed!  </GrayTextBeam>
                
          </ContentSection>

          <BracketedText>
            There are several online resources and activities that can help you learn about diversity, as well as strategies for coping with these experiences. Here are a few ideas:
          </BracketedText>

          <ContentSection>
            <AccordionTitle title="On Campus Resources"> </AccordionTitle>
            <AccordionTitle title="Off Campus Resources"> </AccordionTitle>
            <AccordionTitle title="Books on Women and Feminism"> </AccordionTitle>
            <AccordionTitle title="LGBTIQA+ Books"> </AccordionTitle>
            <AccordionTitle title="People With Disabilities "> </AccordionTitle>
            <AccordionTitle title="Neurodivergent People "> </AccordionTitle>
            <AccordionTitle title="Books fon International Students"> </AccordionTitle>
              
          </ContentSection>

          <Footer />
        </View>
      </View>


    </ScrollView>
  )
}