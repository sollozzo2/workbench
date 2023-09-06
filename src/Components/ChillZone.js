import React, { useState, useEffect } from 'react';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import ChillPic from './Assets/undraw_reading_time_re_phf7.svg'

import './CSS/Corndog.css';


export default function CaseConverter() {
    const [chillActivated, setChillActivated] = React.useState(false);

    const chillGraphics = () => {
        return (
                    <div id="snow"/>
        )
    }

    if (chillActivated) {
        return (
            <chillGraphics/>
        )
    }
    if (!chillActivated)
    return (
        <div>
            <Card sx={{ minWidth: 600, mb:2, maxWidth: 600 }}>
                <CardContent>
                    <Typography  variant="h6" color="text.primary" gutterBottom>
                        Welcome to the Chill Zone
                    </Typography>

                    <img src={ChillPic} width={600} alt="chillpic.svg" />

                    <br/>

                    <Button onClick={() => setChillActivated(!chillActivated)} sx={{ mt:1, width:'100%'}} 
                        variant="contained">activate chill mode</Button>

                </CardContent>
            </Card>
        </div>
    )
}