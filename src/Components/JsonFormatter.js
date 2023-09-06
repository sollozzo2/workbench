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

import { TextareaAutosize } from '@mui/base/TextareaAutosize';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

var beautify = require("json-beautify");


export default function JsonFormatter() {    

    function parser(jsonString) {
        
        try {
            console.log(jsonString)
            var jsonObj = JSON.parse(jsonString);
            return beautify(jsonObj, null, 2);
        } catch (e) {
            return e.toString();
        }
    }

    function handleUpdate(text) {
        setInput(text);
        setOutput(parser(text));
        console.log("output is:", parser(input))
    }

    function copyText() {
        navigator.clipboard.writeText(output);
    }

    const [input, setInput] = React.useState('{"key":"value"}');
    const [output, setOutput] = React.useState(parser('{"key":"value"}'));

    return (
        <div>
            <Card sx={{ minWidth: 600, mb:2 }}>
                <CardContent>
                    <Typography  variant="h6" color="text.primary" gutterBottom>
                        JSON Formatter
                    </Typography>

                    <TextareaAutosize  multiline onChange={(event) => handleUpdate(event.target.value)}
                    sx={{minWidth: "320px"}}
                    minRows="30" minCols="40"> 
                        {input}
                    </TextareaAutosize >

                    <TextareaAutosize multiline value={output}
                    sx={{width: "320px"}}
                    minRows="30" minCols="40">
                    </TextareaAutosize>

                    <Button onClick={() => {copyText()}}>
                        <Box>
                            <ContentCopyIcon label="Copy" sx={{ fontSize: 20, mt:1 }}/>
                        </Box>
                    </Button>

                </CardContent>
            </Card>
        </div>
    )
}