import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import card1 from "../../assets/card1.svg";
import card2 from "../../assets/card2.svg";

const Cardcards = () => {
  return (
    // container Box başlangıç
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        padding: "50px",
      }}
    >
      {/* birinci box */}

      <Box
        sx={{
          width: "394px",
          height: "860px",
          background: `url(${card1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: "20px",
          marginTop: "20px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "28px",
            lineHeight: "33px",
            textAlign: "center",
            paddingTop: "50px",
            color: "#07232C",
          }}
        >
          Kendinize bir güzellik yapın sizlere en güzel hizmeti vermek için
          çalışıyoruz
        </Typography>
      </Box>

      {/* birinci box sonu */}

      {/* ikinci ve üçünçü boxlar için stack başlangıc */}

      <Stack direction="column" spacing={1}>
        {/* ikinci box başlangıc */}
        <Box
          sx={{
            width: "393px",
            height: "416px",
            background: "#F2F8FF",
            borderRadius: "20px",
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "28px",
              lineHeight: "33px",
              padding: "50px 25px 0px 25px",
              color: "#07232C",
            }}
          >
            Make an appointment online
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "20px",
              lineHeight: "28px",
              padding: "10px 25px 0px 25px",
              color: "#6E6E73",
            }}
          >
            Booksy is a free booking application, thanks to which you can easily
            find a free date and make an appointment conveniently.{" "}
          </Typography>
        </Box>

        {/* ikinci box sonu */}
        {/* üçüncü box başlangıc */}

        <Box
          sx={{
            width: "393px",
            height: "416px",
            background: "#F65936",
            borderRadius: "20px",
            marginBottom: "20px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "28px",
              lineHeight: "33px",

              padding: "50px 25px 0px 25px",

              color: "#07232C",
            }}
          >
            Make an appointment online
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "20px",
              lineHeight: "28px",
              padding: "10px 25px 0px 25px",

              color: "#6E6E73",
            }}
          >
            Booksy is a free booking application, thanks to which you can easily
            find a free date and make an appointment conveniently.{" "}
          </Typography>
        </Box>
        {/* üçüncü box sonu */}
      </Stack>
      {/* ikinci ve üçünçü boxlar için stack sonu */}

      {/* 4-5inci boxlar(ikinci stack  başlangıcı */}

      <Stack direction="column" spacing={1}>
        {/* 4.box başlangıç */}
        <Box
          sx={{
            width: "393px",
            height: "416px",
            background: `url(${card2})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius: "20px",
            borderRadius: "20px",
            marginBottom: "20px",
            marginTop: "20px",
          }}
        ></Box>
        {/* 4.box sonu */}
        {/* 5.box başlangıç */}
        <Box
          sx={{
            width: "393px",
            height: "416px",
            background: "#F2F8FF",
            borderRadius: "20px",
            marginBottom: "20px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "28px",
              lineHeight: "33px",

              padding: "50px 25px 0px 25px",

              color: "#07232C",
            }}
          >
            Randevu Takibi
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "20px",
              lineHeight: "28px",
              padding: "10px 25px 0px 25px",

              color: "#6E6E73",
            }}
          >
            Tüm randevularınızı tek bir sistemde toplayarak çakışmaları
            engelleyin, randevularınızı kolayca yönetin
          </Typography>
        </Box>
        {/* 5.box sonu */}
      </Stack>
    </Box>
    // container Box sonu
  );
};

export default Cardcards;
