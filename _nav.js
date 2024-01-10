import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilHome,
  cilCarAlt,
  cilZoom,
  cilInfo,
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavItem,
    name: 'Profile',
    to: '/Profile',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Products',
    to: '/Products',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Manufacturing',
    to: '/Manufacturing',
    icon: <CIcon icon={cilCarAlt} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Achievements',
    to: '/Achievements',
    icon: <CIcon icon={cilZoom} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'AboutUs',
    to: '/Aboutus',
    icon: <CIcon icon={cilInfo} customClassName="nav-icon" />,
  },
]
export default _nav
