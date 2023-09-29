import { View, Text, Button } from 'react-native'
import React from 'react'
import { Image } from "expo-image" 
import { ScrollView } from 'react-native-gesture-handler'
import { CenteredTitle, HeaderRight, BracketedText, ImageHeader, PageHeader, SectionContentHeader, QuoteRight, QuoteLeft, GrayTextBeam, BodyText, SubHeader } from "../components/Text"
import { ButtonBlock, ButtonCentered } from "../components/Buttons"

import { ContentSection, Footer, LightGrayPlatform, TransparentPlatform, RedBeam, HeaderSubtitle, Spacer } from '../components/Layout'
import { dropShadow, lorem, loremShort, textBlockMaxWidth } from '../assets/style'
import { ImageContainer } from '../components/Images'
import { AcademicsChecklist } from './Checklists'
import { AppDrawerItemName, } from '../api/navigation'
import { Navbar, } from '../components/Navigation'
import { logEvent } from 'firebase/analytics'
import { analytics } from '../firebase'

//Images
const makerSpace = require("../assets/Academics/makerspace.jpg")
const academicAdvising = require("../assets/Academics/Academic_Advising.jpg")
const tutor = require("../assets/Academics/Tutor.jpeg")

const writingCenter = require("../assets/Academics/writingCenter.jpeg")
const mtc = require("../assets/Academics/MTC.jpeg")

