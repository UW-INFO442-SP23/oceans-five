import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// props: name (string), options (list)
export default function Filter (props) {

    const [criteria, setCriteria] = React.useState([]);

    const handleChange = (event) => {
        setCriteria(event.target.value);
    };

    let optionsList = props.options.map((option) => {
        <MenuItem value={option}>{option}</MenuItem>
    });

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">{props.name}</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={props.name}
                    label={props.name}
                    onChange={handleChange}
                >
                    {optionsList}
                </Select>
            </FormControl>
        </div>
    )
};