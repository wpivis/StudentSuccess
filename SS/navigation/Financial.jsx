import { View, Text, Button } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { CenteredTitle, HeaderRight, BracketedText, ImageHeader, PageHeader, SectionContentHeader, QuoteRight, QuoteLeft, GreayTextBeam, BodyText, GrayTextBeam } from "../components/Text"
import { ButtonBlock, ButtonCentered } from "../components/Buttons"
import { Image } from "expo-image"

import { ContentSection, Footer, LightGrayPlatform, TransparentPlatform, RedBeam, HeaderSubtitle } from '../components/Layout'
import { dropShadow, lorem, loremShort, textBlockMaxWidth } from '../assets/style'
import { ImageContainer } from '../components/Images'
import { AcademicsChecklist } from './Checklists'
import { AppDrawerItemName, } from '../api/navigation'
import { Navbar, } from '../components/Navigation'
import { AccordionItem, AccordionLink, AccordionTitle, ListSectionAccordion, LinkListAccordion } from '../components/Accordion'
import { analytics } from '../firebase'
import { logEvent } from 'firebase/analytics'

const scholarships = require("../assets/financial/scholarships.jpg")
const grants = require("../assets/financial/grants.jpg")
const registrar = require("../assets/financial/registrar.jpg")
const financialaid = require("../assets/financialaid.jpg")
const bursar = require("../assets/bursar.jpg")
const bartlett = require("../assets/financial/bartlett.jpg")

