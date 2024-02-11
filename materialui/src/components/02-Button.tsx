import { Button, Stack } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import AcUnitIcon from '@mui/icons-material/AcUnit';



export const LessonButton = () => {
  // display:flex ve flex-direction: column özelliği ile öğelerimizi alt alta sıralıyorduk. Stack özelliği ile bunu kısa yoldan yapabiliriz.
  // Stack direction default olarak column gelir. direction="row" yapar isek yan yana sıralanır.
  // spacing ile padding değeri verebiliriz.
  return (
    <Stack>
      {/* Stack and Button */}
      <Stack direction="row" spacing={1}>
        <Button variant='text'>Text</Button>
        <Button variant='outlined'>Outlined</Button>
        <Button variant='contained'>Contained</Button>
      </Stack>

      {/* Stack and Color */}
      <Stack direction="row" spacing={2}>
        <Button variant='text' color='primary'>Mavi</Button>
        <Button variant='text' color='secondary'>Mor</Button>
        <Button variant='text' color='success'>Yeşil</Button>
        <Button variant='text' color='error'>Kırmızı</Button>
        <Button variant='text' color='warning'>Sarı</Button>
        <Button variant='text' color='info'>Açık Mavi</Button>
      </Stack>

      {/* Variant - outlined */}
      <Stack direction="row" spacing={2}>
        <Button variant='outlined' color='primary'>Mavi</Button>
        <Button variant='outlined' color='secondary'>Mor</Button>
        <Button variant='outlined' color='success'>Yeşil</Button>
        <Button variant='outlined' color='error'>Kırmızı</Button>
        <Button variant='outlined' color='warning'>Sarı</Button>
        <Button variant='outlined' color='info'>Açık Mavi</Button>
      </Stack>


      {/* variant- contained */}
      <Stack direction="row" spacing={2}>
        <Button variant='contained' color='primary'>Mavi</Button>
        <Button variant='contained' color='secondary'>Mor</Button>
        <Button variant='contained' color='success'>Yeşil</Button>
        <Button variant='contained' color='error'>Kırmızı</Button>
        <Button variant='contained' color='warning'>Sarı</Button>
        <Button variant='contained' color='info'>Açık Mavi</Button>
      </Stack>

      {/* size ayarlaması ve display:flex özelliğini ezmek için display="block" özelliği */}
      <Stack direction="row" display="block" spacing={3}>
       <Button variant="contained" size='small' color='warning'>Small</Button>
       <Button variant="contained" size='medium' color='error'>Medium</Button>
       <Button variant="contained" size='large' color='primary'>Large</Button>
      </Stack>

      {/* Icon Kullanımı */}
      <Stack direction="row"  spacing={3}>
  
        <AddIcon color='warning'/>
        <AcUnitIcon />
        <Button variant='contained' startIcon={<AddIcon />} size='small'>Ekle</Button>
        <Button variant='contained' endIcon={<AddIcon />} size='small' onClick={() => alert("Tıklandı!")}>Ekle</Button>
      
      </Stack>
    </Stack>
  )
}
