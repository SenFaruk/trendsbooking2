import { Box, Typography } from "@mui/material";
import shopImage from "../../../assets/shopImage.png";

const Image = () => {
  return (
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
  );
};

export default Image;
