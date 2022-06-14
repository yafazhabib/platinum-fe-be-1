import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function Navbar() {
  
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{ color:'black', backgroundColor:'white' }}>
        <Toolbar position='relative' sx={{ margin:{xs:'', md:'0 5rem', xl:'0 10rem'} }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', backgroundColor:'#4B1979', width:'4em', color: '#4B1979' }} my={'auto'} gutterBottom component="div">
                .
            </Typography>
            <Typography position='absolute' variant="h6" mx={'auto'} my={'auto'} sx={{ left: 0, right: 0,textAlign: 'center' }} gutterBottom component="div">
                Lengkapi info Akun
            </Typography>
        </Toolbar>
      </AppBar>
      
    </Box>
  );
}