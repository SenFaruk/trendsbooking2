import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Mutlu = () => {
  return (
    <Box
    sx={{
      display:"flex",
      flexDirection:"column",
      justifyContent: "center",
      alignItems: "center",
    }}>

   
 
      <Typography
        sx={{
          

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
            margin:{
              xs: "25px 50px 20px 50px",
              sm: "25px 100px 20px 100px",
              md: "25px 200px 20px 200px",
              lg: "25px 200px 20px 200px",
              xl: "25px 200px 20px 200px",

            },          

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


    </Box>
  );
};

export default Mutlu;
