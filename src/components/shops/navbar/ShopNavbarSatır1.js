import React from "react";
import { Box, Button, Divider, InputBase, Stack, Typography } from "@mui/material";
import ShopRectangle62 from "../../../assets/ShopRectangle 62.svg";
import SearchIcon from "@mui/icons-material/Search";
import PlaceIcon from "@mui/icons-material/Place";
import DateRangeIcon from '@mui/icons-material/DateRange';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ShopNavbarSatır1 = () => {
  return (
    // container Box başlangıc
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* TrendsBooking */}
      <Box sx={{
        border: "1px solid #F65936 ",
        mt:1
      }}>
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

      {/* searchbar başlangıç */}

      <Box
      sx={{
            width:"650px",
            height:"52px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"#FFFFFF",
            boxShadow:"0px 0px 20px rgba(0, 0, 0, 0.08)",
            borderRadius:"6px",
            border: "1px solid #F65936 ",
            mt:1,

      }}
            
          
         
          >
            <Stack direction="row" padding="15px" spacing={1}>
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
          <Box sx={{
            display: "flex",
            flexDirection:"row",
            justifyContent: "space-between",

          }}>


          </Box>

          {/* kalb ve diğerleri bitiş */}


    </Box>
    // container Box bitiş
  );
};

export default ShopNavbarSatır1;
