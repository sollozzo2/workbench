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

function upper(text) {
    return text.toUpperCase();
}

function lower(text) {
    return text.toLowerCase();
}

function alternate(text) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
        if (i % 2 == 0) {
            result += text[i].toLowerCase();
        }
        else {
            result += text[i].toUpperCase()
        }
    }
    return result;
}

function sentence(text) {
    String.prototype.replaceAt = function(index, replacement) {
        return this.substring(0, index) + replacement + this.substring(index + replacement.length);
    }
    //TODO: do this
    var lst = text.split(' ');
    for (var i = 0; i < lst.length; i++) {
        if (lst[i].length > 0) {
            lst[i] = lst[i].replaceAt(0, lst[i][0].toUpperCase());
        }
    }
    return lst.join(' ');
}

function title(text) {
    String.prototype.replaceAt = function(index, replacement) {
        return this.substring(0, index) + replacement + this.substring(index + replacement.length);
    }
    var lst = text.split(' ');
    for (var i = 0; i < lst.length; i++) {
        if (lst[i].length > 0) {
            lst[i] = lst[i].replaceAt(0, lst[i][0].toUpperCase());
        }
    }
    return lst.join(' ');
}

function inverse(text) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
        if (text[i] == text[i].toUpperCase()) {
            result += text[i].toLowerCase();
        }
        else if (text[i] == text[i].toLowerCase()){
            result += text[i].toUpperCase()
        }
    }
    return result;
}

export default function CaseConverter() {
    const [text, setText] = useState("");
    const [result, setResult] = useState("");
    const [copySnackBarOpen, setCopySnackBarOpen] = useState(false);
    const [currentChoice, setCurrentChoice] = useState("upper");

    const functionMapping = {'lower':lower, 'upper':upper, 'alternating':alternate, 
    'sentence':sentence, 'title':title, 'inverse':inverse}

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            updateResult();
        }
    }

    function textChange(e) {
        setText(e.target.value);
    }
    
    function updateResult() {
        setResult(functionMapping[currentChoice](text));
    }

    function copyText() {
        navigator.clipboard.writeText(result);
        setCopySnackBarOpen(true);
    }

    function closeSnackbar() {
        setCopySnackBarOpen(false);
    }

    function handleChange(e) {
        setCurrentChoice(e.target.value)
    }


    return (
        <div>
            <Card sx={{ minWidth: 600, mb:2 }}>
                <CardContent>
                    <Typography  variant="h6" color="text.primary" gutterBottom>
                        Case Converter
                    </Typography>

                    <FormControl>
                        <RadioGroup 
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                value={currentChoice}
                                name="radio-buttons-group"
                                onChange={handleChange}
                            >
                            <FormControlLabel value="upper" control={<Radio />} label="UPPER" />
                            <FormControlLabel value="lower" control={<Radio />} label="lower" />
                            <FormControlLabel value="alternating" control={<Radio />} label="AlTeRnAtInG" />
                            <FormControlLabel value="sentence" control={<Radio />} label="Sentence" />
                            <FormControlLabel value="title" control={<Radio />} label="Title" />
                            <FormControlLabel value="inverse" control={<Radio />} label="iNVERSE" />                            
                        </RadioGroup>
                    </FormControl>

                    <br/>

                    <TextField onChange={textChange} onKeyDown={handleKeyDown} inputProps={{ maxLength: 1000 }} variant="filled" 
                    label="Input" name="myInput" sx={{minWidth: '500px', mt: 2, width:'100%'}} multiline/>
                    <CardActions sx={{ alignContent:'center' }}>
                        <Button onClick={updateResult} sx={{width:'100%', mt:1}} variant="contained">Convert</Button>
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
