import React from "react";

import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";

import { Stack, AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import Rectangle62 from "../../assets/Rectangle 62.svg";

const Navbar = () => {
  return (
    <Stack
      sx={{
        margin: "10px 50px 10px 50px",
      }}
    >
      <AppBar position="relative" sx={{ boxShadow: "none" }}>
        <Toolbar>
          <Stack direction="row" sx={{ 
            flexGrow: 1,
           }}>
            <Typography
              color="#F65936"
              sx={{
                fontFamily: "Roboto",
                fontSize: "36px",
                fontWeight: "300",
                lineHeight: "31px",
                letterSpacing: "0px",
                textAlign: "left",
                marginTop: "8px",
              }}
            >
              Trends
            </Typography>

            <Stack direction="column">
              <Stack
                spacing={0}
                sx={{
                  width: "38px",
                  marginLeft: "19px",
                  padding: "0px",
                }}
              >
                <img src={Rectangle62} alt="" />
              </Stack>

              <Typography
                color="#07232C"
                sx={{
                  fontFamily: "Roboto",
                  fontSize: "36px",
                  fontWeight: "300",
                  lineHeight: "31px",
                  letterSpacing: "0px",
                  textAlign: "left",
                }}
              >
                Booking
              </Typography>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={4}>
            <Button
              variant="text"
              size="large"
              color="mycolor"
              sx={{
                textTransform: "capitalize",
              }}
            >
              Giriş Yap
            </Button>
            <Button
              variant="text"
              size="large"
              color="mycolor"
              sx={{
                textTransform: "capitalize",
                border: "1px solid #F65936 ",
                padding: "10px",
              }}
            >
              İşletme Hesabı
            </Button>
            <Button
              size="large"
              color="mycolor"
              sx={{
                border: "1px solid #F65936 ",
                padding: "10px",
              }}
              variant="contained"
              textColor="primary"
              endIcon={<LanguageSharpIcon color="primary" />}
            >
              <Typography variant="subtitle" color="primary">
                TR:
              </Typography>
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Stack>
  );
};

export default Navbar;
