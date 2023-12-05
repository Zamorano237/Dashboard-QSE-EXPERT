/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'


import WidgetsDropdown from '../widgets/WidgetsDropdown'
import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import { DataGrid } from '@mui/x-data-grid';
import { Dialog, DialogTitle, DialogContent,createTheme, ThemeProvider, IconButton, } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';


const rows = [
  { id: 1, title: 'Chute dans l\'atelier', date: '2023-01-10', time: '08:15', type: 'Incident', names: 'John Doe', description: 'Chute sur sol mouillé.' },
  { id: 2, title: 'Incident électrique', date: '2023-01-15', time: '10:30', type: 'Incident', names: 'Alice Johnson', description: 'Court-circuit d\'une machine.' },
  { id: 3, title: 'Exposition à des produits chimiques', date: '2023-01-20', time: '13:45', type: 'ASA', names: 'Bob Brown', description: 'Renversement d\'un produit de nettoyage.' },
  { id: 4, title: 'Blessure à la main', date: '2023-01-22', time: '09:00', type: 'Incident', names: 'Emma Wilson', description: 'Coupure lors de l\'utilisation d\'un outil.' },
  { id: 5, title: 'Collision de véhicules', date: '2023-01-30', time: '16:30', type: 'AAA', names: 'Gary Young', description: 'Collision entre un chariot élévateur et un camion.' },
  { id: 6, title: 'Brûlure thermique', date: '2023-02-05', time: '14:15', type: 'Incident', names: 'Hannah Klein', description: 'Contact avec un équipement chaud.' },
  { id: 7, title: 'Chute d\'objet', date: '2023-02-10', time: '11:00', type: 'Presqu\'incident', names: 'Ian Myles', description: 'Chute d\'une boîte depuis une étagère.' },
  { id: 8, title: 'Glissade dans le hall', date: '2023-02-12', time: '08:10', type: 'Incident', names: 'Jenny Smith', description: 'Glissade sur un sol récemment nettoyé.' },
  { id: 9, title: 'Inhalation de vapeurs', date: '2023-02-18', time: '12:20', type: 'ASA', names: 'Kevin Norton', description: 'Exposition à des vapeurs de peinture.' },
  { id: 10, title: 'Accident de la route', date: '2023-02-20', time: '07:50', type: 'AAA', names: 'Laura Palmer', description: 'Accident de voiture lors d\'un déplacement professionnel.' },
  { id: 11, title: 'Incendie mineur', date: '2023-03-01', time: '13:30', type: 'Incident', names: 'Martin Prince', description: 'Petit feu dans la zone de stockage.' },
  { id: 12, title: 'Piqûre d\'insecte', date: '2023-03-05', time: '15:45', type: 'Incident', names: 'Nina Oswald', description: 'Piqûre d\'abeille lors du travail en extérieur.' },
  { id: 13, title: 'Choc électrique', date: '2023-03-10', time: '10:15', type: 'ASA', names: 'Oscar Wells', description: 'Contact accidentel avec un câble électrique.' },
  { id: 14, title: 'Fracture par chute', date: '2023-03-15', time: '11:30', type: 'Incident', names: 'Pamela Bryson', description: 'Chute de l\'échelle en changeant une ampoule.' },
  { id: 15, title: 'Entorse à l\'entrepôt', date: '2023-03-18', time: '09:25', type: 'Incident', names: 'Quincy Adams', description: 'Entorse en soulevant une caisse lourde.' },
  { id: 16, title: 'Coupure profonde', date: '2023-03-22', time: '12:10', type: 'ASA', names: 'Rachel Green', description: 'Coupure avec un morceau de verre cassé.' },
  { id: 17, title: 'Chute d\'escalier', date: '2023-04-02', time: '08:40', type: 'Incident', names: 'Steven Hall', description: 'Chute dans les escaliers du bureau.' },
  { id: 18, title: 'Burn-out', date: '2023-04-07', time: '14:55', type: 'Presqu\'incident', names: 'Tina Fey', description: 'Signes de surmenage et d\'épuisement.' },
  { id: 19, title: 'Accrochage véhiculaire', date: '2023-04-10', time: '17:20', type: 'AAA', names: 'Uma Thurman', description: 'Léger accrochage sur le parking.' },
  { id: 20, title: 'Fuite de liquide', date: '2023-04-15', time: '10:05', type: 'Presqu\'incident', names: 'Victor Price', description: 'Fuite d\'huile dans l\'atelier.' },
  { id: 21, title: 'Bruit excessif', date: '2023-04-20', time: '16:15', type: 'Incident', names: 'Wendy Brooks', description: 'Exposition à un bruit excessif sans protection.' },
  { id: 22, title: 'Exposition à la lumière intense', date: '2023-04-22', time: '13:50', type: 'ASA', names: 'Xavier Bloom', description: 'Exposition accidentelle à une lumière laser.' },
  { id: 23, title: 'Intoxication alimentaire', date: '2023-05-01', time: '12:30', type: 'Incident', names: 'Yvonne Carter', description: 'Intoxication suite à un repas de cantine.' },
  { id: 24, title: 'Éraflure par outil', date: '2023-05-05', time: '15:40', type: 'ASA', names: 'Zachary Turner', description: 'Éraflure superficielle lors de l\'utilisation d\'un tournevis.' },
  { id: 25, title: 'Coup de chaleur', date: '2023-05-10', time: '11:55', type: 'Incident', names: 'Amelia Earhart', description: 'Malaise dû à une exposition prolongée au soleil.' }
];

