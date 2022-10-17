import React from "react";
import {
  Avatar,
  Badge,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import ShopRectangle62 from "../../../assets/ShopRectangle 62.svg";
import SearchIcon from "@mui/icons-material/Search";
import PlaceIcon from "@mui/icons-material/Place";
import DateRangeIcon from "@mui/icons-material/DateRange";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";


const ShopNavbarSatır1 = () => {
  return (
    // container Box başlangıc
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        pt: 2,
      }}
    >
      {/* TrendsBooking */}
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
          },
          marginRight:"20px",
        }}
      >
        <Stack direction="row">
          <Typography
            sx={{
              color: "#FFFFFF",
              fontFamily: "Roboto",
              fontSize: "31.247px",
              fontWeight: "500",
              lineHeight: "27px",
              letterSpacing: "0px",
              paddingTop: "6px",
            }}
          >
            Trends
          </Typography>

          <Stack direction="column">
            <Stack
              spacing={0}
              sx={{
                width: "30px",
                marginLeft: "20px",
                padding: "0px",
                color: "white",
              }}
            >
              <img src={ShopRectangle62} alt="" />
            </Stack>

            <Typography
              sx={{
                color: "#FFFFFF",
                fontFamily: "Roboto",
                fontSize: "30px",
                fontWeight: "100",
                lineHeight: "25px",
                letterSpacing: "0px",
              }}
            >
              Booking
            </Typography>
          </Stack>
        </Stack>
      </Box>

      {/* TrendsBooking */}

      {/* TB başlangıç */}
      <Box
      marginRight="30px"
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "none",
          },
        }}
      >
        <Stack direction="row">
          <Typography
            sx={{
              color: "#FFFFFF",
              fontFamily: "Roboto",
              fontSize: "31.247px",
              fontWeight: "500",
              lineHeight: "27px",
              letterSpacing: "0px",
              paddingTop: "6px",
            }}
          >
            T
          </Typography>

          <Stack direction="column" spacing={0.4}>
            <Stack
              sx={{
                width: "14.73px",
                height: "3.88",
                marginLeft: "3px",
                padding: "0px",
                color: "white",
              }}
            >
              <img src={ShopRectangle62} alt="" />
            </Stack>

            <Typography
              sx={{
                color: "#FFFFFF",
                fontFamily: "Roboto",
                fontSize: "30px",
                fontWeight: "100",
                lineHeight: "25px",
                letterSpacing: "0px",
              }}
            >
              B
            </Typography>
          </Stack>
        </Stack>
      </Box>

      {/* TB bitiş */}

      {/* searchbar başlangıç */}

      <Box
        sx={{
          width: "600px",
          height: "42px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.08)",
          borderRadius: "6px",
        }}
      >
        <Stack direction="row" spacing={1}>
          <Stack direction="row" spacing={1}>
            <SearchIcon sx={{ paddingLeft: "10px", color: "black" }} />
            <InputBase
              placeholder="aradığınız hizmet...."
              sx={{ color: "#9A9A9A", paddingLeft: "10px" }}
            />
          </Stack>

          <Stack direction="row" spacing={1}>
            <Divider orientation="vertical" flexItem />
            <PlaceIcon sx={{ paddingLeft: "10px", color: "black" }} />
            <InputBase placeholder="Ankara...." sx={{ color: "#9A9A9A" }} />
          </Stack>

          <Stack direction="row" spacing={1}>
            <Divider orientation="vertical" flexItem />
            <DateRangeIcon sx={{ paddingLeft: "10px", color: "black" }} />
            <InputBase placeholder="Tarih" sx={{ color: "#9A9A9A" }} />
          </Stack>
        </Stack>
      </Box>

      {/* searchbar sonu */}

      {/* kalb ve diğerleri başlangıc */}
      <Stack direction="row" spacing={4}>
        {/* md button */}
        <Button
          variant="text"
          startIcon={<FavoriteIcon />}
          size="large"
          color="primary"
          sx={{
            display:{
              xs: "none",
              sm:"none",
              md:"flex",
            }
          }}
        >
          <Typography
            sx={{
              textTransform: "capitalize",
            }}
          >
            beğendiklerim
          </Typography>
        </Button>
         {/* md button */}
         {/* xs button */}
         <Button
          variant="text"
          startIcon={<FavoriteIcon />}
          size="large"
          color="primary"
          sx={{
            display:{
              xs: "block",
              sm:"block",
              md:"none",
            }
          }}
        >
         
        </Button>

         {/* xs button */}



        <Stack direction="row" spacing={4}>
          <Badge variant="dot" color="success">
            <NotificationsIcon color="primary" />
          </Badge>
          <Avatar
            sx={{
              witdh: "38px",
              height: "38px",
            }}
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Jane Doe"
          />
        </Stack>

        <Button
          sx={{
            width: "72px",
            height: "32px",
          }}
          color="primary"
          variant="contained"
          textColor="myblack"
          endIcon={<LanguageSharpIcon color="myblack" />}
        >
          <Typography variant="subtitle" color="myblack">
            TR:
          </Typography>
        </Button>
      </Stack>

      {/* kalb ve diğerleri bitiş */}
    </Box>
    // container Box bitiş
  );
};

export default ShopNavbarSatır1;
