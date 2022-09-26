import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import SouthEastSharpIcon from "@mui/icons-material/SouthEastSharp";
import Arrow from "../../assets/Arrow.svg";
const Yazılım = () => {
  return (
    // container Box başlangıc
    <Box
      sx={{
        display: {
          xs: "column",
          sm: "column",
          md: "column",
          lg: "flex",
          xl: "flex",
        },
        justifyContent: "center",
        p: "50px 100px 50px 100px",
      }}
    >
      <Stack direction="row" spacing={2} padding=" 0px 70px 50px 0px">
        <Stack>
          <img src={Arrow} alt="" />
        </Stack>

        <Typography
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "36px",
            lineHeight: "43px",
            color: "#07232C",
          }}
        >
          <pre>Kuaför Salonunuz İçin</pre>

          <pre>Eksiksiz Bir Yazılım</pre>
        </Typography>
      </Stack>

      <Typography
        sx={{
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "20px",
          lineHeight: "34px",
          color: "#6E6E73",
        }}
      >
        TrendsBooking'i ister bilgisayarınızdan, ister cep telefonunuzdan, ister
        tabletinizden kullanarak Randevularınızı, Ürün & Paket Satışlarınızı ve
        çok daha fazlasını kolayca yönetebilirsiniz!
      </Typography>
    </Box>
    // container Box sonu
  );
};

export default Yazılım;
