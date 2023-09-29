import { View, Text, Button } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { CenteredTitle, HeaderRight, BracketedText, ImageHeader, PageHeader, SectionContentHeader, QuoteRight, QuoteLeft, GreayTextBeam, GrayTextBeam, TextBold } from "../components/Text"
import { ButtonBlock, ButtonCentered } from "../components/Buttons"

import { ContentSection, Footer, LightGrayPlatform, TransparentPlatform, RedBeam, HeaderSubtitle, Spacer } from '../components/Layout'
import { dropShadow, lorem, loremShort, textBlockMaxWidth } from '../assets/style'
import { ImageContainer } from '../components/Images'
import { AcademicsChecklist } from './Checklists'
import { AppDrawerItemName, } from '../api/navigation'
import { Navbar, } from '../components/Navigation'
import { analytics } from '../firebase'
import { logEvent } from 'firebase/analytics'

const internships = require("../assets/internships.jpg")
const coops = require("../assets/coops.jpg")
const cdc = require("../assets/cdc.png")

export default function Development({ navigation }) {

  logEvent(analytics, "page_view", {
    page_location: "development"
  });

  return (
    <ScrollView>

      <Navbar n={navigation} title={AppDrawerItemName.Development} />

      <View style={{ backgroundColor: "#e4e4e4", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <View style={{ ...dropShadow, backgroundColor: "#ffffff", width: "100%", maxWidth: 800, display: "flex", flexDirection: "column" }}>
          <PageHeader>Career Development Center</PageHeader>

          <ContentSection>
            <ImageHeader image={cdc}>Career Development Resources</ImageHeader>
            <HeaderSubtitle>
              The CDC offers resources for life! Any alumni or current student can receive career support. This includes all events and activities hosted by the office.
            </HeaderSubtitle>
            <Spacer />
            <SectionContentHeader>
              <SectionContentHeader.Title>
                Resource Libary for Students:
              </SectionContentHeader.Title>
            </SectionContentHeader>
            <GrayTextBeam><TextBold>Workshop Wednesdays available 1x per term:</TextBold> </GrayTextBeam>
            <GrayTextBeam>    Discovering majors and careers</GrayTextBeam>
            <GrayTextBeam>    Interviewing</GrayTextBeam>
            <GrayTextBeam>    The art of small talk</GrayTextBeam>
            <GrayTextBeam>    How to sell your project experience</GrayTextBeam>
            <GrayTextBeam>    How to work a virtual career fair</GrayTextBeam>
            <GrayTextBeam>    Job offer / salary negotiation</GrayTextBeam>
            <GrayTextBeam>    Help with job searches</GrayTextBeam>
            <GrayTextBeam>    Identity-specific panels and fireside chats</GrayTextBeam>
            <GrayTextBeam><TextBold>GoinGlobal - an international job search platform</TextBold> </GrayTextBeam>
            <GrayTextBeam>    Information available on international internship/co-op approval process</GrayTextBeam>
            <GrayTextBeam><TextBold>Identity-specific Panels and Fireside Chats </TextBold> </GrayTextBeam>
            <Spacer />
            <SectionContentHeader>
              <SectionContentHeader.Title>
                Various In-Person and Virtual Appointments Available for:
              </SectionContentHeader.Title>
            </SectionContentHeader>
            <GrayTextBeam>Application Materials</GrayTextBeam>
            <GrayTextBeam>Discovering Majors & Careers</GrayTextBeam>
            <GrayTextBeam>Graduate School</GrayTextBeam>
            <GrayTextBeam>Intern/Co-op/Job Search Process</GrayTextBeam>
            <GrayTextBeam>Interview Prep</GrayTextBeam>
            <GrayTextBeam>Job Offers</GrayTextBeam>
            <GrayTextBeam>Networking & Career Fair</GrayTextBeam>
            <BracketedText>
              The CDC offers various in-person and virtual appointments. For example, you can schedule a meeting to discuss application materials, doscivering majors and careers, graduate school,
              internships / Co-op / job searches, interview prep, job offers, networking / career fairs, and more.
            </BracketedText>

            <ButtonCentered href="https://www.wpi.edu/offices/career-development-center">Visit the CDC</ButtonCentered>

            <QuoteRight color="gray">
              "I think the resources for doing well definitely helped me with networking. The Career Fair was a big one that really helped. I got opportunities through that."
            </QuoteRight>
            <QuoteLeft color="red">
              "I think it's a little bit hard to find good career advice on campus. We have the career center, and they read your resume and things like that. You can schedule consultations with them."
            </QuoteLeft>
            <QuoteRight color="gray">
              "I wish I would have gone to one of the resume building things, which definitely would have been helpful."
            </QuoteRight>

          </ContentSection>

          <Footer />
        </View>
      </View>


    </ScrollView>
  )
}