const theme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        header: {
          backgroundColor: 'primary.main', // Utilisez la couleur bleu primaire
        },
      },
    },
  },
});

const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressExample = [
    { title: 'Usine', value: '191 Accidents', percent: 46, color: 'success' },
    { title: 'Magasin', value: '51 Accidents', percent: 30, color: 'info' },
    { title: 'Ateliers', value: '37 Accidents', percent: 15, color: 'danger' },
    { title: 'Trajets', value: ' 15 Accidents', percent: 12, color: 'primary' },
    { title: 'Bureaux', value: ' 12 Accidents', percent: 10, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Lundi', value1: 34, value2: 78 },
    { title: 'Mardi', value1: 56, value2: 94 },
    { title: 'Mercredi', value1: 12, value2: 67 },
    { title: 'Jeudi', value1: 43, value2: 91 },
    { title: 'Vendredi', value1: 22, value2: 73 },
    { title: 'Samedi', value1: 53, value2: 82 },
    { title: 'Dimanche', value1: 9, value2: 69 },
  ]

  const progressGroupExample2 = [
    { title: 'Masculin', icon: cilUser, value: 53 },
    { title: 'Feminin', icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Usine', percent: 56, value: '191' },
    { title: 'Magasin', percent: 15, value: '51' },
    { title: 'Bureaux', percent: 11, value: '37' },
    { title: 'Ateliers', percent: 8, value: '27' },
  ]

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'WATBO Yvan',
        registered: 'Avril 23, 2023',
      },
      country: 18,
      usage: {
        value: 50,
        period: 'En cours 10, Réalisée : 18, Planifiée : 7',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'SIDJE Paul',
        new: false,
        registered: 'Mars 07, 2023',
      },
      country: 7,
      usage: {
        value: 22,
        period: 'En cours 17, Réalisée : 08, Planifiée : 14',
        color: 'info',
      },
      payment: 'Avram Tarasios',
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Yannick Mabicka', new: true, registered: 'Fev 17, 2024' },
      country: 6,
      usage: {
        value: 100,
        period: 'En cours 0, Réalisée : 8, Planifiée : 0',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Mireille Moloto', new: true, registered: 'jun 1, 2023' },
      country: 5,
      usage: {
        value: 98,
        period: 'En cours 2, Réalisée : 14, Planifiée : 0',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Agapetus Laurent',
        new: true,
        registered: 'Juil 26, 2023',
      },
      country: 4,
      usage: {
        value: 22,
        period: 'En cours 13, Réalisée : 12, Planifiée : 16',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Lionnel Messi',
        new: true,
        registered: 'Avr 17, 2023',
      },
      country: 5,
      usage: {
        value: 43,
        period: 'En cours 5, Réalisée : 9, Planifiée : 4',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Titre', width: 200 },
    { field: 'date', headerName: 'Date', width: 110 },
    { field: 'time', headerName: 'Heure', width: 110 },
    { field: 'type', headerName: 'Type', width: 160 },
    { field: 'names', headerName: 'Noms des Accidentés', width: 200 },
    { field: 'description', headerName: 'Description', width: 300 },
    {
      field: 'Rapport',
      headerName: 'Rapport',
      sortable: false,
      width: 150,
      renderCell: (params) => (
        <button onClick={() => handleOpen()}>
          Consultez le rapport
        </button>
      ),
    }
  ];

  const columns2 = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Titre de l\'action', width: 400 },
    { field: 'responsible', headerName: 'Responsable', width: 150 },
    { field: 'startDate', headerName: 'Date de Début', width: 110 },
    { field: 'endDate', headerName: 'Date de Fin', width: 110 },
    {
      field: 'status',
      headerName: 'Statut',
      width: 120,
      renderCell: (params) => (
        <div style={{ color: params.value === 'En retard' ? 'red' : (params.value === 'Terminé' ? 'green' : 'blue') }}>
          {params.value}
        </div>
      ),
    },
    {
      field: 'details',
      headerName: 'Description',
      sortable: false,
      width: 120,
      renderCell: () => (
        <IconButton onClick={handleOpen}>
          <InfoIcon />
        </IconButton>
      ),
    }
  ];
  const rows2 = [
    { id: 1, title: 'Révision des procédures de sécurité', responsible: 'Alice Martin', startDate: '2023-01-15', endDate: '2023-02-15', status: 'En cours' },
    { id: 2, title: 'Formation à la prévention des chutes', responsible: 'Bob Smith', startDate: '2023-01-20', endDate: '2023-03-01', status: 'Planifié' },
    { id: 3, title: 'Audit des équipements de sécurité', responsible: 'Carol Jones', startDate: '2023-02-01', endDate: '2023-02-20', status: 'Terminé' },
    { id: 4, title: 'Mise à jour des plans d\'évacuation', responsible: 'David Lee', startDate: '2023-02-15', endDate: '2023-04-15', status: 'En retard' },
    { id: 5, title: 'Examen des protocoles d\'urgence', responsible: 'Emma Wilson', startDate: '2023-03-01', endDate: '2023-04-01', status: 'En cours' },
    { id: 6, title: 'Enquête sur les causes de l\'accident', responsible: 'Frank Hall', startDate: '2023-01-10', endDate: '2023-01-30', status: 'Terminé' },
    { id: 7, title: 'Réunion de sensibilisation à la sécurité', responsible: 'Gina Brown', startDate: '2023-02-25', endDate: '2023-03-10', status: 'Planifié' },
    { id: 8, title: 'Contrôle des dispositifs d\'alarme', responsible: 'Henry Clark', startDate: '2023-03-05', endDate: '2023-03-20', status: 'Terminé' },
    { id: 9, title: 'Mise en place de signalisation de sécurité', responsible: 'Irene Edwards', startDate: '2023-03-15', endDate: '2023-04-05', status: 'En cours' },
    { id: 10, title: 'Analyse des risques sur le lieu de travail', responsible: 'John Adams', startDate: '2023-01-05', endDate: '2023-01-25', status: 'Terminé' },
    { id: 11, title: 'Renforcement des mesures de premiers secours', responsible: 'Karen O\'Neil', startDate: '2023-02-10', endDate: '2023-03-10', status: 'En retard' },
    { id: 12, title: 'Exercices pratiques de sécurité', responsible: 'Liam Scott', startDate: '2023-03-20', endDate: '2023-04-20', status: 'Planifié' },
    { id: 13, title: 'Évaluation des zones à haut risque', responsible: 'Mia Turner', startDate: '2023-01-25', endDate: '2023-02-25', status: 'En cours' },
    { id: 14, title: 'Campagne de sensibilisation interne', responsible: 'Noah Phillips', startDate: '2023-02-05', endDate: '2023-02-19', status: 'Terminé' },
    { id: 15, title: 'Révision des politiques de congés maladie', responsible: 'Olivia Sanchez', startDate: '2023-03-01', endDate: '2023-03-31', status: 'En retard' }
  ];
  // Thème pour le DataGrid
