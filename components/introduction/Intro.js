import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const Intro = () => {


    return <>

        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="90vh"
        >
            <Grid>
                <Typography variant="h1">
                    Dawid Dylus
                </Typography>

                <Typography variant="h4">
                    Fullstack developer
                </Typography>
            </Grid>
        </Box>
    </>




}
export default Intro;