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
import Config from '../Config.json';

var beautify = require("json-beautify");


export default function MyIP() {    

    function copyText() {
        navigator.clipboard.writeText(ip);
        setCopySnackBarOpen(true);
    }

    function closeSnackbar() {
        setCopySnackBarOpen(false);
    }

    useEffect(() => {
        axios.get(Config.ipUrl).then((response) => {
          setIP(response.data);
          console.log(response.data);
        }).catch(function (error) {
          console.log(error);
        })
      }, [])

    function handleUpdate(text) {
        
    }

    const [ip, setIP] = React.useState('0.0.0.0');
    const [copySnackBarOpen, setCopySnackBarOpen] = useState(false);

    return (
        <div>
            <Card sx={{ minWidth: 600, mb:2 }}>
                <CardContent>
                    <Typography  variant="h6" color="text.primary" gutterBottom>
                        My IP
                    </Typography>

                    <TextField value={ip} variant="filled" label="Source IP" sx={{minWidth: '500px',}}/> 

                    <Button onClick={() => {copyText()}}>
                        <Box>
                            <ContentCopyIcon label="Copy" sx={{ fontSize: 20, mt:1 }}/>
                        </Box>
                    </Button>

                </CardContent>
            
                <CardContent>
                    <Button variant="contained" sx={{mt:1, mb:1, width:'500px'}}>
                        Refresh
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