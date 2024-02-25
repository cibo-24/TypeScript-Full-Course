import { Card, CardActions, CardContent, CardMedia, Typography, Button} from "@mui/material"

const CardLesson = () => {
    return (
       <Card sx={{
        width: 350,
       }}>
        <CardMedia component="img"
        image="http://source.unsplash.com/random"
        height="250"
        />
        <CardContent>
            <Typography variant="h5" component="div">
                Başlığım
            </Typography>
            <Typography variant="body2" component="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sed, totam, quia qui hic nam ut dicta similique eveniet sit officiis ratione tempore repellendus exercitationem laudantium tempora numquam nostrum accusantium.
            </Typography>
        </CardContent>
        <CardActions>
            <Button color="error">Temizle</Button>
            <Button>Kaydet</Button>
        </CardActions>
       </Card>
    )
}

export default CardLesson