// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

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
  Box,
} from "@mui/material";

import Rectangle35 from "../../assets/Rectangle35.svg";
import Rectangle36 from "../../assets/Rectangle36.svg";
import Rectangle37 from "../../assets/Rectangle37.svg";
import Rectangle38 from "../../assets/Rectangle38.svg";
import yıldız from "../../assets/yıldız.svg";

import { SwipperContainer } from "../../styles/cardsswipper";

const SwipperList= [
  {
    id:"0",
    name:"card1",
    city:"Antalya",
    district:"kaş",
    rate:"4.2",
    imageUrl:"https://iatkv.tmgrup.com.tr/43076e/616/321/0/19/1200/645?u=https%3A%2F%2Fitkv.tmgrup.com.tr%2F2021%2F07%2F18%2F1626615346008.jpg"
  },
  {
    id:"1",
    name:"card2",
    city:"Antalya",
    district:"kaş",
    rate:"4.2",
    imageUrl:"https://iatkv.tmgrup.com.tr/43076e/616/321/0/19/1200/645?u=https%3A%2F%2Fitkv.tmgrup.com.tr%2F2021%2F07%2F18%2F1626615346008.jpg"
  },
  {
    id:"2",
    name:"card3",
    city:"Antalya",
    district:"kaş",
    rate:"4.2",
    imageUrl:"https://iatkv.tmgrup.com.tr/43076e/616/321/0/19/1200/645?u=https%3A%2F%2Fitkv.tmgrup.com.tr%2F2021%2F07%2F18%2F1626615346008.jpg"
  },
  {
    id:"3",
    name:"card1",
    city:"Antalya",
    district:"kaş",
    rate:"4.2",
    imageUrl:"https://iatkv.tmgrup.com.tr/43076e/616/321/0/19/1200/645?u=https%3A%2F%2Fitkv.tmgrup.com.tr%2F2021%2F07%2F18%2F1626615346008.jpg"
  },
  {
    id:"4",
    name:"card1",
    city:"Antalya",
    district:"kaş",
    rate:"4.2",
    imageUrl:"https://iatkv.tmgrup.com.tr/43076e/616/321/0/19/1200/645?u=https%3A%2F%2Fitkv.tmgrup.com.tr%2F2021%2F07%2F18%2F1626615346008.jpg"
  },
  {
    id:"5",
    name:"card1",
    city:"Antalya",
    district:"kaş",
    rate:"4.2",
    imageUrl:"https://iatkv.tmgrup.com.tr/43076e/616/321/0/19/1200/645?u=https%3A%2F%2Fitkv.tmgrup.com.tr%2F2021%2F07%2F18%2F1626615346008.jpg"
  },
  {
    id:"6",
    name:"card1",
    city:"Antalya",
    district:"kaş",
    rate:"4.2",
    imageUrl:"https://iatkv.tmgrup.com.tr/43076e/616/321/0/19/1200/645?u=https%3A%2F%2Fitkv.tmgrup.com.tr%2F2021%2F07%2F18%2F1626615346008.jpg"
  },
  {
    id:"7",
    name:"card1",
    city:"Antalya",
    district:"kaş",
    rate:"4.2",
    imageUrl:"https://iatkv.tmgrup.com.tr/43076e/616/321/0/19/1200/645?u=https%3A%2F%2Fitkv.tmgrup.com.tr%2F2021%2F07%2F18%2F1626615346008.jpg"
  },
  {
    id:"8",
    name:"card1",
    city:"Antalya",
    district:"kaş",
    rate:"4.2",
    imageUrl:"https://iatkv.tmgrup.com.tr/43076e/616/321/0/19/1200/645?u=https%3A%2F%2Fitkv.tmgrup.com.tr%2F2021%2F07%2F18%2F1626615346008.jpg"
  },
  {
    id:"9",
    name:"card1",
    city:"Antalya",
    district:"kaş",
    rate:"4.2",
    imageUrl:"https://iatkv.tmgrup.com.tr/43076e/616/321/0/19/1200/645?u=https%3A%2F%2Fitkv.tmgrup.com.tr%2F2021%2F07%2F18%2F1626615346008.jpg"
  },
  {
    id:"10",
    name:"card1",
    city:"Antalya",
    district:"kaş",
    rate:"4.2",
    imageUrl:"https://iatkv.tmgrup.com.tr/43076e/616/321/0/19/1200/645?u=https%3A%2F%2Fitkv.tmgrup.com.tr%2F2021%2F07%2F18%2F1626615346008.jpg"
  },
  {
    id:"11",
    name:"card1",
    city:"Antalya",
    district:"kaş",
    rate:"4.2",
    imageUrl:"https://iatkv.tmgrup.com.tr/43076e/616/321/0/19/1200/645?u=https%3A%2F%2Fitkv.tmgrup.com.tr%2F2021%2F07%2F18%2F1626615346008.jpg"
  },
]

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
          // slidesPerView={4}

          breakpoints={{
            // when window width is >= 1200px
            1200: {
              width: 1200,
              slidesPerView: 4,
            },
            // when window width is >= 900px
            900: {
              width: 900,
              slidesPerView: 3,
            },
            // when window width is >= 600px
            600: {
              width: 600,
              slidesPerView: 2,
            },
          }}
        >
          {
            SwipperList.map((item,index)=>{
              return(
                <SwiperSlide key={index}>

            <Card sx={{ maxWidth: 245, position:"relative" }}>
              <CardActionArea>
              <Box sx={{
                display:"flex",
                width:"76px",
                height:"30px",
                background:"#FFFFFF",
                boxShadow:"0px 0px 20px rgba(0, 0, 0, 0.08)",
                borderRadius:"30px",
                position: "absolute",
                top:"10px",
                right: "10px",
              }}>
                <Typography
                    sx={{
                      fontFamily: "Roboto",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "14px",
                      lineHeight: "16px",
                      color: "#07232C",
                      padding:"6px 0px 0px 15px",
                    }}
                  >
                    {item.rate} 
                  </Typography>
                  <Box sx={{
                    padding:"5px 0px 0px 10px",

                  }}>
                  <img src={yıldız} alt="yıldız" />

                  </Box>
                  
              
              </Box>
                <CardMedia component="img" height="245" image={item.imageUrl} />

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
                    {item.name}
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
                   {item.district}/{item.city}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </SwiperSlide>
              )
            }

            )
          }
          
          

          <br />
          <br />
        </Swiper>
      </SwipperContainer>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Button
          variant="contained"
          textColor="primary"
          size="large"
          sx={{
            width: "168px",
            height: "44px",
            // left:"670px",
            background: "#F75936",
            borderRadius: "6px",
            marginBottom: "50px",
            textTransform: "capitalize",
          }}
          endIcon={<ArrowRightAltIcon color="primary" />}
        >
          <Typography variant="body1" color="primary">
            {" "}
            Daha Fazla
          </Typography>
        </Button>
      </Stack>
    </>
  );
};

export default CardsSwiper1;
