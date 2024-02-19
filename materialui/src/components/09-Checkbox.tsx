import { FormGroup, FormControlLabel, Checkbox, Box, FormControl, FormLabel } from "@mui/material"
import { useState } from "react"


const CheckboxLesson = () => {
    // Box, bir div görevi görür. Kapsayıcıdır.
    const [isAccept, setIsAccept] = useState(false);
    console.log(isAccept);
    return (
        <Box>
            <Box>
                <FormControl>
                    <FormLabel>Eğitim Durumu</FormLabel>
                    <FormGroup row>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Üniversite" value="uni" />
                        <FormControlLabel disabled control={<Checkbox />} label="Lise" value="lise" />
                        <FormControlLabel required control={<Checkbox />} label="İlkokul" value="ilkokul" />
                    </FormGroup>
                </FormControl>
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>Kullanıcı Sözleşmesi</FormLabel>
                    <FormGroup row>
                        <FormControlLabel  control={<Checkbox checked={isAccept} onChange={(e) => setIsAccept(e.target.checked) }/>} label="Kullanım Koşullarını Kabul Ediyorum"/>
                    </FormGroup>
                </FormControl>
            </Box>
        </Box>
    )
}

export default CheckboxLesson