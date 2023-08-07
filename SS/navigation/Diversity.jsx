import { View, Text, Button } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { CenteredTitle, HeaderRight, BracketedText, ImageHeader, PageHeader, SectionContentHeader, QuoteRight, QuoteLeft, GreayTextBeam, BodyText, GrayTextBeam, RedTextBoxes } from "../components/Text"
import { ButtonBlock, ButtonCentered } from "../components/Buttons"

import { ContentSection, Footer, LightGrayPlatform, TransparentPlatform, RedBeam, HeaderSubtitle } from '../components/Layout'
import { dropShadow, lorem, loremShort, textBlockMaxWidth } from '../assets/style'
import { ImageContainer } from '../components/Images'
import { AcademicsChecklist } from './Checklists'
import { AppDrawerItemName, } from '../api/navigation'
import { Navbar, } from '../components/Navigation'
import { AccordionItem, AccordionLink, AccordionTitle } from '../components/Accordion'

const imposter = require("../assets/odime.jpg")
const bias = require("../assets/lgbtqia.jpg")
const microaggressions = require("../assets/womensgroups.jpg")
const cdc = require("../assets/cdc.png")

export default function Diversity({ navigation }) {

  return (
    <ScrollView>

      <Navbar n={navigation} title={AppDrawerItemName.Diversity} />

      <View style={{ backgroundColor: "#e4e4e4", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <View style={{ ...dropShadow, backgroundColor: "#ffffff", width: "100%", maxWidth: 800, display: "flex", flexDirection: "column" }}>
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
                            the Africana Studies Program and Humanities and Arts (HUA) Department through the Women, Gender, and Sexuality Studies Program 
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
                            might also be of interest. There are so many podcasts and social media outlets available to you.'
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
                title='"Lean Out"'
                description="by Elissa Shevinsky"
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
            <ImageHeader image={imposter}>Imposter Syndrome</ImageHeader>
            <HeaderSubtitle>
              Imposter syndrome was a term coined by Pauline Clance and Suzanne Imes in 1978 and describes the way a person feels when they doubt their skills, talents,
              or accomplishments and has a persistent fear of being exposed as a "fraud" even though they show external evidence of their competence.
            </HeaderSubtitle>
            <BracketedText>
              Imposter syndrome can manifest itself in many ways, and its signs are not always immediately recognizable. Some people may feel as though they are not as
              competent or knowledgeable as others perceive them to be, despite evidence to the contrary. They might downplay their accomplishments or attribute their
              success to luck rather than to their abilities. Constantly fearing exposure as a 'fraud' or 'imposter' can also be a significant sign. It's important to
              note that the impact of imposter syndrome varies greatly among individuals, as it intertwines with personal experiences, self-perception, and one's environment.
            </BracketedText>
            <GrayTextBeam>
              Feeling like a fake or fraud and fearing that you will be found out
            </GrayTextBeam>
            <GrayTextBeam>
              Attributing success to luck or chance, rather than your own ability or hard work
            </GrayTextBeam>
            <GrayTextBeam>
              Downplaying your own expertise, even in areas where you are genuinely more knowledgable than others
            </GrayTextBeam>
            <GrayTextBeam>
              Comparing yourself to others and feeling you're not as good as they are
            </GrayTextBeam>
            <GrayTextBeam>
              Having high standards for yourself and feeling disappointed if you don't meet them
            </GrayTextBeam>
          </ContentSection>

          <ContentSection>
            <ImageHeader image={bias}>Unconscious Bias</ImageHeader>
            <HeaderSubtitle>
              Unconscious bias is when we have quick judgments or opinions about people without even realizing it.
            </HeaderSubtitle>
            <BracketedText>
              Unconscious bias refers to automatic judgments or perceptions about individuals, formed without our awareness, based on our experiences, upbringing, and societal influences.
              These biases can be both positive and negative, and they often subtly affect how we interact with others. Some common types of unconscious bias include:
            </BracketedText>
            <GrayTextBeam>
              Affinity Bias: This is the tendency to connect more readily with individuals who share our characteristics or backgrounds.
            </GrayTextBeam>
            <GrayTextBeam>
              Halo Effect: This is the inclination to perceive everything about an individual as positive because you find them likable.
            </GrayTextBeam>
            <GrayTextBeam>
              Perception Bias: This refers to forming stereotypes or assumptions about specific groups, which can hinder objective decision-making.
            </GrayTextBeam>
            <GrayTextBeam>
              Confirmation Bias: This is the tendency to interpret information in a way that aligns with our preexisting beliefs.
            </GrayTextBeam>
            <GrayTextBeam>
              Gender Bias: This is the tendency to favor one gender over the other.
            </GrayTextBeam>

            <HeaderRight>What to Do</HeaderRight>
            <BracketedText>
              Becoming aware of these biases and understanding how they influence your behavior is the first step toward minimizing their impact. Practices such
              as slowing down decision-making processes, examining your biases, and seeking perspectives from a diverse range of people can help in
              reducing the influence of unconscious biases. Experiencing bias can be deeply distressing and challenging. Here are a few steps people can take if they're the victim of bias:
            </BracketedText>
            <BodyText>
              Speak Up: If you feel safe and comfortable to do so, assertively communicate your feelings and ask the person to stop their biased behavior. You can express your experience,
              feelings, and request change using "I" statements to avoid sounding confrontational, such as "I feel disrespected when you... Could you please stop doing that?"
            </BodyText>
            <BodyText>
              Seek Support: Reach out to supportive friends, family, community groups, peers in a higher grade than you, staff in academic affairs, and your professors.
              Sharing your experiences can provide emotional relief and practical advice.
            </BodyText>
            <BodyText>
              Document Incidents: Keep a record of incidents, including dates, times, locations, what happened, and any witnesses. This could be useful if you decide to report the behavior.
            </BodyText>
            <BodyText>
              Report the Incident: Depending on the situation, you could report the incident to your, Residence Advisor, the Director of ODIME, the Assistant Vice President for Diversity, Equity,
              Inclusion, and Belonging, the Title IX office, Counseling Services, law enforcement, and really anyone you feel comfortable reporting the incident to.
            </BodyText>
            <BodyText>
              Practice Self-Care: Bias incidents can be emotionally exhausting. It's important to take care of your mental health. This might involve activities like exercise, meditation, or
              seeking professional help like a therapist or counselor through the SDCC at WPI.
            </BodyText>
            <BodyText>
              Education: Encourage, develop and/or support educational programs related to your identity at WPI. We need more diverse representation,
              so getting involved and creating affinity programs are welcomed!
            </BodyText>

            <HeaderRight>
              Anti-Bias Organizations
            </HeaderRight>
            <GrayTextBeam>
              Anti-Defamation League (ADL): Offers resources and programs to fight hate and bias.
            </GrayTextBeam>
            <GrayTextBeam>
              Southern Poverty Law Center (SPLC): Provides educational materials on bias, tolerance, and diversity.
            </GrayTextBeam>
            <GrayTextBeam>
              National Center for Cultural Competence (NCCC): Offers resources to increase cultural competence and combat bias.
            </GrayTextBeam>

            <BracketedText>
              The Implicit Association Test (IAT) created by Project Implicit is a key assessment tool for learning about one's own biases by measuring attitudes and
              beliefs that people may be unwilling or unable to report.
            </BracketedText>
            <ButtonCentered href="https://implicit.harvard.edu/implicit/takeatest.html">Take the IAT</ButtonCentered>
          </ContentSection>

          <ContentSection>
            <ImageHeader image={microaggressions}>Microaggressions</ImageHeader>
            <HeaderSubtitle>
              Microaggressions refer to subtle comments that convey derogatory, prejudiced, or discriminatory attitudes towards individuals or groups based on their race, gender, ethnicity,
              sexual orientation, disability, or other characteristics.
            </HeaderSubtitle>
            <BracketedText>
              These actions may seem unintentional, but they can have a significant impact on the recipients, contributing to feelings of alienation, exclusion, and invalidation.
              Microaggressions can occur in everyday interactions, and their cumulative effects can be harmful and perpetuate systemic inequalities. Addressing microaggressions is
              essential for creating an inclusive and respectful environment. Here are some strategies to address and respond to microaggressions.
            </BracketedText>
          </ContentSection>
          <GrayTextBeam>
            Use "I" Statements: Express your feelings and the impact of the microaggression on you using "I" statements, which help in communicating your personal experience.
          </GrayTextBeam>
          <GrayTextBeam>
            Call It Out (With Care): If you witness a microaggression, address it with sensitivity. Explain why the comment is harmful, focusing on its effects rather than attacking the individual.
          </GrayTextBeam>
          <GrayTextBeam>
            Educate Yourself: Learn about microaggressions, unconscious bias, and their impact. Understanding is key to addressing these issues effectively.
          </GrayTextBeam>
          <GrayTextBeam>
            Speak Up: When you see a microaggression happening to someone else, assertively express why the behavior is hurtful and perpetuates stereotypes.
          </GrayTextBeam>
          <GrayTextBeam>
            Form Supportive Networks: Participate in student-led groups focusing on diversity, equity, and inclusion to collectively address microaggressions.
          </GrayTextBeam>
          <GrayTextBeam>
            Report Incidents: Inform the WPI Police department about microaggressions via the available bias report form, or confide in a trusted peer, staff member, or professor.
          </GrayTextBeam>
          <GrayTextBeam>
            Collaborate with Faculty and Staff: Work with academic staff to integrate diversity and inclusion into the curriculum and campus life.
          </GrayTextBeam>
          <GrayTextBeam>
            Advocate for Inclusive Policies: Lobby for policies fostering inclusivity and combating microaggressions. Cooperate with student government or similar organizations to instigate change.
          </GrayTextBeam>
          <GrayTextBeam>
            Model Inclusive Behavior: Set an example by behaving inclusively, challenging stereotypes and biases, and encouraging others to follow suit.
          </GrayTextBeam>
          <GrayTextBeam>
            Advocate for Diversity in Curriculum: Promote the incorporation of diverse perspectives in coursework to challenge stereotypes and reduce microaggressions. There is a desire among students for diversity in educational experiences.
          </GrayTextBeam>
          <ContentSection>
            <HeaderRight>
              WPI Diversity in Numbers
            </HeaderRight>
            <RedTextBoxes text={stats}>
            </RedTextBoxes>
          </ContentSection>
          <Footer />
        </View>
      </View>


    </ScrollView>
  )
}
const stats = ["40% women", "2.8% black students", "7% international students"]