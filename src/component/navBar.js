
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const NavBar = () => {
  return (
    <Container sx={{ flexGrow: -1, }}>
      <AppBar elevation={'none'} position="static" sx={{backgroundColor: 'transparent', textAlign: 'center'}}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div" sx={{border: '1px solid white', padding: 1, mt: 3, width: 'fit-content', marginX: {md: '0', xs: 'auto'}}}>
            MyTestApp
          </Typography>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
export default NavBar;