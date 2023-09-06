import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

import FeatureList from './Components/FeatureList.js';
import Hashes from './Components/Hashes.js';
import FileUpload from './Components/FileUpload.js';
import UUID from './Components/UUID.js';
import CaseConverter from './Components/CaseConverter.js'
import Encoding from './Components/Encoding.js'
import ChillZone from './Components/ChillZone.js'
import JsonFormatter from './Components/JsonFormatter.js'
import MyIP from './Components/MyIP.js'
import ColorPicker from './Components/ColorPicker.js'
import HttpRequester from './Components/HttpRequester.js'
import UnixTime from './Components/UnixTime.js'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import React, { useState, useEffect } from 'react';

import './Components/CSS/Corndog.css';



function App() {

  const [feature, setFeature] = useState(0);
  //{ this.state.loading == false && <Overlay /> }

chillGraphics

  return ( 
    <div className='App-header'>
    <Grid container
    sx={{height:'100%'}}
    direction="column"
    alignItems="center"
    justifyContent="flex-start"
    >
      
        <header className="App-header">

        <Grid container  direction="row" 
    alignItems="center"
    justifyContent="center"
    
    >
            <FeatureList setFeature={setFeature} sx={{alignContent:'top', verticalAlign:'top', paddingTop: '40px',}}/>
            {feature === 0 && < Hashes sx={{alignContent:'top', verticalAlign:'top', paddingTop: '40px',}}/>}
            {feature === 1 && <UUID/>}
            {feature === 2 && <FileUpload/>}
            {feature === 3 && <CaseConverter/>}
            {feature === 4 && <ChillZone/>}
            {feature === 5 && <Encoding/>}
            {feature === 6 && <JsonFormatter/>}
            {feature === 7 && <MyIP/>}
            {feature === 8 && <ColorPicker/>}
            {feature === 9 && <HttpRequester/>}
            {feature === 10 && <UnixTime/>}
          </Grid>
        </header>
    </Grid>
    </div>
  );
}

export default App;
