import Rectangle4 from "../../assets/Rectangle4.svg";
import { styled } from "@mui/material/styles";


export const HeaderContainer = styled("div")(({ theme }) => ({
  background: `url(${Rectangle4})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  position: "relative",
width: "1424px",
height: "557px",
left: "50px",
right:"50px",



borderRadius: "30px",

}));

export const SearchContainer = styled('div')(({ theme }) => ({
position: "absolute",
width: "848px",
height: "64px",
left: "259px",
top: "418px",

background: "#FFFFFF",
boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.08)",
borderRadius: "6px",

}));


