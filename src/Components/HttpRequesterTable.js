import React, { useState, useEffect } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper';

import TextField from '@mui/material/TextField';


export default function HttpRequesterTable(props) {
    return (
        <TableContainer component={Paper} sx={{ maxWidth: 500 }}>
            <Table sx={{ maxWidth: 500 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Key</TableCell>
                        <TableCell>Value</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <TextField inputProps={{ maxLength: 1000 }} variant="filled"
                                label="Key" name="Key" sx={{ width: '100%' }}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField inputProps={{ maxLength: 1000 }} variant="filled"
                                label="Value" name="Value" sx={{ width: '100%' }}
                            />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}