import React from 'react'
import { ThemeProvider } from "@mui/system";
import theme from "../styles/theme";
import ShopNavbar from '../components/shops/navbar/ShopNavbar';
import BarbersChop from '../components/shops/barberschop/BarbersChop';

const Shop = () => {
  return (
    <ThemeProvider theme={theme}>
       {/* <ShopNavbar/>  */}
        <BarbersChop/>
    </ThemeProvider>
  )
}

export default Shop