import React from 'react'
import { Box, Typography } from "@mui/material";
import shopImage from "../../../assets/shopImage.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";



const Image = () => {
  return (
    <Box sx={{
      
      width: "516px",
      height: "780px",
      // position: "fixed",
      
      
    }}>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Box
      sx={{
        position: "relative",
        background: `url(${shopImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "516px",
        height: "780px",
        borderRadius: "20px",
        mt: 4,
        mr:3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "99px",
          height: "99px",
          background: "#000000",
          opacity: 0.5,
          borderRadius: "0px 20px 0px 0px",
          position: "absolute",
          right: "0px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "40px",
            lineHeight: "47px",
            color: "#FFFFFF",
          }}
        >
          4.8
        </Typography>
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "15px",
            lineHeight: "18px",
            color: "#FFFFFF",
          }}
        >
          220
        </Typography>
      </Box>
    </Box>

        </SwiperSlide>
        <SwiperSlide>
        <Box
      sx={{
        position: "relative",
        background: `url(${shopImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "516px",
        height: "780px",
        borderRadius: "20px",
        mt: 4,
        mr:3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "99px",
          height: "99px",
          background: "#000000",
          opacity: 0.5,
          borderRadius: "0px 20px 0px 0px",
          position: "absolute",
          right: "0px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "40px",
            lineHeight: "47px",
            color: "#FFFFFF",
          }}
        >
          4.8
        </Typography>
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "15px",
            lineHeight: "18px",
            color: "#FFFFFF",
          }}
        >
          220
        </Typography>
      </Box>
    </Box>

        </SwiperSlide>
        <SwiperSlide>
        <Box
      sx={{
        position: "relative",
        background: `url(${shopImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "516px",
        height: "780px",
        borderRadius: "20px",
        mt: 4,
        mr:3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "99px",
          height: "99px",
          background: "#000000",
          opacity: 0.5,
          borderRadius: "0px 20px 0px 0px",
          position: "absolute",
          right: "0px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "40px",
            lineHeight: "47px",
            color: "#FFFFFF",
          }}
        >
          4.8
        </Typography>
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "15px",
            lineHeight: "18px",
            color: "#FFFFFF",
          }}
        >
          220
        </Typography>
      </Box>
    </Box>

        </SwiperSlide>
        <SwiperSlide>
        <Box
      sx={{
        position: "relative",
        background: `url(${shopImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "516px",
        height: "780px",
        borderRadius: "20px",
        mt: 4,
        mr:3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "99px",
          height: "99px",
          background: "#000000",
          opacity: 0.5,
          borderRadius: "0px 20px 0px 0px",
          position: "absolute",
          right: "0px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "40px",
            lineHeight: "47px",
            color: "#FFFFFF",
          }}
        >
          4.8
        </Typography>
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "15px",
            lineHeight: "18px",
            color: "#FFFFFF",
          }}
        >
          220
        </Typography>
      </Box>
    </Box>

        </SwiperSlide>
        <SwiperSlide>
        <Box
      sx={{
        position: "relative",
        background: `url(${shopImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "516px",
        height: "780px",
        borderRadius: "20px",
        mt: 4,
        mr:3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "99px",
          height: "99px",
          background: "#000000",
          opacity: 0.5,
          borderRadius: "0px 20px 0px 0px",
          position: "absolute",
          right: "0px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "40px",
            lineHeight: "47px",
            color: "#FFFFFF",
          }}
        >
          4.8
        </Typography>
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "15px",
            lineHeight: "18px",
            color: "#FFFFFF",
          }}
        >
          220
        </Typography>
      </Box>
    </Box>

        </SwiperSlide>
        <SwiperSlide>
        <Box
      sx={{
        position: "relative",
        background: `url(${shopImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "516px",
        height: "780px",
        borderRadius: "20px",
        mt: 4,
        mr:3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "99px",
          height: "99px",
          background: "#000000",
          opacity: 0.5,
          borderRadius: "0px 20px 0px 0px",
          position: "absolute",
          right: "0px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "40px",
            lineHeight: "47px",
            color: "#FFFFFF",
          }}
        >
          4.8
        </Typography>
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "15px",
            lineHeight: "18px",
            color: "#FFFFFF",
          }}
        >
          220
        </Typography>
      </Box>
    </Box>

        </SwiperSlide>
        <SwiperSlide>
        <Box
      sx={{
        position: "relative",
        background: `url(${shopImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "516px",
        height: "780px",
        borderRadius: "20px",
        mt: 4,
        mr:3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "99px",
          height: "99px",
          background: "#000000",
          opacity: 0.5,
          borderRadius: "0px 20px 0px 0px",
          position: "absolute",
          right: "0px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "40px",
            lineHeight: "47px",
            color: "#FFFFFF",
          }}
        >
          4.8
        </Typography>
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "15px",
            lineHeight: "18px",
            color: "#FFFFFF",
          }}
        >
          220
        </Typography>
      </Box>
    </Box>

        </SwiperSlide>
        
      </Swiper>
    </Box>
  );
}

export default Image