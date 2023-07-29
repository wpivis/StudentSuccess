import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { BodyText, BracketedText, CenteredTitle, ImageHeader, PageHeader, QuoteLeft, QuoteRight, SectionContentHeader } from "../components/Text"
import { ImageContainer } from "../components/Images"
import { AccordionTitle, AccordionItem, AccordionLink } from "../components/Accordion"
import { dropShadow, lorem, loremShort, textBlockMaxWidth } from '../assets/style'

import { ContentSection, Footer, LightGrayPlatform, RedBeam, RedPlatform, TransparentPlatform } from '../components/Layout'
import { Image } from 'expo-image'
import { Navbar } from '../App'
import { View, Text, Dimensions } from 'react-native'

import Carousel from 'react-native-reanimated-carousel';
import { AppDrawerItemName } from '../api/navigation'

// images
const wpiIcon = require("../assets/adaptive-icon.png")
const brickWall = require("../assets/brickWall.png")
const wpiSky = require("../assets/worcesterSkyline.jpeg")
const gompeiSunset = require("../assets/gompeiSunset.jpg")

export default function HomePage({navigation}) {
 
 
  const width = Dimensions.get('window').width;
  const carouselWidth = width > 800 ? 800 : width;
  const carouselHeight = carouselWidth < 800 ? 800 : carouselWidth;

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
      <View style={{backgroundColor: "#e4e4e4", width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <View style={{...dropShadow, backgroundColor: "#ffffff", width: "100%", maxWidth: 800, display: "flex", flexDirection: "column"}}>

          <PageHeader>Welcome to the WPI Student Success Handbook</PageHeader>

          <ContentSection>          
            <ImageHeader image={gompeiSunset}>Our Mission</ImageHeader>
            <TransparentPlatform>
            <BodyText> 
              The Student Success Handbook at WPI is specifically designed to ensure that all students,
              including those from diverse backgrounds, can access and benefit from the abundance of fundamental 
              resources on campus that foster student success. We emphasize a range of strategies and tools tailored 
              to support the diverse student body, making it easier for incoming students to find the right resources 
              for their unique needs at WPI. Here, we emphasize strategies and available tools that promote the success 
              of our diverse student body - there is something for everyone at WPI if you know where to look! For more general 
              student information check out <a href="https://www.wpi.edu/sites/default/files/2023-04/GompeisGuide_2022_DIgital.pdf" target='_blank'>gompei's guide</a>.
            </BodyText>
            <BodyText> 
             Our Values include Respect, Community, Inclusion, Innovation, and Achievement.
            </BodyText>
            </TransparentPlatform>
          </ContentSection>
          
          <ContentSection>
              <ImageHeader image={brickWall}>Different Definitions of Success</ImageHeader>
              <RedPlatform>
                <Text style={{color: "white", textIndent: 28}}>We interviewed diverse students such as BIPOC, LGBTQIA+, women, people with disabilities, and others at WPI to ask them about how they define success. From their responses, we developed some key takeaways and quotes in their own words.</Text>
              </RedPlatform>

              <View style={{ flex: 1, backgroundColor: "#f4f4f4",}}>
                <Carousel
                  loop
                  width={carouselWidth}
                  data={quotesData}
                  height={carouselHeight}
                  scrollAnimationDuration={1000}
                  renderItem={({ index }) => (
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'flex-start',
                      }}
                    >
                      <CenteredTitle>{quotesData[index].header}</CenteredTitle>
                      <View style={{marginBottom: 7}}>
                        <BracketedText noMargin>{quotesData[index].subtitle}</BracketedText>
                      </View>
                      {quotesData[index].quotes.map((quote, i) => {{
                        if ((i + index) % 2 === 0) {
                          return <QuoteLeft color="gray">{quote}</QuoteLeft>
                        }
                        return <QuoteRight color="red">{quote}</QuoteRight>
                      }})}
                    </View>
                  )}
                />
              </View>
          </ContentSection>

          {/* Resources */}
          <ContentSection>
            <AccordionTitle title="WPI Emergency Resources">
              <AccordionLink title ="WPI Police" href="https://www.wpi.edu/offices/police"/>
              <AccordionLink title ="Student Development & Counseling Center" href="https://www.wpi.edu/offices/student-development-counseling-center"/>
              <AccordionLink title ="Campus Shuttles" href="https://www.wpi.edu/student-experience/resources/safety/campus-transportation"/>
              <AccordionLink title ="Health Services" href="https://www.wpi.edu/student-experience/health-counseling/health-services"/>
              <AccordionLink title ="Title IX" href="https://www.wpi.edu/offices/title-ix/how-to-report-sexual-misconduct"/>
            </AccordionTitle>
            <AccordionTitle title="Additional Emergency Resources">
              <AccordionItem title ="State Police: 508-829-8326"/>
              <AccordionItem title ="UMass Medical Center: 508-334-1000"/>
              <AccordionItem title ="St. Vincent Hospital: 508-334-5000"/>
              <AccordionLink title ="Pathways for change" href="https://pathwaysforchange.help/"/>
              <AccordionLink title ="YWCA Daybreak" href="https://ywcacm.org/domestic-violence/"/>
              <AccordionLink title ="Suicide and Crisis Hotline" href="https://988lifeline.org/?utm_source=google&utm_medium=web&utm_campaign=onebox"/>
            </AccordionTitle>
          </ContentSection>

          <Footer/>
        </View>
      </View>
    
    </ScrollView>
  )
}


