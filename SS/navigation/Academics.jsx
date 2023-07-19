import { View, Text, Button } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { CenteredTitle, HeaderRight, BracketedText, ImageHeader, PageHeader, SectionContentHeader, QuoteRight, QuoteLeft, GreayTextBeam } from "../components/Text"
import { ButtonBlock, ButtonCentered } from "../components/Buttons"

import makerSpace from "../assets/images/makerspace.jpg"
import turtle from "../assets/images/turtle.jpg"
import gompeiStatue from "../assets/images/gompeiStatue.jpg"
import library from "../assets/images/library.jpg"
import { ContentSection, Footer, LightGrayPlatform, TransparentPlatform } from '../components/Layout'
import { lorem, loremShort } from '../assets/style'
import { ImageContainer } from '../components/Images'

export default function Academics() {
  return (
    <ScrollView>

      <PageHeader>Academic Information at WPI</PageHeader>

      <ContentSection>
      <ImageHeader image={makerSpace}>Project Based Learning</ImageHeader>
        <BracketedText>WPI Specializes in project-based learning. Get real experience in the subjects you love; learning by doing is the way to go!</BracketedText>
        <ButtonCentered>Project Based Learning</ButtonCentered>
        <HeaderRight>The IQP Program</HeaderRight>
        <SectionContentHeader>
          <SectionContentHeader.Title>Doing Good Across the Globe</SectionContentHeader.Title>
          <SectionContentHeader.Subtitle>A Degree Requirement that Changes Students, and the World</SectionContentHeader.Subtitle>
        </SectionContentHeader>
        <LightGrayPlatform>
          <Text style={{textIndent: "2rem"}}>{lorem}</Text>
        </LightGrayPlatform>
        <ButtonCentered>Explore IQP Options</ButtonCentered>
        <ButtonCentered>See What Students are Saying</ButtonCentered>
        <HeaderRight>The MQP Program</HeaderRight>
        <SectionContentHeader>
          <SectionContentHeader.Title>MQP Program Subtitle</SectionContentHeader.Title>
          <SectionContentHeader.Subtitle>MQP Program Subtitle Line 2</SectionContentHeader.Subtitle>
        </SectionContentHeader>
        <TransparentPlatform>      
          <Text style={{textIndent: "2rem"}}>{lorem}</Text>
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
        <TransparentPlatform>      
          <Text style={{textIndent: "2rem"}}>{lorem}</Text>
        </TransparentPlatform>
        <CenteredTitle>Tackling the World's Problems</CenteredTitle>
        <TransparentPlatform>      
          <Text style={{textIndent: "2rem"}}>These first-year students tackled the issue of divided cities—and their analysis won the Undergraduate Humanities Diversity Award at the Humanities Education and Research Association Conference for the "best undergraduate conference paper that addresses race, ethnicity, gender, or sexuality."</Text>
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
        <View style={{marginTop: "1rem"}}>
          <GreayTextBeam>"{loremShort}" -Author</GreayTextBeam>
          <GreayTextBeam>"{loremShort}" -Author</GreayTextBeam>
          <GreayTextBeam>"{loremShort}" -Author</GreayTextBeam>
          <GreayTextBeam>"{loremShort}" -Author</GreayTextBeam>
          <GreayTextBeam>"{loremShort}" -Author</GreayTextBeam>
          <GreayTextBeam>"{loremShort}" -Author</GreayTextBeam>
        </View>
        <ButtonCentered>Visit the ARC</ButtonCentered>
      </ContentSection>

      <Footer/>
    
    </ScrollView>
  )
}