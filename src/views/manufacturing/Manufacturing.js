// Manufacturing.js

import React from 'react'
import './Manufacturing.css'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CListGroup,
  CListGroupItem,
} from '@coreui/react'

const Manufacturing = () => {
  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader className="car">Car Manufacturing Process</CCardHeader>
          <CCardBody>
            <p className="manu">
              Welcome to our car manufacturing content page! Below, you&apos;ll find information
              about the car manufacturing process.
            </p>
            <CListGroup className="details">
              <CListGroupItem className="dp">
                <strong>Step 1:</strong> Design and Planning
              </CListGroupItem>
              <CListGroupItem className="ms">
                <strong>Step 2:</strong> Materials Sourcing
              </CListGroupItem>
              <CListGroupItem className="alp">
                <strong>Step 3:</strong> Assembly Line Production
              </CListGroupItem>
              <CListGroupItem className="qc">
                <strong>Step 4:</strong> Quality Control
              </CListGroupItem>
              <CListGroupItem className="ti">
                <strong>Step 5:</strong> Testing and Inspection
              </CListGroupItem>
              <CListGroupItem className="ps">
                <strong>Step 6:</strong> Packaging and Shipping
              </CListGroupItem>
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Manufacturing
