import {
    Box,
    Button,
    Divider,
    Typography
  } from '@mui/material'
  
  import React from 'react'
  
  const SacBoyama = () => {
    return (
      // container
      <Box >   
      
       
              <Box 
             sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb:3,
              mt:3,
             
  
          }}>
                 
                  <Box>
                  <Typography
            sx={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "22px",
              color: "#07232C",
            }}
          >
          saç boyama
          </Typography>
  
                  </Box>
                  
                  <Box sx={{
                      width:"170px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
  
                  }}>
                  <Typography
            sx={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "22px",
              color: "#07232C",
            }}
          >
            120
          </Typography>
          <Button variant="contained"
          sx={{
              textTransform: "capitalize",
              width:"113px",
              height:"34px",
              background:"#F75936",
              borderRadius:"6px", 
          }}
          
          >Randevu Al</Button>
  
                  </Box>
                  {/* fiyat ve rendavu al */}
  
  
              </Box>
          
          <Divider />
          
              <Box 
             sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb:3,
              mt:3,
             
  
          }}>
                 
                  <Box>
                  <Typography
            sx={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "22px",
              color: "#07232C",
            }}
          >
           saç boyama
          </Typography>
  
                  </Box>
                 
  
                  {/* fiyat ve rendavu al */}
                  <Box sx={{
                      width:"170px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
  
                  }}>
                  <Typography
            sx={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "22px",
              color: "#07232C",
            }}
          >
            120
          </Typography>
          <Button variant="contained"
          sx={{
              textTransform: "capitalize",
              width:"113px",
              height:"34px",
              background:"#F75936",
              borderRadius:"6px", 
          }}
          
          >Randevu Al</Button>
  
                  </Box>
                  {/* fiyat ve rendavu al */}
  
  
              </Box>
          
          <Divider />
         
              <Box 
             sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb:3,
              mt:3,
             
  
          }}>
                 
                  <Box>
                  <Typography
            sx={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "22px",
              color: "#07232C",
            }}
          >
            saç boyama
          </Typography>
  
                  </Box>
                  
  
                  {/* fiyat ve rendavu al */}
                  <Box sx={{
                      width:"170px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
  
                  }}>
                  <Typography
            sx={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "22px",
              color: "#07232C",
            }}
          >
            120
          </Typography>
          <Button variant="contained"
          sx={{
              textTransform: "capitalize",
              width:"113px",
              height:"34px",
              background:"#F75936",
              borderRadius:"6px", 
          }}
          
          >Randevu Al</Button>
  
                  </Box>
                  {/* fiyat ve rendavu al */}
  
  
              </Box>
          
          <Divider />
              
  
      </Box>
      // container
      
    )
  }
  
  
  export default SacBoyama