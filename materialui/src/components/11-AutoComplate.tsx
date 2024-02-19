import { TextField, Autocomplete } from "@mui/material"
import { top100Films } from "./data"

const AutoComplateLesson = () => {
  return (
   <Autocomplete 
   options={top100Films}
   sx={{width: 500}}
   renderInput={(params) => <TextField {...params} label="Filmler" /> }
   />
  )
}

export default AutoComplateLesson