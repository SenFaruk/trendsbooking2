import React from "react";
import { HeaderContainer, SearchContainer } from "../../styles/herobg";

import {
  Typography,
  Stack,
  Autocomplete,
  TextField,
  Button,
} from "@mui/material";
import { Hizmetler } from "../../data/Hizmetler";
import { Cities } from "../../data/Cities";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";

const HeroBg = () => {
  return (
    <HeaderContainer>
      <Typography
        sx={{
          position: "relative",
          width: "547px",
          height: "77px",
          left: "410px",
          top: "267px",
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "800",
          fontSize: "70px",
          lineHeight: "110%",
          textAlign: "center",
          color: "white",
        }}
      >
        Bi güzellik yapın!
      </Typography>

      <Typography
        sx={{
          position: "absolute",
          width: "589px",
          height: "34px",
          left: "389px",
          top: "345px",
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "22px",
          lineHeight: "26px",
          textAlign: "center",
          color: "#FFFFFF",
        }}
      >
        Size en uygun salonlardan online randevunuzu kolayca alın.
      </Typography>

      <SearchContainer>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          margin="10px 5px 10px 5px"
        >
          <Autocomplete
            options={Hizmetler}
            sx={{
              width: "400px",
              backgroundColor: "#ffff ",
            }}
            renderInput={(params) => (
              <TextField {...params} label="Aradığınız hizmeti" size="small" />
            )}
          />

          <Autocomplete
            options={Cities}
            sx={{
              width: "400px",
              backgroundColor: "#ffff",
            }}
            renderInput={(params) => (
              <TextField {...params} label="Ankara...." size="small" />
            )}
          />

          <Button color="mycolor" variant="contained">
            Ara
          </Button>
        </Stack>
      </SearchContainer>
      <Button
        size="large"
        sx={{
          position: "relative",
          left: "46%",

          top: "92%",
          bottom: "41%",
          padding: "15px 10px 15px 10px",

          border: "2px solid #FFFFFF",
        }}
      >
        <ExpandMoreSharpIcon />
      </Button>
    </HeaderContainer>
  );
};

export default HeroBg;
