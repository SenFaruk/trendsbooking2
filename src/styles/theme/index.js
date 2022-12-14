import { createTheme } from "@mui/material/styles";



export const Colors = {
  primary: "#ffffff",
  secondary: "#ED6A5B",
  mycolor:"#F65936",
  myblack:"#07232C",
  myfab:"#07232C"
  
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
        myblack:{
            main:Colors.myblack
        },
       
    },
    components: {
        // Name of the component
        MuiButtonBase: {
          defaultProps: {
            // The props to change the default for.
            disableRipple: true, // No more ripple, on the whole application 💣!
            disableElevation: true,
            
          },
          
        },
      },
    
    }
)

export default theme;