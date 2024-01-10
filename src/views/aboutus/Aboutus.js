import React from 'react'
import './Aboutus.css'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CCol,
  CListGroup,
  CListGroupItem,
} from '@coreui/react'

const AboutUs = () => {
  const companyInfo = {
    name: 'CarTech Industries',
    founded: 2005,
    mission: 'To provide innovative and sustainable mobility solutions to our customers.',
    address: {
      street: '123 Automotive Street',
      city: 'Motorville',
      state: 'Carland',
      zipCode: '12345',
    },
  }

  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader className="ab">About Us - {companyInfo.name}</CCardHeader>
          <CCardBody>
            <CListGroup>
              <CListGroupItem className="found">
                <strong>Founded:</strong> {companyInfo.founded}
              </CListGroupItem>
              <CListGroupItem className="mission">
                <strong>Mission:</strong> {companyInfo.mission}
              </CListGroupItem>
              <CListGroupItem className="add">
                <strong>Address:</strong> {companyInfo.address.street}, {companyInfo.address.city},{' '}
                {companyInfo.address.state} - {companyInfo.address.zipCode}
              </CListGroupItem>
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AboutUs
