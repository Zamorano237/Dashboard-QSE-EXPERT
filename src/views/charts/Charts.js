/* eslint-disable prettier/prettier */
import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'

const Charts = () => {
  const random = () => Math.round(Math.random() * 100)

  return (
    <CRow>
      <CCol xs={12} md={6}>
        <CCard className="mb-4">
          <CCardHeader>Evolution des accidents</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
                datasets: [
                  {
                    label: 'Accidents avec arrêt + Accident sans arrêt',
                    backgroundColor: '#f87979',
                    data: [179, 120, 112, 139, 110, 140, 139, 180, 140],
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12} md={6}>
        <CCard className="mb-4">
          <CCardHeader>Comparaison AAA Vs ASA</CCardHeader>
          <CCardBody>
            <CChartLine
              data={{
                labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
                datasets: [
                  {
                    label: 'Accident avec arrêt',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'rgba(220, 220, 220, 1)',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointBorderColor: '#fff',
                    data: [random(), random(), random(), random(), random(), random(), random()],
                  },
                  {
                    label: 'Accident sans arrêt',
                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                    borderColor: 'rgba(151, 187, 205, 1)',
                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                    pointBorderColor: '#fff',
                    data: [random(), random(), random(), random(), random(), random(), random()],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12} md={6}>
        <CCard className="mb-4">
          <CCardHeader>Repartition des accidents / Incidents</CCardHeader>
          <CCardBody>
            <CChartDoughnut
              data={{
                labels: ['AAA', 'ASA', 'Incidents', 'Presqu incidents'],
                datasets: [
                  {
                    backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                    data: [40, 20, 80, 10],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12} md={6}>
        <CCard className="mb-4">
          <CCardHeader>Suivi des action</CCardHeader>
          <CCardBody>
            <CChartPie
              data={{
                labels: ['En retard', 'Terminée', 'En cours', 'Planifié'],
                datasets: [
                  {
                    data: [300, 50, 100, 29],
                    backgroundColor: ['#DD1B16', '#36A2EB', '#FFCE56', '#41B883'],
                    hoverBackgroundColor: ['#DD1B16', '#36A2EB', '#FFCE56', '#41B883'],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12} md={6}>
        <CCard className="mb-4">
          <CCardHeader>Repartition des accidents par Service</CCardHeader>
          <CCardBody>
            <CChartPolarArea
              data={{
                labels: ['Usine', 'Ateliers', 'Magasins', 'Bureaux', 'Garage'],
                datasets: [
                  {
                    data: [11, 16, 7, 3, 14],
                    backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12} md={6}>
        <CCard className="mb-4">
          <CCardHeader>Suivi des actions par auteur</CCardHeader>
          <CCardBody>
            <CChartRadar
              data={{
                labels: [
                  'WATBO Yvan',
                  'Paul SIDJE',
                  'Yannick Mabicka',
                  'Mireille Moloto',
                  'Leonnel Messi',
                  'Samuel ET0 0',
                  'Autres',
                ],
                datasets: [
                  {
                    label: 'Actions en cours',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'rgba(220, 220, 220, 1)',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointBorderColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(220, 220, 220, 1)',
                    data: [65, 59, 90, 81, 56, 55, 40],
                  },
                  {
                    label: 'Actions Terminées',
                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                    borderColor: 'rgba(151, 187, 205, 1)',
                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                    pointBorderColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(151, 187, 205, 1)',
                    data: [28, 48, 40, 19, 96, 27, 100],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Charts
