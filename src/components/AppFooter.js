/* eslint-disable prettier/prettier */
import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="http://qse-expert.com/" target="_blank" rel="noopener noreferrer">
          QSE - EXPERT
        </a>
        <span className="ms-1">&copy; 2023 Tableau de Bord de suivi des accidents / Incidents.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Construis par</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
          WATBO Yvan &amp; Consultant - Formateur
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
