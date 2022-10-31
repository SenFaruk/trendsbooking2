import { Box, Button, Typography } from "@mui/material";
import Rectangle104 from "../../../assets/Rectangle 104.png";
import Rectangle107 from "../../../assets/Rectangle 107.png";
import Rectangle108 from "../../../assets/Rectangle 108.png";


const Galeri = () => {
  return (
    <Box>
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "20px",
            lineHeight: "23px",
            color: "#07232C",
            mb:4
          }}
        >
          Galeri
        </Typography>
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
       
      }}
    >
      <Box>
        <img src={Rectangle104} alt="" />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <img src={Rectangle107} alt=""  />
        </Box>
        <Box>
          <img src={Rectangle108} alt="" />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <img src={Rectangle107} alt="" />
        </Box>
        <Box>
          <img src={Rectangle108} alt="" />
        </Box>
      </Box>
    </Box>
    <Button variant="contained"
        sx={{
            textTransform: "capitalize",
            width:"850px",
            height:"45px",
            borderRadius:"6px", 
            border: "1px solid #07232C",
            mt:3
        }}
        
        >Daha Fazla</Button>
    </Box>
  );
};

export default Galeri;
