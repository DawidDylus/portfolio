import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { WrapText } from "@material-ui/icons";

export const MainApplicationTheme = createTheme({
    palette: {
        primary: {
            main:
                "#191919"
        },
    },
    typography: {
        htmlFontSize: 13,
       /* '@media (max-width: 433px)': {
            fontSize: "0.5rem",
        },
        '@media (min-width: 2000px)': {
            fontSize: "2.5rem",
        }*/
    },
    spacing: 10,
    overrides: {
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
                background: "#212d45",
                height: "100vh",
            }
        }
    },
    props: {
        MuiAppBar: {
            position: "static",

        },
        MuiContainer: {
            maxWidth: false,
            disableGutters: true, // left right padding disabled
        }
    }

})