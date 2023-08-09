import React, { Component } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { BodyText, BracketedText, CenteredTitle, HeaderRight, ImageHeader, PageHeader, QuoteLeft, QuoteRight, SectionContentHeader } from "../components/Text"
import { ImageContainer } from "../components/Images"
import { AccordionTitle, AccordionItem, AccordionLink, LinkListAccordion, ListSectionAccordion } from "../components/Accordion"
import { dropShadow, lorem, loremShort, textBlockMaxWidth } from '../assets/style'

import { ContentSection, Footer, HeaderSubtitle, LightGrayPlatform, RedBeam, RedPlatform, TransparentPlatform } from '../components/Layout'
import { View, Text, Dimensions } from 'react-native'

import Carousel from 'react-native-reanimated-carousel';
import { AppDrawerItemName, } from '../api/navigation'
import { Navbar, } from '../components/Navigation'
import { ButtonCentered } from '../components/Buttons'

// images
const brickWall = require("../assets/brickWall.png")
const gompeiSunset = require("../assets/gompeiSunset.jpg")

export default function HomePage({ navigation }) {


  const width = Dimensions.get('window').width;
  const carouselWidth = width > 800 ? 800 : width;
  const carouselHeight = 450;

  const imageStyles = {
    alignSelf: 'center',
    width: 250,
    objectFit: "contain",
    height: 250,
    marginBottom: 20,
    marginTop: 20,
  };
  return (
    <ScrollView>
      <Navbar n={navigation} title={AppDrawerItemName.Welcome} />
      <View style={{ backgroundColor: "#e4e4e4", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <View style={{ ...dropShadow, backgroundColor: "#ffffff", width: "100%", maxWidth: 800, display: "flex", flexDirection: "column" }}>

          <PageHeader>Welcome to the WPI Student Success Handbook</PageHeader>

          <ContentSection>
            <ImageHeader image={gompeiSunset}>Our Mission</ImageHeader>
            <HeaderSubtitle>
              Our Values include Respect, Community, Inclusion, Innovation, and Achievement.
            </HeaderSubtitle>
            <BodyText>
              The Student Success Handbook is designed to ensure that all students, including those from diverse backgrounds, can access and benefit from the abundance 
              of fundamental resources on campus that foster student success. We emphasize various strategies and tools tailored to support the diverse student body, 
              making it easier for incoming students to find the right resources for their unique needs at WPI. Here, we suggest strategies and available tools that 
              promote the success of our diverse student body - there is something for everyone at WPI if you know where to look!
            </BodyText>
            <ButtonCentered href="https://www.wpi.edu/sites/default/files/2023-04/GompeisGuide_2022_DIgital.pdf">Visit Gompei's Guide</ButtonCentered>
          </ContentSection>

          <ContentSection>
            <ImageHeader image={brickWall}>Different Definitions of Success</ImageHeader>
            <HeaderSubtitle>
              We interviewed diverse students such as BIPOC, LGBTQIA+, women, people with disabilities, and others at WPI to ask them about how they define success.
              From their responses, we developed some key takeaways and quotes in their own words.
            </HeaderSubtitle>

            { carouselItems }

            { /** 
              <View style={{ flex: 1, backgroundColor: "#f4f4f4", }}>
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
              </View>
            */ }

              </ContentSection>
              
          {/* Resources */}
          <ContentSection>
            <AccordionTitle title="WPI Emergency Resources">
              <ListSectionAccordion>
              <LinkListAccordion data={[
                      {key: 'WPI Police', href: 'https://www.wpi.edu/offices/police'},
                      {key: 'Student Development & Counseling Center', href: 'https://www.wpi.edu/offices/student-development-counseling-center'},
                      {key: 'Campus Shuttles', href: 'https://www.wpi.edu/student-experience/resources/safety/campus-transportation'},
                      {key: 'Health Services', href: 'https://www.wpi.edu/student-experience/health-counseling/health-services'},
                      {key: 'Title IX', href: 'https://www.wpi.edu/offices/title-ix/how-to-report-sexual-misconduct'},
                      ]} />
              </ListSectionAccordion>
            </AccordionTitle>
            <AccordionTitle title="Additional Emergency Resources">
             <ListSectionAccordion>
              <LinkListAccordion data={[
                      {key: 'State Police',href:'https://www.mass.gov/orgs/massachusetts-state-police'},
                      {key: 'UMass Medical Center',href:'https://www.ummhealth.org/umass-memorial-medical-center'},
                      {key: 'St. Vincent Hospital',href:'https://www.stvincenthospital.com/locations/detail/saint-vincent-hospital'},
                      {key: 'Pathways for Change', href: 'https://pathwaysforchange.help/'},
                      {key: 'YWCA Daybreak', href: 'https://ywcacm.org/domestic-violence/'},
                      {key: 'Suicide and Crisis Hotline', href: 'https://988lifeline.org/?utm_source=google&utm_medium=web&utm_campaign=onebox'},
                      ]} />
             </ListSectionAccordion>
            </AccordionTitle>
             
          </ContentSection>

          <Footer />
        </View>
      </View>

    </ScrollView>
  )
}

class CarouselQuoteCard extends Component {

  static Title(props) {
    return <CenteredTitle fontSize={16}>{props.children}</CenteredTitle>;
  }

  static Quote(props) {
    return (
      <View style={{ width: "100%" }}>
        {props.left ? <QuoteLeft color={props.color}>{props.children}</QuoteLeft> : <QuoteRight color={props.color}>{props.children}</QuoteRight>}
      </View>
    )
  }

  render() {
    return (
      <View>
        {this.props.children}
      </View>
    )
  }
}

class CarouselTitleCard extends Component {

  static Title(props) {
    return <HeaderRight>{props.children}</HeaderRight>;
  }

  static Body(props) {
    return (
      <View style={{ marginTop: 7, width: "80%" }}>
        <BracketedText noMargin>{props.children}</BracketedText>
      </View>
    )
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: "center"
        }}
      >
        {this.props.children}
      </View>
    )
  }
}

