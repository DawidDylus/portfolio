import { createTheme } from "@material-ui/core/styles";

export const MainApplicationTheme = createTheme({
    palette: {
        primary: {
            main:
                "#191919"
        },
    },
    typography: {
        htmlFontSize: 13, 
    },
    spacing: 10,
    overrides: {
        MuiTypography: {
            root: {
                color: "#bbb",
            },
            body1: {

                '@media (max-width: 433px)': {
                    fontSize: "0.7rem",
                },
                '@media (min-width: 2000px)': {
                    fontSize: "2.5rem",
                },

            },
            h1: {

                '@media (max-width: 433px)': {
                    fontSize: "2.7rem",
                },
                '@media (min-width: 2000px)': {
                    fontSize: "10rem",
                }
            },
            h4: {

                '@media (max-width: 433px)': {
                    fontSize: "1.3rem",
                    padding: "1rem"
                },
                '@media (min-width: 2000px)': {
                    fontSize: "4rem",
                }
            },
        },
        MuiTab: {
            root: {
                fontSize: "1.25rem",
                '@media (max-width: 433px)': {
                    fontSize: "0.7rem",
                    padding: "0px"
                },
                '@media (min-width: 2000px)': {
                    fontSize: "2.5rem",
                    marginLeft: "4rem",
                    maringRight: "4rem",
                },
                textTransform: 'none',
            },
            wrapper: {
                '@media (min-width: 2000px)': {
                    width: "1000rem"
                }
            }
        },
        MuiIconButton: {
            root: {
                '@media (max-width: 433px)': {
                    padding: "0px",
                    marginLeft: "0px",
                },
            },
            edgeStart: {
                '@media (max-width: 433px)': {
                    marginLeft: "0px",
                },
            }

        },
        MuiSvgIcon: {
            root: {
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "100%",
                '@media (max-width: 433px)': {
                    width: "1.5rem",
                    height: "1.5rem",
                },
                '@media (min-width: 2000px)': {
                    width: "5rem",
                    height: "5rem",
                    marginLeft: "5rem",
                }
            }
        },
        MuiToolbar: {
            regular: {
                '@media (max-width: 290px)': {
                    padding: "1px"
                }
            }
        },
        MuiContainer: {
            root: {
                background: "#2a2a2a",
                height: "100vh",
            }
        }
    },
    props: {             
        MuiContainer: {
            maxWidth: false,
            disableGutters: true, // left right padding disabled
        }       
    }
    

})