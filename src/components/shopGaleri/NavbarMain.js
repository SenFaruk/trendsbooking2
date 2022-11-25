import { Box } from '@mui/material'
import React from 'react'
import ShopGaleri from '../../view/ShopGaleri'
import Footer from '../footer/Footer'
import BarberschopStyle from '../shops/barberschop/BarberschopStyle'

import Hakkımızda from '../shops/barberschop/Hakkımızda'

import Image from '../shops/barberschop/Image'
import NavigationEkibimiz from '../shops/barberschop/NavigationEkibimiz'
import RandevuAl from '../shops/barberschop/RandevuAl'
import ShopNavbar from '../shops/navbar/ShopNavbar'
import GaleriShop from './GaleriShop'
import GeriDön from './GeriDön'

const NavbarMain = () => {
  return (
    <>
      <ShopNavbar/>
      <Box sx={{
        display: 'flex',
        mx:4,
        mt:2
      
      }}>
      <Box 
      sx={{
       
        background: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        mt: 4,
        ml: 2,
      }}>
      <BarberschopStyle />
      <RandevuAl />
      <Hakkımızda />
      <NavigationEkibimiz />
      </Box>

      <Box sx={{
      ml:5
      }}>
         <Image/>
      </Box>

      
     

      </Box>
      <GeriDön/>
      <GaleriShop/>
      <Footer/>
    


     
        
        
    </>
  )
}

export default NavbarMain