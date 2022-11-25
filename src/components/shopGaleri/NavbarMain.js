import { Box } from '@mui/material'
import React from 'react'
import BarberschopStyle from '../shops/barberschop/BarberschopStyle'
import Galeri from '../shops/barberschop/Galeri'
import Hakkımızda from '../shops/barberschop/Hakkımızda'
import Hizmetler from '../shops/barberschop/Hizmetler'
import Image from '../shops/barberschop/Image'
import NavigationEkibimiz from '../shops/barberschop/NavigationEkibimiz'
import RandevuAl from '../shops/barberschop/RandevuAl'
import ShopNavbar from '../shops/navbar/ShopNavbar'
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
        ml: 3,
      }}>
      <BarberschopStyle />
      <RandevuAl />
      <Hakkımızda />
      <NavigationEkibimiz />
      </Box>

      <Box sx={{
      ml:3
      }}>
         <Image/>
      </Box>

      
     

      </Box>
      <GeriDön/>

     
        
        
    </>
  )
}

export default NavbarMain