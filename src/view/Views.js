import React from 'react'
import { ThemeProvider } from '@mui/system';
import Navbar from '../components/navbar/Navbar'
import theme from "../styles/theme";
import Bigüzellikyapın from "../components/bigüzellikyapın"

const Views = () => {
  return (
    <ThemeProvider theme={theme}>

      <Navbar/>
      
      <Bigüzellikyapın/>
   
    </ThemeProvider>
    
  )
}

export default Views