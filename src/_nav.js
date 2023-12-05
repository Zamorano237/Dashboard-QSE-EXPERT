/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line
import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilNotes,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilChartPie,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    
  },
  {
    component: CNavGroup,
    name: 'Tableaux',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Tableaux des accidents / actions',
        to: '/base/tables',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Formulaire',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      
      {
        component: CNavItem,
        name: 'Saisi des accidents',
        to: '/forms/select',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Stastitique',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: '10',
    },
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/notifications/alerts',
        badge: {
          color: 'info',
          text: '10',
        },
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Navigation',
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Se Connecter',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Créer un compte',
        to: '/register',
      },
    ],
  },
]

export default _nav
