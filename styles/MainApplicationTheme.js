import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

export const MainApplicationTheme = createTheme({
    palette: {
        primary: {
            main:
                "#191919"
        },
    },   
    spacing: 10,
    overrides: {
        MuiButton : {
            root: {                
                marginLeft: "30px",
                marginRight: "30px",
                fontSize: "1.5rem",   
                textTransform: 'none',           
            }
        },
        MuiIconButton: {
            root: {                  
                marginLeft: "40px",
                marginRight: "40px",                     
            }
        }
    },
    props: {
        MuiAppBar: {
            position: "static", 
            
        }

    }

})