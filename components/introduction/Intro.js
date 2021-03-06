import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link'
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const Intro = () => {


    return <>
     <Container>
        <div   
        style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            minHeight:"100vh",
        }}          
        >
         
            <Grid>
                <Typography variant="h1">
                    Dawid Dylus
                </Typography>

                <Typography variant="h4" align="center">
                    Fullstack developer
                </Typography>

                <br/>
                               
                <Grid>
                    <IconButton component={Link} href="https://github.com/DawidDylus" style={{ borderRadius: 100 }}>
                        <GitHubIcon />
                    </IconButton>
               
                    <IconButton component={Link} href="https://www.linkedin.com/in/dawid-dylus-8aab84145/" style={{ borderRadius: 100 }}>
                        <LinkedInIcon style={{ color: "#0e76a8" }}/>
                    </IconButton>
                </Grid>

            </Grid>
            
        </div>
        </Container>
    </>




}
export default Intro;