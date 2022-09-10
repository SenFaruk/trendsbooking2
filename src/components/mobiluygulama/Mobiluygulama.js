import React from "react";
import { Box, Stack, Typography,Button } from "@mui/material";
import googleplay from "../../assets/googleplay.svg";
import appstore from "../../assets/appstore.svg";
import { MobilContainer } from "../../styles/mobiluygulama";

const Mobiluygulama = () => {
  return (
    <MobilContainer>
      <Stack
  direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={4}
  sx={{
    marginTop:"50px",
    paddingTop:"50px",
  }}
>

     
      <Typography
      sx={{
        fontFamily: 'Roboto',
        fontStyle:"normal",
        fontWeight:"500",
        fontSize:"16px",
        lineHeight:"24px",
        textAlign:"center",
        letterSpacing:"-0.1px",

        color: "#FFFFFF",


      }} 
      >
        Mobil Uygulama IOS, Android
        </Typography>
      <Typography
      sx={{
        fontFamily: 'Roboto',
        fontStyle:"normal",
        fontWeight:"600",
        fontSize:"58px",
        lineHeight:"68px",
        textAlign:"center",
        letterSpacing:"-0.5px",

        color: "#FFFFFF",
        padding:"10px 200px 10px 200px"


      }} 
      >
        Mobile uygulamamızı indirerek müşterilerinizle iletişimde kalın
        </Typography>


      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="primary"
        sx={{
          borderRadius: "6px",
          width:"170.75px",
          height:"48px",
   
    
        }}>
          <img width="100px" src={googleplay} alt="" />
        </Button>
        <Button variant="contained" color="primary"
        sx={{
          borderRadius: "6px",
          width:"170.75px",
          height:"48px",
   
    
        }}>
          <img width="100px" src={appstore} alt="" />
        </Button>
      </Stack>
      </Stack>
    </MobilContainer>
  );
};

export default Mobiluygulama;
