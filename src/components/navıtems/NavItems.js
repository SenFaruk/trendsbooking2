import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { Stack } from "@mui/material";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";

export default function NavItems() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack sx={{ margin: "20px 150px 20px 150px" ,
    display: {
      xs: "none",
      sm: "none",
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
          }}
        />
        <Tab
          value="Berber"
          label="Berber"
          sx={{
            textTransform: "capitalize",
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
          }}
          sx={{
            textTransform: "capitalize",
          }}
          sx={{
            textTransform: "capitalize",
          }}
        />
        <Tab
          value="Cilt Bakımı"
          label="Cilt Bakımı"
          sx={{
            textTransform: "capitalize",
          }}
        />
        <Tab
          value="Masaj"
          label="Masaj"
          sx={{
            textTransform: "capitalize",
          }}
        />
        <Tab
          value="Spa"
          label="Spa"
          sx={{
            textTransform: "capitalize",
          }}
        />
        >
        <Tab
          value="Daha Fazla"
          label="Daha Fazla"
          sx={{
            textTransform: "capitalize",
          }}
        />
        <ArrowDropDownCircleOutlinedIcon sx={{ marginTop: "11px" }} />
      </Tabs>
    </Stack>
  );
}
