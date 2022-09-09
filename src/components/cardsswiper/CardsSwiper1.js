// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




import {
  Card,
  CardContent,
  CardMedia,
  
  Button,
  
  Stack,
  CardActionArea,
  
  Typography,
} from "@mui/material";

import assets1 from "../../assets/1.png";
import assets2 from "../../assets/2.png";
import assets7 from "../../assets/7.png";
import assets5 from "../../assets/5.png";
import assets6 from "../../assets/6.png";
import { SwipperContainer } from '../../styles/cardsswipper';


const CardsSwiper1 = () => {
    return (
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
          <CardMedia
            component="img"
            height="245"
            image={assets1}
           
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Güzellik salonları
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      </SwiperSlide>
        <SwiperSlide>
          
          <Card sx={{ maxWidth: 245 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="245"
            image={assets2}
           
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Kuaför salonları
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      </SwiperSlide>

        <SwiperSlide>
          
          <Card sx={{ maxWidth: 245 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="245"
            image={assets5}
           
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Hair styling
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </SwiperSlide>


    <SwiperSlide>


      <Card sx={{ maxWidth: 245 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="245"
            image={assets6}
         
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Berber salonları
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </SwiperSlide>
        <SwiperSlide><Card sx={{ maxWidth: 245 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="245"
            image={assets7}
           
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Manikür
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </SwiperSlide>
        <SwiperSlide>
          
        <Card sx={{ maxWidth: 245 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="245"
            image={assets1}
           
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Güzellik salonları
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      </SwiperSlide>
        <SwiperSlide>
          
          <Card sx={{ maxWidth: 245 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="245"
            image={assets2}
           
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Kuaför salonları
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      </SwiperSlide>

        <SwiperSlide>
          
          <Card sx={{ maxWidth: 245 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="245"
            image={assets5}
          
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Hair styling
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </SwiperSlide>


    <SwiperSlide>


      <Card sx={{ maxWidth: 245 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="245"
            image={assets6}
           
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Berber salonları
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </SwiperSlide>
        <SwiperSlide><Card sx={{ maxWidth: 245 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="245"
            image={assets7}
            
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Manikür
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </SwiperSlide>
       <br />
      </Swiper>
      
  

      </SwipperContainer>
      
    );
  };

export default CardsSwiper1