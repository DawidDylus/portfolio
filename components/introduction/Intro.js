import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link'

const Intro = () => {


    return <>
        <Box            
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="90vh"
            component="span"
            container
        >
            <Grid >
                <Typography variant="h1">
                    Dawid Dylus
                </Typography>

                <Typography variant="h4">
                    Fullstack developer
                </Typography>

                <br></br>
                <br></br>
                <Grid>
                    <IconButton component={Link} href="https://github.com/DawidDylus" style={{ borderRadius: 100 }}>
                        <GitHubIcon />
                    </IconButton>
                </Grid>


            </Grid>
        </Box>
    </>




}
export default Intro;