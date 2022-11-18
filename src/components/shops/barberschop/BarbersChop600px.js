import { Avatar, Box, Button, Fab, Stack, Typography } from "@mui/material";
import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Barber900px from "../../../assets/Barber900px.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import harita from "../../../assets/haritaimg.png";
import Image600px from "./Image600px";
import Hizmetler from "./Hizmetler";
import PopülerHizmetler from "./PopülerHizmetler";
import DigerHizmetler from "./DigerHizmetler";
import Galeri from "./Galeri";
import Yorumlar from "./Yorumlar";
import FotograflıDegerlendirmeler from "./FotograflıDegerlendirmeler";
import { Yorum6837 } from "./Yorum6837";
import YıldızlıYorumlar from "./YıldızlıYorumlar";

function createData(day, hour ) {
  return { day, hour };
}

const rows = [
  createData('Pazartesi', "8:00 - 17:00"),
  createData('Salı', "8:00 - 17:00"),
  createData('Çarşamba', "8:00 - 17:00"),
  createData('Perşembe', "8:00 - 17:00"),
  createData('Cuma', "8:00 - 17:00"),
  createData('Cumartesi', "8:00 - 13:00"),
  createData('Pazar', "Kapalı"),
];



const BarbersChop600px = () => {
  return (
    // container

    <Box
      sx={{
        width: "100%",
        height: "1500px",
        display: {
          xs:"flex",
          sm: "none",
          md: "none",
      
        },
        flexDirection: "column",
        justifyContent: "space-around",
       
      }}
    >
     <Image600px/>

    {/* // container Barberschop Ciach & Style */}
    <Box
      sx={{
        
        display: "flex",
        justifyContent: "space-between",
        width: "540px",
        ml:4,       
      }}
    >
      {/* Barberschop Ciach & Style */}

      {/* <Box  >
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "32px",
            lineHeight: "38px",
            color: "#07232C",
          }}
        >
          Barberschop Ciach & Style
        </Typography>

        <Typography
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "15px",
            lineHeight: "18px",
            color: "#9A9A9A",
          }}
        >
          Kızılay, Yiğit Apartmanı, Meşrutiyet mahallesi, Konur Sok. D:No:9/11,
          06420 Ankara
        </Typography>
      </Box>
      <Box>
        <FavoriteBorderIcon sx={{ fontSize: 35 }} />
      </Box> */}

      {/* Barberschop Ciach & Style */}
    </Box>
     {/* // container Barberschop Ciach & Style */}

     {/* randaevu Al */}
     {/* buttonlar */}
     <Stack direction="row" spacing={4} sx={{
      ml:4
     }}>
        <Button variant="contained" startIcon={<PhoneInTalkIcon />}
        sx={{
            width:"195px",
            height:"44px",
            borderRadius:"6px", 
        }}>
          0505 735 82 25
        </Button>
        <Button variant="contained"
        sx={{
            textTransform: "capitalize",
            width:"195px",
            height:"44px",
            background:"#F75936",
            borderRadius:"6px", 
        }}
        
        >Randevu Al</Button>
      </Stack>
      {/* buttonlar */}
       {/* sosyalmedya */}
       <Stack direction="row" spacing={2} sx={{
      ml:4
     }}>
      <Fab color="myblack" aria-label="Instagram">
        <InstagramIcon sx={{color:"white"}} />
    </Fab>
      <Fab color="myblack" aria-label="Facebook">
        <FacebookIcon sx={{color:"white"}} />
    </Fab>

      </Stack>

      {/* sosyalmedya */}

     {/* randaevu Al */}

     {/* hakkımızda */}
     <Box
      sx={{
       
        display: "flex",
        justifyContent: "space-between",
        ml:4,
        width:"540px",
       
      }}
    >
      <Stack direction="column" spacing={2}>
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "20px",
            lineHeight: "23px",
            color: "#07232C",
          }}
        >
          Hakkımızda
        </Typography>
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "15px",
            lineHeight: "22px",
            color: "#07232C",
          }}
        >
          Barberschop Ciach & Style Men's Hairdresser💈 It was established in
          2015 out of passion for hairdressing. It is our job and at the same
          time a sneak peek and a hobby 🔥individual approach to the client
          gives us a mega effective work ...
        </Typography>
      </Stack>
    </Box>
     {/* hakkımızda */}
     {/* harita */}
     <Box sx={{
                width: "540px",
                height: "250px",
                background: `url(${harita})`,
                borderRadius: "10px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                ml:4
               
            }}>
                 
            </Box>
     {/* harita */}

     {/* çalışma saatleri  */}

     {/*  çalışma saatleri ve ekibimiz */}
     <Box sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mr:4,
     }}>

    
     <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
     }}>
     
      <Box sx={{
            width: "291px",
            height: "448px",    
            background: "#FAFAFA",
            borderRadius: "10px",
            ml:5,
        }}>

        
        <Stack spacing={2}>
        <Typography
        sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#07232C",
            pb:2,
            pt:1,
          }}>
            Çalışma Saatleri

        </Typography>
    <TableContainer >
      <Table size="small" aria-label="table">
       
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              
              <TableCell sx={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "18px",
                color: "#9A9A9A",
              }}>
                {row.day}
                <br />
                <br />
                </TableCell>
              <TableCell align="right"
              sx={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "15px",
                lineHeight: "18px",
                color: "#07232C",
              }}>{row.hour}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Stack>
       
        </Box> 
     

     </Box>
     {/* çalışma saatleri /}

    
      {/* Ekibimiz  */}
      <Box>
      <Box>
      <Typography
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "18px",
            lineHeight: "21px",
            color: "#07232C",
          }}
        >
          Ekibimiz
        </Typography>
      </Box>

      <Box sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "174px",
        height: "402px",
    


      }}>

     
   