const quotesData = [
  {
    header: "Contentment, Happiness, and Balance",
    subtitle: "Individual happiness and contentment rather than external validation are important for success. Finding balance in life is also important. This could involve balancing academics and social life, and balancing work and leisure time.",
    quotes: [
      `“I would personally define success as being able to get to a comfortable spot where you are excited to wake up in the morning, and you don't have anything throughout the day that you genuinely dread to do.”`,
      `“Being happy and being able to support yourself.”`,
      `“And socially it's just like at the end of the day, I feel like I’m good, I don't feel isolated or anything like that. It's like, I went to bed satisfied, not even happy, just content.”`,
    ]
  },
  {
    header: "Learning and Growth",
    subtitle: "Success is about not giving up, learning from failures, and continuing to strive towards your goals. Success for some is linked to personal growth and development. This could be in the form of developing communication skills, becoming more social, or learning about things that are useful and interesting to you.",
    quotes: [
      `“That is my definition of success and I will stick by it. I work damn hard to go from a failing student to now getting A's and B's. That's success. Success has changed over the years. And to me, being happy, even as a failing student and as a high achieving student, both of them are fine as long as I'm happy, I'm just like, this is success.”`,
      `“Success is to me failing over and over until you find a satisfactory point. So like the continuation of just learning from your failures, and instead of just giving up, you keep going until you get to your end goal, that’s success to me.”`,
    ]
  },
  {
    header: "Resilience and Perseverance",
    subtitle: "The conventional notion of such as grades or financial wealth are important, but it's crucial to consider other aspects like intellectual growth, personal joy, and overall contentment. For these diverse student communities, success is also assessed by the sense of forward momentum, whether that's in their educational journey, personal interests (like playing the piano), or individual life paths. The process of growth, self-improvement, and forward movement is a meaningful aspect to success.",
    quotes: [
      //`“That's what a successful run at WPI looks like, because obviously WPI is not a cake walk, you know it's work intensive. There's expectations out the roof like not only from the teachers and stuff like that, but the people around you like this competition as well like it's cut throat out here. So you know what I mean. As long as I feel like as long as you keep going, and kind of through the noise through all the mud persevere that's huge.”“That's what a successful run at WPI looks like, because obviously WPI is not a cake walk, you know it's work intensive. There's expectations out the roof like not only from the teachers and stuff like that, but the people around you like this competition as well like it's cut throat out here. So you know what I mean. As long as I feel like as long as you keep going, and kind of through the noise through all the mud persevere that's huge.”`,
      `“I would define success as, like, still being able to keep going. So I think as long as I, like, didn't give up that I'm still successful.”`,
      `“I feel like I'm successful when I'm on top of my work. You know, I feel, I feel like I don't have to like, rush everything at the end.”`,
    ]
  },
  {
    header: "Financial Stability and Career Satisfaction",
    subtitle: "Although money is not the end all be all, the ability to support oneself and their family is a key aspect of success for underrepresented students at WPI. This could involve achieving a certain level of financial stability or being able to sustain oneself in terms of knowledge and skills learned in the classroom so that they can provide it to the future of work.",
    quotes: [
      `“I define success as doing what you enjoy, but also like feeling secure in what you're doing. So just finding that balance between having pieces that you can enjoy while still making sure that you're doing everything that you need to do.”`,
      `“Personally, I think success has to be a mix of personal satisfaction with your day to day life, and you know that part of it. I think it also does have to do with - Actually, I guess satisfaction is a good way to put it, because I think financial success is very intertwined.”`,
      `“For one thing, the easiest way to define success is money, but right now in college I can't really. You know I don't have a job as of right now and I kind of have to wait until I graduate to find a stable job.”`,
    ]
  },
  {
    header: "Social and Personal Relations",
    subtitle: "Having satisfying relationships or having a support network is an important part of success for diverse students at WPI. The transition to university life can be challenging, and this is often exacerbated for students with diverse backgrounds who may face various barriers related to their racial/ethnic background, gender, sexuality, religious background, or disability. Having a solid network of friends can provide social and emotional support.",
    quotes: [
      `“If you have status, if you're satisfied with your interpersonal relationships, and then also if you can meet, like your hierarchy of needs like at the baseline.”`,
      //`“I feel like social success is like being with friends that are like genuine and like, cause I feel like at WPI I meet, I feel like, I know, I, I feel like I know a lot of people at this school because it's so small but like the percentage of people that I consider, like people I'm friendly with versus people that I feel like if I was really struggling, I could go talk to them. I feel like that would be social success, having people that I'm actually close with and I'm not just friendly with.”`,
      `“So, like, when I'm stressed and I feel like, you know, I have someone to talk to about it. I'm not like, oh, I feel so alone woe is me? you know, that comes up for everyone but like having like a support network, having like a circle. It's not just like I rely on this one person. It's like I rely on multiple people.”`,
    ]
  },
]