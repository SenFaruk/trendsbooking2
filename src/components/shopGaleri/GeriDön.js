import React from 'react'
import { Button } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


const GeriDön = () => {
  return (
    <>
    <Button variant="contained" startIcon={<KeyboardBackspaceIcon />}
        disableRipple="true"
        sx={{
            textTransform: "capitalize",
            width:"295px",
            height:"44px",
           
            boxShadow:"none",
            ml:4,
            mb:2, 
           
        }}>
         Mağaza Sayfasına Geri Dön
        </Button>
        </>
  )
}

export default GeriDön