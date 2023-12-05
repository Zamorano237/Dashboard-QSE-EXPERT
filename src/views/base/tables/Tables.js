/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Dialog, DialogTitle, DialogContent,createTheme, ThemeProvider, IconButton, } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import {
  CButton,
} from '@coreui/react'



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
  { id: 25, title: 'Coup de chaleur', date: '2023-05-10', time: '11:55', type: 'Incident', names: 'Amelia Earhart', description: 'Malaise dû à une exposition prolongée au soleil.' },
  { id: 26, title: 'Fuite de produit chimique', date: '2023-06-01', time: '10:30', type: 'ASA', names: 'Alex Gomes', description: 'Fuite mineure dans l\'entrepôt de produits chimiques.' },
  { id: 27, title: 'Surcharge électrique', date: '2023-06-03', time: '09:20', type: 'Incident', names: 'Brian O\'Connor', description: 'Court-circuit causé par une surcharge.' },
  { id: 28, title: 'Chute d\'un objet lourd', date: '2023-06-05', time: '11:45', type: 'AAA', names: 'Cathy Smith', description: 'Chute d\'une palette depuis un rayonnage élevé.' },
  { id: 29, title: 'Intoxication par inhalation', date: '2023-06-07', time: '13:30', type: 'Incident', names: 'David Warner', description: 'Inhalation de vapeurs toxiques lors de la peinture.' },
  { id: 30, title: 'Accident de machine-outil', date: '2023-06-10', time: '15:15', type: 'ASA', names: 'Eva Long', description: 'Blessure causée par une scie circulaire.' },
  { id: 31, title: 'Incendie dans l\'atelier', date: '2023-06-12', time: '16:00', type: 'Incident', names: 'Frank Peterson', description: 'Début d\'incendie rapidement maîtrisé.' },
  { id: 32, title: 'Glissade dans le parking', date: '2023-06-14', time: '08:10', type: 'Presqu\'incident', names: 'Gina Hall', description: 'Glissade sur une flaque d\'huile.' },
  { id: 33, title: 'Blessure lors d\'un exercice d\'évacuation', date: '2023-06-16', time: '14:25', type: 'Incident', names: 'Hank Moody', description: 'Entorse à la cheville pendant un exercice d\'urgence.' },
  { id: 34, title: 'Explosion contenue', date: '2023-06-18', time: '10:50', type: 'ASA', names: 'Irene Adler', description: 'Petite explosion dans le laboratoire de chimie.' },
  { id: 35, title: 'Choc électrique léger', date: '2023-06-20', time: '12:05', type: 'Incident', names: 'Jack Norman', description: 'Électrocution mineure lors de la réparation d\'un câble.' },
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
    { id: 15, title: 'Révision des politiques de congés maladie', responsible: 'Olivia Sanchez', startDate: '2023-03-01', endDate: '2023-03-31', status: 'En retard' },
    { id: 16, title: 'Inspection des aires de repos', responsible: 'Peter Griffin', startDate: '2023-01-22', endDate: '2023-02-05', status: 'En cours' },
{ id: 17, title: 'Amélioration de l’éclairage de sécurité', responsible: 'Lois Lane', startDate: '2023-02-15', endDate: '2023-03-01', status: 'Planifié' },
{ id: 18, title: 'Renforcement de la signalisation d’urgence', responsible: 'Clark Kent', startDate: '2023-03-10', endDate: '2023-03-24', status: 'Terminé' },
{ id: 19, title: 'Formation aux risques électriques', responsible: 'Bruce Wayne', startDate: '2023-01-05', endDate: '2023-01-20', status: 'En retard' },
{ id: 20, title: 'Révision des normes de stockage', responsible: 'Diana Prince', startDate: '2023-02-18', endDate: '2023-03-05', status: 'En cours' },
{ id: 21, title: 'Audit des procédures d’évacuation', responsible: 'Barry Allen', startDate: '2023-03-15', endDate: '2023-04-01', status: 'Planifié' },
{ id: 22, title: 'Mise à jour des équipements de premiers secours', responsible: 'Hal Jordan', startDate: '2023-02-01', endDate: '2023-02-15', status: 'Terminé' },
{ id: 23, title: 'Exercices de simulation d’accidents', responsible: 'Arthur Curry', startDate: '2023-01-10', endDate: '2023-01-24', status: 'En retard' },
{ id: 24, title: 'Analyse des tendances des accidents', responsible: 'Victor Stone', startDate: '2023-02-20', endDate: '2023-03-07', status: 'En cours' },
{ id: 25, title: 'Renforcement des équipes d’intervention rapide', responsible: 'Billy Batson', startDate: '2023-03-22', endDate: '2023-04-05', status: 'Planifié' },
{ id: 26, title: 'Formation à la gestion du stress', responsible: 'John Constantine', startDate: '2023-01-15', endDate: '2023-02-01', status: 'Terminé' },
{ id: 27, title: 'Vérification des sorties de secours', responsible: 'Zatanna Zatara', startDate: '2023-02-05', endDate: '2023-02-19', status: 'En retard' },
{ id: 28, title: 'Optimisation des parcours d’évacuation', responsible: 'Oliver Queen', startDate: '2023-03-01', endDate: '2023-03-15', status: 'En cours' },
{ id: 29, title: 'Evaluation des risques psychosociaux', responsible: 'Carter Hall', startDate: '2023-04-02', endDate: '2023-04-16', status: 'Planifié' },
{ id: 30, title: 'Mise à jour des consignes de sécurité', responsible: 'Shayera Hol', startDate: '2023-02-12', endDate: '2023-02-26', status: 'Terminé' },
{ id: 31, title: 'Audit des conditions de travail', responsible: 'Ray Palmer', startDate: '2023-01-20', endDate: '2023-02-03', status: 'En retard' },
{ id: 32, title: 'Évaluation des dispositifs anti-incendie', responsible: 'Mari McCabe', startDate: '2023-03-08', endDate: '2023-03-22', status: 'En cours' },
{ id: 33, title: 'Révision des méthodes de travail', responsible: 'Kendra Saunders', startDate: '2023-04-10', endDate: '2023-04-24', status: 'Planifié' },
{ id: 34, title: 'Mise en place d’une cellule de crise', responsible: 'Caitlin Snow', startDate: '2023-02-18', endDate: '2023-03-04', status: 'Terminé' },
{ id: 35, title: 'Examen des politiques de santé au travail', responsible: 'Cisco Ramon', startDate: '2023-01-25', endDate: '2023-02-08', status: 'En retard' },
{ id: 36, title: 'Campagne de prévention des TMS', responsible: 'Felicity Smoak', startDate: '2023-03-15', endDate: '2023-03-29', status: 'En cours' },
{ id: 37, title: 'Contrôle des normes environnementales', responsible: 'John Diggle', startDate: '2023-04-05', endDate: '2023-04-19', status: 'Planifié' },
{ id: 38, title: 'Amélioration de l’ergonomie des postes de travail', responsible: 'Thea Queen', startDate: '2023-02-22', endDate: '2023-03-08', status: 'Terminé' },
{ id: 39, title: 'Audit de la sécurité des machines', responsible: 'Roy Harper', startDate: '2023-01-30', endDate: '2023-02-13', status: 'En retard' },
{ id: 40, title: 'Renouvellement des EPI', responsible: 'Lyla Michaels', startDate: '2023-03-20', endDate: '2023-04-03', status: 'En cours' },
{ id: 41, title: 'Formation continue sur les risques industriels', responsible: 'Tommy Merlyn', startDate: '2023-04-08', endDate: '2023-04-22', status: 'Planifié' },
{ id: 42, title: 'Mise en place d’un dispositif d’alerte', responsible: 'Rene Ramirez', startDate: '2023-02-28', endDate: '2023-03-14', status: 'Terminé' },
{ id: 43, title: 'Élaboration d’un guide des bonnes pratiques', responsible: 'Curtis Holt', startDate: '2023-02-04', endDate: '2023-02-18', status: 'En retard' },
{ id: 44, title: 'Renforcement des mesures de confinement', responsible: 'Dinah Drake', startDate: '2023-03-25', endDate: '2023-04-08', status: 'En cours' },
{ id: 45, title: 'Création d’une charte de sécurité', responsible: 'Evelyn Sharp', startDate: '2023-04-12', endDate: '2023-04-26', status: 'Planifié' },
{ id: 46, title: 'Audit des pratiques de levage de charges', responsible: 'Rory Regan', startDate: '2023-03-02', endDate: '2023-03-16', status: 'Terminé' },
{ id: 47, title: 'Réévaluation des zones de stockage dangereuses', responsible: 'Joe Wilson', startDate: '2023-02-08', endDate: '2023-02-22', status: 'En retard' },
{ id: 48, title: 'Optimisation des protocoles de communication', responsible: 'Slade Wilson', startDate: '2023-03-30', endDate: '2023-04-13', status: 'En cours' },
{ id: 49, title: 'Installation de systèmes d’alarme avancés', responsible: 'Adrian Chase', startDate: '2023-04-15', endDate: '2023-04-29', status: 'Planifié' },
{ id: 50, title: 'Contrôle des dispositifs de verrouillage', responsible: 'Moira Queen', startDate: '2023-03-07', endDate: '2023-03-21', status: 'Terminé' },
{ id: 51, title: 'Examen des politiques de télétravail', responsible: 'Walter Steele', startDate: '2023-02-12', endDate: '2023-02-26', status: 'En retard' },
{ id: 52, title: 'Amélioration de la ventilation des espaces de travail', responsible: 'Isabel Rochev', startDate: '2023-04-02', endDate: '2023-04-16', status: 'En cours' },
  ];
  // Thème pour le DataGrid
const theme2 = createTheme();

const Tables = () => {
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
  return (
    <><CButton color="success" size='lg'>Historique des accidents</CButton><br /><br /><ThemeProvider theme={theme}>
      <div style={{ height: 500, width: '100%', backgroundColor: "white" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10]}
          checkboxSelection />

        <Dialog onClose={handleClose} open={open}>
          <DialogTitle>Information</DialogTitle>
          <DialogContent>
            Cette option est en cours de développement. Dans la version finale,
            vous aurez la possibilité de visualiser le rapport relatif à l'accident.
          </DialogContent>
        </Dialog>
      </div>
    </ThemeProvider><br /><br /><CButton color="success" size='lg'>Suivi des actions</CButton><br /><br /><ThemeProvider theme={theme2}>
        <div style={{ height: 500, width: '100%', backgroundColor: "white" }}>
          <DataGrid
            rows={rows2}
            columns={columns2}
            pageSizeOptions={[5, 10]}
            checkboxSelection />

          <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Information</DialogTitle>
            <DialogContent>
              Cette option est en cours de développement. Dans la version finale,
              vous pourrez consulter le descriptif complet de l'action.
            </DialogContent>
          </Dialog>
        </div>
      </ThemeProvider></>
  )
}

export default Tables
