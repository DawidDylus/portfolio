import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#e9dfd4',
        color: props => props.color,
    },
});



const Projects = () => {

    const classes = useStyles();

    return <>
        <Container className={classes.root}>

            <div
                id="projects"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh",
                }}
            >


                <Typography variant="h4" color="primary" align="center">Projects</Typography>


            </div>
        </Container>
    </>

}

export default Projects;