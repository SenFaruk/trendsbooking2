import React from 'react'
import { Box, Button, InputBase, Stack, Typography } from '@mui/material'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';



const Yorumlar = () => {
  return (
    // container
    <Box
      sx={{
        
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
       
      }}
    >
       
      {/* yorumlar */}
      <Box>
      <Typography
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "24px",
            lineHeight: "23px",
            color: "#07232C",
          }}
        >
          Yorumlar
        </Typography>

      </Box>
      {/* yorumlar */}
     {/* Daha fazla */}
      <Button
      endIcon={<ArrowDropDownCircleIcon sx={{ color: "#F65936" }} />}
       sx={{
        width: "274px",
        height: "45px",
        display: "flex",
        alignItems: "center",
        border:"1px solid #F65936",
        borderRadius:"6px",
        color: "black",
        textTransform: "capitalize",
      }}>
        Puana Göre Filtrele          
 

         

      </Button>
      {/* Daha fazla */}
      
    </Box>
    // container

  )
}

export default Yorumlar
