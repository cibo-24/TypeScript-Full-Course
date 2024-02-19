import { Box, TextField, MenuItem } from '@mui/material';
import { useState } from 'react';

const SelectLesson = () => {

    const [country, setCountry] = useState("");
    console.log(country);
    

    return (
        <Box width="250px">
            <TextField 
            select 
            label="Ülke seçiniz" 
            fullWidth 
            value={country} 
            onChange={(e) => setCountry(e.target.value)}>
                <MenuItem value="tr">Türkiye</MenuItem>
                <MenuItem value="de">Almanya</MenuItem>
                <MenuItem value="usa">Amerika</MenuItem>
                <MenuItem value="fr">Fransa</MenuItem>
            </TextField>
            
        </Box>
    )
}

export default SelectLesson