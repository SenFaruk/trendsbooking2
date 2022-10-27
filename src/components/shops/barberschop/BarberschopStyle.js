import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const BarberschopStyle = () => {
  return (
    // container
    <Box
      sx={{
        
        display: "flex",
        justifyContent: "space-between",
       
      }}
    >
      {/* Barberschop Ciach & Style */}

      <Box>
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "40px",
            lineHeight: "47px",
            color: "#07232C",
          }}
        >
          Barberschop Ciach & Style
        </Typography>

        <Typography
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "15px",
            lineHeight: "18px",
            color: "#9A9A9A",
          }}
        >
          Kızılay, Yiğit Apartmanı, Meşrutiyet mahallesi, Konur Sok. D:No:9/11,
          06420 Ankara
        </Typography>
      </Box>
      <Box>
        <FavoriteBorderIcon sx={{ fontSize: 40 }} />
      </Box>

      {/* Barberschop Ciach & Style */}
    </Box>
    // container
  );
};

export default BarberschopStyle;
