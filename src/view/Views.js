import React from "react";
import { ThemeProvider } from "@mui/system";
import Navbar from "../components/navbar/Navbar";
import theme from "../styles/theme";

import HeroBg from "../components/herobg/HeroBg";
import NavItems from "../components/navıtems/NavItems";
import Highlights from "../components/highlights/Highlights";
import CardsSwiper1 from "../components/cardsswiper/CardsSwiper1";
import Mutlu from "../components/mutlu/Mutlu";
import Cardcards from "../components/cards/Cardcards";
import Yazılım from "../components/yazılım/Yazılım";
import Tektık from "../components/tektık/Tektık";
import Mobiluygulama from "../components/mobiluygulama/Mobiluygulama";
import Sıkcasorulansorular from "../components/sıkcasorulansorular/Sıkcasorulansorular";
import Footer from "../components/footer/Footer";

const Views = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <HeroBg />
      <NavItems/>
      <Highlights/>
      <CardsSwiper1/>
      <Mutlu/>
      <Cardcards/>
      <Yazılım/>
      <Tektık/>
      <Mobiluygulama/>
      <Sıkcasorulansorular/>
      <Footer/>
    </ThemeProvider>
  );
};

export default Views;
