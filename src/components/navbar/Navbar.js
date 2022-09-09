import React from "react";

import { StyledTypography } from "../../styles/navbar";

import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";

import { Stack, AppBar, Toolbar, Button, Typography,  } from "@mui/material";

const Navbar = () => {
  return (
  
    <AppBar position=""  sx={{boxShadow:"none", marginTop:"10px"}}>
      <Toolbar>
      
          <Stack direction="row" sx={{ flexGrow: 1}}>
            <StyledTypography color="#F65936">Trends</StyledTypography>
            <StyledTypography color="#07232C">Booking</StyledTypography>
          </Stack>

          <Stack direction="row" spacing={2}>
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

  );
};

export default Navbar;
