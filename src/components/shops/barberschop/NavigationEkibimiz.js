
import React from 'react'
import { Avatar, Box, Stack, Typography } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import harita from "../../../assets/haritaimg.png";

function createData(day, hour ) {
    return { day, hour };
  }
  
  const rows = [
    createData('Pazartesi', "8:00 - 17:00"),
    createData('Salı', "8:00 - 17:00"),
    createData('Çarşamba', "8:00 - 17:00"),
    createData('Perşembe', "8:00 - 17:00"),
    createData('Cuma', "8:00 - 17:00"),
    createData('Cumartesi', "8:00 - 13:00"),
    createData('Pazar', "Kapalı"),
  ];





const NavigationEkibimiz = () => {
  return (
    <Box
      sx={{
        width:"720px",
        display: "flex",     
        ml:4,
      }}
    >
        {/* stack container */}
        <Stack  spacing={2}>
            <Box sx={{
                width: "409px",
                height: "250px",
                borderRadius: "10px",
                background: `url(${harita})`,
            }}>
                 
            </Box>
           
            <Typography
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "24px",
            lineHeight: "28px",
            color: "#07232C",
          }}
        >
          Ekibimiz
        </Typography>
        {/* Avatar stack container */}
        <Stack direction="row" spacing={3}>

            <Stack
  direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={2}
>
        <Avatar
            sx={{
              width: "80px",
              height: "60px",
            }}
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Jane Doe"
           
          />
          <Typography
           sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "15px",
            lineHeight: "18px",
            color: "#07232C",
          }}>
            Tarık
          </Typography>
          </Stack>
            <Stack
  direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={2}
>
        <Avatar
            sx={{
              width: "80px",
              height: "60px",
            }}
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Jane Doe"
           
          />
          <Typography
           sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "15px",
            lineHeight: "18px",
            color: "#07232C",
          }}>
            Tarık
          </Typography>
          </Stack>
            <Stack
  direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={2}
>
        <Avatar
            sx={{
              width: "80px",
              height: "60px",
            }}
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Jane Doe"
           
          />
          <Typography
           sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "15px",
            lineHeight: "18px",
            color: "#07232C",
          }}>
            Tarık
          </Typography>
          </Stack>
            <Stack
  direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={2}
>
        <Avatar
            sx={{
              width: "80px",
              height: "60px",
            }}
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Jane Doe"
           
          />
          <Typography
           sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "15px",
            lineHeight: "18px",
            color: "#07232C",
          }}>
            Tarık
          </Typography>
          </Stack>
        
            

        </Stack>
        {/* Avatar stack container */}

        </Stack>
        {/* stack container */}
        {/* çalışma saatleri */}
        <Box sx={{
            width: "291px",
            height: "448px",    
            background: "#FAFAFA",
            borderRadius: "10px",
            ml:3,
        }}>

        
        <Stack spacing={2}>
        <Typography
        sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#07232C",
            pb:2,
            pt:1,
          }}>
            Çalışma Saatleri

        </Typography>
    <TableContainer >
      <Table size="small" aria-label="table">
       
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              
              <TableCell sx={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "18px",
                color: "#9A9A9A",
              }}>
                {row.day}
                <br />
                <br />
                </TableCell>
              <TableCell align="right"
              sx={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "15px",
                lineHeight: "18px",
                color: "#07232C",
              }}>{row.hour}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Stack>
        {/* çalışma saatleri */}
        </Box>
    </Box>
  )
}

export default NavigationEkibimiz