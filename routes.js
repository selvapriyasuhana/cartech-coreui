import React from 'react'
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Profile = React.lazy(() => import('./views/profile/Profile'))

const Products = React.lazy(() => import('./views/products/Products'))
const Manufacturing = React.lazy(() => import('./views/manufacturing/Manufacturing'))
const Achievements = React.lazy(() => import('./views/achievements/Achievements'))
const AboutUs = React.lazy(() => import('./views/aboutus/Aboutus'))
const routes = [
  { path: '/profile', name: 'Profile', element: Profile, exact: true, },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/products', name: 'Products', element: Products, exact: true },
  { path: '/manufacturing', name: 'Manufacturing', element: Manufacturing, exact: true },
  { path: '/achievements', name: 'Achievements', element: Achievements, exact: true },
  { path: '/aboutus', name: 'Aboutus', element: AboutUs, exact: true },
]
export default routes
