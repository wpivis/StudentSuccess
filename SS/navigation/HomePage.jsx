import React, { Component } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { BodyText, BracketedText, CenteredTitle, HeaderRight, ImageHeader, PageHeader, QuoteLeft, QuoteRight, SectionContentHeader } from "../components/Text"
import { ImageContainer } from "../components/Images"
import { AccordionTitle, AccordionItem, AccordionLink, LinkListAccordion, ListSectionAccordion, ListAccordion } from "../components/Accordion"
import { dropShadow, lorem, loremShort, textBlockMaxWidth } from '../assets/style'

import { ContentSection, Footer, HeaderSubtitle, LightGrayPlatform, RedBeam, RedPlatform, TransparentPlatform } from '../components/Layout'
import { View, Text, Dimensions } from 'react-native'

import Carousel from 'react-native-reanimated-carousel';
import { AppDrawerItemName, } from '../api/navigation'
import { Navbar, } from '../components/Navigation'
import { ButtonCentered } from '../components/Buttons'
import { analytics } from '../firebase'
import { logEvent } from 'firebase/analytics'

// images
const brickWall = require("../assets/brickWall.png")
const gompeiSunset = require("../assets/gompeiSunset.jpg")

export default function HomePage({ navigation }) {

  logEvent(analytics, "page_view", {
    page_location: "home"
  });

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
            <CenteredTitle>What is the Student Success Handbook?</CenteredTitle>
            <BodyText>
              The Student Success Handbook is designed to ensure that all students, including those from diverse backgrounds, can access and benefit from the abundance 
              of fundamental resources on campus that foster student success. We emphasize various strategies and tools tailored to support the diverse student body, 
              making it easier for incoming students to find the right resources for their unique needs at WPI. Here, we suggest strategies and available tools that 
              promote the success of our diverse student body - there is something for everyone at WPI if you know where to look!
            </BodyText>
            <ButtonCentered href="https://www.wpi.edu/sites/default/files/2023-04/GompeisGuide_2022_DIgital.pdf">Visit Gompei's Guide</ButtonCentered>
            <ButtonCentered href="https://www.wpi.edu/student-experience/resources">Student Resources</ButtonCentered>
          
          <ContentSection>

          </ContentSection>
          <CenteredTitle>Welcome Letters</CenteredTitle>
            <AccordionTitle isExpanded={false} title="Assistant VP, DEIB">
            <BodyText>Dear WPI Students,</BodyText>
              <BodyText>As we approach the upcoming academic year, I'm thrilled to introduce the Student Success app, designed to support your success and well-being on campus. This app complements Gompei's Guide and provides essential information to enhance your experience during your time at WPI.</BodyText>
              <BodyText>To help you make the most of your journey as a student, here are some valuable tips:</BodyText>
              <ListAccordion data={[
                      {key: 'Navigating the Academic Landscape: Choosing classes, seeking academic support, and exploring research opportunities can be overwhelming. Seek advice from professors, staff, your family, and peers to make informed decisions. '},
                      {key: 'Building a Strong Support Network: Your success matters to us, and we want to ensure you have the necessary support. Connect with mentors, faculty, staff, student organizations, and off-campus organizations to foster a strong and supportive community. '},
                      {key: 'Self-Care and Well-being: College life can be fast-paced. Prioritize your well-being by managing stress, maintaining mental health, and finding balance in your academics and personal life. '},
                      {key: 'Getting Involved on Campus: WPI has a vibrant campus life. Explore opportunities to get involved and contribute to initiatives that promote inclusivity and diversity.'},
                      ]} />
                <BodyText>Wishing you a smooth transition or return to WPI this fall. Let's make this academic year one of growth, learning, and empowerment. </BodyText>
                <BodyText>Tony Laing <br />Assistant VP, Diversity, Equity, Inclusion, and Belonging <br />Division of Talent and Inclusion </BodyText>
            </AccordionTitle>
          <AccordionTitle title="Dean of Undergraduates">
             <ListSectionAccordion>
             <BodyText>On behalf of all my colleagues in Undergraduate Studies, I extend a heartfelt welcome to each and every one of you. We are genuinely enthusiastic about assisting you in charting your unique path towards success. Please know that our dedicated advising staff is always ready and available to offer guidance and support whenever you need it. </BodyText>
             <BodyText>As you prepare to embark on this exhilarating journey at WPI, you are about to encounter a wealth of knowledge and experiences. You will undoubtedly face challenges that will foster your personal and intellectual growth. The opportunity to participate in projects at our centers around the world awaits you, allowing you to broaden your horizons and forge lasting connections with friends from diverse backgrounds. </BodyText>
             <BodyText>Attend your class in person! One valuable lesson we have all learned during the challenges of the pandemic is that online learning cannot fully replace the benefits of in-person classes. While lecture recordings serve as helpful resources for review, they should not be your primary method of attending class – even if your session starts early in the morning at 8:00 am!</BodyText>
             <BodyText>By becoming a part of our vibrant community of learners, scholars, researchers, designers, and thinkers, you are joining a collective pursuit of exploring new frontiers and pushing boundaries. WPI is an institution that presents a plethora of opportunities, but it is essential for you to take the initiative and seize these opportunities.</BodyText>
             <BodyText>In your question for personal fulfillment and professional development, I dare you to try new things and be open for novel experiences. Even if you believe you have a clear sense of your passions and aspirations, being receptive to fresh perspectives can lead to unexpected and fulfilling discoveries. Embrace the transformative power of exploration and curiosity, and you will unlock your true potential at WPI.</BodyText>
             <BodyText>Welcome aboard! <br />Arne Gericke <br />Dean of Undergraduate Studies. </BodyText>
             </ListSectionAccordion>
          </AccordionTitle>
          <AccordionTitle title="Dean of Engineerning">
             <ListSectionAccordion>
             <BodyText>From all of us in the School of Engineering, welcome to WPI!  Whatever your major, please know that all of us at WPI are glad you’re here. </BodyText>
             <BodyText>One of the core values in our DNA is “balance” -- it’s in our motto Lehr und Kunst, balancing Theory and Practice.  And another balance we work at is the balance between challenge and support.</BodyText>
             <BodyText>Challenging yourself -- to find how and where you need to learn -- is a part of the growth process you will experience in college.  If there is ever a time when you feel like you are struggling, like maybe the challenge is too much, know that EVERYONE around you (including Deans!) has felt that way sometime, and that it’s OK to ask for help. </BodyText>
             <BodyText>You belong to a supportive community here, and we want you to feel comfortable using all the resources available to you.  Whether it’s your fellow students, faculty, staff, administrators -- we like being asked for help, and we are happy to connect with you to share your experience of growth and learning.</BodyText>
             <BodyText>We wish you all the best in your time here!</BodyText>
             <BodyText>John McNeill <br />Bernard M. Gordon Dean of Engineering</BodyText>
             </ListSectionAccordion>
          </AccordionTitle>
          <AccordionTitle title="Dean of Arts and Sciences">
             <ListSectionAccordion>
             <BodyText>Warmest welcome to WPI!  The School of Arts & Sciences is the largest school on campus and we have the privilege and the pleasure of working with every student who graduates from WPI, regardless of your major.  </BodyText>
             <BodyText>We hope that during your time here you will explore not only your academic goals but also take time to indulge your passions and creativity which are essential to a healthy, fulfilling, well-balanced experience.  Whether you are passionate about music, theatre, or fine arts, you will find resources to support you here at WPI.  We believe a holistic education is a combination of your purpose and your passion.</BodyText>
             <BodyText>The values of the School of Arts & Sciences are inclusion, collaboration, curiosity, courage, innovation, and respect.  We work to inspire members of the WPI community to be creators, scholars, inventors, and responsible, ethical global citizens.</BodyText>
             <BodyText>We strive to create a community where diverse voices and opinions are explored in a respectful and inclusive environment.  We recognize the importance of creating a collective sense of belonging in order to form a solid foundation for learning and working together.  We hope you will add your voice to the mix and look forward to you becoming part of the beautiful tapestry that is the Arts & Sciences at WPI.</BodyText>
             <BodyText>Jean King <br />Peterson Family Dean of Arts & Sciences</BodyText>
             </ListSectionAccordion>
          </AccordionTitle>
          <AccordionTitle title="Dean of the Business School">
             <ListSectionAccordion>
             <BodyText>To the Class of 2027</BodyText>
             <BodyText>Welcome to WPI! We, the faculty, staff, and students of the Business School want you to know that we are glad you are here and part of the herd!</BodyText>
             <BodyText>We want WPI to feel like home to you. We want you to feel respected, welcomed, and included. We want you to thrive. For us, that means that we will do all that we can to support you because your well-being is most important. And please know that our offer of support is open to you regardless of major or discipline. We are here for you.</BodyText>
             <BodyText>But just as we want you to depend on us, we are dependent on you to make your needs known. If you have questions or if you run into problems, please let us know. It could be as simple as asking, “Where is Washburn Shops?” or more complex like, “I’m struggling with a class, what should I do?” Just ask for what you need, and we will be there for you. Being in a community means that we are interdependent. Your success is our success, and our success is yours. </BodyText>
             <BodyText>One phrase in the WPI Alma Mater says, “Long have we felt thy guiding hand, thy teachings broad and free…” That guiding hand comes from this collective community that is dedicated to the success of everyone. At times, you will benefit from that guiding hand and at others, you will extend that hand to someone else. That’s what it means to be part of the herd. You are now part of the herd, and we are so excited. Again, welcome to WPI!</BodyText>
             <BodyText>Blessings,</BodyText>             
             <BodyText>Rev. Debora Jackson, DMin <br />Dean, The WPI Business School <br />Harry G. Stoddard Endowed Professor of Management</BodyText>
             </ListSectionAccordion>
          </AccordionTitle>
          <AccordionTitle title="Dean of the Global School">
             <ListSectionAccordion>
             <BodyText>The Global School is delighted to welcome you to WPI as a new member of our community. This next chapter will be one of the most exciting, challenging, and transformative in your lives. We want you to know that we are here for you and will be with you every step of the way.</BodyText>
             <BodyText>We value the unique experiences that every single one of you brings to our campus. Everyone has their own pathway getting here, their own story to tell, and their own direction to follow on their journey at WPI – and together we are all part of the shared community that always surrounds us. We encourage you to forge your own path AND to lean on others for support. You can reach out to your friends, to your professors, to your advisors, to WPI staff members and to any of the deans if you have any questions or concerns. We will help you find what you need to make WPI your home.</BodyText>
             <BodyText>We encourage you to try new things, get uncomfortable in order to grow, listen to your heart, find a mentor and take care of yourself.  The Global School is here to help you discover the world, to explore our own special city of Worcester and to experience more of the campus and all that WPI has to offer. We will be at your side wherever you want to go on your local and global journeys. </BodyText>
             <BodyText>We are so thrilled that you are here!</BodyText>
             <BodyText>Mimi Sheller <br />Dean of The Global School</BodyText>
             </ListSectionAccordion>
          </AccordionTitle>
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
            <AccordionTitle title='Acknowledgments'>
              <ListSectionAccordion>
                <BodyText>We extend our heartfelt gratitude to the individuals who contributed to the realization of "The Student Success Handbook" at Worcester Polytechnic Institute. This collaborative effort has been a true testament to the power of teamwork, dedication, and a shared commitment to fostering inclusivity and student success.</BodyText>
                <BodyText>First and foremost, we would like to express our sincere appreciation to our dynamic team of app developers - Megan Aloise (Computer Science ‘23), Joe Dobbelaar (Computer Science ‘24), and Randy Dyer (Computer Science ‘24). Your determination, innovative thinking, and technical expertise were instrumental in bringing this vision to life. Your coding, designing, and refining have resulted in an app that will impact the lives of countless students.</BodyText>
                <BodyText>Our gratitude extends to Caroline (B.S. Physics, B.A. Environmental and Sustainability Studies ‘22; MS Science and Technology for Innovation in Global Development ‘23) , whose insight and dedication played a pivotal role in curating the content for the app. Your thorough research, interviews, and passion for enhancing student experiences have contributed immensely to the depth and relevance of the handbook's resources.</BodyText>
                <BodyText>We would also like to thank our esteemed professors, Crystal Brown and Hermine Vedogbeton, whose guidance and expertise were invaluable throughout this project. Your commitment to academic excellence, combined with your efforts in curating and validating the content, have ensured that The Student Success Handbook is a comprehensive and cohesive resource.</BodyText>
                <BodyText>A special note of appreciation goes to our esteemed funder, Tony Laing, Assistant VP for Diversity, Equity, Inclusion, and Belonging. Your visionary support and belief in the importance of accessible resources for all students have been integral to this project's success. Your dedication to fostering a diverse and inclusive campus environment aligns seamlessly with the ethos of the handbook.</BodyText>
                <BodyText>Finally, we extend our gratitude to the broader WPI community - faculty, staff, and students - whose valuable insights and feedback have shaped the development of this app. Your input has been invaluable in refining the content and ensuring its relevance to the diverse needs of our student body.</BodyText>
                <BodyText>This app, "The Student Success Handbook," stands as a testament to the collaborative spirit and shared commitment of individuals from various backgrounds to empower students and promote their academic and personal growth. As we move forward, we remain steadfast in our dedication to creating an environment that champions diversity, equity, inclusion, and belonging, and we are excited to witness the positive impact of this app on the WPI community and beyond.</BodyText>
                <BodyText>With gratitude, <br />Megan Aloise <br />Joe Dobbelaar  <br />Randy Dyer <br />Caroline Jaeger <br />Crystal Brown <br />Hermine Vedogbeton </BodyText>
                <BodyText></BodyText>
              </ListSectionAccordion>
            </AccordionTitle>
          </ContentSection>
          <ContentSection>
            
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
      <View style={{marginBottom: 7}}>
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
      <View style={{ marginTop: 7, marginBottom: 7, width: "80%" }}>
        <BracketedText noMargin>{props.children}</BracketedText>
      </View>
    )
  }

  render() {
    return (
      <View
      style={{
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
        Contentment, Happiness, & Balance
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
        Career & Financial well-being
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