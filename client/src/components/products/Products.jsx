import { Box, Fab, Typography } from '@mui/material'
import React from 'react'
import FilterCategory from './FilterCategory'
import FloatingButton from './FloatingButton'
import ItemCard from './ItemCard'

const Products = () => {
  return (
    <Box sx={{ mx: { xl: 24, md: 15, sm: 8, xs: 5 } }}>
      <Typography variant='h5' fontWeight={700}>
        Telusuri Kategori
      </Typography>
      <FilterCategory />
      <ItemCard />
      <Box display={'flex'} justifyContent={'center'}>
        <FloatingButton/>
      </Box>
    </Box>
  )
}

export default Products