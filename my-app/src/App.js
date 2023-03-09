import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, styled, ThemeProvider} from '@mui/material/styles';
import './views/Navigation/navigation.css';
import {Link} from "react-router-dom";
import {Dialog, DialogActions, DialogContent, DialogTitle, IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Button from "@mui/material/Button";
import {useEffect} from "react";

//Sourced from https://mui.com/material-ui/react-dialog/
const GreenCardDisclaimer = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));
//Sourced from https://mui.com/material-ui/react-dialog/
function GreenCardDisclaimerTitle(props) {
    const { children, onClose, ...other } = props;
    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}
const theme = createTheme();


export default function Green() {
    const [open, setOpen] = React.useState(false);
    useEffect(() => {
        const hasSeenNotice = localStorage.getItem('hasSeenNotice');
        if (hasSeenNotice) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }, []);
    const handleCloseDontShowAgain = () => {
        setOpen(false);
        localStorage.setItem('hasSeenNotice', 'true');
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="relative" style={{background: '#96D2B0'}}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Typography variant="h5" color="black" noWrap>
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
            <main>
                {/*Disclaimer pop-up*/}
                <div>
                    <GreenCardDisclaimer
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                    >
                        <GreenCardDisclaimerTitle id="customized-dialog-title" onClose={handleClose}>
                            The Green Card
                        </GreenCardDisclaimerTitle>
                        <DialogContent dividers>
                            <Typography gutterBottom>
                                WARNING: This card is meant to support rather than guide management decisions in older adults. Information is
                                not comprehensive and errors may occur. Drug doses and other management recommendations may not
                                reflect manufacturers’ recommendation but are based on clinical literature and expert opinion. Listed
                                maximum doses are meant for physically healthy older adults, and in general not recommended for frail
                                patients. The Green Card should not supersede clinical judgment and is not applicable in all circumstances
                            </Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus onClick={handleClose}>
                                I understand
                            </Button>
                            <Button autoFocus onClick={handleCloseDontShowAgain}>
                                I understand and Don't show again
                            </Button>
                        </DialogActions>
                    </GreenCardDisclaimer>
                </div>
                {/* Hero unit */}
                <Box
                    sx={{
                        pt: 8,
                        pb: 6,
                    }}
                >
                </Box>
                <Container>
                    {/* End hero unit */}
                    <Grid container spacing={4} direction={"column"} alignItems={"center"} justify={"center"}>
                            <Grid>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
                                >
                                    <CardContent sx={{ flexGrow: 1}}>
                                        <Typography component="h1" variant="h5">
                                            <a href='AntipsychoticsGuide'>Antipsychotics Guide</a>
                                        </Typography>
                                        <Typography>
                                            This link will take you to the Antipsychotics Guide.
                                        </Typography>
                                    </CardContent>
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography component="h1" variant="h5">
                                            <a href='CognitiveEnhancersGuide'>Cognitive Enhancers Guide</a>
                                        </Typography>
                                        <Typography>
                                            This link will take you to the Cognitive Enhancers Guide.
                                        </Typography>
                                    </CardContent>
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography component="h1" variant="h5">
                                            <a href='InsomniaManagement'>Insomnia Management</a>
                                        </Typography>
                                        <Typography>
                                            This link will take you to Insomnia Management.
                                        </Typography>
                                    </CardContent>
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography component="h1" variant="h5">
                                            <a href='AntidepressantClinicalGuide'>Antidepressant Clinical Guide</a>
                                        </Typography>
                                        <Typography>
                                            This link will take you to the Antidepressant Clinical Guide.
                                        </Typography>
                                    </CardContent>
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography component="h1" variant="h5">
                                            <a href='MoodStabilizersGuide'>Mood Stabilizers Guide</a>
                                        </Typography>
                                        <Typography>
                                            This link will take you to the Mood Stabilizers Guide.
                                        </Typography>
                                    </CardContent>
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography component="h1" variant="h5">
                                            <a href='DeliriumManagement'>Delirium Management</a>
                                        </Typography>
                                        <Typography>
                                            This link will take you to Delirium Management.
                                        </Typography>
                                    </CardContent>
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography component="h1" variant="h5">
                                            <a href='NeuropsychiatricSymptomsECT'>NPS Management & ECT & Psychoactive Meds</a>
                                        </Typography>
                                        <Typography>
                                            This link will take you to NPS Management & ECT & Psychoactive Meds.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            {/*<Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">*/}
            {/*    <Typography variant="h6" align="center" gutterBottom>*/}
            {/*        Footer*/}
            {/*    </Typography>*/}
            {/*    <Typography*/}
            {/*        variant="subtitle1"*/}
            {/*        align="center"*/}
            {/*        color="text.secondary"*/}
            {/*        component="p"*/}
            {/*    >*/}
            {/*        Something here to give the footer a purpose!*/}
            {/*    </Typography>*/}
            {/*    <Copyright />*/}
            {/*</Box>*/}
            {/* End footer */}
        </ThemeProvider>
    );
}




