import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { Box, Stack } from "@mui/material";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";

export default function NavItems() {
  const [value, setValue] = React.useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log({value});

  return (
    <Box sx={{ margin: "20px 150px 20px 150px" ,
    display: {
      xs: "none",
      sm: "block",
      md: "block",
      lg: "block",
      xl: "block",
    },
    
    
    }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        variant="fullWidth"
        aria-label="secondary tabs example"
      >
        <Tab
          value="Kuaför"
          label="Kuaför"
          sx={{
            textTransform: "capitalize",
            display: {
              xs: "block",
              sm: "block",
              md: "block",
              lg: "block",
              xl: "block",
            },
          }}
        />
        <Tab
          value="Berber"
          label="Berber"
          sx={{
            textTransform: "capitalize",
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "block",
              xl: "block",
            },
          }}
        />
        <Tab
          value="Güzellik Salonu"
          label="Güzellik Salonu"
          sx={{
            textTransform: "capitalize",
          }}
        />
        <Tab
          value="Tırnak Salonu"
          label="Tırnak Salonu"
          sx={{
            textTransform: "capitalize",
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "block",
              xl: "block",
            },
          }}
         
        />
        <Tab
          value="Cilt Bakımı"
          label="Cilt Bakımı"
          sx={{
            textTransform: "capitalize",
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "block",
              xl: "block",
            },
          }}
        />
        <Tab
          value="Masaj"
          label="Masaj"
          sx={{
            textTransform: "capitalize",
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "block",
              xl: "block",
            },
          }}
        />
        <Tab
          value="Spa"
          label="Spa"
          sx={{
            textTransform: "capitalize",
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "block",
              xl: "block",
            },
          }}
        />
        
        <Tab
          value="Daha Fazla"
          label="Daha Fazla"
          sx={{
            textTransform: "capitalize",
            paddingRight:"0px",
            display: {
              xs: "block",
              sm: "block",
              md: "block",
              lg: "block",
              xl: "block",
            },
          }}
        />
        <ArrowDropDownCircleOutlinedIcon sx={{ marginTop: "8px" }} />
      </Tabs>
    </Box>
  );
}
