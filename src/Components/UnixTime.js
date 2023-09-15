import React, { useState, useEffect } from 'react';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';

import SmartInput from './SmartInput.js';

import Checkbox from '@mui/material/Checkbox';



export default function UnixTime() {

    const curDate = new Date();

    const [unixTime, setUnixTime] = React.useState(1693675222);
    const [date, setDate] = React.useState(curDate);
    const [unixToDate, setUnixToDate] = React.useState(true);

    const [year, setYear] = React.useState(date.getFullYear());
    const [month, setMonth] = React.useState(curDate.getMonth());
    const [day, setDay] = React.useState(curDate.getDate());
    const [hours, setHours] = React.useState(curDate.getHours());
    const [minutes, setMinutes] = React.useState(curDate.getMinutes());
    const [seconds, setSeconds] = React.useState(curDate.getSeconds());

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            // updateResult();
        }
    }

    const textChange = (event) => {
        setUnixTime(parseInt(event.target.value));
    }

    function convertTimestamptoTime(t) {
        //time must be a number
        let unixTimestamp = t;
        // Convert to milliseconds and
        // then create a new Date object
        let dateObj = new Date(unixTimestamp * 1000);
        let utcString = dateObj.toString();
    
        let time = utcString;
        // setDate(dateObj);
        return time;
    }

    function dataParamChange(event, setFunc) {
        setFunc(event.target.value);
    }

    function handleConvert() {
        // handle case where input is a unix timestamp and output is date
        if (unixToDate) {
            var curDate = new Date(unixTime);
            console.log(curDate.toString());
            setYear(curDate.getFullYear());
            setMonth(curDate.getMonth());
            setDay(curDate.getDate());
            setHours(curDate.getHours());
            setMinutes(curDate.getMinutes());
            setSeconds(curDate.getSeconds());
        } else {
            // handle case where input is date and output is unix time
            var curDate = new Date();
            curDate.setYear(year);
            curDate.setMonth(month-1);
            curDate.setDate(day);
            curDate.setHours(hours);
            curDate.setMinutes(minutes);
            curDate.setSeconds(seconds);
            curDate.setMilliseconds(0);
            console.log(year, month, day, hours, minutes, seconds, curDate.toString(), curDate.getTime())
            setUnixTime(curDate.getTime())
        }
    }

    return (
        <div>
            <Card sx={{ minWidth: 600, mb:2 }}>
                <CardContent>
                    <Typography  variant="h6" color="text.primary" gutterBottom>
                        Unix Time Converter
                    </Typography> 

                    {unixToDate && <div>
                    <TextField defaultValue={unixTime} label="Unix Number" type="number" onChange={textChange} onKeyDown={handleKeyDown}  variant="filled" 
                    inputProps={{ maxLength: 11 }} sx={{minWidth: '600px', mt: 2}}/>  </div> }

                    <br/>

                    {!unixToDate &&
                        <div sx={{mt: 2}}>
                            <TextField label="Year" type="number" id="setyear"
                            variant="filled" defaultValue={year} onChange={(event) => dataParamChange(event, setYear)}
                            sx={{ mt: 2, maxWidth:100}} />
                            <TextField label="Month" type="number"
                            variant="filled" defaultValue={month} onChange={(event) => dataParamChange(event, setMonth)}
                            sx={{ mt: 2, maxWidth:70}} />
                            <TextField label="Day" type="number" 
                            variant="filled" defaultValue={day} onChange={(event) => dataParamChange(event, setDay)}
                            sx={{ mt: 2, maxWidth:70}} />
                            <TextField label="Hour" type="number" 
                            variant="filled" defaultValue={hours} onChange={(event) => dataParamChange(event, setHours)}
                            sx={{ mt: 2, maxWidth:70}} />
                            <TextField label="Minute" type="number" 
                            variant="filled" defaultValue={minutes} onChange={(event) => dataParamChange(event, setMinutes)}
                            sx={{ mt: 2, maxWidth:70}} />
                            <TextField label="Seconds" type="number" 
                            variant="filled" defaultValue={seconds} onChange={(event) => dataParamChange(event, setSeconds)}
                            sx={{ mt: 2, maxWidth:70}} />

                    </div> }


                    <Button variant="contained" onClick={handleConvert} sx={{ mb:1, width:'600px'}}>
                        Convert
                    </Button>

                    <br/>

                    <Button variant="contained" onClick={() => {setUnixToDate(!unixToDate)}} sx={{ mb:1, width:'600px'}}>
                        Switch
                    </Button>

                    <br/>

                    <Button variant="contained" onClick={() => {setUnixToDate(!unixToDate)}} sx={{ mb:1, width:'600px'}}>
                        Include Milliseconds
                    </Button>

                    <br/>

                    
                    <TextField value={(new Date(unixTime).toString())}  onChange={textChange}
                     onKeyDown={handleKeyDown}  variant="filled" 
                    inputProps={{ maxLength: 11 }} sx={{minWidth: '600px', mt: 2}} />

<br/>

                    {unixToDate && <div>
                        <TextField label="Year" type="number" value={new Date(unixTime).getFullYear()}
                        variant="filled" inputProps={{ maxLength: 4 }}
                        sx={{ mt: 2, maxWidth:100}} />
                        <TextField label="Month" type="number" value={new Date(unixTime).getMonth()+1}
                        variant="filled" inputProps={{ maxLength: 2 }}
                        sx={{ mt: 2, maxWidth:70}} />
                        <TextField label="Day" type="number" value={new Date(unixTime).getDate()}
                        variant="filled" inputProps={{ maxLength: 2 }}
                        sx={{ mt: 2, maxWidth:70}} />
                        <TextField label="Hour" type="number" value={new Date(unixTime).getHours()}
                        variant="filled" inputProps={{ maxLength: 2 }}
                        sx={{ mt: 2, maxWidth:70}} />
                        <TextField label="Minute" type="number" value={new Date(unixTime).getMinutes()}
                        variant="filled" inputProps={{ maxLength: 2 }}
                        sx={{ mt: 2, maxWidth:70}} />
                        <TextField label="Seconds" type="number" value={new Date(unixTime).getSeconds()}
                        variant="filled" inputProps={{ maxLength: 2 }}
                        sx={{ mt: 2, maxWidth:70}} />
                    </div>}

                    {!unixToDate && <TextField value={unixTime} label="Unix Number" type="number" onChange={textChange} onKeyDown={handleKeyDown}  variant="filled" 
                    inputProps={{ maxLength: 11 }} sx={{minWidth: '600px', mt: 2}} />}

                </CardContent>
            </Card>
        </div>
    )
}