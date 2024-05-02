import Container from "react-bootstrap/Container"

import Navbar from "react-bootstrap/Navbar"
import NetflixLogo from "../Assets/logo.png"
// nella navBar del profilo non c'era molto da cambiare visto che bisognava solamente lasciare il "logo"
// quindi anche qua siamo andati a richiamare il nostro logo dagli assets tramite l'import
const MyNavProfile = () => {
  return (
    <Navbar data-bs-theme="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img className="NetflixLogo" src={NetflixLogo} alt="NetflixLogo" />
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}
export default MyNavProfile
