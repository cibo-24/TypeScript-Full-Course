import Box from '@mui/system/Box';
// Box, bir div görevi görür.
// İçerisinde CSS özelliklerini sx ile veririz.
// "&:" ile className tanımlamış oluruz.
const BoxLesson = () => {
  return (
   <Box 
   component="section" 
   sx={{
    border: "1px solid grey", 
    backgroundColor: '#42a5f5', 
    width: "200px", 
    height: "200px",
    borderRadius: "20px",
    padding: "20px",
    "&:hover": {
      backgroundColor: "#ab47bc"
    }
    }}>
    This is a section container
   </Box>
  )
}

export default BoxLesson