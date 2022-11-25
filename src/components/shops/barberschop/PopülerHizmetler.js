import React from 'react'
import { Box, Button, Divider, Typography } from '@mui/material'
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const PopülerHizmetler = () => {
  const [value, setValue] = React.useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    // container
    <Box > 
      <Box sx={{
        width:"400px",
        my:3,
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
          value="Erkek"
          label="Erkek"
          sx={{
            textTransform: "capitalize",           
           
          }}
        />
        <Tab
          value="Kadın"
          label="Kadın"
          sx={{
            textTransform: "capitalize",           
           
          }}
        />
     
      </Tabs>

      </Box>
       

    
        {/* popüler hizmetler */}
        <Box>
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
          Popüler Hizmetler
        </Typography>

      </Box>
        {/* popüler hizmetler */}

        {/* hizmetler container */}
            <Box 
           sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb:3,
            mt:3,
           

        }}>
                {/* traş */}
                <Box>
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
          Saç Traşı
        </Typography>

                </Box>
                {/* traş */}

                {/* fiyat ve rendavu al */}
                <Box sx={{
                    width:"170px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",

                }}>
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
          120
        </Typography>
        <Button variant="contained"
        sx={{
            textTransform: "capitalize",
            width:"113px",
            height:"34px",
            background:"#F75936",
            borderRadius:"6px", 
            boxShadow: "none",
            color:"#FFFFFF",
            boxShadow:"none",
        }}
        
        >Randevu Al</Button>

                </Box>
                {/* fiyat ve rendavu al */}


            </Box>
        {/* hizmetler container */}
        <Divider />
        {/* hizmetler container */}
            <Box 
           sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb:3,
            mt:3,
           

        }}>
                {/* traş */}
                <Box>
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
          Saç Traşı
        </Typography>

                </Box>
                {/* traş */}

                {/* fiyat ve rendavu al */}
                <Box sx={{
                    width:"170px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",

                }}>
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
          120
        </Typography>
        <Button variant="contained"
        sx={{
            textTransform: "capitalize",
            width:"113px",
            height:"34px",
            background:"#F75936",
            borderRadius:"6px", 
            color:"#FFFFFF",
            boxShadow:"none",
        }}
        
        >Randevu Al</Button>

                </Box>
                {/* fiyat ve rendavu al */}


            </Box>
        {/* hizmetler container */}
        <Divider />
        {/* hizmetler container */}
            <Box 
           sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb:3,
            mt:3,
           

        }}>
                {/* traş */}
                <Box>
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
          Saç Traşı
        </Typography>

                </Box>
                {/* traş */}

                {/* fiyat ve rendavu al */}
                <Box sx={{
                    width:"170px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",

                }}>
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
          120
        </Typography>
        <Button variant="contained"
        sx={{
            textTransform: "capitalize",
            width:"113px",
            height:"34px",
            background:"#F75936",
            borderRadius:"6px",
            color:"#FFFFFF", 
            boxShadow:"none",
        }}
        
        >Randevu Al</Button>

                </Box>
                {/* fiyat ve rendavu al */}


            </Box>
        {/* hizmetler container */}
        <Divider />
            

    </Box>
    // container
    
  )
}

export default PopülerHizmetler