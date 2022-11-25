import React, { useState } from "react";
import { Box, Button, Divider, Typography } from "@mui/material";

import Sactrası from "./Sactrası";
import SacBoyama from "./SacBoyama";
import SactrasıButton from "./SactrasıButton";
import SacBoyamaButton from "./SacBoyamaButton";

const DigerHizmetler = () => {
  return (
    <>
    <Box>
      <Typography
        sx={{
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "20px",
          lineHeight: "23px",
          color: "#07232C",
        }}
      >
        Diğer Hizmetler
      </Typography>
    </Box>
    <SactrasıButton/>
    <SacBoyamaButton/>
    
    </>
  );
};

export default DigerHizmetler;
