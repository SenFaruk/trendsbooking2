import React from "react";
import { Box } from "@mui/material";
import ShopNavbarRow1 from "./ShopNavbarRow1";
import ShopNavbarRow2 from "./ShopNavbarRow2";
import ShopNavbar600px from "./ShopNavbar600px";

const ShopNavbar = () => {
  return (
    <Box>
      <Box
        sx={{
          height: "135px",
          width: "100%",
          background: "#07232C",
          display: {
            xs: "none",
            sm: "flex",
            md: "flex",
            lg: "flex",
            xl: "flex",
            
          },
          flexDirection: "column",
        }}
      >
        <ShopNavbarRow1 />
        <ShopNavbarRow2 />
      </Box>
      <ShopNavbar600px />
    </Box>
  );
};

export default ShopNavbar;
