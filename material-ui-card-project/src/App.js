import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Course from './component/Course';
import Angular from './images/angular.jpg';
import BootStrap from './images/bootstrap5.png';
import Csharp from './images/ccsharp.png';
import KompleWeb from './images/kompleweb.jpg';

function App() {
  return (
    <div>
     <AppBar>
      <Toolbar sx={{fontSize: 30}}>Kart Projesi</Toolbar>
     </AppBar>
     <Container maxWidth="lg">
     <Grid container spacing={2} sx={{marginTop: 10}}>
        <Grid item xs={12} md={6} lg={3}>
         <Course
         images={Angular}
         title="Angular"
         description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
         />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
        <Course
         images={BootStrap}
         title="BootStrap"
         description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
         />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
        <Course
         images={Csharp}
         title="Csharp"
         description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
         />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
        <Course
         images={KompleWeb}
         title="KompleWeb"
         description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
         />
        </Grid>
      </Grid>
      </Container>
      
    </div>
  );
}

export default App;
