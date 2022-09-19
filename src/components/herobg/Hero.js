import React from "react";
import {
  Box,
  Stack,
  styled,
  Typography,
  Button,
  InputBase,
  Divider,
} from "@mui/material";
import herobg from "../../assets/herobg.png";
import SearchIcon from "@mui/icons-material/Search";
import PlaceIcon from "@mui/icons-material/Place";

const Hero = () => {
  const WrapperBox = styled(Box)(() => ({
    border: "4px solid blue",
    background: `url(${herobg})`,
    backgroundRepeat: "no-repeat",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "30px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "557px",
    width: "1266px",
    display: "flex",
    margin: "auto",
  }));
  return (
    // ana Box
    <WrapperBox
      sx={{
        width: {
          xs: "80%",
          sm: "80%",
          md: "80%",
          lg: "90%",
          xl: "90%",
        },
      }}
    >
      {/* resim üzeri yazıların tamamı için */}
      <Stack border="5px solid blue" spacing={10} mt={25}>
        {/* 
        xs,  0px
        sm, small: 600px
        md, medium: 900px
        lg, large: 1200px
        xl, extra-large: 1536px */}

        <Stack direction="column" spacing={2} border="3px solid red">
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
      </Stack>
    </WrapperBox>
  );
};

export default Hero;
