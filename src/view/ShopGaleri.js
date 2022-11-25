import React from 'react'
import { ThemeProvider } from "@mui/system";
import theme from "../styles/theme";
import NavbarMain from '../components/shopGaleri/NavbarMain'



const ShopGaleri = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavbarMain/>
    </ThemeProvider>
  )
}

export default ShopGaleri