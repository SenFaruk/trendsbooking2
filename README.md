# Hero.js


````
import React, { useState } from "react";
import {
  Box,
  Stack,
  styled,
  Typography,
  Button,
  InputBase,
  Divider,
  Menu,
} from "@mui/material";
import herobg from "../../assets/herobg.png";
import SearchIcon from "@mui/icons-material/Search";
import PlaceIcon from "@mui/icons-material/Place";
import Rectangle62 from "../../assets/Rectangle 62.svg";
import MenuIcon from "@mui/icons-material/Menu";

const Hero = () => {
  const WrapperBox = styled(Box)(() => ({
    border: "4px solid blue",
    background: `url(${herobg})`,
    backgroundRepeat: "no-repeat",
    backgroundRepeat: "no-repeat",
    borderRadius: "30px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "557px",
    width: "1266px",
    margin: "auto",
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",

    alignContent:"center"
  }));

  const [open, setopen] = useState(false);
  return (
    <>
      {/* ana box */}
      <WrapperBox
        sx={{
          width: {
            xs: "80%",
            sm: "80%",
            md: "80%",
            lg: "90%",
            xl: "90%",
          },
          display: {
            xs: "none",
            sm: "block",
            md: "block",
          },
        }}
      >
        {/* resim üzeri yazıların tamamı için */}
        {/* <Stack border="5px solid blue" spacing={10} mt={25}> */}
          <Stack direction="column" spacing={2} border="3px solid red"
             >
            <Typography
              sx={{
                fontWeight: "800",
                color: "white",
                fontSize: "70px",
                fontSize: {
                  xs: "50px",
                  md: "80px",
                },
                lineHeight: "110%",
              }}
            >
              Bi güzellik yapın!
            </Typography>
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "22px",
                fontSize: {
                  xs: "18px",
                  md: "20px",
                },
                lineHeight: "26px",
                color: "#FFFFFF",
              }}
            >
              Size en uygun salonlardan online randevunuzu kolayca alın.
            </Typography>
          </Stack>

          <Box
            width="848px"
            height="64px"
            display="flex"
            alignItems="center"
            backgroundColor="#FFFFFF"
            boxShadow="0px 0px 20px rgba(0, 0, 0, 0.08)"
            borderRadius="6px"
            border="4px solid black"
            sx={{
              width: {
                xs: "95%",
                sm: "95%",
                md: "100%",
                lg: "100%",
                xl: "100%",
              },
            }}
          >
            <Stack
              direction="row"
              spacing={{ xs: 5, sm: 10, md: 15, lg: 19, xl: 19 }}
            >
              <Stack direction="row" spacing={1}>
                <SearchIcon sx={{ paddingLeft: "10px" }} />
                <InputBase
                  placeholder="aradığınız hizmet...."
                  sx={{ color: "#9A9A9A", paddingLeft: "10px" }}
                />
              </Stack>

              <Stack direction="row" spacing={1}>
                <Divider orientation="vertical" flexItem />
                <PlaceIcon sx={{ paddingLeft: "10px" }} />
                <InputBase placeholder="Ankara...." sx={{ color: "#9A9A9A" }} />
              </Stack>

              <Stack>
                <Button color="mycolor" variant="contained">
                  Ara
                </Button>
              </Stack>
            </Stack>
          </Box>
        {/* </Stack> */}
      </WrapperBox>

      <Box
        sx={{
          color: "#F65936",
          border: "5px solid #F75936",

          width: "580px",
          height: "500px",
          background: "#F2F8FF",

          display: {
            xs: "block",
            sm: "none",
            md: "none",
          },
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          m={2}
        >
          <Stack>
            <Stack
              spacing={0}
              sx={{
                width: "16.73px",

                marginLeft: "24px",
                padding: "0px",
              }}
            >
              <img src={Rectangle62} alt="" />
            </Stack>

            <Typography
              color="#07232C"
              sx={{
                fontFamily: "Roboto",
                fontSize: "36px",
                fontWeight: "500",
                lineHeight: "34.12px",
                letterSpacing: "0px",
                textAlign: "left",
              }}
            >
              <b style={{ color: "#F75936" }}>T</b>
              <span>B</span>
            </Typography>
          </Stack>

          <MenuIcon
            sx={{
              color: "#F65936",
              // border:"3px solid #F75936",
              // display: {
              //   xs: "block",
              //   sm: "block",
              //   md: "none",
              // },
            }}
            onClick={() => setopen(!open)}
          />
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={() => setopen(!open)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >

          </Menu>
        </Stack>
      </Box>
    </>
  );
};

export default Hero;


````



# cardcard.js

````
  import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import card1 from "../../assets/card1.svg";
import card2 from "../../assets/card2.svg";

const Cardcards = () => {
  return (
    <Box border="3px solid red"
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
    </Box>
  );
};

export default Cardcards;

````
