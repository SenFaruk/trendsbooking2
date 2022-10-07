import React from 'react'
import { Box, Button, ButtonGroup, Fab, Stack, Typography } from '@mui/material'

import footerlogo from "../../assets/footerlogo.svg";
import ArrowUpwardSharpIcon from "@mui/icons-material/ArrowUpwardSharp";


 const Footer = () => {
  return (
    <Box 
    sx={{
      width: "100%",
      height: "485px",
      background: "#07232C",
     
      display:"flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
     
     
     
   
  
    }}>


    <Box sx={{
      width: "100%",
      
      
      margin:"auto",
      display:"flex",
      flexDirection:"row",
      justifyContent: "space-around",
      paddingTop:"70px",
   
     
   
  
    }}>
      {/* logo */}
      <Box >
      <img src={footerlogo} alt="" width="83.6px" height="49.91px" />
      </Box>
       {/* logo */}

       {/* 1inci sütün basla */}
       <Box sx={{
        display:"flex",
        flexDirection:"column",
      
       }}> 
       {/* adres başla */}
        <Box  sx={{
        display:"flex",
        flexDirection:"column",
        justifyContent: "space-between",
        mb:5
       }}> 
       <Typography sx={{
        fontFamily:" 'Jost'",
        fontStyle:" normal",
        fontWeight:" 400",
        fontSize:" 24px",
        lineHeight:" 36px",       
        color:" #FFFFFF",
        
       }}>
       123 Market St. #22B
       </Typography>
       <Typography sx={{
        fontFamily:" 'Jost'",
        fontStyle:" normal",
        fontWeight:" 400",
        fontSize:" 24px",
        lineHeight:" 36px",       
        color:" #FFFFFF",
        
       }}>
       Charlottesville, California 
       </Typography>
       <Typography sx={{
        fontFamily:" 'Jost'",
        fontStyle:" normal",
        fontWeight:" 400",
        fontSize:" 24px",
        lineHeight:" 36px",       
        color:" #FFFFFF",
        
       }}>
       44635
       </Typography>

        </Box>
         {/* adres bitir */}
        
        
         {/* telefon email başla */}

         <Box>
          <Stack spacing={4}>
         <Typography sx={{
        fontFamily:" 'Poppins'",
        fontStyle:" normal",
        fontWeight:" 400",
        fontSize:" 14px",
        lineHeight:" 22px",       
        color:" #FFFFFF",
        textDecoration: "underline",
        
       }}>
      (434) 546-4356
       </Typography>
         <Typography sx={{
        fontFamily:" 'Poppins'",
        fontStyle:" normal",
        fontWeight:" 400",
        fontSize:" 14px",
        lineHeight:" 22px",       
        color:" #FFFFFF",
        textDecoration: "underline",
        
       }}>
      contact@lift.agency
       </Typography>
       </Stack>


         </Box>
          {/* telefon email bitir */}

         


       </Box>
       {/* 1inci sütün bitir */}


       {/* 2inci sütün başla */}
       

       <Box>

       <ButtonGroup
              variant="text"
              orientation="vertical"
              sixe="small"
              color="primary"
            >
              <Button
                sx={{
                  textTransform: "capitalize",
                }}
              >
                About
              </Button>
              <Button
                sx={{
                  textTransform: "capitalize",
                }}
              >
                Growers
              </Button>
              <Button
                sx={{
                  textTransform: "capitalize",
                }}
              >
                Merchants
              </Button>
              <Button
                sx={{
                  textTransform: "capitalize",
                }}
              >
                {" "}
                Partners
              </Button>
              <Button
                sx={{
                  textTransform: "capitalize",
                }}
              >
                contact
              </Button>
            </ButtonGroup>

       </Box>
       {/* 2inci sütün bitir */}

       {/* 3inci sütün Başla */}
       <Box>
       <ButtonGroup
              variant="text"
              orientation="vertical"
              sixe="small"
              color="primary"
            >
              <Button
                sx={{
                  textTransform: "capitalize",
                  textDecoration: "none",
                }}
              >
                Facebook
              </Button>
              <Button
                sx={{
                  textTransform: "capitalize",
                }}
              >
                Twitter
              </Button>
              <Button
                sx={{
                  textTransform: "capitalize",
                }}
              >
                Linkedin
              </Button>
              <Button
                sx={{
                  textTransform: "capitalize",
                }}
              >
                Instagram
              </Button>
            </ButtonGroup>
           

       </Box>
       {/* 3inci sütün Bitir */}
       <Fab color="primary" aria-label="arrowup">
          <ArrowUpwardSharpIcon />
        </Fab>


    </Box>
    <Box sx={{
   
      marginLeft:"300px",
      marginBottom: "100px",
    }}>
    <Typography
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "20px",
              color: "#FFFFFF",
              opacity: "0.65",
             
            }}
          >
            © 2020 Lift media. All rights reserved.
          </Typography>
    </Box>

  
    
    </Box>
    
  )
}
export default Footer
