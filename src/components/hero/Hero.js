import React from "react";
import {
  Box,
  Button,
  Divider,
  InputBase,
  Stack,
  Typography, Menu,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PlaceIcon from "@mui/icons-material/Place";
import herobg from "../../assets/herobg.png";
import Rectangle62 from "../../assets/Rectangle 62.svg";

const Hero = () => {
  return (
    <Box>
      <Box
        sx={{
          background: `url(${herobg})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: "30px",
          height: "557px",
          width: "1266px",
          margin: "auto",
          display: {
            xs: "none",
            sm: "flex",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
          justifyContent: "center",
          alignItems: "center",

          width: {
            xs: "590px",
            sm: "600px",
            md: "900px",
            lg: "1200px",
            xl: "1300px",
          },
          
        }}
      >
        <Box marginTop={"120px"}>
          <Box marginLeft="120px">
            <Typography
              sx={{
                fontWeight: "800",
                color: "white",

                fontSize: {
                  xs: "55px",
                  sm: "50px",
                  md: "70px",
                  lg: "70px",
                  xl: "70px",
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
                fontSize: {
                  xs: "20px",
                  sm: "16px",
                  md: "20px",
                  lg: "22px",
                  xl: "22px",
                },
                lineHeight: "26px",
                color: "#FFFFFF",
              }}
            >
              Size en uygun salonlardan online randevunuzu kolayca alın.
            </Typography>
          </Box>
          <Box
            width="848px"
            height="64px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            backgroundColor="#FFFFFF"
            boxShadow="0px 0px 20px rgba(0, 0, 0, 0.08)"
            borderRadius="6px"
            marginTop="90px"
           
            border="10px solid red"
            sx={{
              width: {
                xs: "80%",
                sm: "80%",
                md: "100%",
                lg: "100%",
                xl: "100%",
              },
              
            }}
          >
            <Stack
              direction="row"
              padding="15px"
              spacing={{ xs: 5, sm: 10, md: 15, lg: 19, xl: 19 }}
            >
              <Stack direction="row" spacing={1}>
                <SearchIcon sx={{ paddingLeft: "10px" }} />
                <InputBase
                  placeholder="aradığınız hizmet...."
                  sx={{ color: "#9A9A9A", paddingLeft:"10px"

                   }}
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
        </Box>
      </Box>

      <Box
        sx={{
          color: "#F65936",
         

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

            <Menu id="resources-menu" anchorEl={} keepMounted open={Boolean()} onClose={}>
              
            </Menu>

                


      </Box>

      



    </Box>

    
  );
};

export default Hero;
