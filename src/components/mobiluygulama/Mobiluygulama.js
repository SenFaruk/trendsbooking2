import React from "react";
import { Box, Stack, Typography,Button } from "@mui/material";
import googleplay from "../../assets/googleplay.svg";
import appstore from "../../assets/appstore.svg";
import mobilback from "../../assets/mobilback.jpg";

const Mobiluygulama = () => {
  return (
    // container Box başlangıc
    <Box sx={{
      background: `url(${mobilback})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      width: {
        xs: "500px",
        sm: "600px",
        md: "900px",
        lg: "1200px",
        xl: "1350px",
      },
      height: {
        xs: "450px",
        sm: "450px",
        md: "450px",
        lg: "400px",
        xl: "400px",
      },
      display:"column",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      margin: "auto",
      mt:"50px",
      borderRadius:"30px",
   
    }}>

    
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
        paddingTop: "60px",


      }} 
      >
        Mobil Uygulama IOS, Android
        </Typography>


      <Typography
      sx={{
        fontFamily: 'Roboto',
        fontStyle:"normal",
        fontWeight:{
          xs: "600",
          sm: "600",
          md: "600",
          lg: "600",
          xl: "600",
        },
        fontSize:{
          xs: "40px",
          sm: "40px",
          md: "50px",
          lg: "50px",
          xl: "58px",
        },
        lineHeight:"68px",
        textAlign:"center",
        letterSpacing:"-0.5px",

        color: "#FFFFFF",
        padding:{
          xs: "30px 10px 10px 30px",
          sm: "30px 30px 30px 30px",
          md: "30px 80px 40px 80px",
          lg: "20px 200px 30px 200px",
          xl: "20px 200px 30px 200px",
        },
        
        
        


      }} 
      >
        Mobile uygulamamızı indirerek müşterilerinizle iletişimde kalın
        </Typography>


        <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
>
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
    
    </Box>
      // container Box başlangıc
  );
};

export default Mobiluygulama;
