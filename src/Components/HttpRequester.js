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

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import SmartInput from './SmartInput.js';
import InfoButton from './InfoButton.js'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import Checkbox from '@mui/material/Checkbox';

import isURL from 'validator/lib/isURL';

import HttpRequesterTable from './HttpRequesterTable';

var beautify = require("json-beautify");

const requestTypes = ["Get", "Post", "Put", "Patch", "Delete", "Options"];
const requestMapping = {"Get":axios.get, "Post":axios.post, "Put":axios.put, 
                        "Patch":axios.patch, "Delete":axios.delete, "Options":axios.options};

export default function HttpRequester() {    

    function copyText() {
        navigator.clipboard.writeText(ip);
        setCopySnackBarOpen(true);
    }

    function closeSnackbar() {
        setCopySnackBarOpen(false);
    }

    function sendRequest() {
        console.log(requestMapping[requestType])
        requestMapping[requestType](url).then((response) => {
            setResp(response.data);
        }).catch(function (error) {
            console.log(error);
            setResp(error);
        })
    }

    function textChange(text) {
        setUrl(text);
        console.log(text)
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            //updateResult();
        }
    }

    function updateChoices(newType) {
        console.log(newType);
        setRequestType(newType);
    }

    const [url, setUrl] = React.useState('http://0.0.0.0');
    const [requestType, setRequestType] = React.useState(requestTypes[0]);
    
    const [resp, setResp] = React.useState('0.0.0.0');
    const [ip, setIP] = React.useState('0.0.0.0');
    const [copySnackBarOpen, setCopySnackBarOpen] = useState(false);

    return (
        <div>
            <Card sx={{ minWidth: 600, mb:2 }}>
                <CardContent>
                    <Typography  variant="h6" color="text.primary" gutterBottom>
                        HTTP Request Maker
                    </Typography>

                    <Tooltip title="Send an HTTP Request of your choice with this tool.">
                    <IconButton>
                        <InfoOutlinedIcon />
                    </IconButton>
                    </Tooltip>
                    <br/>

                    <TextField onChange={(e) => textChange(e.target.value)} onKeyDown={handleKeyDown} inputProps={{ maxLength: 1000 }} 
                    variant="filled" defaultValue='http://' label="HTTP URL" name="HTTP URL" sx={{minWidth: '500px', mt: 2}}
                    error={!isURL(url)} />

                    <SmartInput sx={{width:500}} options={requestTypes} updateChoices={updateChoices} textLabel="Request Type"/>
                    
                    <FormGroup row>
                        <FormControlLabel control={<Checkbox />} label="Add HTTP Headers" />
                        <FormControlLabel control={<Checkbox />} label="Add Body" />
                    </FormGroup>
                    
                    <Box>
                        <Button onClick={sendRequest} disabled={!isURL(url)} variant="contained" sx={{mt:1, mb:1, width:'500px'}}>
                            Send Request
                        </Button>
                        
                    </Box>

                    <TextField inputProps={{ maxLength: 1000 }} variant="filled" 
                    value={resp} label="Response" name="Response" sx={{minWidth: '500px', mt: 2}} multiline/>

                    <Typography  variant="h6" color="text.primary" gutterBottom>
                        Headers
                    </Typography>

                    <Card sx={{backgroundColor:'green', height:50, width:50}}/>
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