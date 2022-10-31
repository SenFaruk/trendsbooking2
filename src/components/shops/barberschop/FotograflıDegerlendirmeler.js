import { Box, Typography } from '@mui/material'
import Rectangle198 from "../../../assets/Rectangle 198.png"
import Rectangle199 from "../../../assets/Rectangle 199.png"
import Rectangle200 from "../../../assets/Rectangle 200.png"
import Rectangle201 from "../../../assets/Rectangle 201.png"
import Rectangle202 from "../../../assets/Rectangle 202.png"


const FotograflıDegerlendirmeler = () => {
  return (
    // container
    <Box sx={{
        display:"flex",
        flexDirection: "column",
        justifyContent:"space-between",
      
    }}>
        {/* Fotoğraflı Değerlendirmeler  67 Fotoğraf*/}
        <Box sx={{
            display:"flex",
            justifyContent:"space-between",
            width: "300px",
            mb:4,
     

        }}>

        <Typography
        sx={{
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "15px",
          lineHeight: "18px",
          letterSpacing: "0.3px",
          color: "#07232C",
        }}
      >
       Fotoğraflı Değerlendirmeler
      </Typography>
        <Typography
        sx={{
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "15px",
          lineHeight: "18px",
          letterSpacing: "0.3px",
          color: "#9A9A9A",
        }}
      >
       67 Fotoğraf
      </Typography>

        </Box>
        {/* Fotoğraflı Değerlendirmeler  67 Fotoğraf*/}
    <Box sx={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",

    }}>
        <img src={Rectangle198} alt="" />
        <img src={Rectangle199} alt="" />
        <img src={Rectangle200} alt="" />
        <img src={Rectangle201} alt="" />
        <img src={Rectangle202} alt="" />

    </Box>

    </Box>
    // container
  )
}

export default FotograflıDegerlendirmeler