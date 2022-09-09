import Maymun from "../../assets/uyu.jpeg";
import { styled, alpha } from "@mui/material/styles";
import { InputBase,Button } from "@mui/material";


export const HeaderContainer = styled("div")(({ theme }) => ({
  background: `url(${Maymun})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  position: "absolute",
width: "1424px",
height: "557px",
left: "50px",
right:"50px",
top: "96px",


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


