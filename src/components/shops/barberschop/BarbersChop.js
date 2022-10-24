import React from "react";
import { Box } from "@mui/material";
import BarberschopStyle from "./BarberschopStyle";
import RandevuAl from "./RandevuAl";
import Hakkımızda from "./Hakkımızda";
import NavigationEkibimiz from "./NavigationEkibimiz";
import Image from "./Image";

const BarbersChop = () => {
  return (
    <Box
      sx={{
        width: "100%",
        background: "white",
        display: {
          xs: "flex",
          sm: "flex",
          md: "flex",
          lg: "flex",
          xl: "flex",
        },
        justifyContent: "space-around",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "200px",
            sm: "560px",
            md: "800px",
            lg: "800px",
            xl: "800px",
          },
          height: "783px",

          background: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          mt: 4,
        }}
      >
        <BarberschopStyle />
        <RandevuAl />
        <Hakkımızda />
        <NavigationEkibimiz />
      </Box>

      <Image />
    </Box>
  );
};

export default BarbersChop;
