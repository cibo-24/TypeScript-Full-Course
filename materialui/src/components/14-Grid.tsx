import { Box, Grid } from "@mui/material";

const GridLesson = () => {
    // 12 birimlik bir yapıda diğeri 8 diğeri ise 4 birimlik olan 2 grid oluşturduk
    // xs, medium cihaz ve altı demektir. xs={12} medium cihaz ve altına düşerse 12 birimlik yer kaplar
  return (
    <Box>
   <Grid container>
    <Grid xs={12} md={8}> 8 birimlik yer </Grid>
    <Grid xs={12} md={4}> 4 birimlik yer </Grid>
    <Grid xs={12} md={8}> 8 birimlik yer </Grid>
    <Grid xs={12} md={4}> 4 birimlik yer </Grid>
   </Grid>
   </Box>
  )
}

export default GridLesson