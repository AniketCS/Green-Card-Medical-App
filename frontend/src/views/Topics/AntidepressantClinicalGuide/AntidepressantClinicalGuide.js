// Citations:
// Title: Sign-in template
// Author: Michal Dudak and Samuel Sycamore
// Date: Oct 27, 2022
// Date accessed: Feb 01, 2023
// Code version: 3f88e94
// Availability: https://github.com/mui/material-ui/tree/v5.11.7/docs/data/material/getting-started/templates/sign-in
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './AntidepressantClinicalGuide.css'


import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link} from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";


const theme = createTheme({
  typography: {
    h1: {
      fontSize: 50,
      padding: 20,
      alignItems: 'center',
    },
    heading: {
      fontSize: 24,
    },
    body1: {
      fontSize: 18,
    },
    li: {
      fontSize: 15,
    }
  },
});


export default function AntidepressantClinical() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <ThemeProvider theme={theme}>
        <AppBar position="relative" style={{background: '#96D2B0'}}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Typography variant="heading" color="black" noWrap>
                    Geriatric Psychiatry Green Card
                </Typography>
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h1">
            Antidepressant Clinical Guide
          </Typography>
        </Box>
        <Box>
        <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{background: '#96D2B0'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }} variant= "body1">
          Common DDIs with Psychotropics
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li> Antipsychotic + L-dopa = worsening of Parkinsons, worsening of psychosis  </li>
            <li> ChEI + anticholinergics = less therapeutic benefit </li>
            <li> ChEI + beta blocker = bradycardia </li>
            <li> Lithium + NSAIDs = ↑risk of toxicity </li>
            <li> Lithium + certain diuretics = ↑risk of toxicity </li>
            <li> SSRI + diuretics = hyponatremia </li>
            <li> SSRI + antiplatelet = bleeding </li>
            <li> SSRI + NSAIDs = bleeding </li>
            <li> SSRI + warfarin = bleeding </li>
            <li> SSRI + MAOI = serotonin syndrome </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{background: '#96D2B0'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>Antidepressant Safety Concerns</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ul>
            <li> Cognitive impairment Drug-drug interactions  </li>
            <li> Falls </li>
            <li> Fractures </li>
            <li> GI bleed </li>
            <li> Hyponatremia/SIADH </li>
            <li> QTc prolongation (escitalopram, citalopram, TCAs) </li>
            <li> Seizures (bupropion, TCAs) </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{background: '#96D2B0'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
            Antipsychotic Safety Concerns
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ul>
            <li> ↑ risk of EPS & TD Akathisia  </li>
            <li> Cognitive impairment Dyslipidemia </li>
            <li> Falls & fractures Hyperglycemia Mortality (NNH=87) QTc prolongation Stroke (NNH=53) Weight gain </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
        </Box>
      </Container>
    </ThemeProvider>
    
  );
}