import React, { useState, useEffect } from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

export default function InfoButton(props, {children}) {
    return (
        <Tooltip title={props.title}>
          <IconButton>
            {children}
          </IconButton>
        </Tooltip>
      );
}