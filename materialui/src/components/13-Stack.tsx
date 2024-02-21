import { Stack, Divider } from "@mui/material"

// Stack ve Box birbirine benzerler.
// Ancak Stack'te display özelliği vardır. display:flex
// direction="row" ile satır şeklinde hizalanır.
// spacing={2} ile padding özelliği verebiliriz.
// direction'ı responsive design için xs: "column" vs diye ayarlama yapabiliriz.
// align-items ve justifyContent yapılarını da kullanabiliriz.

const StackLesson = () => {
  return (
   <Stack 
   direction={{xs: "column", md: "row"}}
   justifyContent="center" 
   alignItems="center"
   spacing={{xs: 1, md: 4, sm: 2}} 
   divider={<Divider orientation="vertical" flexItem />}>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
   </Stack>
  )
}

export default StackLesson