export default function Academics({ navigation }) {

  
  logEvent(analytics, "page_view", {
    page_location: "academics"
  });

  return (
    <ScrollView>

      <Navbar n={navigation} title={AppDrawerItemName.Academics} />

      <View style={{ backgroundColor: "#e4e4e4", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <View style={{ ...dropShadow, backgroundColor: "#ffffff", width: "100%", maxWidth: 800, display: "flex", flexDirection: "column" }}>
          <PageHeader>Academic Support</PageHeader>

          <ContentSection>
            <BracketedText>At WPI, there is no absence of support if you want to find it. In your academic endeavors, our campus has many resources ranging from formal advising to free tutoring centers with peer support. We have a couple tips and tricks to help your academics go more smoothly. </BracketedText>
            <ButtonCentered href="https://www.wpi.edu/sites/default/files/2023-06/UG_2023-24Finalapproved5.23.23.pdf">2023-2024 Academic Calendar</ButtonCentered>
            
            <ContentSection>
            <LightGrayPlatform>
            <BodyText>Advice from Mathematical Sciences Faculty</BodyText>
            <BodyText>Be open to learning new mathematical and statistical concepts! To maximize your student experience, make sure to attend classes, get to know your professors, ask for help in office hours, and utilize resources such as the math tutoring center. If you are planning on majoring/minoring in Mathematical Sciences, make sure to sign up to be paired with a mentor! Our Math Club and Association for Women in Mathematics are open to all students on campus that are interested in math!</BodyText>
            <BodyText>We wish you success in all of your courses at WPI!</BodyText>
            </LightGrayPlatform>
            </ContentSection>
            </ContentSection>
            <ImageHeader image={academicAdvising}>Academic Advising</ImageHeader>
            <HeaderSubtitle>Located in Unity Hall, the Office of Academic Advising is there to help you develop a meaningful educational plan. Utilize their website to learn how to register for courses, double count classes, transfer credits, and plan for double majors and minors, amongst other resources.</HeaderSubtitle>
            <Spacer />
            <GrayTextBeam>All WPI students are assigned one academic advisor as well as a faculty advisor within their major's department</GrayTextBeam>
            
            <BracketedText>Major tracking sheets are a valuable tool that many students have stressed the importance of having access to early on. </BracketedText>
            <ButtonCentered href="https://www.wpi.edu/student-experience/resources/academic-advising/program-tracking-sheets">Program Tracking Sheets</ButtonCentered>
            <ButtonCentered href="https://www.wpi.edu/academics/undergraduate/bachelors-masters-degree">Bachelor's/Master's Degree Options</ButtonCentered>
            <ButtonCentered href="https://www.wpi.edu/offices/academic-advising">Visit Academic Advising</ButtonCentered>

            <QuoteRight color="red">“My advisors were very supportive. They would mostly just reach out during times that they would kind of expect us to need support, like during registration. It's more like. I can really only get the benefits I need if I reach out to them first. But they are very welcoming.”</QuoteRight>
            <QuoteLeft color="gray">“Before taking one of your harder classes, you could see on Workday what you need before the class, I'll ask my advisor anything about it as well. Or if I knew a friend took the class I just asked them about it as well before it.”</QuoteLeft>

            <ImageHeader image={tutor}>Academic Resource Center</ImageHeader>
            <HeaderSubtitle>The Academic Resource Center (ARC), located in Unity Hall, offers peer-led individual and group-style tutoring. Schedule an appointment one-on-one with a tutor, or drop in for Math and Science Help (MASH).</HeaderSubtitle>
            <Spacer />
            <GrayTextBeam>Informal resources like the Physics lounge (Located in Olin Hall) are also available to help with coursework</GrayTextBeam>
            <QuoteRight color="gray">“The advice I heard was to reach out to professors. Advice I wish I took was to go to TAs, I frankly find them more helpful than professors a lot of the time except for one class I'm taking at the moment. But for the majority of classes I find them more helpful than just professors”</QuoteRight>
            <ButtonCentered href="https://www.wpi.edu/news/announcements/find-study-spaces-wpi-app">Study spaces on campus</ButtonCentered>
            <ButtonCentered href="https://www.wpi.edu/student-experience/resources/academic-resources-center">Visit Academic Resource Center</ButtonCentered>

            {/* <LightGrayPlatform>
              <QuoteRight color="red">“One advice would be to put everything in your outlook calendar. Don't be afraid, put your homeworks, put your meetings, put every single thing in your outlook calendar and then have your outlook calendar on your lock screen. I will put my homeworks. I will put my assignments. I will put when I need to meet my friends on outlook because if not, it will not happen or I'll forget about it. I forgot to go to the fun night yesterday because it wasn't on my outlook. I put everything on my outlook. Obviously, that is one advice I will give everyone is like, put your homeworks on outlook because it will bother you until you finish your homework. That is nice.”</QuoteRight>
            </LightGrayPlatform> */}
            <ContentSection>
            <ImageHeader image={writingCenter}>Writing Center</ImageHeader>
              <HeaderSubtitle>Located in Salisbury Labs 233, the writing center is staffed with 20 peer tutors to help you at any stage of your writing/composing process</HeaderSubtitle>
              <ButtonCentered href='https://www.wpi.edu/student-experience/resources/writing-center'>Visit Writing Center</ButtonCentered>
            </ContentSection>
              <ImageHeader image={mtc}>Math Tutoring Center</ImageHeader>
              <HeaderSubtitle>Located in room 302 in Gordon Library, the drop-in style Math Tutoring Center is staffed with math TAs, PLAs, and master's students to help with all math-related questions and coursework.</HeaderSubtitle>
              <ButtonCentered href='https://www.wpi.edu/academics/departments/mathematical-sciences/math-tutoring-center-mtc'>Visit MTC</ButtonCentered>
            <ContentSection>
            <ImageHeader image={makerSpace}>SWEET Center</ImageHeader>
              <HeaderSubtitle>Individual and Team Consultations are offered by SWEET fellows who are WPI students, staff, faculty, and alumni with lots of project and teamwork experience, and additional training from WPI experts on effective and equitable teamwork. All Teamwork Support SWEET Center offerings are available for free to WPI undergraduate and graduate students.</HeaderSubtitle>
              <ButtonCentered href='https://www.wpi.edu/academics/global-school/departments-programs-offices/sweet-center'>Visit SWEET Center</ButtonCentered>
            </ContentSection>
                        <ContentSection>
              <HeaderRight>Diversity Academic Programs</HeaderRight>
              <SubHeader>Africana Studies Program</SubHeader>
              <BracketedText>Housed in the Social Science and Policy Studies department, the Africana Studies Minor examines the experiences of people of African descent whether they live in Africa, the US, the Caribbean, Latin America, Europe, or Asia. The minor requirements offer an interdisciplinary approach for examining the rich cultures, arts, institutions, sciences, technologies, histories, political economies, and philosophies developed and practiced by people of African descent.	To learn more, contact Trent Masiki at tmasiki@wpi.edu. 	</BracketedText>
              <SubHeader>Gender, Sexuality, and Women’s Studies (GSWS)</SubHeader>
              <BracketedText>Housed in the School of Arts & Sciences, the Gender, Sexuality & Women's Studies program (GSWS) facilitates critical campus-wide curricular and co-curricular examinations of gender and sexuality. Our motivating goal is to encourage students, faculty and staff to interrogate interlocking systems of oppression, including racism, sexism, homophobia, transphobia, classism, ethnocentrism and colonialism, to learn about their impact on campus and around the world and to practice resisting them.</BracketedText>
              <ButtonCentered href='https://www.wpi.edu/c/gendersexualitywomensstudies'>Visit their website</ButtonCentered> 
            </ContentSection>
          <AcademicsChecklist />

          <Footer />
        </View>
      </View>


    </ScrollView>
  )
}