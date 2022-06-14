import React from 'react'
import Banner from '../components/header/Banner'
import Navbar from '../components/header/Navbar'
import ProductCards from '../components/products/Products'

const HomePage = () => {
  return (
    <>
        <Navbar/>
        <Banner/>
        <ProductCards/>
    </>
  )
}

export default HomePage