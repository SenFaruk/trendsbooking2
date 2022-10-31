import React from "react";
import { Box } from "@mui/material";
import BarberschopStyle from "./BarberschopStyle";
import RandevuAl from "./RandevuAl";
import Hakkımızda from "./Hakkımızda";
import NavigationEkibimiz from "./NavigationEkibimiz";
import Image from "./Image";
import BarbersChop900px from "./BarbersChop900px";
import BarbersChop600px from "./BarbersChop600px";
import Hizmetler from "./Hizmetler";
import PopülerHizmetler from "./PopülerHizmetler";
import DigerHizmetler from "./DigerHizmetler";
import Galeri from "./Galeri";
import Yorumlar from "./Yorumlar";
import FotograflıDegerlendirmeler from "./FotograflıDegerlendirmeler";
import { Yorum6837 } from "./Yorum6837";
import YıldızlıYorumlar from "./YıldızlıYorumlar";
import Footer from "../../footer/Footer";

const BarbersChop = () => {
  return (
    <Box> 
         {/* 1200px */}
    <Box
      sx={{
        width: "100%",
        background: "white",
        display: {
          xs:"none",
          sm: "none",
          md: "flex",
          xl: "flex",
          lg: "flex",
        },
        justifyContent: "space-around",
      }}
    >
      <Box
        sx={{
          width: "850px",
          height: "2800px",
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
        <Hizmetler/>
        <PopülerHizmetler/>
        <DigerHizmetler/>
        <Galeri/>
        <Yorumlar/>
        <FotograflıDegerlendirmeler/>
        <Yorum6837 />
        <YıldızlıYorumlar/>
        <YıldızlıYorumlar/>
        <YıldızlıYorumlar/>
        <YıldızlıYorumlar/>
        <YıldızlıYorumlar/>
        <YıldızlıYorumlar/>
        
       
      </Box>
      
      <Box>
        <Image />
      </Box>

      
    </Box>

    
    {/* 1200px*/} 
    <Footer/>
   
    {/* 900px */}
    <Box>
    <BarbersChop900px/>
    </Box>
     {/* 900px */}
     {/* 600px */}
    <Box>
    <BarbersChop600px/>
    </Box>
    {/* 600px */}

    </Box>
  );
};

export default BarbersChop;
