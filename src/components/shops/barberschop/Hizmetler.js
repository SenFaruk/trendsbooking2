import React from 'react'
import { Box, InputBase, Stack, Typography } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";



const Hizmetler = () => {
  return (
    // container
    <Box
      sx={{
        
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
       
      }}
    >
       
      {/* hizmetler */}
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
          Hizmetler
        </Typography>

      </Box>
      {/* hizmetler */}
      {/* search */}
      <Box sx={{
        width: "274px",
        height: "45px",
        display: "flex",
        alignItems: "center",
        border:"1px solid #9A9A9A",
        borderRadius:"40px",
      }}>
      
            <SearchIcon sx={{ paddingLeft: "10px", color: "black" }} />
            <InputBase
              placeholder="aradığınız hizmet...."
              sx={{ color: "#9A9A9A", paddingLeft: "10px" }}
            />
         

      </Box>
      {/* search */}
      
    </Box>
    // container

  )
}

export default Hizmetler
