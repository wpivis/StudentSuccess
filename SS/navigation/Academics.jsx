import { View, Text, Button } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { CenteredTitle, HeaderRight, BracketedText, ImageHeader, PageHeader, SectionContentHeader, QuoteRight, QuoteLeft, GreayTextBeam } from "../components/Text"
import { ButtonBlock, ButtonCentered } from "../components/Buttons"

import { ContentSection, Footer, LightGrayPlatform, TransparentPlatform, RedBeam } from '../components/Layout'
import { dropShadow, lorem, loremShort, textBlockMaxWidth } from '../assets/style'
import { ImageContainer } from '../components/Images'
import { AcademicsChecklist } from './Checklists'
import { AppDrawerItemName, } from '../api/navigation'
import { Navbar, } from '../components/Navigation'

const makerSpace = require("../assets/makerspace.jpg")
const staff = require("../assets/staff.jpg")
const turtle = require("../assets/turtle.jpg")
const gps = require("../assets/gps.jpg")
const gompeiStatue = require("../assets/gompeiStatue.jpg")
const library = require("../assets/library.jpg")

export default function Academics({navigation}) {
  
  return (
    <ScrollView>

      <Navbar n={navigation} title={AppDrawerItemName.Academics}/>

      <View style={{backgroundColor: "#e4e4e4", width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <View style={{...dropShadow, backgroundColor: "#ffffff", width: "100%", maxWidth: 800, display: "flex", flexDirection: "column"}}>
          <PageHeader>Academic Information at WPI</PageHeader>

          <ContentSection>
            <ImageHeader image={staff}>Welcome Letters</ImageHeader>
          </ContentSection>
          
          <ContentSection>
          <ImageHeader image={makerSpace}>Project Based Learning</ImageHeader>
            <BracketedText>WPI Specializes in project-based learning. Get real experience in the subjects you love; learning by doing is the way to go!</BracketedText>
            <ButtonCentered>Project Based Learning</ButtonCentered>
            <HeaderRight>The IQP Program</HeaderRight>
            <SectionContentHeader>
              <SectionContentHeader.Title>Doing Good Across the Globe</SectionContentHeader.Title>
              <SectionContentHeader.Subtitle>A Degree Requirement that Changes Students, and the World</SectionContentHeader.Subtitle>
            </SectionContentHeader>
            <View style={{marginTop: 14, marginBottom: 14}}>
              <LightGrayPlatform maxWidth={textBlockMaxWidth}>
                <Text style={{textIndent: 28}}>{lorem}</Text>
              </LightGrayPlatform>
            </View>
            <ButtonCentered>Explore IQP Options</ButtonCentered>
            <ButtonCentered>See What Students are Saying</ButtonCentered>
            <HeaderRight>The MQP Program</HeaderRight>
            <SectionContentHeader>
              <SectionContentHeader.Title>MQP Program Subtitle</SectionContentHeader.Title>
              <SectionContentHeader.Subtitle>MQP Program Subtitle Line 2</SectionContentHeader.Subtitle>
            </SectionContentHeader>
            <TransparentPlatform maxWidth={textBlockMaxWidth}>      
              <Text style={{textIndent: 28}}>{lorem}</Text>
            </TransparentPlatform>
            <ImageContainer imageSource={turtle} />
            <LightGrayPlatform>        
              <QuoteRight color="red">{loremShort}</QuoteRight>
              <QuoteLeft color="white">{loremShort}</QuoteLeft>
            </LightGrayPlatform>
            <HeaderRight>First Year GPS Classes</HeaderRight>
            <SectionContentHeader>
              <SectionContentHeader.Title>GPS Classes Subtitle</SectionContentHeader.Title>
              <SectionContentHeader.Subtitle>GPS Classes Subtitle Line 2</SectionContentHeader.Subtitle>
            </SectionContentHeader>
            <View style={{marginBottom: 14}}>
              <TransparentPlatform maxWidth={textBlockMaxWidth}>      
                <Text style={{textIndent: 28}}>{lorem}</Text>
              </TransparentPlatform>
            </View>
            <ImageContainer noMargin imageSource={gps} />
            <RedBeam
              title="Tackling the World's Problems"
              text='The Great Problems Seminar (GPS) is a two-term course that immerses first-year students into university-level research and introduces them to the project-based curriculum at WPI. As part of The Global School at WPI, the course gives students and faculty the opportunity to step outside their disciplines to solve problems focused on themes of global importance. This culminates in annual Poster Presentation Days that celebrate students’ innovative research on a wide range of solutions to some of the world’s most critical challenges.'
            />
            <TransparentPlatform maxWidth={textBlockMaxWidth}>      
              <Text style={{textIndent: 28}}>These first-year students tackled the issue of divided cities—and their analysis won the Undergraduate Humanities Diversity Award at the Humanities Education and Research Association Conference for the "best undergraduate conference paper that addresses race, ethnicity, gender, or sexuality."</Text>
            </TransparentPlatform>
          </ContentSection>

          <ContentSection>
            <ImageHeader image={gompeiStatue}>Course Registration</ImageHeader>
            <BracketedText>It’s important to make sure you’re registered for the right courses. WPI has plenty of resources to help you choose those that will best suit your goals.</BracketedText>
            <ButtonCentered>Register on Workday</ButtonCentered>
            <CenteredTitle>Get Excited About Your Classes</CenteredTitle>
            <TransparentPlatform noPadding>        
              <QuoteRight color="red">{loremShort}</QuoteRight>
              <QuoteLeft color="gray">{loremShort}</QuoteLeft>
            </TransparentPlatform>
            <ButtonBlock
              header="Office of Academic Advising"
              text="Planning your academic journey can be challenging. Your academic advisor is here to help you navigate through the course selection, understand program requirements, and develop effective study strategies. They can also assist in exploring potential career paths and internships that align with your major. Schedule an appointment to achieve your academic goals!"
            />
            <ButtonBlock
              header="Registrar"
              text="Your one-stop shop for all matters related to academic records. The registrar's office handles course registration, transcript requests, enrollment verification, and graduation processes. We ensure the accuracy, confidentiality, and integrity of your academic records while upholding our policies and procedures. Get in touch for any academic administration needs."
            />
          </ContentSection>

          <ContentSection>
            <ImageHeader image={library}>Study Tips and Tricks</ImageHeader>
            <BracketedText>Some of your classes will be very difficult. Here’s what other students have said helped them through the toughest that WPI has to offer:</BracketedText>
            <ButtonCentered>See Your Resources</ButtonCentered>
            <View style={{marginTop: 14}}>
              <GreayTextBeam>"{loremShort}" -Author</GreayTextBeam>
              <GreayTextBeam>"{loremShort}" -Author</GreayTextBeam>
              <GreayTextBeam>"{loremShort}" -Author</GreayTextBeam>
              <GreayTextBeam>"{loremShort}" -Author</GreayTextBeam>
              <GreayTextBeam>"{loremShort}" -Author</GreayTextBeam>
              <GreayTextBeam>"{loremShort}" -Author</GreayTextBeam>
            </View>
            <ButtonCentered>Visit the ARC</ButtonCentered>
          </ContentSection>

          <AcademicsChecklist/>

          <Footer/>
        </View>
      </View>
      
    
    </ScrollView>
  )
}