import React from 'react'
import Box from '@mui/material/Box';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import Toolbar from '@mui/material/Toolbar';
import { Button, FormControl, Grid, Input, InputAdornment, InputLabel, Link, MenuItem, Select } from '@mui/material';


const FormProduk = () => {
  return (
    <Box width={'70%'} mx={'auto'} mt={3}>
        <Toolbar position='relative' >
            <ArrowBackSharpIcon  sx={{ zIndex: 100, padding: 1, cursor: 'pointer', '&:hover': {
                backgroundColor: '#aaa',
                opacity: [0.9, 0.8, 0.7],
                } }} />
            <Box position='absolute' width={'60%'}  mx={'auto'} sx={{ left: 0, right: 0,top: 0 }} >
                <InputLabel margin="start" htmlFor="filled-adornment-amount">Nama Produk</InputLabel>
                <Input
                sx={{ mt:0, mb:2, border: '1px solid', borderRadius:'10px', p: 1 }}
                size="small"
                margin="normal"
                required
                fullWidth
                placeholder="Nama produk"
                id="name"
                />
                <InputLabel margin="start" htmlFor="filled-adornment-amount">Harga</InputLabel>
                <Input
                startAdornment={<InputAdornment position="start">Rp</InputAdornment>}
                sx={{ mt:0, mb:2, border: '1px solid', borderRadius:'10px', p: 1 }}
                size="small"
                margin="normal"
                required
                fullWidth
                placeholder='0,00'
                />
                <InputLabel margin="start" htmlFor="filled-adornment-amount">Kategori</InputLabel>
                <FormControl sx={{ width: '100%' }} size='small'> 
                    <Select
                        id="demo-simple-select"
                        required
                         sx={{ mt:0, mb:2, border: '1px solid', borderRadius:'10px'}}
                >
                        <MenuItem sx={{ width: '100%' }} value={10}>Ten</MenuItem>
                        <MenuItem sx={{ width: '100%' }} value={20}>Twenty</MenuItem>
                        <MenuItem sx={{ width: '100%' }} value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <InputLabel margin="start" htmlFor="filled-adornment-amount">Deskripsi</InputLabel>
                
                <Input
                sx={{ mt:0, mb:2, border: '1px solid', borderRadius:'10px', p: 1}}
                size="small"
                margin="normal"
                required
                fullWidth
                placeholder="Contoh: Jalan Ikan Hiu 33"
                id="name"
                />

                <InputLabel margin="start" htmlFor="filled-adornment-amount">Foto Produk</InputLabel>
                <Input
                sx={{ mt:0, mb:5, border: '1px solid', borderRadius:'10px', p: 1}}
                size="small"
                margin="normal"
                required
                fullWidth
                placeholder="Contoh: Jalan Ikan Hiu 33"
                id="photo"
                type="file"
                />
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Link to={``}>
                            <Button fullWidth variant="outlined" color="primary" >
                            Preview
                        </Button>
                      </Link>
                    </Grid>
                    <Grid item xs={6} className=''>
                        <Button   fullWidth variant="contained" color="primary" >
                          Terbitkan
                      </Button>
                    </Grid>
                </Grid>
            </Box>
        </Toolbar>
    </Box>
  )
}

export default FormProduk