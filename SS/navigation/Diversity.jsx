import { View, Text, Button } from 'react-native'
import React from 'react'
import { Image } from "expo-image"
import { ScrollView } from 'react-native-gesture-handler'

import { CenteredTitle, HeaderRight, BracketedText, ImageHeader, PageHeader, SectionContentHeader, QuoteRight, QuoteLeft, GreayTextBeam, BodyText, GrayTextBeam, RedTextBoxes, SubHeader, TextBold, ScaledImage } from "../components/Text"
import { ButtonBlock, ButtonCentered } from "../components/Buttons"

import { ContentSection, Footer, LightGrayPlatform, TransparentPlatform, RedBeam, HeaderSubtitle, Spacer } from '../components/Layout'
import { dropShadow, lorem, loremShort, textBlockMaxWidth } from '../assets/style'
import { ImageContainer } from '../components/Images'
import { AcademicsChecklist } from './Checklists'
import { AppDrawerItemName, } from '../api/navigation'
import { Navbar, } from '../components/Navigation'
import { AccordionItem, AccordionLink, AccordionTitle, ListSectionAccordion, SectionTitleAccordion, ListPressableAccordion, LinkListAccordion } from '../components/Accordion'

const imposter = require("../assets/Diversity/imposter.jpg")
const bias = require("../assets/Diversity/bias.jpg")
const microaggressions = require("../assets/Diversity/microaggression.jpg")
const demographics = require("../assets/Diversity/demographics.png")

