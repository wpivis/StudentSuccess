import { View, Text, Button } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { CenteredTitle, HeaderRight, BracketedText, ImageHeader, PageHeader, SectionContentHeader, QuoteRight, QuoteLeft, GreayTextBeam } from "../components/Text"
import { ButtonBlock, ButtonCentered } from "../components/Buttons"

import { ContentSection, Footer, LightGrayPlatform, TransparentPlatform, RedBeam, DirectorySection } from '../components/Layout'
import { dropShadow, lorem, loremShort, textBlockMaxWidth } from '../assets/style'
import { ImageContainer } from '../components/Images'
import { AcademicsChecklist } from './Checklists'
import { AppDrawerItemName, } from '../api/navigation'
import { Navbar, } from '../components/Navigation'
import { DirectoryEntry } from "../components/Directory"
import { AccordionTitle, AccordionItem, AccordionLink, AccordionDirectoryEntry } from "../components/Accordion"
import { analytics } from '../firebase'
import { logEvent } from 'firebase/analytics'

export default function Directory({ navigation }) {

  logEvent(analytics, "page_view", {
    page_location: "directory"
  });

  return (
    <ScrollView>

      <Navbar n={navigation} title={AppDrawerItemName.Directory} />

      <View style={{ backgroundColor: "#e4e4e4", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <View style={{ ...dropShadow, backgroundColor: "#ffffff", width: "100%", maxWidth: 800, display: "flex", flexDirection: "column" }}>
          <PageHeader>Office & Resource Directory</PageHeader>

          <ContentSection>
            <AccordionTitle isExpanded="true" title="Emergency Resources">
              <DirectoryEntry DirectoryTitle="WPI Police" Phone="508-831-5433" Address="Founders Hall" href="https://www.wpi.edu/offices/police" />
              <DirectoryEntry DirectoryTitle="State Police" Phone="508-829-8326" Address="470 Worcester Road, Framingham" href="https://www.mass.gov/orgs/massachusetts-state-police" />
              <DirectoryEntry DirectoryTitle="Suicide & Crisis Hotline" Phone="988" Address="" href="https://988lifeline.org/?utm_source=google&utm_medium=web&utm_campaign=onebox" />
              <DirectoryEntry DirectoryTitle="Environmental Health and Safety" Phone="508-831-5216" Address="37 Lee Street" href="https://www.wpi.edu/offices/environmental-health-safety" />
              <DirectoryEntry DirectoryTitle="Pathways for Change" Phone="800-870-5905" Address="588 Main Street" href="https://pathwaysforchange.help/" />
              <DirectoryEntry DirectoryTitle="YWCA Daybreak" Phone="508-755-9030" Address="1 Salem St, Worcester" href="https://ywcacm.org/domestic-violence/" />
              <DirectoryEntry DirectoryTitle="UMass Memorial Medical Center" Phone="508-334-1000" Address="119 Belmont Street Worcester" href="https://www.ummhealth.org/umass-memorial-medical-center" />
              <DirectoryEntry DirectoryTitle="St. Vincent Hospital" Phone="508-363-5000" Address="123 Summer Street, Worcester" href="https://www.stvincenthospital.com/locations/detail/saint-vincent-hospital" />
            </AccordionTitle>
            <AccordionTitle isExpanded="true" title="Student Resources">
              <DirectoryEntry DirectoryTitle="Academic Advising" Phone="508-831-5381" Address="Unity Hall" href="https://www.wpi.edu/offices/academic-advising" />
              <DirectoryEntry DirectoryTitle="Accessibility Services" Phone="508-831-4908" Address="Unity Hall" href="https://www.wpi.edu/offices/office-accessibility-services" />
              <DirectoryEntry DirectoryTitle="Bursar's Office" Phone="508-831-5203" Address="Boynton Hall" href="https://www.wpi.edu/offices/bursar" />
              <DirectoryEntry DirectoryTitle="Career Development Center" Phone="508-831-5260" Address="Unity Hall" href="https://www.wpi.edu/offices/career-development-center" />
              <DirectoryEntry DirectoryTitle="Campus Shuttles" Phone="" Address="" href="https://www.wpi.edu/student-experience/resources/safety/campus-transportation" />
              <DirectoryEntry DirectoryTitle="Center for Wellbeing" Phone="508-831-6494" Address="Daniels Hall" href="https://www.wpi.edu/student-experience/health-wellness/center-for-well-being" />
              <DirectoryEntry DirectoryTitle="Dean of Students Office" Phone="508-831-5201" Address="Rubin Campus Center" href="https://www.wpi.edu/offices/dean-students" />
              <DirectoryEntry DirectoryTitle="Financial Aid" Phone="508-831-5469" Address="" href="https://www.wpi.edu/admissions/tuition-aid" />
              <DirectoryEntry DirectoryTitle="Health Services" Phone="508-831-5520" Address="Daniels Hall" href="https://www.wpi.edu/student-experience/health-counseling/health-services" />
              <DirectoryEntry DirectoryTitle="Housing and Dining" Phone="508-831-5645" Address="East Hall" href="https://www.wpi.edu/student-experience/housing-dining" />
              <DirectoryEntry DirectoryTitle="ID Services" Phone="508-831-5645" Address="East Hall" href="https://www.wpi.edu/offices/id-services" />
              <DirectoryEntry DirectoryTitle="Office of Accessibility Services" Phone="508-831-4908" Address="Unity Hall" href="https://www.wpi.edu/offices/office-accessibility-services" />
              <DirectoryEntry DirectoryTitle="Office of Diversity, Inclusion, and Multicultural Education" Phone="508-831-5796" Address="OASIS Multicultural Center" href="https://www.wpi.edu/offices/diversity/resources" />
              <DirectoryEntry DirectoryTitle="Office of Equal Opportunity and Outreach (Title IX)" Phone="508-831-6514" Address="Rubin Campus Center" href="https://www.wpi.edu/offices/equal-opportunity-outreach" />
              <DirectoryEntry DirectoryTitle="Residential Services" Phone="508-831-5645" Address="East Hall" href="https://www.wpi.edu/offices/residential-services-office" />
              <DirectoryEntry DirectoryTitle="Student Development and Counseling Center" Phone="508-831-5540" Address="16 Einhorn Road" href="https://www.wpi.edu/offices/student-development-counseling-center" />
            </AccordionTitle>
            <AccordionTitle isExpanded="true" title="Campus Life">

              <DirectoryEntry DirectoryTitle="Collegiate Religious Center" Phone="508-831-4174" Address="19 Schussler Road" href="https://www.wpi.edu/student-experience/resources/collegiate-religious-center" />
              <DirectoryEntry DirectoryTitle="First Year Experience" Phone="" Address="" href="https://fye.wpi.edu/" />
              <DirectoryEntry DirectoryTitle="Gender, Sexuality, and Women’s Studies" Phone="" Address="" href="https://www.wpi.edu/c/gendersexualitywomensstudies" />
              <DirectoryEntry DirectoryTitle="International House" Phone="508-831-6030" Address="100 Institute Road" href="https://www.wpi.edu/offices/international-house" />
              <DirectoryEntry DirectoryTitle="WPI Student Experience" Phone="" Address="" href="https://www.wpi.edu/student-experience" />
            </AccordionTitle>

          </ContentSection>


          <Footer />
        </View>
      </View>


    </ScrollView>
  )
}