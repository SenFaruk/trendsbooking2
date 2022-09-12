// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Stack,
  CardActionArea,
  Typography,
} from "@mui/material";

import Rectangle35 from "../../assets/Rectangle35.svg";
import Rectangle36 from "../../assets/Rectangle36.svg";
import Rectangle37 from "../../assets/Rectangle37.svg";
import Rectangle38 from "../../assets/Rectangle38.svg";

import { SwipperContainer } from "../../styles/cardsswipper";

const CardsSwiper1 = () => {
  return (
    <>
    <SwipperContainer>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        spaceBetween={20}
        slidesPerView={4}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Card sx={{ maxWidth: 245 }}>
            <CardActionArea>
              <CardMedia component="img" height="245" image={Rectangle35} />
              <CardContent>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "19px",
                    color: "#07232C",
                  }}
                >
                  North Güzellik Salonu
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#9A9A9A",
                  }}
                >
                  Kaş / Antalya
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card sx={{ maxWidth: 245 }}>
            <CardActionArea>
              <CardMedia component="img" height="245" image={Rectangle36} />
              <CardContent>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "19px",
                    color: "#07232C",
                  }}
                >
                  N&A Güzellik Salonu
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#9A9A9A",
                  }}
                >
                  Bornova / İzmir
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card sx={{ maxWidth: 245 }}>
            <CardActionArea>
              <CardMedia component="img" height="245" image={Rectangle37} />
              <CardContent>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "19px",
                    color: "#07232C",
                  }}
                >
                  Ahmet Barber Shop
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#9A9A9A",
                  }}
                >
                  Beyoğlu / İstanbul
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card sx={{ maxWidth: 245 }}>
            <CardActionArea>
              <CardMedia component="img" height="245" image={Rectangle38} />
              <CardContent>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "19px",
                    color: "#07232C",
                  }}
                >
                  Merve COŞKUN Güzellik Merkezi
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#9A9A9A",
                  }}
                >
                  Ankara / Çankaya
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card sx={{ maxWidth: 245 }}>
            <CardActionArea>
              <CardMedia component="img" height="245" image={Rectangle35} />
              <CardContent>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "19px",
                    color: "#07232C",
                  }}
                >
                  North Güzellik Salonu
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#9A9A9A",
                  }}
                >
                  Kaş / Antalya
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card sx={{ maxWidth: 245 }}>
            <CardActionArea>
              <CardMedia component="img" height="245" image={Rectangle36} />
              <CardContent>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "19px",
                    color: "#07232C",
                  }}
                >
                  N&A Güzellik Salonu
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#9A9A9A",
                  }}
                >
                  Bornova / İzmir
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card sx={{ maxWidth: 245 }}>
            <CardActionArea>
              <CardMedia component="img" height="245" image={Rectangle37} />
              <CardContent>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "19px",
                    color: "#07232C",
                  }}
                >
                  Ahmet Barber Shop
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#9A9A9A",
                  }}
                >
                  Beyoğlu / İstanbul
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card sx={{ maxWidth: 245 }}>
            <CardActionArea>
              <CardMedia component="img" height="245" image={Rectangle38} />
              <CardContent>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "19px",
                    color: "#07232C",
                  }}
                >
                  Merve COŞKUN Güzellik Merkezi
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#9A9A9A",
                  }}
                >
                  Ankara / Çankaya
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </SwiperSlide>

        <br />
        <br />
      </Swiper>
    </SwipperContainer>

    <Button variant="contained"  textColor="primary" size="large"
               sx={{
      width:"168px",
      height:"44px",
      left:"670px",     
      background:"#F75936",
      borderRadius:"6px",
      marginBottom:"50px",
      textTransform: "capitalize",
      

    }} 
    endIcon={<ArrowRightAltIcon color="primary"/>}>
      <Typography variant="body1" color="primary"> Daha Fazla</Typography>
     
      
    </Button>


    </>
  );
};

export default CardsSwiper1;
