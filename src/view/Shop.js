import React from 'react'
import { ThemeProvider } from "@mui/system";
import theme from "../styles/theme";
import ShopNavbar from '../components/shops/navbar/ShopNavbar';

const Shop = () => {
  return (
    <ThemeProvider theme={theme}>
        <ShopNavbar/>
    </ThemeProvider>
  )
}

export default Shop