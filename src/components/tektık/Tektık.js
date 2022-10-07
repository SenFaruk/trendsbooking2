import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import card3 from "../../assets/card3.svg";
import card4 from "../../assets/card4.svg";

const Tektık = () => {
  return (
    <>
    {/* box container -1- başlangıc */}
    <Box sx={{
      display: {
        xs: "none",
        sm: "none",
        md: "flex",
        lg: "flex",
        xl: "flex",
      },
      justifyContent: "center",
      margin:"auto",
     
  
    }}
    
  
>

   {/* birinci box başlangıç */}
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
    {/* birinci box sonu */}

{/* ikinci box başlangıç */}
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
    {/* ikinci box sonu */}

        </Box>
         {/* box container -1- sonu */}

         {/* box container -2- başlangıc */}
         <Box sx={{
      display: {
        xs: "column",
        sm: "flex",
        md: "none",
        lg: "none",
        xl: "none",
      },
      justifyContent: "space-around",
     
    }}
    
  
>
  {/* box container-2-1-başlangıc */}
<Box
      sx={{
        width: "400px",
        height: "422px",
        background: "#F2F8FF",
        borderRadius: "30px",
        margin:"10px",
      
       
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
            fontSize: "18px",
            lineHeight: "30px",
            textAlign: "center",
            color: " #9A9A9A",
          }}
        >
          Kendin için en güzel günü seç ve kuaförünü aramadan randevunu al.
        </Typography>

        <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
>
          <Button
            variant="contained"
            color="mycolor"
            size="small"
            sx={{
              textTransform: "capitalize",
              fontFamily: "Roboto",
              fontStyle: "normal",
              maxWidth: 100,
              
             

              fontSize: "16px",

              textAlign: "center",

              color: "#FFFFFF",
            }}
          >
            Kayıt Ol
          </Button>
        </Stack>
       
      </Stack>
    </Box>
    {/* box container-2-1-sonu */}


    {/* box container-2-2-başlangıc */}



    <Box
      sx={{
        width: "400px",
        height: "422px",
        background: "#F5F5F5",
        borderRadius: "30px",
        margin:"10px",
     
       
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
            fontSize: "18px",
            lineHeight: "30px",
            textAlign: "center",
            color: " #9A9A9A",
          }}
        >
          Randevularını düzenle ödemelerini takip et reklam ver hepsini bir arada sadece bir tıkla yap
        </Typography>

        <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
>
          <Button
            variant="contained"
            color="myblack"
            size="small"
            sx={{
              textTransform: "capitalize",
              fontFamily: "Roboto",
              fontStyle: "normal",
              maxWidth: 100,
              

              fontSize: "12px",

              textAlign: "center",

              color: "#FFFFFF",
              padding:"10px 10px 10px 10px"
            }}
          >
            Bizimle Çalış
          </Button>
        </Stack>
       
      </Stack>
    </Box>

    {/* box container-2-2-sonu */}
</Box>
    </>
  );
};

export default Tektık;
