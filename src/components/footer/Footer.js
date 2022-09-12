import React from "react";
import {
  Box,
  Stack,
  Typography,
  Button,
  ButtonGroup,
  Fab,
} from "@mui/material";
import footerlogo from "../../assets/footerlogo.svg";
import ArrowUpwardSharpIcon from "@mui/icons-material/ArrowUpwardSharp";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "485px",
        background: "#07232C",
      }}
    >
      <Stack direction="row" spacing={16} padding="130px 50px 100px 50px">
        <img src={footerlogo} alt="" width="83.6px" height="49.91px" />
        <Stack direction="column" spacing={8}>
          <Typography
            sx={{
              fontFamily: "Jost",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "24px",
              lineHeight: "36px",
              color: "#FFFFFF",
            }}
          >
            123 Market St. #22B Charlottesville, California 44635
          </Typography>

          <Stack direction="column" spacing={4}>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "22px",
                color: "#FFFFFF",
                flex: "none",
                order: "0",
                flexGrow: "0",
                textDecoration: "underline",
              }}
            >
              (434) 546-4356
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "22px",
                color: "#FFFFFF",
                flex: "none",
                order: "0",
                flexGrow: "0",
                textDecoration: "underline",
              }}
            >
              contact@lift.agency
            </Typography>
          </Stack>
        </Stack>

        <Stack direction="column" spacing={8}>
          <Stack direction="row" spacing={8}>
            <ButtonGroup
              variant="text"
              orientation="vertical"
              sixe="small"
              color="primary"
            >
              <Button
                sx={{
                  textTransform: "capitalize",
                }}
              >
                About
              </Button>
              <Button
                sx={{
                  textTransform: "capitalize",
                }}
              >
                Growers
              </Button>
              <Button
                sx={{
                  textTransform: "capitalize",
                }}
              >
                Merchants
              </Button>
              <Button
                sx={{
                  textTransform: "capitalize",
                }}
              >
                {" "}
                Partners
              </Button>
              <Button
                sx={{
                  textTransform: "capitalize",
                }}
              >
                contact
              </Button>
            </ButtonGroup>

            <ButtonGroup
              variant="text"
              orientation="vertical"
              sixe="small"
              color="primary"
            >
              <Button
                sx={{
                  textTransform: "capitalize",
                }}
              >
                Facebook
              </Button>
              <Button
                sx={{
                  textTransform: "capitalize",
                }}
              >
                Twitter
              </Button>
              <Button
                sx={{
                  textTransform: "capitalize",
                }}
              >
                Linkedin
              </Button>
              <Button
                sx={{
                  textTransform: "capitalize",
                }}
              >
                Instagram
              </Button>
            </ButtonGroup>
          </Stack>

          <Typography
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "20px",
              color: "#FFFFFF",
              opacity: "0.65",
            }}
          >
            © 2020 Lift media. All rights reserved.
          </Typography>
        </Stack>
        <Fab color="primary" aria-label="arrowup">
          <ArrowUpwardSharpIcon />
        </Fab>
      </Stack>
    </Box>
  );
};

export default Footer;
