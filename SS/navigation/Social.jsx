import { View, Text, Button, Dimensions } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { CenteredTitle, HeaderRight, BracketedText, ImageHeader, PageHeader, SectionContentHeader, QuoteRight, QuoteLeft, GreayTextBeam, GrayTextBeam, BodyText } from "../components/Text"
import { ButtonBlock, ButtonCentered } from "../components/Buttons"

import { ContentSection, Footer, LightGrayPlatform, TransparentPlatform, RedBeam, RedPlatform, HeaderSubtitle } from '../components/Layout'
import { dropShadow, lorem, loremShort, textBlockMaxWidth } from '../assets/style'
import { ImageContainer } from '../components/Images'
import { AcademicsChecklist, CampusInvolvementChecklist } from './Checklists'
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

export default function Social({ navigation }) {


  return (
    <ScrollView>

      <Navbar n={navigation} title={AppDrawerItemName.Social} />

      <View style={{ backgroundColor: "#e4e4e4", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <View style={{ ...dropShadow, backgroundColor: "#ffffff", width: "100%", maxWidth: 800, display: "flex", flexDirection: "column" }}>
          <PageHeader>Social Life: On Campus at WPI</PageHeader>



          <ContentSection>
          <LightGrayPlatform>
            <BodyText>On behalf of the Dean of Students Office staff, welcome to WPI! </BodyText>
            <BodyText>Staff are here to help you succeed, and while we can assist you in this process, we also want to enable and empower you to support and advocate for yourself. You’ll find the journey through your first year to progress quickly, with campus life full of adventures, new opportunities and experiences (and the start of your academic and professional career).</BodyText>
            <BodyText>Yet….don’t get too pre-occupied with what your graduation will look like, or what will happen 4 years down the road. Instead, take advantage of this great opportunity to meet your fellow students from around the world, to try new things, and to get involved in clubs and organizations that are brand new to you! This is all part of the adventure that you’re embarking upon. </BodyText>
            <BodyText>We count on you taking personal responsibility for your academic and social success, yet we have many support services to assist you. Leverage them. Take advantage of them. You control how you balance and manage your time. Lastly, one of the long-term adages at WPI is this saying: </BodyText>
            <BodyText>Go to class <br />Do the work <br />Ask for help</BodyText>
            <BodyText>If you do these things (and also get involved in campus life), you’ll find your pathway to success. That’s our hope for your happiness while at WPI.</BodyText>
            <BodyText>Best wishes for an exciting and successful arrival and first-year. </BodyText>
            <BodyText>Gregory Snoddy <br />Dean of Students</BodyText>
            </LightGrayPlatform>
          </ContentSection>
          <ContentSection>
            <ImageHeader image={connections}>Connections</ImageHeader>
            <HeaderSubtitle>
              How did other WPI students jumpstart their social lives at WPI? Many students emphasized the importance of Connections in their experiences integrating at WPI.
            </HeaderSubtitle>
            <ButtonCentered href="https://www.wpi.edu/offices/diversity/success-programs/connections">See more on Connections</ButtonCentered>
            <ContentSection>
              <LightGrayPlatform>
                <Carousel
                  loop
                  width={carouselWidth}
                  data={carouselItems}
                  height={carouselHeight}
                  autoPlay
                  autoPlayInterval={5000}
                  scrollAnimationDuration={1000}
                  renderItem={({ index }) => (carouselItems[index])}
                />
              </LightGrayPlatform>
            </ContentSection>

            <QuoteRight color="gray">
              "Connections was actually really fun. Honestly, I feel like everyone, if they have the chance, should go through it. The best way I could describe it is it's like a sleepover camp...
              because this is a new environment, a bunch of new people and we're not getting into classes just yet and things are fun."
            </QuoteRight>
          </ContentSection>

          <ContentSection>
            <ImageHeader image={clubs}>Student Organizations at WPI</ImageHeader>
            <HeaderSubtitle>WPI has over 235 student clubs and organizations; rest assured, there is something for everyone!</HeaderSubtitle>
            <ContentSection>
              <GrayTextBeam>Make sure to check out the activities fair to see what clubs WPI has to offer.</GrayTextBeam>
              <GrayTextBeam>ODIME offers a number of different identity-based affinity groups.</GrayTextBeam>
              <QuoteLeft color="red">
                "Definitely try out other clubs, not even just the big ones... don't be afraid to try the smaller clubs. That's where I met my favorite people ever."
              </QuoteLeft>
              <ButtonCentered href="https://www.wpi.edu/offices/diversity/resources">Visit ODIME Affinity Groups</ButtonCentered>
            </ContentSection>
          </ContentSection>

          <ContentSection>
            <ImageHeader image={greek}>Greek Life at WPI</ImageHeader>
            <HeaderSubtitle>WPI has 20 active chapters at WPI: 13 fraternities and 7 sororities.</HeaderSubtitle>

            <HeaderRight>Zeta Phi Beta</HeaderRight>
            <SectionContentHeader>
              <SectionContentHeader.Title>
                Fostering Service, Scholarship, and Civic Engagement
              </SectionContentHeader.Title>
            </SectionContentHeader>
            <BracketedText>
              Zeta Phi Beta's mission emphasizes service, scholarship, and civic engagement, fostered within a sisterhood committed to "finer womanhood".
              Members actively volunteer in community outreach, support charities, fund scholarships, and promote societal change through advocacy for transformative legislation.
            </BracketedText>
            <ButtonCentered href="https://zphib1920.org/">Visit Zeta Phi Beta</ButtonCentered>

            <HeaderRight>Theta Nu Xi</HeaderRight>
            <SectionContentHeader>
              <SectionContentHeader.Title>
                Championing Diversity, Community Service, and Leadership
              </SectionContentHeader.Title>
            </SectionContentHeader>
            <BracketedText>
              Theta Nu Xi Multicultural Sorority, Inc. remains dedicated to its founding mission and values while fostering growth for future success.
              Its chapters, recognized nationwide for their notable members and programs, significantly contribute to their communities. The sorority
              champions diversity and education, demonstrated through substantial scholarships, philanthropic efforts, and diverse service activities.
            </BracketedText>
            <ButtonCentered href="https://www.thetanuxi.org/">Visit Theta Nu Xi</ButtonCentered>

          </ContentSection>


          <ContentSection>
            <ImageHeader image={sports}>Sports at WPI</ImageHeader>
            <HeaderSubtitle>Sports are a great way to get involved, find your group of people, and take a mental break from academics.</HeaderSubtitle>
            <BracketedText>
              At WPI, students can engage in sports at various levels— intramural, club, and varsity. Intramural sports offer relaxed, recreational play within the WPI community.
              Club sports step up the competition, involving intercollegiate matches managed by students. For those seeking the highest level of competition, WPI's varsity sports
              teams compete nationally. All three offer a fantastic opportunity to connect with fellow students, especially for first-year students looking to meet new people.
            </BracketedText>
            <ButtonCentered href="https://www.wpi.edu/student-experience/sports-recreation/sports-recreation-center/intramurals">Visit Intramural Sports</ButtonCentered>
            <ButtonCentered href="https://www.wpi.edu/student-experience/sports-recreation/sports-recreation-center/club-sports">Visit Club Sports</ButtonCentered>
            <ButtonCentered href="https://athletics.wpi.edu/landing/index?_ga=1.252353354.2135926216.1470656950&_gl=1*7ebl94*_ga*MTk5NjIyODU2LjE2ODQ3ODA0NTY.*_ga_RE35PKQB7J*MTY4ODQwODY2Ni4xMjUuMS4xNjg4NDA5NjY5LjM3LjAuMA..">Visit Varsity Sports</ButtonCentered>
          </ContentSection>

          <ContentSection>
            <ImageHeader image={hockey}>Club Spotlights</ImageHeader>
            <HeaderSubtitle>We asked the FiGSA and SASE Exec teams to tell us a little bit about their student-led organizations.</HeaderSubtitle>

            <HeaderRight>First Generation Student Association (FiGSA)</HeaderRight>
            <SectionContentHeader>
              <SectionContentHeader.Title>
                How can new students connect with your organization?
              </SectionContentHeader.Title>
            </SectionContentHeader>
            <BracketedText noMargin left>
              "We will be attending the activity fairs to sign up for our alias and advertise the club. Our contact information is also linked
              in the weekly ODIME alias and those at ODIME can contact our exec easily for any questions from students. For events, we always
              post on Instagram and often print flyers to put in the CC, Unity Hall, the Innovation Studio, and residence halls." - FiGSA Exec Member
            </BracketedText>
            <SectionContentHeader>
              <SectionContentHeader.Title>
                What events do you hold throughout the year?
              </SectionContentHeader.Title>
            </SectionContentHeader>
            <BracketedText noMargin left>
              "We host many social events, usually around 3-4 per term, to try to get to know students and have people socialize... We accept anyone
              who comes, and encourage people to bring their friends. Some of our meetings each term also revolve around resources at the school. For
              example, in October, we always host a FAFSA and financial aid info session with the financial aid office. We also have a newsletter where
              we highlight campus resources, advertise our events, and provide links to scholarships and internships." - FiGSA Exec Member
            </BracketedText>

            <HeaderRight>Society of Asian Scientists and Engineers (SASE)</HeaderRight>
            <SectionContentHeader>
              <SectionContentHeader.Title>
                How can new students utilize your organization?
              </SectionContentHeader.Title>
            </SectionContentHeader>
            <BracketedText noMargin left>
              "SASE helps integrate new members into our organization mainly through our chapter's mentor mentee program. This program is run during the A
              term, with final mentor-mentee pairings made at the beginning of B term. This program helps introduce incoming freshmen to upperclassmen both in
              and outside of their major, as well as to other incoming freshmen they may or may not have had the chance to meet outside of our organization.
              Through our mentor-mentee program, all participant members are able to make new connections to form a close-knit community on campus." - SASE Exec Member
            </BracketedText>
            <SectionContentHeader>
              <SectionContentHeader.Title>
                What resources do you have available?
              </SectionContentHeader.Title>
            </SectionContentHeader>
            <BracketedText noMargin left>
              "As a professional society on campus, we are able to provide both new and returning members of our organization with help and resources in
              professional development. We offer events focusing on resume reviews, LinkedIn workshops, company information sessions, and visits, etc. In
              addition to events on campus, our WPI SASE chapter provides our members the opportunity to attend both National and Regional Conferences during the
              school year. These conferences offer new opportunities to network outside of campus, as well as provide exposure to company recruiters." - SASE Exec Member
            </BracketedText>

          </ContentSection>

          <CampusInvolvementChecklist />

          <Footer />
        </View>
      </View>


    </ScrollView>
  )
}

function CarouselItemText(props) {
  return <Text style={{ fontSize: 16, marginBottom: 7 }}>"{props.children}"</Text>
}

const carouselItems = [
  (
    <View style={{ height: carouselHeight, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
      <View style={{ display: "flex", flexDirection: "column", flex: 1, alignItems: "center", justifyContent: "center" }}>
        <CarouselItemText>Dining halls</CarouselItemText>
        <CarouselItemText>First Year Experience Week</CarouselItemText>
        <CarouselItemText>Mutual friends</CarouselItemText>
        <CarouselItemText>Sports</CarouselItemText>
        <CarouselItemText>BSU</CarouselItemText>
      </View>
      <View style={{ display: "flex", flexDirection: "column", flex: 1, alignItems: "center", justifyContent: "center" }}>
        <CarouselItemText>Joining clubs</CarouselItemText>
        <CarouselItemText>FIGSA</CarouselItemText>
        <CarouselItemText>NSBE</CarouselItemText>
        <CarouselItemText>Haunted Higgins House</CarouselItemText>
        <CarouselItemText>Cheese Club</CarouselItemText>
      </View>
    </View>
  ),
  (
    <View style={{ height: carouselHeight, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
      <View style={{ display: "flex", flexDirection: "column", flex: 1, alignItems: "center", justifyContent: "center" }}>
        <CarouselItemText>ASA</CarouselItemText>
        <CarouselItemText>Asian oriented student associations</CarouselItemText>
        <CarouselItemText>Campus events</CarouselItemText>
        <CarouselItemText>Social media</CarouselItemText>
        <CarouselItemText>ODIME</CarouselItemText>
      </View>
      <View style={{ display: "flex", flexDirection: "column", flex: 1, alignItems: "center", justifyContent: "center" }}>
        <CarouselItemText>Soccom events</CarouselItemText>
        <CarouselItemText>NSO/Insight</CarouselItemText>
        <CarouselItemText>The people next to me in lectures</CarouselItemText>
        <CarouselItemText>Quad Fest</CarouselItemText>
      </View>
    </View>
  ),
]