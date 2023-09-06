import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';

import Slider from '@mui/material/Slider';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

var beautify = require("json-beautify");


export default function ColorPicker() {    

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
      
    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    function copyText() {
        navigator.clipboard.writeText(ip);
        setCopySnackBarOpen(true);
    }

    function closeSnackbar() {
        setCopySnackBarOpen(false);
    }

    function handleUpdate(text) {
        
    }

    function handleChange(newVal, updateFunc) {
        updateFunc(newVal)
    }

    function randomizeColors() {
        setR(Math.floor(Math.random() * 255));
        setG(Math.floor(Math.random() * 255));
        setB(Math.floor(Math.random() * 255));
    }

    const [ip, setIP] = React.useState('0.0.0.0');
    const [copySnackBarOpen, setCopySnackBarOpen] = useState(false);
    const [r, setR] = useState(0);
    const [g, setG] = useState(0);
    const [b, setB] = useState(0);    

    return (
        <div>
            <Card sx={{ minWidth: 600, mb:2 }}>
                <CardContent>
                    <Typography  variant="h6" color="text.primary" gutterBottom>
                        Color Picker
                    </Typography>

                    <TextField value={'rgb('+r+','+g+','+b+')'} variant="filled" label="Color" sx={{minWidth: '500px',}}/> 
                    

                    <Button onClick={() => {copyText()}}>
                        <Box>
                            <ContentCopyIcon label="Copy" sx={{ fontSize: 20, mt:1 }}/>
                        </Box>
                    </Button>

                    <br/>
                    <TextField value={rgbToHex(r,g,b)} variant="filled" label="Color" sx={{minWidth: '500px',}}/> 

                    <Button onClick={() => {copyText()}}>
                        <Box>
                            <ContentCopyIcon label="Copy" sx={{ fontSize: 20, mt:1 }}/>
                        </Box>
                    </Button>
                    
                    
                    <Slider sx={{color:"red"}} value={r} onChange={(event) => handleChange(event.target.value, setR)} min={0} max={255} valueLabelDisplay="auto" />
                    <Slider sx={{color:"green"}} value={g} onChange={(event) => handleChange(event.target.value, setG)} min={0} max={255} valueLabelDisplay="auto" />
                    <Slider sx={{color:"blue"}} value={b} onChange={(event) => handleChange(event.target.value, setB)} min={0} max={255} valueLabelDisplay="auto" />

                    <Card sx={{backgroundColor:rgbToHex(r,g,b), width:500, height:50}}>-

                    </Card>

                    <Button onClick={randomizeColors}>
                        Randomize
                    </Button>
                </CardContent>                
            </Card>

            <Snackbar anchorOrigin={{horizontal: 'center', vertical: 'bottom'}} 
            open={copySnackBarOpen} onClose={closeSnackbar} autoHideDuration={1000}>
                <Alert severity="success" >
                    Copied!
                </Alert> 
            </Snackbar>

        </div>
    )
}