export default function Financial({ navigation }) {

  logEvent(analytics, "page_view", {
    page_location: "financial"
  });

  return (
    <ScrollView>

      <Navbar n={navigation} title={AppDrawerItemName.Financial} />

      <View style={{ backgroundColor: "#e4e4e4", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <View style={{ ...dropShadow, backgroundColor: "#ffffff", width: "100%", maxWidth: 800, display: "flex", flexDirection: "column" }}>
          <PageHeader>Financial Resources at WPI</PageHeader>

          <BodyText>
            WPI has a wealth of information Financial Resources: scholarships, grants, financial aid office, bursar’s office. Make sure to figure out which department best fits your needs.
          </BodyText>

          <ButtonCentered href="https://www.wpi.edu/admissions/tuition-aid/types-of-aid/federal-work-study-program">Federal Work Study Program</ButtonCentered>
          <ButtonCentered href="https://www.wpi.edu/admissions/tuition-aid/applying-for-aid">How to Apply for Aid</ButtonCentered>
          <ButtonCentered href="https://www.wpi.edu/student-experience/resources/student-employment">Find Campus Jobs</ButtonCentered>

          <ContentSection>
            <ImageHeader image={scholarships}>Scholarships</ImageHeader>
            <HeaderSubtitle>
              WPI offers scholarships to students based on merit or need, providing valuable financial support for education without the need for repayment.
            </HeaderSubtitle>
            <BracketedText>
              Scholarships are merit-based or need-based financial awards given to students to support their education. They are typically provided by various organizations, 
              institutions, or individuals to students who meet specific criteria, such as academic achievements, athletic abilities, community involvement, or other talents. 
              You typically will have to maintain a certain GPA average and course enrollment load for all scholarships. Unlike loans, scholarships do not need to be repaid, 
              making them a valuable resource for students seeking financial support. The application process usually involves submitting essays, academic transcripts, and 
              other required documents.
            </BracketedText>

            <ContentSection>
              <ButtonCentered href="https://www.wpi.edu/admissions/tuition-aid/types-of-aid/scholarships-grants/wpi-merit">Visit Merit-Based Scholarhips</ButtonCentered>
              <ButtonCentered href="https://www.wpi.edu/admissions/tuition-aid/types-of-aid/scholarships-grants">Visit Scholarships and Grants</ButtonCentered>
              <ButtonCentered href="http://www.collegescholarships.org/scholarships/low-income.htm">More on Scholarships</ButtonCentered>
            </ContentSection>

            <GrayTextBeam>
              Many clubs and organizations you belong to also provide scholarships for students. 
            </GrayTextBeam>
            <AccordionTitle title="Best Scholarship Websites">
            <ListSectionAccordion>
          <LinkListAccordion data={[
            {key: 'Scholarships.com', href: 'https://www.scholarships.com/'},
            {key: 'Fastweb', href: 'https://www.fastweb.com/'},
            {key: "Peterson's", href: 'https://www.petersons.com/'},
            {key: 'Bold.org', href: 'https://bold.org/'},
            {key: 'CollegeBoard', href: 'https://bigfuture.collegeboard.org/pay-for-college/scholarship-search#'},
            {key: 'GoingMerry', href: 'https://www.goingmerry.com/'},
            {key: 'Scholly', href: 'https://myscholly.com/'},
            {key: 'ScholarshipOwn', href: 'https://scholarshipowl.com/'},
            {key: 'ProFellow', href: 'https://www.profellow.com/'},
            
          ]} />
          </ListSectionAccordion>
          </AccordionTitle>

          <AccordionTitle title="Scholarships Based on Background">
            <ListSectionAccordion>
          <LinkListAccordion data={[
            {key: 'Forbes 10 Scholarships for Minorities', href: 'https://www.forbes.com/advisor/student-loans/scholarships-for-minorities/'},
            {key: 'LGBTQIA+ Scholarships', href: 'https://www.bestcolleges.com/resources/lgbtq-scholarships/'},
            {key: 'Women in STEM', href: 'https://www.bestcolleges.com/resources/women-in-stem-scholarships/'},
            {key: 'Native Americans', href: 'https://www.nativeforward.org/our-impact/'},
            {key: 'Asian Americans', href: 'https://scholaroo.com/asian-american-student-scholarships/'},
            {key: 'International Students', href: 'https://www.bestcolleges.com/resources/international-student-scholarships/'},
            {key: 'Hispanic and Latino/x', href: 'https://www.bestcolleges.com/resources/hispanic-latino-scholarships/'},
            {key: 'First Generation Students', href: 'https://scholarships360.org/scholarships/first-generation-college-student-scholarships/'},
            {key: 'STEM Scholarships', href: 'https://thescholarshipsystem.com/blog-for-students-families/34-stem-scholarships-to-apply-for-now/'},
            
          ]} />
          </ListSectionAccordion>
          </AccordionTitle>
          </ContentSection>

          <ContentSection>
            <HeaderRight>
              Pell Grant Scholarships
            </HeaderRight>
            <LightGrayPlatform>
              <BodyText>
                The Federal Pell Grant is a need-based financial aid program provided by the U.S. Department of Education to support undergraduate students in their pursuit of 
                higher education. As the largest federal grant program for students, it aims to assist those from low-income backgrounds by helping them afford college or university 
                expenses. Eligibility for the Pell Grant is determined through the Free Application for Federal Student Aid (FAFSA) process, which assesses the student's family 
                income, assets, and household size to calculate their expected family contribution (EFC). The lower the EFC, the higher the grant amount a student may receive. 
                The grant does not need to be repaid and can be used to cover various education-related costs such as tuition, fees, books, supplies, and living expenses. However, 
                the specific amount of the grant may vary from year to year based on financial circumstances and federal funding levels.
              </BodyText>
            </LightGrayPlatform>  
            <GrayTextBeam>
              Benjamin A. Gilman International Scholarship is great for additional money to cover your IQP experience abroad and is open to Pell Grant eligible students. 
            </GrayTextBeam>

            
          </ContentSection>

          <ContentSection>
            <ImageHeader image={grants}>Grants</ImageHeader>
            <HeaderSubtitle>
              WPI assists students with financial constraints by offering grants, typically need-based awards provided by governments or other institutions.
            </HeaderSubtitle>
            <BracketedText>
              Grants are similar to scholarships in that they provide financial assistance to students. However, grants are typically need-based and awarded by federal or state 
              governments, educational institutions, or private organizations. They are often given to students from low-income families to help cover the cost of education. Like 
              scholarships, grants do not need to be repaid, making them an essential resource for students with financial constraints.
            </BracketedText>
            <ButtonCentered href="https://www.wpi.edu/admissions/tuition-aid/types-of-aid/scholarships-grants">Visit Scholarships and Grants</ButtonCentered>
          </ContentSection>

          <ContentSection>
            <ImageHeader image={bartlett}>Financial Aid Office</ImageHeader>
            <HeaderSubtitle>
              The financial aid office at WPI plays a vital role in helping students secure the funds they need for their education.
            </HeaderSubtitle>
            <BracketedText>
              The financial aid office is a department within an educational institution responsible for administering financial aid programs and assisting students in obtaining the 
              necessary funds to finance their education. The office is usually staffed with financial aid advisors who guide students through the process of applying for scholarships, 
              grants, loans, and work-study opportunities. They provide information about available financial aid options, eligibility criteria, and application procedures. The financial 
              aid office plays a critical role in ensuring that students have access to the financial resources they need to pursue their academic goals.
            </BracketedText>
            <ButtonCentered href="https://www.wpi.edu/admissions/tuition-aid">Visit Financial Aid</ButtonCentered>
          </ContentSection>

          <ContentSection>
            <ImageHeader image={bursar}>Bursar</ImageHeader>
            <HeaderSubtitle>
              The bursar's office at WPI handles the financial aspects of student education, including tuition fees, billing, and payment processing. It serves as the go-to place for students 
              to settle fees, arrange payment plans, and manage financial transactions related to their enrollment.
            </HeaderSubtitle>
            <BracketedText>
              The bursar's office is responsible for handling the financial aspects of a student's education, such as tuition fees, billing, and payment processing. This office sends out 
              tuition bills, receives payments, and manages student accounts. Students go to the bursar's office to settle their tuition fees, arrange payment plans, and address any financial 
              concerns related to their enrollment. While the financial aid office deals with providing financial assistance, the bursar's office deals with collecting payments and managing 
              financial transactions related to the educational institution.
            </BracketedText>
            <ButtonCentered href="https://www.wpi.edu/offices/bursar">Visit The Bursar</ButtonCentered>
            <ButtonCentered href="https://fs28.formsite.com/webteamwpiedu/outside-scholarship/index.html?_gl=1*1738kcy*_ga*MTk5NjIyODU2LjE2ODQ3ODA0NTY.*_ga_RE35PKQB7J*MTY4ODM5NDE4OS4xMjMuMS4xNjg4Mzk4MTk1LjMxLjAuMA..">Report an Outside Scholarship</ButtonCentered>
          </ContentSection>

          <ContentSection>
            <ImageHeader image={registrar}>Registrar</ImageHeader>
            <HeaderSubtitle>
              The Registrar's Office at WPI manages vital academic functions, including admissions, course registration, grade management, and graduation coordination. It works in tandem with 
              the Bursar's Office to address any holds on student accounts, ensuring a smooth enrollment process.
            </HeaderSubtitle>
            <BracketedText>
              The Registrar's Office is a vital administrative department in educational institutions, responsible for managing and maintaining student records and academic information. It handles 
              tasks related to admissions, course registration, grade management, and the issuance of official transcripts. The office plays a crucial role in coordinating the academic calendar, 
              verifying students' enrollment status, conducting degree audits, and overseeing the graduation process. Additionally, if there is a hold on your student account preventing your from 
              enrolling in class, you will need to work with both the Bursar's office and the Registrar's Office to remove the hold and enroll in courses.
            </BracketedText>
            <ButtonCentered href="https://www.wpi.edu/offices/registrar">Visit the Registrar</ButtonCentered>
          </ContentSection>

          <LightGrayPlatform>
            <QuoteLeft color="white">
              "The best place I found for help has been in the BME Department itself, like the head [of the department]. They always send out internships, scholarships, and stuff like that and are always 
              available if you need anything"
            </QuoteLeft>
            <QuoteRight color="red">
              "ODIME was my best friend this year. They have been incredibly supportive in dealing with racism and helping with scholarships."
            </QuoteRight>
          </LightGrayPlatform>

          <Footer />
        </View>
      </View>


    </ScrollView>
  )
}