// // front-end, just test
// import React, { useState, useEffect } from 'react';
//
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
//
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { BrowserRouter, Routes ,Route }from "react-router-dom";
//
// const theme = createTheme();
//
// function App() {
//     const [users, setUsers] = useState([]);
//
//     // useEffect(() => {
//     //     fetch('http://localhost:8887/api/users')
//     //         .then(res => res.json())
//     //         .then(data => setUsers(data));
//     // }, []);
//
//     return (
//         <div>
//             {/*{users.map(user => (*/}
//             {/*    <div key={user.name}>*/}
//             {/*        <h2>{user.name}</h2>*/}
//             {/*        <p>{user.age}</p>*/}
//             {/*    </div>*/}
//             {/*))}*/}
//             <ThemeProvider theme={theme}>
//                 <Container component="main" maxWidth="xs">
//                     <CssBaseline />
//                     <Box component="grid"
//                         sx={{
//                             marginTop: 8,
//                             display: 'flex',
//                             flexDirection: 'column',
//                             alignItems: 'center',
//                         }}
//                     >
//                         <Typography component="h1" variant="h2">
//                             Navigation
//                         </Typography>
//                         <Typography component="h1" variant="h5">
//                             <a href='login'>Login</a>
//                         </Typography>
//                         <Typography component="h1" variant="h5">
//                             <a href='AntipsychoticsGuide'>Antipsychotics Guide</a>
//                         </Typography>
//                         <Typography component="h1" variant="h5">
//                             <a href='CognitiveEnhancersGuide'>Cognitive Enhancers Guide</a>
//                         </Typography>
//                         <Typography component="h1" variant="h5">
//                             <a href='InsomniaManagement'>Insomnia Management</a>
//                         </Typography>
//                         <Typography component="h1" variant="h5">
//                             <a href='AntidepressantClinicalGuide'>Antidepressant Clinical Guide</a>
//                         </Typography>
//                         <Typography component="h1" variant="h5">
//                             <a href='MoodStabilizersGuide'>Mood Stabilizers Guide</a>
//                         </Typography>
//                         <Typography component="h1" variant="h5">
//                             <a href='DeliriumManagement'>Delirium Management</a>
//                         </Typography>
//                         <Typography component="h1" variant="h5">
//                             <a href='NeuropsychiatricSymptomsECT'>Neuropsychiatric Symptoms ECT</a>
//                         </Typography>
//                     </Box>
//                 </Container>
//             </ThemeProvider>
//         </div>
//     );
// }
// export default App;
// /*
//
// // Citations:
// // Title: Sign-in template
// // Author: Michal Dudak and Samuel Sycamore
// // Date: Oct 27, 2022
// // Date accessed: Feb 01, 2023
// // Code version: 3f88e94
// // Availability: https://github.com/mui/material-ui/tree/v5.11.7/docs/data/material/getting-started/templates/sign-in
// import * as React from 'react';
// import ReactDOM from 'react-dom/client';
//
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
//
//
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { BrowserRouter, Routes ,Route }from "react-router-dom";
//
//
//
//
// const theme = createTheme();
//
//
// // This code is a function called SignIn() that renders a form with an username and password field, and a submit button. When the submit button is clicked, the handleSubmit() function is called which prevents the default action from occuring, creates a FormData object from the currentTarget of the event, and logs an object containing the username and password values to the console.
// export default function SignIn() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//
//           <Typography component="h1" variant="h2">
//             Antipsychotics Guide
//           </Typography>
//           <Typography component="h1" variant="h5">
//             <a href='Navigation'>Return to Navigation</a>
//           </Typography>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// }
//
// */