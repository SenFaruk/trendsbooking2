import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import card1 from "../../assets/card1.svg";
import card2 from "../../assets/card2.svg";

const Cardcards = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Box
        sx={{
          position: "absolute",
          width: "394px",
          height: "849px",

          background: `url(${card1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "relative",
          borderRadius: "20px",
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

      <Stack direction="column" spacing={2}>
        <Box
          sx={{
            width: "393px",
            height: "416px",
            background: "#F2F8FF",
            borderRadius: "20px",
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
        <Box
          sx={{
            width: "393px",
            height: "416px",
            background: "#F65936",
            borderRadius: "20px",
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
      </Stack>

      {/* birinci stack  sonu*/}

      <Stack direction="column" spacing={2}>
        <Box
          sx={{
            width: "393px",
            height: "416px",

            background: `url(${card2})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            position: "relative",
            borderRadius: "20px",
            borderRadius: "20px",
          }}
        ></Box>
        <Box
          sx={{
            width: "393px",
            height: "416px",
            background: "#F2F8FF",
            borderRadius: "20px",
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
      </Stack>

      {/* ikinci stack sonu */}
    </Stack>
  );
};

export default Cardcards;
