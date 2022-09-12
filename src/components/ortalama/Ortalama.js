import { Box, CardContent, Stack, Typography } from '@mui/material';
import React from 'react'

const Ortalama = () => {
  return (
<Box
sx={{
    width:"1075px",
    height:"191px",
    background:"#FFFFFF",
    boxShadow:"0px 0px 40px rgba(7, 35, 44, 0.07)",
    borderRadius:"30px",
    marginLeft:"200px",
}}>
<Stack direction="row" spacing={0.5} marginLeft="50px">
    <Typography sx={{
        fontFamily: 'Roboto',
        fontStyle:"normal",
        fontWeight:"500",
        fontSize:"20px",
        lineHeight:"23px",
        color:"#07232C",
        }} >
       Ortalama Fiyatlar - 
       </Typography>
    <Typography sx={{
        fontFamily: 'Roboto',
        fontStyle:"normal",
        fontWeight:"500",
        fontSize:"20px",
        lineHeight:"23px",
        color:"#F65936",
        }} >
       İstanbul / Beykoz
       </Typography>
</Stack>
    



    <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={12}
>
    <CardContent>
    <Typography sx={{
     fontFamily: 'Roboto',
     fontStyle:"normal",
     fontWeight:"400",
     fontSize:"16px",
     lineHeight:"19px",
     color:"#07232C",
     }} >
      Erkek Saç Traşı
    </Typography>

    <Typography sx={{
     fontFamily: 'Roboto',
     fontStyle:"normal",
     fontWeight:"400",
     fontSize:"14px",
     lineHeight:"16px",
     color:"#07232C",
     opacity: "0.5",
     marginLeft: "40px",
     marginTop:"10px"
     }} >
      65 TL
    </Typography>
    
  </CardContent>
    <CardContent>
    <Typography sx={{
     fontFamily: 'Roboto',
     fontStyle:"normal",
     fontWeight:"400",
     fontSize:"16px",
     lineHeight:"19px",
     color:"#07232C",
     }} >
     Saç Boyama
    </Typography>

    <Typography sx={{
     fontFamily: 'Roboto',
     fontStyle:"normal",
     fontWeight:"400",
     fontSize:"14px",
     lineHeight:"16px",
     color:"#07232C",
     opacity: "0.5",
     marginLeft: "35px",
     marginTop:"10px"
     }} >
     450 TL
    </Typography>
    
  </CardContent>
    <CardContent>
    <Typography sx={{
     fontFamily: 'Roboto',
     fontStyle:"normal",
     fontWeight:"400",
     fontSize:"16px",
     lineHeight:"19px",
     color:"#07232C",
     }} >
     Kadın Saç Kesimi
    </Typography>

    <Typography sx={{
     fontFamily: 'Roboto',
     fontStyle:"normal",
     fontWeight:"400",
     fontSize:"14px",
     lineHeight:"16px",
     color:"#07232C",
     opacity: "0.5",
     marginLeft: "35px",
     marginTop:"10px"
     }} >
    235 TL
    </Typography>
    
  </CardContent>
    <CardContent>
    <Typography sx={{
     fontFamily: 'Roboto',
     fontStyle:"normal",
     fontWeight:"400",
     fontSize:"16px",
     lineHeight:"19px",
     color:"#07232C",
     }} >
     Sauna
    </Typography>

    <Typography sx={{
     fontFamily: 'Roboto',
     fontStyle:"normal",
     fontWeight:"400",
     fontSize:"14px",
     lineHeight:"16px",
     color:"#07232C",
     opacity: "0.5",
     marginLeft: "10px",
     marginTop:"10px"
     }} >
    300 TL
    </Typography>
    
  </CardContent>
    <CardContent>
    <Typography sx={{
     fontFamily: 'Roboto',
     fontStyle:"normal",
     fontWeight:"400",
     fontSize:"16px",
     lineHeight:"19px",
     color:"#07232C",
     }} >
     Cild Bakımı
    </Typography>

    <Typography sx={{
     fontFamily: 'Roboto',
     fontStyle:"normal",
     fontWeight:"400",
     fontSize:"14px",
     lineHeight:"16px",
     color:"#07232C",
     opacity: "0.5",
     marginLeft: "35px",
     marginTop:"10px"
     }} >
   700 TL
    </Typography>
    
  </CardContent>
  </Stack>
  </Box>
  )}

export default Ortalama;