import { Checkbox, Box, FormControl, FormGroup, FormLabel, FormControlLabel } from '@mui/material'
import { useState } from 'react'


const CheckBoxMultiple = () => {
    const [isAccept, setIsAccept] = useState(false);
    const [knowlegde, setKnowLegde] = useState<string[]>([]);
    console.log(knowlegde);
    

    const handleKnowlegdeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // index sırasını buluyoruz.
        const index = knowlegde.indexOf(event.target.value);
        if(index === -1){
            setKnowLegde([...knowlegde, event.target.value])
        }else {
            // filtreleme koşulu doğru ise bu arraye döndürülür.
            setKnowLegde(knowlegde.filter((item) => item !== event.target.value));
        }
    }

    return (
        <Box>
            <FormControl>
                <FormLabel>Front-End Developer</FormLabel>
                <FormGroup row>
                    <FormControlLabel
                        value="react"
                        control={
                            <Checkbox
                                checked={knowlegde.includes("react")}
                                onChange={handleKnowlegdeChange} />}
                        label="React JS" />
                    <FormControlLabel
                        value="angular"
                        control={
                            <Checkbox
                                checked={knowlegde.includes("angular")}
                                onChange={handleKnowlegdeChange} />}
                        label="Angular" />
                    <FormControlLabel
                        value="vuejs"
                        control={
                            <Checkbox
                                checked={knowlegde.includes("vuejs")}
                                onChange={handleKnowlegdeChange} />}
                        label="Vue JS" />
                </FormGroup>
            </FormControl>
        </Box>
    )
}

export default CheckBoxMultiple