
import mobilback from "../../assets/mobilback.jpg";
import { styled } from "@mui/material/styles";


export const MobilContainer = styled("div")(({ theme }) => ({
  background: `url(${mobilback})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  position: "relative",
  width: "1420px",
height: "364px",
left: "50px",
right:"50px",

borderRadius: "30px",

}));