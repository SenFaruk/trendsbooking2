import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const BarberschopStyle = () => {
  return (
    // container
    <Box
      sx={{
        width:"720px",
        display: "flex",
        justifyContent: "space-between",
        ml:4,
      }}
    >
      {/* Barberschop Ciach & Style */}
      
        <Stack direction="column" >
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
            Kızılay, Yiğit Apartmanı, Meşrutiyet mahallesi, Konur Sok.
            D:No:9/11, 06420 Ankara
          </Typography>
        </Stack>

        <FavoriteBorderIcon sx={{ fontSize: 40 }} />
      
      {/* Barberschop Ciach & Style */}
    </Box>
    // container
  );
};

export default BarberschopStyle;
