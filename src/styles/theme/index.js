import { createTheme } from "@mui/material/styles";



export const Colors = {
  primary: "#ffffff",
  secondary: "#ED6A5B",
  mycolor:"#F65936",
  
//  success: "#d5d5d5",
//   info: "#000",
//   danger: "#FF5722",
//   warning: "#FFC107",
};


const theme = createTheme({
    palette:{
        primary:{
            main:Colors.primary,
        },
        secondary:{
            main:Colors.secondary
        },
        mycolor:{
            main:Colors.mycolor
        },
       
    },
    components:{
        typography: {
            poster: {
              color: 'blue',
            },
            // Disable h3 variant
            h3: undefined,
          },
            
            

        }

    }
)

export default theme;