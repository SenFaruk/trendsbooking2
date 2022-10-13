
import React from 'react'
import { Box } from '@mui/material'
import ShopNavbarRow1 from './ShopNavbarRow1'
import ShopNavbarRow2 from './ShopNavbarRow2'

const ShopNavbar = () => {
  return (
    <Box sx={{
        height:"135px",
        width:"100%",
        background: "#07232C",
      



    }}>
      <ShopNavbarRow1 />
      <ShopNavbarRow2 />

    </Box>
  )
}

export default ShopNavbar