<Stack
direction="column"
justifyContent="center"
alignItems="center"
spacing={2}
>
<Avatar
sx={{
  width: "70px",
  height: "70px",
}}
src="https://randomuser.me/api/portraits/women/79.jpg"
alt="Jane Doe"

/>
<Typography
sx={{
fontFamily: "Roboto",
fontStyle: "normal",
fontWeight: "500",
fontSize: "15px",
lineHeight: "18px",
color: "#07232C",
}}>
Tarık
</Typography>
</Stack>



<Stack
direction="column"
justifyContent="center"
alignItems="center"
spacing={2}
>
<Avatar
sx={{
  width: "70px",
  height: "70px",
}}
src="https://randomuser.me/api/portraits/women/79.jpg"
alt="Jane Doe"

/>
<Typography
sx={{
fontFamily: "Roboto",
fontStyle: "normal",
fontWeight: "500",
fontSize: "15px",
lineHeight: "18px",
color: "#07232C",
}}>
Tarık
</Typography>
</Stack>




<Stack
direction="column"
justifyContent="center"
alignItems="center"
spacing={2}
>
<Avatar
sx={{
  width: "70px",
  height: "70px",
}}
src="https://randomuser.me/api/portraits/women/79.jpg"
alt="Jane Doe"

/>
<Typography
sx={{
fontFamily: "Roboto",
fontStyle: "normal",
fontWeight: "500",
fontSize: "15px",
lineHeight: "18px",
color: "#07232C",
}}>
Tarık
</Typography>
</Stack>
<Stack
direction="column"
justifyContent="center"
alignItems="center"
spacing={2}
>
<Avatar
sx={{
  width: "70px",
  height: "70px",
}}
src="https://randomuser.me/api/portraits/women/79.jpg"
alt="Jane Doe"

/>
<Typography
sx={{
fontFamily: "Roboto",
fontStyle: "normal",
fontWeight: "500",
fontSize: "15px",
lineHeight: "18px",
color: "#07232C",
}}>
Tarık
</Typography>
</Stack>
<Stack
direction="column"
justifyContent="center"
alignItems="center"
spacing={2}
>
<Avatar
sx={{
  width: "70px",
  height: "70px",
}}
src="https://randomuser.me/api/portraits/women/79.jpg"
alt="Jane Doe"

/>
<Typography
sx={{
fontFamily: "Roboto",
fontStyle: "normal",
fontWeight: "500",
fontSize: "15px",
lineHeight: "18px",
color: "#07232C",
}}>
Tarık
</Typography>
</Stack>

</Box>
</Box>




{/* Ekibimiz  */}
</Box>
     {/*  çalışma saatleri ve ekibimiz */}

<Box>
  

</Box>
     
   

    </Box>
     // container
     
  );
};

export default BarbersChop600px;
