import Typography from '@mui/material/Typography';

export const TypographyLesson = () => {

    // <Typography> ile Componentimizi açıyoruz. Daha sonra variant="" ile özelliğini veriyoruz.
    // component="h4" ile variant görünümü h1 olan text'in css özellikleri component içerisine yazdığımız propertyi oluyor.
    // align="right" , align="left" ile text'i sağa ve sola yaslamış olduk.

  return (
    <div>
        <Typography variant='body1'>Body Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, maiores. A rem consectetur officia dolor laborum nesciunt quisquam, tempore minima. Nemo, quod. Eligendi reiciendis eveniet ea aut, repellendus dignissimos eaque.
        </Typography>
        <Typography variant='body2'> Nam nihil asperiores laboriosam rerum iure beatae dignissimos, similique quasi quo voluptatibus error ex veritatis dicta libero doloribus, deleniti, hic laborum tempore et sunt tenetur architecto amet suscipit! Animi, temporibus!</Typography>

        <Typography variant='h1'>H1 Görünümü</Typography>
        <Typography variant='h2'>H2 Görünümü</Typography>
        <Typography variant='h3'>H3 Görünümü</Typography>
        <Typography variant='h4'>H4 Görünümü</Typography>
        <Typography variant='h5'>H5 Görünümü</Typography>
        <Typography variant='h6'>H6 Görünümü</Typography>

        <Typography variant='h1' component="h4">H1 Görünümü</Typography>

         {/* align ile text'i sağa ve sola yaslayabiliyoruz. */}
        <Typography variant='h5' component="h4" align='right'>H1 Görünümü</Typography>
        <Typography variant='h5' component="h4" align='left'>H1 Görünümü</Typography>

        {/* subtitle1 ve subtitle2 ile başlık vermemizi sağlar. */}
        <Typography variant='subtitle1'>Alt Başlık 1</Typography>
        <Typography variant='subtitle2'>Alt Başlık 2</Typography>

        {/* Metarial UI'da Customization > Default theme'da default olarak propertylerin özellikleri yer alır. */}
      
    </div>
  )
}
