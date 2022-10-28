import { Box } from '@mui/material'
import Rectangle104 from "../../../assets/Rectangle 104.png"
import Rectangle107 from "../../../assets/Rectangle 107.png"
import Rectangle108 from "../../../assets/Rectangle 108.png"


const Galeri = () => {
  return (
    <Box sx={{
        display: 'flex',
        justifyContent:"space-between",
        alignItems:"center",
        border: "5px solid blue",
    }}>
        <Box >
            <img src={Rectangle104} alt="" />
        </Box>
        <Box sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            alignItems:"center",
        }}>
            <Box>
            <img src={Rectangle107} alt="" />
            </Box>
            <Box>
            <img src={Rectangle108} alt="" />
            </Box>


        </Box>
        <Box sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            alignItems:"center",
        }}>
            <Box>
            <img src={Rectangle107} alt="" />
            </Box>
            <Box>
            <img src={Rectangle108} alt="" />
            </Box>


        </Box>

    </Box>
  )
}

export default Galeri
