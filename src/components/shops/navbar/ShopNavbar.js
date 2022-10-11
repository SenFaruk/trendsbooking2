
import React from 'react'
import { Box } from '@mui/material'
import ShopNavbarSatır1 from './ShopNavbarSatır1'
import ShopNavbarSatır2 from './ShopNavbarSatır2'

const ShopNavbar = () => {
  return (
    <Box sx={{
        height:"135px",
        width:"100%",
        background: "#07232C",
      



    }}>
      <ShopNavbarSatır1 />
      <ShopNavbarSatır2 />

    </Box>
  )
}

export default ShopNavbar