import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import card3 from "../../assets/card3.svg";
import card4 from "../../assets/card4.svg";

const Tektık = () => {
  return (
    <>
    <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
>

   
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

        <Stack>
          <Button
            variant="contained"
            color="mycolor"
            size="small"
            sx={{
              textTransform: "capitalize",
              fontFamily: "Roboto",
              fontStyle: "normal",
              maxWidth: 100,
              marginLeft: "200px",

              fontSize: "16px",

              textAlign: "center",

              color: "#FFFFFF",
            }}
          >
            Kayıt Ol
          </Button>
        </Stack>
        <img src={card3} alt="" />
      </Stack>
    </Box>
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
         İşletmeler için TrendsBook
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
          Randevularını düzenle ödemelerini takip et reklam ver hepsini bir arada sadece bir tıkla yap
        </Typography>

        <Stack>
          <Button
            variant="contained"
            color="myblack"
            size="small"
            sx={{
              textTransform: "capitalize",
              fontFamily: "Roboto",
              fontStyle: "normal",
              maxWidth: 100,
              marginLeft: "200px",

              fontSize: "12px",

              textAlign: "center",

              color: "#FFFFFF",
              padding:"10px 10px 10px 10px"
            }}
          >
            Bizimle Çalış
          </Button>
        </Stack>
        <img src={card4} alt="" />
      </Stack>
    </Box>
    </Stack>
    </>
  );
};

export default Tektık;
