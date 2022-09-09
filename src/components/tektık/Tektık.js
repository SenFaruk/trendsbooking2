import { Box, Typography, Button, Stack } from "@mui/material";
import React from "react";

const Tektık = () => {
  return (
    <Box
      sx={{
        width: "623px",
        height: "891px",
        background: "#F2F8FF",
        borderRadius: "30px",
      }}
    >
      <Stack
        direction="column"
        spacing={4}
        sx={{
          padding: "50px 50px 0px 50px ",
        }}
      >
      <Typography
        sx={{
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "38px",
          lineHeight: "53px",
          textAlign: "center",
          color: "#07232C",
        }}
      >
        Kuaförüne tek tıkla ulaş
      </Typography>
      <Typography
        sx={{
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "20px",
          lineHeight: "30px",
          textAlign: "center",
          color: " #9A9A9A",
        }}
      >
        Kendin için en güzel günü seç ve kuaförünü aramadan randevunu al.
      </Typography>

      
      <Button
          variant="contained"
          color="mycolor"
          size="small"
          sx={{
            textTransform: "capitalize",
            fontFamily: "Roboto",
            fontStyle: "normal",
            maxWidth:100,
            marginLeft:"50px",

            fontSize: "16px",

            textAlign: "center",

            color: "#FFFFFF",
          }}
        >
          Kayıt Ol
        </Button>

      
      
        
      
      </Stack>
    </Box>
  );
};

export default Tektık;
