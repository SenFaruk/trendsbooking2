import React from "react";
import { Box, Button, Fab, Stack } from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const RandevuAl = () => {
  return (
    // container
    <Box
      sx={{
        width:"720px",
        display: "flex",
        justifyContent: "space-between",
        ml:4,
      }}
    >
      {/* buttonlar */}
      <Stack direction="row" spacing={2}>
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
      <Stack direction="row" spacing={2} >
      <Fab color="myblack" aria-label="Instagram">
        <InstagramIcon sx={{color:"white"}} />
    </Fab>
      <Fab color="myblack" aria-label="Facebook">
        <FacebookIcon sx={{color:"white"}} />
    </Fab>

      </Stack>

      {/* sosyalmedya */}
    </Box>
    // container
  );
};

export default RandevuAl;
