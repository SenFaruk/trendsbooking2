import { Box, Typography } from "@mui/material";
import React from "react";
import BarberschopStyle from "./BarberschopStyle";
import Hakkımızda from "./Hakkımızda";
import NavigationEkibimiz from "./NavigationEkibimiz";
import RandevuAl from "./RandevuAl";
import Barber900px from "../../../assets/Barber900px.png";

const BarbersChop900px = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: {
          xs:"none",
          sm: "flex",
          md: "none",
      
        },
        justifyContent: "space-around",
       
      }}
    >
      <Box
        sx={{
          width: "800px",
          height: "1150px",
          background: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
   
         
          ml:5,
          mr:5,
          
        }}
      >
         {/* image */}
         <Box sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
       
         }}>

        
        <Box
      sx={{
        position: "relative",
        background: `url(${Barber900px})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "820px",
        height: "385px",
        borderRadius: "20px",
        mt: 2,
       
       
      }}
    >
     
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "99px",
          height: "99px",
          background: "#000000",
          opacity: 0.5,
          borderRadius: "0px 20px 0px 0px",
          position: "absolute",
          right: "0px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "40px",
            lineHeight: "47px",
            color: "#FFFFFF",
          }}
        >
          4.8
        </Typography>
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "15px",
            lineHeight: "18px",
            color: "#FFFFFF",
          }}
        >
          220
        </Typography>
      </Box>
      </Box>
       {/* image */}
    </Box>
      <BarberschopStyle />
      <RandevuAl />
      <Hakkımızda />
      <NavigationEkibimiz />
      </Box>
    </Box>
  );
};

export default BarbersChop900px;
