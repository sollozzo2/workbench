import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

import Config from '../Config.json';


export default function FileUpload() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);


  
    

  useEffect(() => {
    axios.get(Config.getDataUrl).then((response) => {
      setMessages(response.data);
      console.log(response.data);
    }).catch(function (error) {
      console.log(error);
    })
  }, [])

  function textChange(e) {
    //setText(e);
    setText(e.target.value);
    console.log(e.target.value, text.length);
  }

  function handleFileSubmit(e) {
    const form = e.target;   
    console.log(selectedFile);

    var bodyFormData = new FormData();
    bodyFormData.append('myfile', selectedFile[0]);

    axios.post(Config.uploadUrl, bodyFormData).then((response) => {
      console.log(response.status);
      axios.get(Config.getDataUrl).then((response) => {
        setMessages(response.data);
      }).catch(function (error) {
        console.log(error);
      })
    }).catch(function (error) {
      console.log(error);
      console.log("failed to upload file");
    })
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    

    axios.post(Config.insertUrl, {"$content":formJson.myInput}).then((response) => {
      axios.get(Config.getDataUrl).then((response) => {
        setMessages(response.data);
      }).catch(function (error) {
        console.log(error);
      })
    }).catch(function (error) {
      console.log(error);
      console.log("failed to insert");
    })
  }

  return (
    <Card sx={{ minWidth: 600, mb:2 }}>
        
        <Stack spacing={0.5} alignItems="center">
            <Box>
            <Typography sx={{mt:1}} variant="h6" color="text.primary" gutterBottom>
                Temporary File/Message Upload
            </Typography>
            </Box>
            <form method="post" onSubmit={handleSubmit}>
                <label>
                    <Box > 
                    <TextField onChange={textChange} inputProps={{ maxLength: 12 }} variant="filled" 
                    multiline label="Message" name="myInput" sx={{minWidth: '500px', mt: 2,}}/> 
                    </Box>
                </label>
                <Button disabled={!text.length>0} type="submit" variant="contained" sx={{mt:1, mb:1, width:'500px'}}>
                    Post
                </Button>
            </form>

            <form enctype="multipart/form-data"  >
                
                <Button disabled={!selectedFile} variant="contained" onClick={handleFileSubmit} sx={{ mb:1, width:'500px'}}>

                    upload file
                </Button> <br/>
                <input id="fileupload" name="myfile" type="file" onChange={(e) => 
                setSelectedFile(e.target.files)}/>
            </form>
            
            <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center">
            {messages.map(function(object, i){
            if (object.content)
                    return (
                    <Card variant="outlined" sx={{width: '500px', backgroundColor:object["color"]||'#c3e5a7', margin:0.2}} >
                     
                        <Typography sx={{margin:1}} variant="subtitle1">
                            {object.content}
                        </Typography>
                    </Card>
                    )
                    return (
                    <Card variant="outlined" sx={{width: '500px', backgroundColor:object["color"]||'#c3e5a7', margin:0.2}} >
                      
                            <Typography sx={{margin:1}} variant="subtitle1">
                                <Link href={object.file}>{object.file.split('/')[object.file.split('/').length-1]}</Link>
                            </Typography>
                
                        </Card>
                    )
                })}
                </Grid>
            </Stack>
        </Card>
  )
}