import React, { useState, useEffect } from 'react';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import SmartInput from './SmartInput.js';

var md5 = require('md5');
var sha1 = require('sha1');
var sha2 = require('sha256');

const algoMap = {'MD5':md5, 'SHA256':sha2, "SHA128":sha1}

export default function Hashes() {
    const [choice, setChoice] = useState("MD5");
    const [text, setText] = useState("");
    const [result, setResult] = useState("");
    const [copySnackBarOpen, setCopySnackBarOpen] = useState(false);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            updateResult();
        }
    }

    function updateChoices(newChoice) {
        setChoice(newChoice);
        console.log(newChoice);
    }

    function textChange(e) {
        setText(e.target.value);
    }
    
    function updateResult() {
        setResult(algoMap[choice](text));
    }

    function copyText() {
        navigator.clipboard.writeText(result);
        setCopySnackBarOpen(true);
    }

    function closeSnackbar() {
        setCopySnackBarOpen(false);
    }

    

    return (
        <div>
            <Card sx={{ minWidth: 600, mb:2 }}>
                <CardContent>
                    <Typography  variant="h6" color="text.primary" gutterBottom>
                        Hashes
                    </Typography>
                    <SmartInput options={['MD5', 'SHA256', "SHA128"]} updateChoices={updateChoices} textLabel="Hash Type"/>
                    <TextField onChange={textChange} onKeyDown={handleKeyDown} inputProps={{ maxLength: 1000 }} variant="filled" 
                    label="Input" name="myInput" sx={{minWidth: '600px', mt: 2}} multiline/>
                    <CardActions sx={{ alignContent:'center' }}>
                        <Button onClick={updateResult} sx={{width:'100%', mt:1}} variant="contained">Hash</Button>
                    </CardActions>
                    <Stack direction="row" sx={{mt:2}}>     
                        <TextField  label="Output" variant="filled"  multiline sx={{ width:'100%' }} value={result} />
                        <Button onClick={() => {copyText()}}>
                            <Box>
                                <ContentCopyIcon label="Copy" sx={{ fontSize: 20, mt:1 }}/>
                            </Box>
                        </Button>
                    </Stack>
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
