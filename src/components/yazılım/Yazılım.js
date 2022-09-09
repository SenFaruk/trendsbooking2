import React from "react";
import { Stack, Typography } from "@mui/material";
import SouthEastSharpIcon from "@mui/icons-material/SouthEastSharp";
import Arrow from "../../assets/Arrow.svg";
const Yazılım = () => {
  return (
    <Stack
      direction="row"
      spacing={10}
      sx={{
        margin: "50px 150px 50px 185px",
      }}
    >
        <Stack direction="row" spacing={1}>
            <Stack >
                 <img src={Arrow} alt=""/>
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
        Kuaför Salonunuz İçin Eksiksiz Bir Yazılım
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
    </Stack>
  );
};

export default Yazılım;
