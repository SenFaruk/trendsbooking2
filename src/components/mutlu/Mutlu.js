import { Stack, Typography } from "@mui/material";
import React from "react";

const Mutlu = () => {
  return (
    <Stack sx={{marginBottom:"30px"}}>
      <Typography
        sx={{
          marginLeft: "545px",

          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "38px",
          lineHeight: "45px",

          color: "#07232C",
        }}
      >
        Müşterileriniz Daha Mutlu
      </Typography>
      <Typography
        sx={{
            margin:"25px 250px 20px 200px",
          

          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "20px",
          lineHeight: "30px",
          textAlign: "center",


          color: "#9A9A9A",
        }}
      >
        Kuaför salonundan hizmet alacak kişi için en önemli unsurlardan biri, almak istediği randevuyu istediği saatte ve istediği personelden alabilmekten geçer.
      </Typography>
    </Stack>
  );
};

export default Mutlu;
