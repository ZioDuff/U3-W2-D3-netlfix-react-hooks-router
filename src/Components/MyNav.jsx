import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NetflixLogo from "../Assets/logo.png"
import { NavLink } from "react-router-dom"
// qui è stata presa una navBar da reactBoostrap ed è stata confrontata con quella dell'esercizio
// ed è stato fatto un refactor in modo da renderla più leggibile in react
const MyNav = () => {
  return (
    <Navbar data-bs-theme="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img className="NetflixLogo" src={NetflixLogo} alt="NetflixLogo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-light "
        />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto">
            <NavLink to="/" className={"nav-link"}>
              Home
            </NavLink>
            <NavLink to="/TvShows" className={"nav-link"}>
              Tv Shows
            </NavLink>
            <NavLink className={"nav-link"}>Movie</NavLink>
            <NavLink className={"nav-link"}>Reacently Added</NavLink>
            <NavLink className={"nav-link"}>My list</NavLink>
          </Nav>
          <div className="d-flex align-items-center">
            <i className="bi bi-search icons"></i>
            <div id="kids" className="fw-bold">
              KIDS
            </div>
            <i className="bi bi-bell icons"></i>
            <i className="bi bi-person-circle icons"></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default MyNav
