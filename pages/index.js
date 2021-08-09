import Nav from '../components/nav/Nav';
import Intro from '../components/introduction/Intro';
import Container from '@material-ui/core/Container';
import Projects from '../components/projects/Projects';
export default function Home() {

  return <>
    <Container>
      <Nav />

      <Intro />

     

    </Container>
    <Projects/>
  </>

}
