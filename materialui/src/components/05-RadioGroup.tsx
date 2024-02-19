import { FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText } from '@mui/material';
import { useState } from 'react';
// radio group'ları oluşturarak, onlar üzerinde işlemler yapmak.

function LessonRadioGroup() {
  const [value,setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  return (
    <FormControl>
      <FormLabel>Maaş Beklentiniz</FormLabel>
      <RadioGroup row name='extected-salary' value={value} onChange={handleChange}>
        <FormControlLabel
          label="2000$"
          value="2000"
          color='secondary'
          control={<Radio color='error' />} />
        <FormControlLabel
          label="4000$"
          value="4000"
          color='error'
          control={<Radio color='secondary' />} />
        <FormControlLabel
          label="5000$"
          value="5000"
          color='warning'
          control={<Radio color='warning' />} />
      </RadioGroup>
      <FormHelperText>Yanlış Seçim</FormHelperText>
    </FormControl>
  )
}

export default LessonRadioGroup