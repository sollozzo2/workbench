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

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import SmartInput from './SmartInput.js';

var base64 = require('base-64');
var utf8 = require('utf8');

function encode(text) {
    try {
        var bytes = utf8.encode(text);
        var encoded = base64.encode(bytes);
        return encoded;
    } catch (e) {
        return e;
    }
}

function decode(encoded) {
    try {
        var bytes = base64.decode(encoded);
        var text = utf8.decode(bytes);
        return text;
    } catch (e) {
        return "Error: Invalid Encoding";
    }
}

const functionMapping = {'encode':encode, 'decode':decode}

export default function Encoding() {
    const [text, setText] = useState("");
    const [result, setResult] = useState("");
    const [copySnackBarOpen, setCopySnackBarOpen] = useState(false);
    const [currentChoice, setCurrentChoice] = useState("base64");
    const [encodeOrDecode, setEncodeOrDecode] = useState("encode");

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            updateResult();
        }
    }

    function textChange(e) {
        setText(e.target.value);
    }
    
    function updateResult() {
        setResult(functionMapping[encodeOrDecode](text));
    }

    function copyText() {
        navigator.clipboard.writeText(result);
        setCopySnackBarOpen(true);
    }

    function closeSnackbar() {
        setCopySnackBarOpen(false);
    }

    function handleChange(e) {
        setCurrentChoice(e.target.value);
    }

    function toggleEncode(e) {
        setEncodeOrDecode(e.target.value);
    }


    return (
        <div>
            <Card sx={{ minWidth: 600, mb:2 }}>
                <CardContent>
                    <Typography  variant="h6" color="text.primary" gutterBottom>
                        Base64 En/Decoding
                    </Typography>

                    <FormControl>
                        <RadioGroup 
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                value={currentChoice}
                                name="radio-buttons-group"
                                onChange={handleChange}
                            >
                            <FormControlLabel value="base64" control={<Radio />} label="base64" />
                            <FormControlLabel value="base32" control={<Radio disabled />} label="base32 (in development)" />
                            <FormControlLabel value="base85" control={<Radio disabled />} label="base85 (in development)" />                           
                        </RadioGroup>
                    </FormControl>

                    <br/>

                    <FormControl>
                        <RadioGroup 
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                value={encodeOrDecode}
                                name="radio-buttons-group"
                                onChange={toggleEncode}
                            >
                            <FormControlLabel value="encode" control={<Radio />} label="Encode" />
                            <FormControlLabel value="decode" control={<Radio />} label="Decode" />                          
                        </RadioGroup>
                    </FormControl>

                    <br/>

                    <TextField onChange={textChange} onKeyDown={handleKeyDown} inputProps={{ maxLength: 1000 }} variant="filled" 
                    label="Input" name="myInput" sx={{minWidth: '500px', mt: 2, width:'100%'}} multiline/>
                    <CardActions sx={{ alignContent:'center' }}>
                        <Button onClick={updateResult} sx={{width:'100%', mt:1, backgroundColor:encodeOrDecode==='encode'?'pink':'black'}} 
                        variant="contained">{encodeOrDecode}</Button>
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
