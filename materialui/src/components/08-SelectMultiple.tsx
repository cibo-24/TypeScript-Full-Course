import { Box, TextField, MenuItem } from '@mui/material';
import { useState } from 'react';

// seçeceğimiz çoklu selectleri bir array içerisinde tutmamız gerekmektedir.
const SelectMultiple = () => {
    const [country, setCountry] = useState<string[]>([])
    console.log(country);

    return (
        <Box width="250px">
            <TextField
                // çoklu seçim için multiple aktif edildi
                SelectProps={{
                    multiple: true
                }}
                label="Ülke seçiniz"
                select
                fullWidth
                value={country}
                onChange={(e) => setCountry(typeof e.target.value === "string" ? e.target.value.split(","): e.target.value)}>
                <MenuItem value="tr">Türkiye</MenuItem>
                <MenuItem value="de">Almanya</MenuItem>
                <MenuItem value="usa">Amerika</MenuItem>
                <MenuItem value="fr">Fransa</MenuItem>
            </TextField>
        </Box>
    )
}

export default SelectMultiple