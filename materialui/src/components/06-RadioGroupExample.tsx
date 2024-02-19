import { FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText, Button } from '@mui/material';
import { useState } from 'react';

const RadioGroupExample = () => {
    const [value, setValue] = useState("");
    const [helperText, setHelpertext] = useState("");
    const [error, setError] = useState(false);

    // RadioGroup'un seçilen değerleri okuması için e.target.value
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(value === "canboz") {
            setHelpertext("Yanlış Cevap");
            setError(true);
        }
        else if (value === "prototürk") {
            setHelpertext("Bravo Doğru Cevap");
            setError(false);
        }
        else {
            setHelpertext("Lütfen Seçim Yapınız");
            setError(true);
        }
    }


  return (
    <form onSubmit={handleSubmit}>
        <FormControl error = {error}>
            <FormLabel>En kapsamlı Front-end eğitimini veren eğitmen kimdir ?</FormLabel>
            <RadioGroup onChange={handleRadioChange}>
                <FormControlLabel label="Can Boz" value="canboz" control={<Radio />} />
                <FormControlLabel label="Prototürk" value="prototürk"  control={<Radio color='warning'/>} />
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
            <Button type='submit' variant='outlined'>Gönder</Button>
        </FormControl>
    </form>
  )
}

export default RadioGroupExample