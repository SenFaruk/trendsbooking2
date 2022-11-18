import { Box, Typography } from "@mui/material";
import React from "react";
import BarberschopStyle from "./BarberschopStyle";
import Hakkımızda from "./Hakkımızda";
import NavigationEkibimiz from "./NavigationEkibimiz";
import RandevuAl from "./RandevuAl";
import Image900px from "./Image900px";
import Hizmetler from "./Hizmetler";
import PopülerHizmetler from "./PopülerHizmetler";
import DigerHizmetler from "./DigerHizmetler";
import Galeri from "./Galeri";
import Yorumlar from "./Yorumlar";
import FotograflıDegerlendirmeler from "./FotograflıDegerlendirmeler";
import { Yorum6837 } from "./Yorum6837";
import YıldızlıYorumlar from "./YıldızlıYorumlar";


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
          height: "4150px",
          background: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
   
         
          ml:5,
          mr:5,
          
        }}
      >
        
      <Image900px/>
      <BarberschopStyle />
      <RandevuAl />
      <Hakkımızda />
      <NavigationEkibimiz />
      <Hizmetler />
          <PopülerHizmetler />
          <DigerHizmetler />
          <Galeri />
          <Yorumlar />
          <FotograflıDegerlendirmeler />
          <Yorum6837 />
          <YıldızlıYorumlar />
          <YıldızlıYorumlar />
          <YıldızlıYorumlar />
          <YıldızlıYorumlar />
          <YıldızlıYorumlar />
          <YıldızlıYorumlar />
    
     
      </Box>
    
    </Box>
  );
};

export default BarbersChop900px;