const carouselItems = [
  (
    <CarouselTitleCard>
      <CarouselTitleCard.Title>
        Contentment, Happiness, and Balance
      </CarouselTitleCard.Title>
      <CarouselTitleCard.Body>
        Individual happiness and contentment rather than external validation are important for success. Finding balance in 
        life is also important. This could involve balancing academics and social life, and balancing work and leisure time.
      </CarouselTitleCard.Body>
    </CarouselTitleCard>
  ),
  (
    <CarouselQuoteCard>
      <CarouselQuoteCard.Quote color="gray">
        “I would personally define success as reaching a comfortable spot where you are excited to wake up in the morning, and you 
        don't have anything throughout the day that you genuinely dread doing.”
      </CarouselQuoteCard.Quote>
      <CarouselQuoteCard.Quote left color="red">
        “And socially, at the end of the day, I feel I'm good. I don't feel isolated or anything like that. I went to bed satisfied, not even happy, just content.”
      </CarouselQuoteCard.Quote>
    </CarouselQuoteCard>
  ),
  (
    <CarouselTitleCard>
      <CarouselTitleCard.Title>
        Learning and Growth
      </CarouselTitleCard.Title>
      <CarouselTitleCard.Body>
        Success is about not giving up, learning from failures, and continuing to strive towards your goals. Success for some is 
        linked to personal growth and development. This could be in the form of developing communication skills, becoming more 
        social, or learning about things that are useful and interesting to you.
      </CarouselTitleCard.Body>
    </CarouselTitleCard>
  ),
  (
    <CarouselQuoteCard>
      <CarouselQuoteCard.Quote left color="red">
        "That is my definition of success, and I will stick by it. I work damn hard to go from being a failing student to now 
        getting A's and B's. That's success. Success has changed over the years. And to me, being happy, even as a failing 
        student and as a high-achieving student, both are fine. As long as I'm happy, I consider this success."
      </CarouselQuoteCard.Quote>
      <CarouselQuoteCard.Quote color="gray">
        “Success to me is failing over and over until you find a satisfactory point. It's the continuation of learning from your 
        failures, and instead of giving up, you keep going until you reach your end goal. That's success to me.”
      </CarouselQuoteCard.Quote>
    </CarouselQuoteCard>
  ),
  (
    <CarouselTitleCard>
      <CarouselTitleCard.Title>
        Resilience and Perseverance
      </CarouselTitleCard.Title>
      <CarouselTitleCard.Body>
        The conventional notion of such as grades or financial wealth are important, but it's crucial to consider other aspects 
        like intellectual growth, personal joy, and overall contentment. For these diverse student communities, success is also 
        assessed by the sense of forward momentum, whether that's in their educational journey, personal interests (like playing the piano), 
        or individual life paths. The process of growth, self-improvement, and forward movement is a meaningful aspect to success.
      </CarouselTitleCard.Body>
    </CarouselTitleCard>
  ),
  (
    <CarouselQuoteCard>
      <CarouselQuoteCard.Quote color="gray">
        “That's what a successful run at WPI looks like, because obviously, WPI is not a cakewalk; it's work-intensive. There are 
        expectations through the roof, not only from the teachers but also from the people around you. There's competition, and 
        it's cutthroat out here. So you know what I mean. As long as you keep going and persevere through all the noise and the mud, that's huge.”
      </CarouselQuoteCard.Quote>
      <CarouselQuoteCard.Quote left color="red">
        “I would define success as still being able to keep going. So I think as long as I didn't give up, I'm still successful.”
      </CarouselQuoteCard.Quote>
    </CarouselQuoteCard>
  ),
  (
    <CarouselTitleCard>
      <CarouselTitleCard.Title>
        Financial Stability and Career Satisfaction
      </CarouselTitleCard.Title>
      <CarouselTitleCard.Body>
        Although money is not the end all be all, the ability to support oneself and their family is a key aspect of success for underrepresented 
        students at WPI. This could involve achieving a certain level of financial stability or being able to sustain oneself in terms of knowledge 
        and skills learned in the classroom so that they can provide it to the future of work.
      </CarouselTitleCard.Body>
    </CarouselTitleCard>
  ),
  (
    <CarouselQuoteCard>
      <CarouselQuoteCard.Quote left color="red">
        “I define success as doing what you enjoy, but also feeling secure in what you're doing. So it's about finding that balance between having 
        pieces that you can enjoy while still making sure that you're doing everything you need to do.”
      </CarouselQuoteCard.Quote>
      <CarouselQuoteCard.Quote color="gray">
        "Personally, I think success has to be a mix of personal satisfaction with your day-to-day life, and you know, that part of it. I think 
        it also has to do with satisfaction. Actually, I guess satisfaction is a good way to put it, because I think financial success is very intertwined."
      </CarouselQuoteCard.Quote>
    </CarouselQuoteCard>
  ),
  (
    <CarouselTitleCard>
      <CarouselTitleCard.Title>
        Social and Personal Relations
      </CarouselTitleCard.Title>
      <CarouselTitleCard.Body>
        Having satisfying relationships or having a support network is an important part of success for diverse students at WPI. The transition to 
        university life can be challenging, and this is often exacerbated for students with diverse backgrounds who may face various barriers 
        related to their racial/ethnic background, gender, sexuality, religious background, or disability. Having a solid network of friends can 
        provide social and emotional support.
      </CarouselTitleCard.Body>
    </CarouselTitleCard>
  ),
  (
    <CarouselQuoteCard>
      <CarouselQuoteCard.Quote color="gray">
        "I feel that social success is being with friends who are genuine. Because at WPI, I meet many people, and though I know a lot of them since 
        it's a small school, the percentage of people that I consider more than just acquaintances is small. To me, social success is having people 
        that I'm actually close with, not just friendly with. If I were really struggling, I could go talk to them."
      </CarouselQuoteCard.Quote>
      <CarouselQuoteCard.Quote left color="red">
        "So, when I'm stressed and I feel I have someone to talk to about it, I'm not thinking, 'Oh, I feel so alone, woe is me?' You know, that 
        feeling comes up for everyone, but having a support network is important. It's not just that I rely on this one person; I rely on multiple people."
      </CarouselQuoteCard.Quote>
    </CarouselQuoteCard>
  ),
]