import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const Hakkımızda = () => {
  return (
    <Box
      sx={{
       
        display: "flex",
        justifyContent: "space-between",
       
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
  );
};

export default Hakkımızda;
