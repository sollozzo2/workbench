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

import {v1, v3, v4, v5} from 'uuid';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


export default function UUID() {
    const [copySnackBarOpen, setCopySnackBarOpen] = useState(false);
    const [currentVersion, setCurrentVersion] = useState("v4");
    const [currentUuid, setCurrentUuid] = useState("");

    const versionMapping = {'v1': v1, 'v4': v4};

    function closeSnackbar() {
        setCopySnackBarOpen(false);
    }

    function generate() {
        setCurrentUuid(versionMapping[currentVersion]());
    }

    function handleVersionChange(e) {
        setCurrentVersion(e.target.value);
    }

    function copyText() {
        navigator.clipboard.writeText(currentUuid);
        setCopySnackBarOpen(true);
    }

    return (
        <div>
            <Card sx={{ minWidth: 600, mb:2 }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        Generate UUID
                    </Typography>

                        <FormControl>
                        <FormLabel id="Version">UUID Version</FormLabel>
                            <RadioGroup 
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                value={currentVersion}
                                name="radio-buttons-group"
                                onChange={handleVersionChange}
                            >
                                <FormControlLabel value="v1" control={<Radio />} label="v1" />
                                <FormControlLabel value="v4" control={<Radio />} label="v4" />
                            </RadioGroup>
                        </FormControl>

                        
                        <CardActions sx={{ alignContent:'center' }}>
                            <Button onClick={generate} sx={{width:'100%', mt:1}} variant="contained">Generate</Button>
                        </CardActions>


                        <Stack direction="row" sx={{mt:2}}>
                            <TextField  label="Output" variant="filled"  multiline sx={{ width:'100%' }} value={currentUuid} />
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
