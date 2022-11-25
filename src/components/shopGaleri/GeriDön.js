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
            borderRadius:"6px",
            boxShadow:"none", 
           
        }}>
         Mağaza Sayfasına Geri Dön
        </Button>
        </>
  )
}

export default GeriDön