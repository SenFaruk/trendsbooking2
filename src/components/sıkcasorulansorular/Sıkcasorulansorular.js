import React from "react";

import { Box, ButtonGroup, Button, Stack, Typography } from "@mui/material";

import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const Sıkcasorulansorular = () => {
  return (
    // Box container başla
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        pt: "50px",
        alignItems: "center",
        background: "#F9F9F9",        
        height: "500px",     
        margin: "auto",
      }}
    >
      {/* sıkça sorulan sorular ve metin başlangıç */}
      <Stack
        direction="column"
        spacing={2}
        >
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
      {/* sıkça sorulan sorular ve metin bitiş */}

      {/* soruların tamamı başlangıç */}
      <Box
        sx={{
        mt: "90px",
        ml:"300px",
        width: {
          xs: "250px",
          sm:"300px",
          md: "800px",
          lg: "1000px",
        }
        }}
      >
        <List
        
          sx={{
            width: "100%",
            maxWidth: 560,
          }}
        >
          <ListItem button>
            <Box
              sx={{
                display: "flex",               
                justifyContent: "space-between",
                width:"100%"
           
              }}
            >
              <ListItemText primary="Trend Booking ücretsiz mi ?" />
              <ArrowCircleDownIcon />
            </Box>
          </ListItem>

          <Divider />
          <ListItem button>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width:"100%",
              }}
            >
              <ListItemText primary="Kuaförden Nasıl Emin Olabilirim ?" />
              {<ArrowCircleDownIcon />}
            </Box>
          </ListItem>

          <Divider />
          <ListItem button>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width:"100%",
              }}
            >
              <ListItemText primary="Trend Booking Güvenli mi ?" />
              {<ArrowCircleDownIcon />}
            </Box>
          </ListItem>
          <ListItem button>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width:"100%",
              }}
            >
              <ListItemText primary="Müşteri Hizmetleri Nasıl Çalışır ?" />
              {<ArrowCircleDownIcon />}
            </Box>
          </ListItem>

          <Divider />
        </List>
      </Box>
      {/* soruların tamamı bitiş */}
    </Box>
    // Box container bitir
  );
};

export default Sıkcasorulansorular;