const theme2 = createTheme();
  return (
    <>
      <WidgetsDropdown />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Courbe d évolution
              </h4>
              <div className="small text-medium-emphasis">Janvier - Julillet 2023</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
              datasets: [
                {
                  label: 'Accidents avec arrêt',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                  fill: true,
                },
                {
                  label: 'Accidents sans arrêt',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-success'),
                  pointHoverBackgroundColor: getStyle('--cui-success'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                },
                {
                  label: 'Inciidents',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-danger'),
                  pointHoverBackgroundColor: getStyle('--cui-danger'),
                  borderWidth: 1,
                  borderDash: [8, 5],
                  data: [65, 165, 65, 166, 175, 65, 148],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value} ({item.percent}%)
                </strong>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Suivi {' & '} Stastitique</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small"> Accidents avec arrêt </div>
                        <div className="fs-5 fw-semibold">126</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Accidents sans arrêt</div>
                        <div className="fs-5 fw-semibold">240</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />
                  {progressGroupExample1.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-prepend">
                        <span className="text-medium-emphasis small">{item.title}</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="info" value={item.value1} />
                        <CProgress thin color="danger" value={item.value2} />
                      </div>
                    </div>
                  ))}
                </CCol>

                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Suivi des accidents / sexe</div>
                        <div className="fs-5 fw-semibold">366</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Suivi des accidents / site</div>
                        <div className="fs-5 fw-semibold">298</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  {progressGroupExample2.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">{item.value}%</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning" value={item.value} />
                      </div>
                    </div>
                  ))}

                  <div className="mb-5"></div>

                  {progressGroupExample3.map((item, index) => (
                    <div className="progress-group" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}{' '}
                          <span className="text-medium-emphasis small">({item.percent}%)</span>
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="success" value={item.percent} />
                      </div>
                    </div>
                  ))}
                </CCol>
              </CRow>

              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Utilisateurs</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Enregistrements</CTableHeaderCell>
                    <CTableHeaderCell>Suivi des actions</CTableHeaderCell>
                    <CTableHeaderCell>Activités</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Dernier rapport :{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">{item.country}</CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.usage.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">Derniére connexion</div>
                        <strong>{item.activity}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
          <CButton color="success" size='lg'>Suivi des actions</CButton>
          <br />
          <br />
          <WidgetsBrand withCharts />
          
        </CCol>
      </CRow>
      <br />
      <CButton color="success" size='lg'>Historique des accidents</CButton>
      <br />
      <br />
      <ThemeProvider theme={theme}>
      <div style={{ height: 400, width: '100%', backgroundColor: "white" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />

        <Dialog onClose={handleClose} open={open}>
          <DialogTitle>Information</DialogTitle>
          <DialogContent>
            Cette option est en cours de développement. Dans la version finale, 
            vous aurez la possibilité de visualiser le rapport relatif à l'accident.
          </DialogContent>
        </Dialog>
      </div>
    </ThemeProvider>
    <br />
      <br />
    <CButton color="success" size='lg'>Suivi 69des actions</CButton>
      <br />
      <br />
    <ThemeProvider theme={theme2}>
      <div style={{ height: 400, width: '100%',backgroundColor: "white" }}>
        <DataGrid
          rows={rows2}
          columns={columns2}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />

        <Dialog onClose={handleClose} open={open}>
          <DialogTitle>Information</DialogTitle>
          <DialogContent>
            Cette option est en cours de développement. Dans la version finale, 
            vous pourrez consulter le descriptif complet de l'action.
          </DialogContent>
        </Dialog>
      </div>
    </ThemeProvider>
    </>
  )
}

export default Dashboard