export default function Diversity({ navigation }) {

  return (
    <ScrollView>

      <Navbar n={navigation} title={AppDrawerItemName.Diversity} />

      <View style={{ backgroundColor: "#e4e4e4", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <View style={{ ...dropShadow, backgroundColor: "#ffffff", width: "100%", maxWidth: 800, display: "flex", flexDirection: "column" }}>
          <PageHeader>Cultural and Diversity Resources</PageHeader>

          <ContentSection>

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
              {/* <HeaderRight>Psychosocial Challenges</HeaderRight> */}
            </ContentSection>

            <ImageHeader image={imposter}>Imposter Syndrome</ImageHeader>
            <HeaderSubtitle>Imposter syndrome was a term coined by Pauline Clance and Suzanne Imes in 1978 and describes the way a person feels when they doubt their skills, talents, or accomplishments and has a persistent fear of being exposed as a "fraud" even though they show external evidence of their competence. </HeaderSubtitle>
            <Spacer />
            <GrayTextBeam>Feeling like a fake or fraud and fearing you will be discovered.</GrayTextBeam>
            <GrayTextBeam>Attributing success to luck or chance rather than your own ability or hard work.</GrayTextBeam>
            <GrayTextBeam>Downplaying your own expertise, even in areas where you are very knowledgeable.</GrayTextBeam>
            <GrayTextBeam>Comparing yourself to others and feeling like you're not as good as they are.</GrayTextBeam>
            <GrayTextBeam>Having high standards for yourself and feeling disappointed if you don't meet them.</GrayTextBeam>
            <ContentSection>
              <ImageHeader image={bias}>Unconscious Bias</ImageHeader>
              <HeaderSubtitle>Unconscious bias is when we have quick judgments or opinions about people without realizing it. These thoughts come from our background, experiences, and things we've heard or seen in society. These biases can be positive or negative and influence how we treat others. Becoming aware of these biases and understanding how they influence your behavior is the first step toward minimizing their impact. </HeaderSubtitle>
              <Spacer />
              <GrayTextBeam>Affinity bias is warming-up or being comfortable with people like ourselves.</GrayTextBeam>
              <GrayTextBeam>Halo effect is thinking everything about someone is good because you like them.</GrayTextBeam>
              <GrayTextBeam>Perception bias is forming assumptions about certain groups that make objective decisions impossible.</GrayTextBeam>
              <GrayTextBeam>Confirmation bias is interpreting information in a way that confirms your preexisting beliefs.</GrayTextBeam>
              <GrayTextBeam>Gender bias is preferring one gender over another.</GrayTextBeam>
            </ContentSection>
            <ImageHeader image={microaggressions}>Microaggressions</ImageHeader>
            <HeaderSubtitle>Microaggressions refer to subtle comments that convey derogatory, prejudiced, or discriminatory attitudes towards individuals or groups based on race, gender, ethnicity, sexual orientation, disability, or other characteristics. These actions may seem unintentional, but they can have a significant impact on the recipients, contributing to feelings of alienation and invalidation.</HeaderSubtitle>
            {/* Strategies for Psychosocial Challenges */}
            <HeaderRight>Strategies</HeaderRight>
            <Spacer />
            <GrayTextBeam><TextBold>Speak up:</TextBold> Communicate your feelings and ask the person to stop biased behavior using "I" statements. For instance, say, "I feel disrespected when you... Could you please stop doing that?"</GrayTextBeam>
            <GrayTextBeam><TextBold>Find Support:</TextBold> Reach out to supportive friends, family, community groups, peers further along in their studies, staff in academic affairs, and your professors. Sharing your experiences can provide emotional relief and practical advice.</GrayTextBeam>
            <GrayTextBeam><TextBold>Document:</TextBold> Record incidents, including dates, times, locations, what happened, and any witnesses. This could be useful if you decide to report the behavior.</GrayTextBeam>
            <GrayTextBeam><TextBold>Report:</TextBold> Report the incident to appropriate authorities, including Residence Advisor, ODIME Director, Assistant VP for Diversity, Title IX office, Counseling Services, or law enforcement, as you feel comfortable.</GrayTextBeam>
            <GrayTextBeam><TextBold>Self-Care:</TextBold> Bias incidents can be emotionally draining. Prioritize your mental health by engaging in activities like exercise, meditation, or seeking support from a therapist or counselor.</GrayTextBeam>
            <GrayTextBeam><TextBold>Education:</TextBold> Encourage, develop and/or support educational programs related to your identity. We need more diverse representation, so joining and creating affinity programs are welcomed!  </GrayTextBeam>
          </ContentSection>
          {/* Resources */}
          <HeaderRight>Resources</HeaderRight>
          <BracketedText>
            There are several online resources and activities that can help you learn about diversity, as well as strategies for coping with these experiences. Here are a few ideas:
          </BracketedText>
          <ContentSection>
            {/* On campus */}
            <AccordionTitle title="On Campus Resources">
              <ListSectionAccordion>
                <SectionTitleAccordion href="https://www.wpi.edu/offices/office-accessibility-services">Office of Accessibility Services</SectionTitleAccordion>

                <ListPressableAccordion data={[
                  { key: 'Exam Proctoring Center (EPC)' },
                  { key: 'Programming during Connections and International Student Orientation' },
                  { key: 'Interactive map', href: 'https://maps.wpi.edu/?id=609&_gl=1*1f8ooik*_ga*MTk5NjIyODU2LjE2ODQ3ODA0NTY.*_ga_RE35PKQB7J*MTY4ODM5NDE4OS4xMjMuMS4xNjg4Mzk3MjI2LjQxLjAuMA..#!ce/7351?ct/21914,36740,36797,7478,7405,7479,7481,7483,7484,7491,7492,7493,7494,7495,7496,7497,7498,7499,7509,7513,7514,7572,7573,7575,7576?s/' },
                ]} />
              </ListSectionAccordion>
              <ListSectionAccordion>
                <SectionTitleAccordion href="https://www.wpi.edu/offices/diversity">ODIME</SectionTitleAccordion>
                <ListPressableAccordion data={[
                  { key: 'Oversees diversity programming on campus' },
                ]} />
              </ListSectionAccordion>
              <ListSectionAccordion>
                <SectionTitleAccordion href="https://www.wpi.edu/student-experience/resources/collegiate-religious-center">Collegiate Religious Center</SectionTitleAccordion>
                <ListPressableAccordion data={[
                  { key: 'Various organizations on campus' },
                  { key: 'Common room and meeting space' },
                  { key: 'Vegan kitchen well-stocked with appliances and utensils' },
                  { key: 'Multifaith Mindfulness Space' },
                  { key: 'Islamic Prayer Room' },
                ]} />
              </ListSectionAccordion>
              <ListSectionAccordion>
                <SectionTitleAccordion href="https://www.wpi.edu/offices/international-house">International House</SectionTitleAccordion>
                <ListPressableAccordion data={[
                  { key: 'Virtual and in-person appointments' },
                  { key: 'Assistance with immigration and visa paperwork' },
                  { key: 'International Student Handbook', href: 'https://www.wpi.edu/sites/default/files/inline-image/Body%20of%20International%20Student%20Handbook%202022-2023.pdf' },
                ]} />
              </ListSectionAccordion>
              <ListSectionAccordion>
                <SectionTitleAccordion href="https://www.wpi.edu/c/gendersexualitywomensstudies">Gender, Sexuality, and Women’s Studies Academic program</SectionTitleAccordion>
                <ListPressableAccordion data={[
                  { key: 'Offers a plethora of courses, can fulfill HUA requirements or a minor' },
                  { key: 'Programming with various affinity groups on campus, such as the LGBTQIA+ Advocacy Board, Queer & Trans Connections' },
                ]} />
              </ListSectionAccordion>
              <ListSectionAccordion>
                <SectionTitleAccordion href="https://www.wpi.edu/offices/diversity/resources/lgbtq-support">LGBTQIA+ Support</SectionTitleAccordion>
                <ListPressableAccordion data={[
                  { key: 'Gender inclusive housing and restrooms' },
                  { key: 'Change name & gender in campus records' },
                  { key: 'WPI Alliance chapter' },
                  { key: 'Information on off campus events, inclusive salons/barbers, and healthcare' },
                ]} />
              </ListSectionAccordion>
            </AccordionTitle>
            {/* Online */}
            <AccordionTitle title="Online Resources">
              <ListSectionAccordion>
                <SectionTitleAccordion>TED Talks</SectionTitleAccordion>
                <LinkListAccordion data={[
                  { key: '“The danger of a single story” by Chimamanda Ngozi Adichie', href: '' },
                  { key: '“How to overcome our biases? Walk boldly toward them” by Verna Myers', href: '' },
                  { key: "“Let's get to the root of racial injustice” by Megan Ming Francis.", href: '' },
                ]} />
              </ListSectionAccordion>
              <ListSectionAccordion>
                <SectionTitleAccordion>Podcasts</SectionTitleAccordion>
                <LinkListAccordion data={[
                  { key: '"Code Switch" from NPR', href: 'https://www.npr.org/podcasts/510312/codeswitch' },
                  { key: 'The Diversity Gap', href: 'https://www.thediversitygap.com/' },
                  { key: "Escape From Plan A", href: 'https://podcastaddict.com/podcast/escape-from-plan-a/3025180' },
                ]} />
              </ListSectionAccordion>
            </AccordionTitle>
            {/* Diversity, Racism, and microaggressions */}
            <AccordionTitle title="Diversity, Racism, and Microaggressions">
              <ListSectionAccordion>
                <LinkListAccordion data={[
                  { key: 'So You Want to Talk About Race by Ijeoma Oluo', href: 'https://www.goodreads.com/book/show/45301927-so-you-want-to-talk-about-race' },
                  { key: 'Between the World and Me by Ta-Nehisi Coates', href: 'https://www.goodreads.com/book/show/26058141-between-the-world-and-me?from_search=true&from_srp=true&qid=BKkHgjbRie&rank=1' },
                  { key: 'The New Jim Crow by Michelle Alexander', href: 'https://newjimcrow.com/' },
                  { key: 'American Born Confused Desi by Tanuja Desai Hidier', href: 'http://thisistanuja.com/' },
                  { key: 'Unaccustomed Earth by Jhumpa Lahiri', href: 'https://www.goodreads.com/book/show/85301.Unaccustomed_Earth' },
                  { key: 'American Born Chinese by Gene Luen Yang', href: 'https://www.goodreads.com/book/show/118944.American_Born_Chinese' },
                  { key: 'The Woman Warrior: Memoirs of a Girlhood Among Ghosts by Maxine Hong Kingston', href: 'https://www.goodreads.com/book/show/30852.The_Woman_Warrior' },
                  { key: 'Caramelo by Sandra Cisneros', href: 'https://www.goodreads.com/book/show/32957.Caramelo' },
                  { key: 'Latino Americans: The 500-Year Legacy That Shaped a Nation by Ray Suarez', href: 'https://shop.pbs.org/WD6822.html' },
                  { key: 'Borderlands/La Frontera: The New Mestiza by Gloria Anzaldúa', href: 'https://www.goodreads.com/en/book/show/43436408' },
                  { key: 'When I Was Puerto Rican by Esmeralda Santiago', href: 'https://www.goodreads.com/work/editions/3314905-when-i-was-puerto-rican' },
                ]} />
              </ListSectionAccordion>
            </AccordionTitle>
            {/* Women & Feminism */}
            <AccordionTitle title="Books on Women and Feminism">

              <ListSectionAccordion>
                <ListPressableAccordion data={[
                  { key: '"The Second Sex" by Simone de Beauvoir' },
                  { key: '"Men Explain Things to Me" by Rebecca Solnit' },
                  { key: '"Bad Feminist" by Roxane Gay' },
                  { key: '"We Should All Be Feminists" by Chimamanda Ngozi Adichie.' },
                  { key: '"Invisible Women: Data Bias in a World Designed for Men" by Caroline Criado Perez' },
                  { key: '"The Bell Jar" by Sylvia Plath' },
                  { key: '\"Lean Out: Elissa Shevinsky on why \'leaning in\' isn\'t enough\"' },
                  { key: '"Everyday Sexism" by Laura Bates' },
                ]} />
              </ListSectionAccordion>
            </AccordionTitle>
            {/* LGBTIQA */}
            <AccordionTitle title="LGBTQIA+">

              <ListSectionAccordion>
                <ListPressableAccordion data={[
                  { key: ' "Giovanni\'s Room" by James Baldwin' },
                  { key: '"Gender Outlaw: On Men, Women, and the Rest of Us" by Kate Bornstein' },
                  { key: '"Stone Butch Blues" by Leslie Feinberg' },
                  { key: '"Fun Home: A Family Tragicomic" by Alison Bechdel' },
                  { key: '"Nevada" by Imogen Binnie: This novel offers a raw and insightful look at the life of a trans woman living in New York City.' },
                  { key: '"Less" by Andrew Sean Greer' },
                  { key: '"Juliet Takes a Breath" by Gabby Rivera' },
                  { key: '"Paul Takes the Form of a Mortal Girl" by Andrea Lawlor' },
                  { key: '"Sissy: A Coming-of-Gender Story" by Jacob Tobia' },
                  { key: '"Real Queer America: LGBT Stories from Red States" by Samantha Allen' },
                ]} />
              </ListSectionAccordion>
            </AccordionTitle>

            {/* Disabilities */}
            <AccordionTitle title="Disabilities & Neurodivergent People">

              <ListSectionAccordion>
                <ListPressableAccordion data={[
                  { key: '"Thinking in Pictures: My Life with Autism" by Temple Grandin' },
                  { key: '"The Reason I Jump: The Inner Voice of a Thirteen-Year-Old Boy with Autism" by Naoki Higashida' },
                  { key: '"Look Me in the Eye: My Life with Asperger\'s" by John Elder Robison' },
                  { key: '"The Curious Incident of the Dog in the Night-Time" by Mark Haddon' },
                  { key: '"Being Heumann: An Unrepentant Memoir of a Disability Rights Activist" by Judith Heumann and Kristen Joiner' },
                  { key: '"NeuroTribes: The Legacy of Autism and the Future of Neurodiversity" by Steve Silberman' },
                  { key: '"El Deafo" by Cece Bell.' },
                  { key: '"Haben: The Deafblind Woman Who Conquered Harvard Law" by Haben Girma' },
                ]} />
              </ListSectionAccordion>
            </AccordionTitle>
            {/* International */}
            <AccordionTitle title="International Students">
              <ListSectionAccordion>
                <ListPressableAccordion data={[
                  { key: '"American Ways: A Guide for Foreigners in the United States" by Gary Althen and Janet Bennett' },
                  { key: '"Cross-Cultural Dialogues: 74 Brief Encounters with Cultural Difference" by Craig Storti' },
                  { key: '"The Culture Shock! USA: A Guide to Customs and Etiquette" by Esther Wanning' },
                  { key: '"Educating about Social Issues in the 20th and 21st Centuries Vol 4" by Samuel Totten and Jon E. Pedersen' },
                  { key: '"Adjusting to Life in the United States: Bridging Cultures" by Charles Hirschman' },
                  { key: '"Coming to America: A Muslim Family\'s Story" by Bernard Wolf' },
                ]} />
              </ListSectionAccordion>
            </AccordionTitle>

            <ContentSection>
              <HeaderRight>
                Undergraduate Diversity
              </HeaderRight>
              <ScaledImage img={demographics}></ScaledImage>
              <RedTextBoxes text={stats1} type={1} >
              </RedTextBoxes>
              <RedTextBoxes text={stats2} type={2}>
              </RedTextBoxes>
            </ContentSection>

          </ContentSection>

          <Footer />
        </View>
      </View>


    </ScrollView>
  )
}

const stats1 = ["40% Women", "32% BIPOC", "10% Asian"]
const stats2 = ["9% Hispanic / Latinx", "7% International", "2.8% Black"]
