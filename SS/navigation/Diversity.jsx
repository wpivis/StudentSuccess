import { View, Text, Button } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { CenteredTitle, HeaderRight, BracketedText, ImageHeader, PageHeader, SectionContentHeader, QuoteRight, QuoteLeft, GreayTextBeam, BodyText } from "../components/Text"
import { ButtonBlock, ButtonCentered } from "../components/Buttons"

import { ContentSection, Footer, LightGrayPlatform, TransparentPlatform, RedBeam } from '../components/Layout'
import { dropShadow, lorem, loremShort, textBlockMaxWidth } from '../assets/style'
import { ImageContainer } from '../components/Images'
import { AcademicsChecklist } from './Checklists'
import { AppDrawerItemName, } from '../api/navigation'
import { Navbar, } from '../components/Navigation'
import { AccordionItem, AccordionLink, AccordionTitle } from '../components/Accordion'

const odime = require("../assets/odime.jpg")
const lgbtqia = require("../assets/lgbtqia.jpg")
const womensgroups = require("../assets/womensgroups.jpg")
const cdc = require("../assets/cdc.png")

export default function Diversity({navigation}) {

  return (
    <ScrollView>

      <Navbar n={navigation} title={AppDrawerItemName.Diversity}/>

      <View style={{backgroundColor: "#e4e4e4", width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <View style={{...dropShadow, backgroundColor: "#ffffff", width: "100%", maxWidth: 800, display: "flex", flexDirection: "column"}}>
          <PageHeader>Cultural and Diversity Resources</PageHeader>
          
          <ContentSection>
            <BodyText>
              As you step into this new chapter of your life as a university student at WPI, it's important to recognize that each student's experience is unique, shaped by their individual backgrounds, identities, and perspectives.
            </BodyText>
            <BodyText>
              Diversity enriches our campus and our collective learning experience at WPI. It allows us to gain insights from a multitude of different cultures, races, genders, sexual orientations, abilities, religions, and socio-economic backgrounds. As we learn from one another, we also learn about ourselves. It is important for you to know that you belong at WPI and we want you here. You are smart and capable of succeeding as a student in this rigorous academic environment. 
            </BodyText>
            <BodyText>
               However, we also know that navigating the college landscape as a diverse student may present unique challenges. These could range from feelings of isolation or imposter syndrome to experiences of unconscious bias or microaggressions. Additionally, transitioning into the culture of the college environment could be particularly overwhelming for first-generation college students, international students, or others who might feel they are entering into unfamiliar territory.
            </BodyText>
            <BodyText>
              In this section of the handbook, we aim to help you understand and prepare for these potential challenges. We believe that awareness is the first step towards promoting an inclusive and equitable academic environment, and we hope that this resource will equip you to better navigate and adapt to these various situations.
            </BodyText>
            <BodyText>
              You'll find information on the unique experiences diverse students might encounter, practical advice on addressing these challenges, and resources available on campus to support you throughout your college journey.              
            </BodyText>
            <BodyText>
              Remember, it's normal to experience growing pains at WPI as you are adapting to your new community. Please don't hesitate to seek support from any of the organizations and offices listed below, share your experiences, and take full advantage of the resources available to you. 
            </BodyText>
          </ContentSection>
          
          <BracketedText>
            There are several online resources and activities that can help you learn about diversity, as well as strategies for coping with these experiences. Here are a few ideas:
          </BracketedText>

          <ContentSection>
            <AccordionTitle title="External Resources">
              <AccordionItem 
                title="Courses and Webinars"
                description="Websites like Coursera, edX, or Khan Academy offer free courses on subjects such as diversity, cultural competency, feminism, 
                            sexuality, and race relations. Similarly, WPI offers courses in the Social Science and Policy Studies (SSPS) Department through 
                            the Africana Studies Program and Art and Humanities (HUA) Department through the Women, Gender, and Sexuality Studies Program 
                            related to these issues. Consider taking courses in those departments to learn more about DEIJ and Gender, Sexuality and Women’s Studies."
              />
              <AccordionItem
                title="TED Talks"
                description="TED offers a range of talks addressing diversity and inclusion, racism, microaggressions, and strategies for coping with these experiences. 
                            For instance, “The danger of a single story” by Chimamanda Ngozi Adichie, “How to overcome our biases? Walk boldly toward them” by Verna Myers, and “Let's 
                            get to the root of racial injustice” by Megan Ming Francis. All of these are available on YouTube. "
              />
              <AccordionItem 
                title="Podcasts"
                description='Podcasts such as "Code Switch" from NPR, "The Diversity Gap", and "1619" from The New York Times explore racial and ethnic identities and experiences, systemic 
                            racism, and history from diverse perspectives. "Escape From Plan A": A podcast that tackles issues related to Asian American identity, politics, and culture 
                            might also be of interest. There are so many Podcasts and social media outlets available to you.'
              />
              <AccordionItem 
                title="Read Books"
                description='There is plenty of literature by diverse authors and women authors that tackles themes related to the diverse student population at WPI. Here are a few options, 
                            but note that there is so much more information out there available to you.'
              />
            </AccordionTitle>
            <AccordionTitle title="Books on Women and Feminism">
              <AccordionItem 
                title='"The Second Sex"'
                description="by Simone de Beauvoir: A foundational text of contemporary feminist thought that analyzes the treatment and perception of women throughout history"
              />
              <AccordionItem 
                title='"Men Explain Things to Me"'
                description="by Rebecca Solnit"
              />
              <AccordionItem 
                title='"Bad Feminist"'
                description="by Roxane Gay"
              />
              <AccordionItem 
                title='"We Should All Be Feminists"'
                description="by Chimamanda Ngozi Adichie"
              />
              <AccordionItem 
                title='"Invisible Women: Data Bias in a World Designed for Men"'
                description="by Caroline Criado Perez"
              />
              <AccordionItem 
                title='"The Bell Jar"'
                description="by Sylvia Plath"
              />
              <AccordionItem 
                title={`"Lean Out"`}
                desciption="Elissa Shevinsky on why 'leaning in' isn't enough"
              />
              <AccordionItem 
                title='"Everyday Sexism"'
                description="by Laura Bates"
              />

            </AccordionTitle>
            <AccordionTitle title="LQBTQIA+ Books">
              <AccordionItem 
                title={`"Giovanni's Room"`}
                description="by James Baldwin"
              />
              <AccordionItem 
                title='"Gender Outlaw: On Men, Women, and the Rest of Us"'
                description="by Kate Bornstein"
              />
              <AccordionItem 
                title='"Stone Butch Blues"'
                description="by Leslie Feinberg"
              />
              <AccordionItem 
                title='"Fun Home: A Family Tragicomic"'
                description="by Alison Bechdel"
              />
              <AccordionItem 
                title='"Nevada"'
                description="by Imogen Binnie: This novel offers a raw and insightful look at the life of a trans woman living in New York City."
              />
              <AccordionItem 
                title='"Less"'
                description="by Andrew Sean Greer"
              />
              <AccordionItem 
                title='"Juliet Takes a Breath"'
                description="by Gabby Rivera"
              />
              <AccordionItem 
                title='"Paul Takes the Form of a Mortal Girl"'
                description="by Andrea Lawlor"
              />
              <AccordionItem 
                title='"Sissy: A Coming-of-Gender Story"'
                description="by Jacob Tobia"
              />
              <AccordionItem 
                title='"Real Queer America: LGBT Stories from Red States"'
                description="by Samantha Allen"
              />

            </AccordionTitle>
            <AccordionTitle title="People with Disabilities">
              <AccordionItem 
                title='"Being Heumann: An Unrepentant Memoir of a Disability Rights Activist"'
                description="by Judith Heumann and Kristen Joiner"
              />
              <AccordionItem 
                title='"El Deafo"'
                description="by Cece Bell."
              />
              <AccordionItem 
                title='"Haben: The Deafblind Woman Who Conquered Harvard Law"'
                description="by Haben Girma"
              />

            </AccordionTitle>
            <AccordionTitle title="Neurodivergent People">
              <AccordionItem 
                title='"Thinking in Pictures: My Life with Autism"'
                description="by Temple Grandin"
              />
              <AccordionItem 
                title='"The Curious Incident of the Dog in the Night-Time"'
                description="by Mark Haddon"
              />
              <AccordionItem 
                title='"The Reason I Jump: The Inner Voice of a Thirteen-Year-Old Boy with Autism"'
                description="by Naoki Higashida"
              />
              <AccordionItem 
                title={`"Look Me in the Eye: My Life with Asperger's"`}
                description="by John Elder Robison"
              />
              <AccordionItem 
                title='"NeuroTribes: The Legacy of Autism and the Future of Neurodiversity"'
                description="by Steve Silberman"
              />
            </AccordionTitle>
            <AccordionTitle title="Books for International Students">
              <AccordionItem 
                title='"American Ways: A Guide for Foreigners in the United States"'
                description="by Gary Althen and Janet Bennett"
              />
              <AccordionItem 
                title='"Cross-Cultural Dialogues: 74 Brief Encounters with Cultural Difference"'
                description="by Craig Storti"
              />
              <AccordionItem 
                title='"The Culture Shock! USA: A Guide to Customs and Etiquette"'
                description="by Esther Wanning"
              />
              <AccordionItem 
                title='"Educating about Social Issues in the 20th and 21st Centuries Vol 4"'
                description="by Samuel Totten and Jon E. Pedersen: This book has a section specifically aimed at issues international students might face when studying in the U.S."
              />
              <AccordionItem 
                title='"Adjusting to Life in the United States: Bridging Cultures"'
                description="by Charles Hirschman"
              />
              <AccordionItem 
                title={`"Coming to America: A Muslim Family's Story"`}
                description="by Bernard Wolf: A photo-essay that documents the everyday life of one family from Egypt who immigrated to the United States."
              />  
            </AccordionTitle>
          </ContentSection>

          <ContentSection>
          </ContentSection>

          <ContentSection>
            <ImageHeader>Accessibility Services</ImageHeader>
            <ButtonCentered href="https://www.wpi.edu/student-experience/resources/accessibility-services">Visit Accessibility Services</ButtonCentered>
            <HeaderRight>Exam Proctoring</HeaderRight>
            <HeaderRight>Orientation</HeaderRight>
            <HeaderRight>Interactive Map</HeaderRight>
          </ContentSection>

          <ContentSection>
            <ImageHeader image={odime}>ODIME</ImageHeader>
            <ButtonCentered href="https://www.wpi.edu/offices/diversity">Visit ODIME</ButtonCentered>
            <HeaderRight>Diversity Programming</HeaderRight>
            <HeaderRight>ODIME Resources</HeaderRight>
          </ContentSection>
          
          <ContentSection>
            <ImageHeader>Collegiate Religious Center</ImageHeader>
            <HeaderRight>Campus Organizations</HeaderRight>
            <HeaderRight>Common Room</HeaderRight>
            <HeaderRight>Vegan Kitchen</HeaderRight>
            <HeaderRight>Multifaith Mindfulness Space</HeaderRight>
            <HeaderRight>Islamic Prayer Room</HeaderRight>
          </ContentSection>

          <ContentSection>
            <ImageHeader>International House</ImageHeader>
            <ButtonCentered href="https://www.wpi.edu/alumni/community/alumni-groups/womens-groups">Visit the International House</ButtonCentered>
            <HeaderRight>Appointments</HeaderRight>
            <HeaderRight>Immigration Assistance</HeaderRight>
          </ContentSection>
          
          <ContentSection>
            <ImageHeader image={womensgroups}>Gender, Sexuality, and Women's Studies</ImageHeader>
            <ButtonCentered href="https://www.wpi.edu/alumni/community/alumni-groups/womens-groups">Visit Women's Groups</ButtonCentered>
            <HeaderRight>Courses</HeaderRight>
            <HeaderRight>Programming</HeaderRight>
          </ContentSection>
          
          <ContentSection>
            <ImageHeader image={lgbtqia}>LGBTQIA+</ImageHeader>
            <ButtonCentered href="https://www.wpi.edu/offices/diversity/resources/lgbtq-support">Visit LGBTQIA+ Support</ButtonCentered>
            <HeaderRight>Gender Inclusive Housing</HeaderRight>
            <HeaderRight>Identity Resources</HeaderRight>
            <HeaderRight>WPI Alliance Chapter</HeaderRight>
          </ContentSection>
          
          <ContentSection>
            <ImageHeader>Equal Opportunity and Outreach</ImageHeader>
            <ButtonCentered href="https://www.wpi.edu/offices/equal-opportunity-outreach">Visit Equal Opportunity and Outreach</ButtonCentered>
          </ContentSection>
          
          <ContentSection>
            <ImageHeader>Title IX</ImageHeader>
            <ButtonCentered href="https://www.wpi.edu/offices/title-ix/title-ix-and-sexual-misconduct-policy">Visit Title IX</ButtonCentered>
          </ContentSection>

          <ContentSection>
            <ImageHeader image={cdc}>Career Development Resources</ImageHeader>
            <ButtonCentered href="https://www.wpi.edu/offices/career-development-center">Visit the CDC</ButtonCentered>
          </ContentSection>
          
          <Footer/>
        </View>
      </View>
      
    
    </ScrollView>
  )
}