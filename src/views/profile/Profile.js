import React from 'react'
import { CCard, CCardBody, CCardHeader, CRow, CCol, CLink } from '@coreui/react'
import './Profile.css'
const Profile = () => {
  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader className="profile">Welcome to CarTech Industries</CCardHeader>
          <CCardBody>
            <p className="pro">
              We are dedicated to providing cutting-edge solutions in the automotive industry
              Explore our website to learn more about our products, achievements, and mission.
            </p>
            <p>
              <strong>Quick Links:</strong>
            </p>
            <ul>
              <li>
                <CLink to="/products">Explore Our Products</CLink>
              </li>
              <li>
                <CLink to="/achievements">See Our Achievements</CLink>
              </li>
              <li>
                <CLink to="/about-us">About Us</CLink>
              </li>
            </ul>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
export default Profile
