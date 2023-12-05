/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  ListItemSecondaryAction,
  Grid
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import WarningIcon from '@mui/icons-material/Warning';
import EventIcon from '@mui/icons-material/Event';

const initialAlerts = [
  { id: 1, text: 'Finaliser le rapport d\'incident pour l\'accident survenu dans l\'atelier', overdue: false, responsible: 'M. WATBO Yvan', dueDate: '2023-12-15' },
  { id: 2, text: 'Mettre à jour les procédures de sécurité suite à l\'incident de déversement chimique', overdue: true, responsible: 'Paul Sidje', dueDate: '2023-07-20' },
  { id: 3, text: 'Réviser les formations à la sécurité incendie après l\'évacuation d\'urgence', overdue: false, responsible: 'Yannick Mabicka', dueDate: '2023-12-01' },
  { id: 4, text: 'Inspection des équipements de protection individuelle après le rapport d\'anomalie', overdue: false, responsible: 'M. Bernard', dueDate: '2023-10-30' },
  { id: 5, text: 'Évaluation des risques liés aux nouvelles machines introduites', overdue: false, responsible: 'M. Moreau', dueDate: '2023-08-15' },
  { id: 6, text: 'Clôture du dossier de l\'accident de travail de M. Martin', overdue: true, responsible: 'Mme. Petit', dueDate: '2023-05-30' },
  { id: 7, text: 'Suivi des recommandations suite à l\'audit de sécurité du mois dernier', overdue: false, responsible: 'M. Durand', dueDate: '2023-09-10' },
  { id: 8, text: 'Achèvement de l\'installation des nouvelles signalisations de sécurité', overdue: false, responsible: 'M. Dubois', dueDate: '2023-11-25' },
  { id: 9, text: 'Finalisation de la mise à jour du plan d\'intervention d\'urgence', overdue: false, responsible: 'M. Leroy', dueDate: '2023-12-31' },
  { id: 10, text: 'Réunion de suivi avec les équipes sur les procédures d\'évacuation améliorées', overdue: false, responsible: 'Mme. Roux', dueDate: '2023-10-05' },
];

const AlertPage = () => {
  const [alerts, setAlerts] = useState(initialAlerts);

  const handleDeleteAlert = (alertId) => {
    setAlerts(alerts.filter(alert => alert.id !== alertId));
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" color="error" gutterBottom>
          Alertes des actions
        </Typography>
        <Typography variant="subtitle4" gutterBottom>
          Cette liste contient des alertes pour les actions qui requièrent votre attention. Les actions proches de la date de fin sont marquées pour rappel, tandis que celles ayant dépassé la date de clôture sont signalées comme urgentes.
        </Typography>
        <List>
          {alerts.map((alert) => (
            <ListItem key={alert.id}>
              <ListItemIcon>
                {alert.overdue ? <WarningIcon color="error" /> : <EventIcon color="warning" />}
              </ListItemIcon>
              <ListItemText
                primary={alert.text}
                secondary={`Responsable : ${alert.responsible} - Date de clôture : ${alert.dueDate}`}
                primaryTypographyProps={{ color: alert.overdue ? 'error' : 'warning' }}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteAlert(alert.id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default AlertPage;
