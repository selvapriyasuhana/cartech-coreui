import React from 'react'
import './Products.css'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CCol,
  CListGroup,
  CListGroupItem,
  CBadge,
} from '@coreui/react'

const CarProducts = () => {
  const products = [
    { name: 'Car Engine Oil', category: 'Maintenance', price: '$29.99', stock: 15 },
    { name: 'Car Floor Mats', category: 'Interior', price: '$39.99', stock: 25 },
    { name: 'Car Wash Kit', category: 'Exterior', price: '$49.99', stock: 20 },
    { name: 'Windshield Wipers', category: 'Safety', price: '$14.99', stock: 30 },
    { name: 'Car Air Freshener', category: 'Interior', price: '$9.99', stock: 40 },
  ]

  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader className="product">Car Products</CCardHeader>
          <CCardBody>
            <CListGroup>
              {products.map((product, index) => (
                <CListGroupItem key={index} className="group">
                  <strong>{product.name}</strong>
                  <p>
                    Category: {product.category} | Price: {product.price} | Stock: {product.stock}{' '}
                    {product.stock === 0 && <CBadge color="danger">Out of Stock</CBadge>}
                  </p>
                </CListGroupItem>
              ))}
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default CarProducts
