import { Box } from '@mui/material'
import React from 'react'

const BarbersChop900px = () => {
  return (
    <Box
    sx={{
      width: "100%",
      background: "blue",
      display: {
        sm:"flex",
        md:"none",
        xl:"none",
        lg:"none",
      },
      justifyContent: "space-around",
      border: "2px solid red",
    }}
  >
    BarbersChop900px
  </Box>
  )
}

export default BarbersChop900px