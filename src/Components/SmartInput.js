import TextField from '@mui/material/TextField';
import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';

function SmartInput(props) {

	//pass in prop to update state of parent

	const defaultProps = {
	    options: ['option1', 'option2', "option3"],
	    getOptionLabel: (option) => option,
	  };

	return (
		<Autocomplete
		onChange={(event, value) => props.updateChoices(value)}
		{...props}
		defaultValue={props.options[0]}
		id="auto-complete"
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} label={props.textLabel} variant="filled" />
        )}
      />


	)
}

export default SmartInput