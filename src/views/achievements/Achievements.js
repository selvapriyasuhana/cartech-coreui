import React from 'react'
//import '@coreui/coreui/dist/css/coreui.min.css'
import './Achievements.css'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CCol,
  CListGroup,
  CListGroupItem,
} from '@coreui/react'

const CarIndustryAchievements = () => {
  const achievements = [
    'Introduced the first fully electric car model in the market.',
    'Achieved a 5-star safety rating for our latest SUV model.',
    'Reduced carbon emissions by 20% through innovative manufacturing processes.',
    'Winner of the "Best Green Car" award for three consecutive years.',
    'Reached 1 million units in total car sales globally.',
  ]

  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader className="heading">Car Industry Achievements</CCardHeader>
          <CCardBody>
            <CListGroup>
              {achievements.map((achievement, index) => (
                <CListGroupItem className="details" key={index}>
                  {achievement}
                </CListGroupItem>
              ))}
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
export default CarIndustryAchievements
