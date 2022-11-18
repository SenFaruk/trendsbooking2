import React, { useState } from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import circlearrowdown from "../../../assets/circlearrowdown.svg";
import Sactrası from "./Sactrası";
import SacBoyama from "./SacBoyama";

const DigerHizmetler = () => {
  const [open, setOpen] = useState(false);
  const [boyama, setBoyama] = useState(false);
  

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleBoyama = () => {
    setOpen(!boyama);
  };

  return (
    // container
    <Box>
      <Box >
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
          Diğer Hizmetler
        </Typography>

        <Button
          variant="outlined"
          onClick={handleOpen}
          sx={{
            
              my:3,
       
            textTransform: "capitalize",
            width: "848px",
            height: "50px",

            borderRadius: "6px",
            border: "1px solid #F75936",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#F75936",
              borderColor: "#F75936",
              boxShadow: "none",
            },
          }}
        >
          {" "}
          <Box
            sx={{
              width: "848px",
              height: "50px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#F75936",
              }}
            >
              Saç Traşı
            </Typography>
            <img
              src={circlearrowdown}
              Width="20px"
              Height="20px"
              color="#F75936"
              alt=""
            />
          </Box>
        </Button>
      </Box>

      {open ? <Sactrası /> : ""}

      <Button
          variant="outlined"
          disableRipple
          onClick={handleBoyama}
          sx={{
            
              my:3,
       
            textTransform: "capitalize",
            width: "848px",
            height: "50px",

            borderRadius: "6px",
            border: "1px solid #F75936",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#F75936",
              borderColor: "#F75936",
              boxShadow: "none",
            },
          }}
        >
          {" "}
          <Box
            sx={{
              width: "848px",
              height: "50px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#F75936",
              }}
            >
              Saç Boyama
            </Typography>
            <img
              src={circlearrowdown}
              Width="20px"
              Height="20px"
              color="#F75936"
              alt=""
            />
          </Box>
        </Button>

        {boyama ? <SacBoyama /> : ""}

    </Box>
    // container
  );
};

export default DigerHizmetler;
