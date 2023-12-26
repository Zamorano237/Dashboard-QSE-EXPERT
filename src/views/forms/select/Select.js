/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import { TextField, Button, Checkbox, FormControlLabel, Typography, MenuItem, Grid,IconButton } from '@mui/material';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PostAddIcon from '@mui/icons-material/PostAdd';
import SendIcon from '@mui/icons-material/Send';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Stepper, Step, StepLabel } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

// ...autres imports...

const initialValues = {
  eventTitle: '',
  eventDate: '',
  eventTime: '',
  eventType: '',
  isEventStopped: false,
  stopDays: '',
  eventLocation: '',
  eventDescription: '',
  equipmentInvolved: '',
  victims: [{ name: '', position: '', injuryType: '' }],
  witnesses: [{ name: '', testimony: '' }],
  actions: [{ title: '', description: '', responsible: '', startDate: '', endDate: '', status: '' }],
  accidentCauses: [''],
};

const MyForm = () => {
  const [open, setOpen] = useState(false); // État pour la popup
  const [page, setPage] = useState(0);
  const accidentCausesOptions = [
    'Erreur humaine',
    'Défaillance technique',
    'Condition météorologique',
    'Non respect des procédures',
    // ... autres causes
  ];
  const nextPage = () => setPage(page + 1);
  const previousPage = () => setPage(page - 1);

  const handleFormSubmit = (values) => {
    console.log(values);
    setOpen(true); // Ouvre la popup lors de la soumission
  };

  const handleClose = () => {
    setOpen(false); // Ferme la popup
  };

  const steps = ['Informations sur l\'accident', 'Informations sur les victimes', 'Recueil des faits', 'Analyse des causes','Actions mises en place'];

  const [selectedFiles, setSelectedFiles] = useState([]);


  const [filePreviews, setFilePreviews] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const newFilePreviews = [];

    for (let i = 0; i < files.length; i++) {
      // Vérifiez si le fichier est une image pour l'aperçu
      if (files[i].type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = (e) => {
          newFilePreviews.push(e.target.result);
          setFilePreviews([...newFilePreviews]);
        };

        reader.readAsDataURL(files[i]);
      }
    }
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
      {({ values }) => (
        <>
          <Typography variant="h6" align="center" style={{ margin: ' 3px 0' }}>
            Enregistrement d'un évenement
          </Typography>

          <Stepper activeStep={page} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Form >
          {page === 0 && (
   <Grid container style={{ backgroundColor: 'white', padding: '15px' }}>      
  <React.Fragment >
    <Typography variant="h6" style={{ margin: '10px 0' }}>Informations sur l'accident</Typography>
    <Grid container spacing={2}>
      {/* Titre de l'événement */}
      <Grid item xs={12} md={6}>
        <Field as={TextField} label="Titre de l'événement" name="eventTitle" fullWidth />
      </Grid>
       {/* Type d'événement */}
       <Grid item xs={12} md={6}>
        <Field
          as={TextField}
          label="Type d'événement"
          name="eventType"
          select
          fullWidth
        >
          <MenuItem value="AAA">AAA</MenuItem>
          <MenuItem value="ASA">ASA</MenuItem>
          <MenuItem value="Incidents">Incidents</MenuItem>
          <MenuItem value="Presqu'incidents">Presqu'incidents</MenuItem>
        </Field>
      </Grid>
       {/* Lieu de l'événement */}
       <Grid item xs={12} md={6}>
        <Field
          as={TextField}
          label="Lieu de l'événement"
          name="eventLocation"
          select
          fullWidth
        >
          {/* Remplacer par les options de lieux réels */}
          <MenuItem value="Lieu1">Atelier</MenuItem>
          <MenuItem value="Lieu2">Magasin</MenuItem>
          <MenuItem value="Lieu1">Bureaux</MenuItem>
          <MenuItem value="Lieu2">Ateliers</MenuItem>
          <MenuItem value="Lieu1">Garage</MenuItem>
          <MenuItem value="Lieu2">Usine</MenuItem>
        </Field>
      </Grid>
      {/* Date de l'événement */}
      <Grid item xs={12} md={3}>
        <Field
          as={TextField}
          label="Date de l'événement"
          name="eventDate"
          type="date"
          InputLabelProps={{ shrink: true }}
          fullWidth
        />
      </Grid>

      {/* Heure de l'événement */}
      <Grid item xs={12} md={3}>
        <Field
          as={TextField}
          label="Heure de l'événement"
          name="eventTime"
          type="time"
          InputLabelProps={{ shrink: true }}
          fullWidth
        />
      </Grid>

     
     
            {/* Description de l'accident */}
            <Grid item xs={12}>
        <Field
          as={TextField}
          label="Brève description de l'accident"
          name="eventDescription"
          multiline
          rows={3}
          fullWidth
        />
      </Grid>
      {/* Équipement en cause */}
      <Grid item xs={6}>
        <Field
          as={TextField}
          label="Équipement en cause"
          name="equipmentInvolved"
          fullWidth
        />
      </Grid>
      
      {/* Arrêt dû à l'événement */}
      <Grid item xs={12} md={6}>
        <FormControlLabel
        xs={12} md={3}
          control={<Field as={Checkbox} name="isEventStopped" color="primary" />}
          label="Arrêt dû à l'événement ?"
        />
        {values.isEventStopped && (
          <Field
          xs={12} md={3}
            as={TextField}
            label="Nombre de jours d'arrêt"
            name="stopDays"
            type="number"
          />
        )}
      </Grid>
                      {/* Champ pour le chargement de fichiers */}
                      <Grid item xs={12}>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept="image/*" // Accepte uniquement les images
                    multiple // Retirer cet attribut si vous ne voulez qu'un seul fichier
                    style={{ display: 'block', margin: '10px 0' }}
                  />
                  {/* Affichage des aperçus des images */}
                  <Grid container spacing={2}>
                    {filePreviews.map((src, index) => (
                      <Grid item key={index}>
                        <img src={src} alt={`Aperçu ${index}`} style={{ width: '100px', height: '100px' }} />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>

   </Grid>
  </React.Fragment>
  </Grid>   
)}

{page === 1 && (
  <Grid container style={{ backgroundColor: 'white', padding: '15px' }}>
  <React.Fragment>
    <Typography variant="h6" style={{ margin: '10px 0' }}>Informations sur les victimes</Typography>
    <FieldArray
      name="victims"
      render={({ push, remove }) => (
        <Grid container spacing={2}>
          {values.victims.map((victim, index) => (
            <React.Fragment key={index}>
              {/* Nom de la victime */}
              <Grid item xs={12} sm={3}>
                <Field
                  as={TextField}
                  label="Nom de la victime"
                  name={`victims[${index}].name`}
                  fullWidth
                />
              </Grid>

              {/* Poste de la victime */}
              <Grid item xs={12} sm={3}>
                <Field
                  as={TextField}
                  label="Poste de la victime"
                  name={`victims[${index}].position`}
                  fullWidth
                />
              </Grid>

              {/* Nature de la blessure */}
              <Grid item xs={12} sm={3}>
                <Field
                  as={TextField}
                  label="Nature de la blessure"
                  name={`victims[${index}].injuryType`}
                  select
                  fullWidth
                >
                  <MenuItem value="Blessure légère">Blessure légère</MenuItem>
                  <MenuItem value="Blessure grave">Blessure grave</MenuItem>
                  <MenuItem value="Blessure mortelle">Blessure mortelle</MenuItem>
                </Field>
              </Grid>

              {/* Siége de la lésion */}
              <Grid item xs={12} sm={2}>
                <Field
                  as={TextField}
                  label="siége de la bléssure"
                  name={`victims[${index}].injuryType`}
                  select
                  fullWidth
                >
                  <MenuItem value="Tête">Tête</MenuItem>
                  <MenuItem value="Cou">Cou</MenuItem>
                  <MenuItem value="Pied">Pied</MenuItem>
                </Field>
              </Grid>

              {/* Bouton pour supprimer une victime */}
              <Grid item xs={12} sm={1}>
                <Button color="error" startIcon={<DeleteIcon />} onClick={() => remove(index)}>
                </Button>
              </Grid>
            </React.Fragment>
          ))}

          {/* Bouton pour ajouter une victime */}
          <Grid item xs={12}>
            <Button
              variant="outlined"
              startIcon={<PersonAddAltIcon/>}
              color="success"
              onClick={() => push({ name: '', position: '', injuryType: '' })}
            >
              Ajouter une victime
            </Button>
          </Grid>
        </Grid>
      )}
    />
  </React.Fragment>
  </Grid>
)}


{page === 2 && (
  <Grid container style={{ backgroundColor: 'white', padding: '15px' }}>   
  <React.Fragment>
    <Typography variant="h6" style={{ margin: '10px 0' }}>Recueil des faits</Typography>
    <FieldArray
      name="witnesses"
      render={({ push, remove }) => (
        <Grid container spacing={2}>
          {values.witnesses.map((witness, index) => (
            <React.Fragment key={index}>
              {/* Nom du témoin */}
              <Grid item xs={12} sm={4}>
                <Field
                  as={TextField}
                  label="Nom du témoin"
                  name={`witnesses[${index}].name`}
                  fullWidth
                />
              </Grid>

              {/* Témoignage */}
              <Grid item xs={12} sm={4}>
                <Field
                  as={TextField}
                  label="Témoignage"
                  name={`witnesses[${index}].testimony`}
                  multiline
                  rows={1}
                  fullWidth
                />
              </Grid>

              {/* Bouton pour supprimer un témoin */}
              <Grid item xs={12} sm={1}>
                <Button variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={() => remove(index)}>
                  Supprimer
                </Button>
              </Grid>
            </React.Fragment>
          ))}

          {/* Bouton pour ajouter un témoin */}
          <Grid item xs={12}>
          <Button
              variant="outlined"
              startIcon={<PersonAddAltIcon/>}
              color="success"
              onClick={() => push({ name: '', testimony: '' })}
            >
             Ajouter un témoin
            </Button>
          </Grid>
        </Grid>
      )}
    />
  </React.Fragment>
  </Grid> 
)}

{page === 3 && (  
          <Grid container style={{ backgroundColor: 'white', padding: '20px' }}>   
          <Typography variant="h6" style={{ margin: '20px 0' }}>Causes de l'accident</Typography>
          <FieldArray
            name="accidentCauses"
            render={({ push, remove }) => (
              <Grid container spacing={2}> {/* Ajout de l'espacement ici */}
                {values.accidentCauses.map((cause, index) => (
                  <React.Fragment key={index}>
                    {/* Ajustez la taille de l'item Grid pour avoir deux champs par ligne */}
                    <Grid item xs={12} sm={6}> 
                      <Field
                        component={TextField}
                        name={`accidentCauses[${index}]`}
                        select
                        label="Sélectionnez une cause"
                        fullWidth
                      >
                        {accidentCausesOptions.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Field>
                    </Grid>
                    {/* Bouton de suppression à côté de chaque champ */}
                    <Grid item xs={12} sm={6} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                      <IconButton color="error" onClick={() => remove(index)}>
                        <DeleteIcon />
                      </IconButton>
                    </Grid>
                  </React.Fragment>
                ))}
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddCircleOutlineIcon />}
                    onClick={() => push('')}
                  >
                    Ajouter une cause
                  </Button>
                </Grid>
              </Grid>
            )}
          />
        </Grid>
      )}
{page === 4 && (
  <Grid container style={{ backgroundColor: 'white', padding: '15px' }}>
  <React.Fragment>
    <Typography variant="h6" style={{ margin: '10px 0' }}>Actions mises en place</Typography>
    <FieldArray
      name="actions"
      render={({ push, remove }) => (
        <Grid container spacing={2}>
          {values.actions.map((action, index) => (
            <React.Fragment key={index}>
              {/* Titre de l'action */}
              <Grid item xs={12} sm={3}>
                <Field
                  as={TextField}
                  label="Titre de l'action"
                  name={`actions[${index}].title`}
                  fullWidth
                />
              </Grid>

              {/* Responsable de l'action */}
              <Grid item xs={12} sm={3}>
                <Field
                  as={TextField}
                  label="Responsable"
                  name={`actions[${index}].responsible`}
                  fullWidth
                />
              </Grid>

              {/* Date de début de l'action */}
              <Grid item xs={12} sm={2}>
                <Field
                  as={TextField}
                  label="Date de début"
                  name={`actions[${index}].startDate`}
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                />
              </Grid>

              {/* Date de fin de l'action */}
              <Grid item xs={12} sm={2}>
                <Field
                  as={TextField}
                  label="Date de fin"
                  name={`actions[${index}].endDate`}
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                />
              </Grid>

              {/* Statut de l'action */}
              <Grid item xs={2}>
                <Field
                  as={TextField}
                  label="Statut"
                  name={`actions[${index}].status`}
                  select
                  fullWidth
                >
                  <MenuItem value="Planifié">Planifié</MenuItem>
                  <MenuItem value="En cours">En cours</MenuItem>
                  <MenuItem value="Terminé">Terminé</MenuItem>
                  <MenuItem value="En retard">En retard</MenuItem>
                </Field>
              </Grid>

              {/* Description de l'action */}
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  label="Description"
                  name={`actions[${index}].description`}
                  multiline
                  rows={2}
                  fullWidth
                />
              </Grid>

              {/* Bouton pour supprimer une action */}
              <Grid item xs={12}>
              <Button variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={() => remove(index)}>
                  Supprimer cette action 
                </Button>
              </Grid>
            </React.Fragment>
          ))}

          {/* Bouton pour ajouter une action */}
          <Grid item xs={12}>
          <Button
              variant="outlined"
              color="success"
              startIcon={<PostAddIcon/>}
              onClick={() => push({ title: '', description: '', responsible: '', startDate: '', endDate: '', status: '' })}
            >
              Ajouter une action
            </Button>
           

          </Grid>
        </Grid>
      )}
    />
  </React.Fragment>
  </Grid>
)}

          <Grid container spacing={2} style={{ marginTop: '20px' }}>
            {page > 0 && (
              <Grid item>
                <Button variant="contained" color="primary" onClick={previousPage} startIcon={<ArrowBackIcon  />} >
                  Précédent
                </Button>
              </Grid>
            )}

            {page < 4 && (
              <Grid item>
                <Button variant="contained" color="success" onClick={nextPage} endIcon={<ArrowForwardIcon  />} >
                  Suivant
                </Button>
              </Grid>
            )}

            {page === 4 && (
              <Grid item>
                
                <Button type="submit" variant="contained" endIcon={<SendIcon />} color="success">
                Soumettre le formulaire
      </Button>
      {/* Popup de confirmation */}
      <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Formulaire Enregistré</DialogTitle>
            <DialogContent>
              <Typography>
                Votre formulaire a été enregistré avec succès. Vous pouvez consulter l'accident enregistré dans le formulaire à tout instant.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Fermer
              </Button>
            </DialogActions>
          </Dialog>
              </Grid>
            )}
          </Grid>
        </Form>
        </>
      )}
    </Formik>
  );
};
    


export default MyForm;
