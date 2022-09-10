import { Stack,Button, Typography, } from "@mui/material";
import arrowdown from "../../assets/arrowdown.svg";

export const buttons = [
    <Button
      key="one"
      sx={{
        textTransform: "capitalize",
        margin: "0px",
        padding: "10px 0px 10px 0px",
      }}
    >
      <Stack direction="row" spacing={120}>
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "20px",
            lineHeight: "35px",
            color: "#07232C",
          }}
        >
          Trend Booking ücretsiz mi
        </Typography>{" "}
        <img src={arrowdown} alt="" />
      </Stack>
    </Button>,
  
    <Button
      key="two"
      sx={{
        textTransform: "capitalize",
        margin: "0px",
        padding: "10px 0px 10px 0px",
      }}
    >
      <Stack direction="row" spacing={114}>
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "20px",
            lineHeight: "35px",
            color: "#07232C",
          }}
        >
          Kuaförden Nasıl Emin Olabilirim
        </Typography>{" "}
        <img src={arrowdown} alt="" />
      </Stack>
    </Button>,
    <Button
      key="three"
      sx={{
        textTransform: "capitalize",
        margin: "0px",
        padding: "10px 0px 10px 0px",
      }}
    >
      <Stack direction="row" spacing={121}>
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "20px",
            lineHeight: "35px",
            color: "#07232C",
          }}
        >
          Trend Booking Güvenli mi
        </Typography>{" "}
        <img src={arrowdown} alt="" />
      </Stack>
    </Button>,
    <Button
      key="four"
      sx={{
        textTransform: "capitalize",
        margin: "0px",
        padding: "10px 0px 10px 0px",
      }}
    >
      <Stack direction="row" spacing={115}>
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "20px",
            lineHeight: "35px",
            color: "#07232C",
          }}
        >
          Müşteri Hizmetleri Nasıl Çalışır
        </Typography>{" "}
        <img src={arrowdown} alt="" />
      </Stack>
    </Button>,
  ];