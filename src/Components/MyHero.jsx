import { Container, Dropdown } from "react-bootstrap"
import FirstGallery from "./FirstGallery"

// importiamo la nostra galleria precendemente creata perchè qui nell asezione principale verrà poi montata
const MyHero = () => {
  return (
    <Container as={"main"} fluid className="px-4">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-4">Home</h2>
          <div className="btn-group " role="group">
            <div className="dropdown border-light ms-4 mt-1">
              <Dropdown data-bs-theme="dark">
                <Dropdown.Toggle
                  className="border border-white rounded-0 btn-sm"
                  variant="success"
                  id="dropdown-basic"
                  style={{ backgroundColor: "#221f1f" }}
                >
                  Genres
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
        <div>
          <i className="bi bi-grid icons"></i>
          <i className="bi bi-grid-3x3 icons"></i>
        </div>
      </div>
      {/* qui viene richiamata la nostra galleria, richaimando un solo componente possiamo avere diverse gallerie */}
      {/* questo avviene grazie alle props , in cui abbiamo reso dinamicco l'ultimo valore della nostra API */}
      <h4>Trending Now</h4>
      <FirstGallery
        // isSelected={isSelected}
        // changeSelectedFilm={changeSelectedFilm}
        film={"Star Wars"}
      />
      <h4>Horror</h4>
      <FirstGallery film={"horror"} />
      <h4>Mondo Disney</h4>
      <FirstGallery film={"disney"} />
    </Container>
  )
}
export default MyHero
