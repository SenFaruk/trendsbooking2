import React from "react";

import { Box, ButtonGroup, Button, Stack, Typography } from "@mui/material";

import { buttons } from "./Buttons";

const Sıkcasorulansorular = () => {
  return (
    <Box sx={{
        margin:"100px"
    }}>
    <Stack direction="column" spacing={10}>
    <Stack direction="column" spacing={2}>
      <Typography
        sx={{
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "60px",
          lineHeight: "70px",
          textAlign: "center",
          color: "#07232C",
        }}
      >
        Sıkca Sorulan Sorular
      </Typography>
      <Typography
        sx={{
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "20px",
          lineHeight: "30px",
          textAlign: "center",
          color: "#9A9A9A",
        }}
      >
        Sizlere en iyi hizmeti sunabılmek için çok çalışıyoruz. Sizler için en
        çok sorulan soruları derledik{" "}
      </Typography>
      </Stack>
      <Box
        sx={{
          marginLeft: "56px",
        }}
      >
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="text"
          color="myblack"
          sx={{
            margin: "30px",
            padding: "0px",
          }}
        >
          {buttons}
        </ButtonGroup>
      </Box>
      </Stack>
    </Box>
  );
};

export default Sıkcasorulansorular;
