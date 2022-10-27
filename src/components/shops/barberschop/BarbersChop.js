import React from "react";
import { Box } from "@mui/material";
import BarberschopStyle from "./BarberschopStyle";
import RandevuAl from "./RandevuAl";
import Hakkımızda from "./Hakkımızda";
import NavigationEkibimiz from "./NavigationEkibimiz";
import Image from "./Image";
import BarbersChop900px from "./BarbersChop900px";

const BarbersChop = () => {
  return (
    <Box> 
         {/* 900px ekadar */}
    <Box
      sx={{
        width: "100%",
        background: "white",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Box
        sx={{
          width: "850px",
          height: "783px",
          background: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          mt:4,
          ml:3,
          
        }}
      >
        <BarberschopStyle />
        <RandevuAl />
        <Hakkımızda />
        <NavigationEkibimiz />
       
      </Box>
      <Box>
        <Image />
      </Box>

      
    </Box>
    {/* 900px ekadar */} 
    <Box>
    <BarbersChop900px/>
    </Box>

    </Box>
  );
};

export default BarbersChop;
