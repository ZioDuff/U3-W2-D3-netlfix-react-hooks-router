import { Col, Container, Dropdown, Form, Row } from "react-bootstrap"
import ProfileImage from "../Assets/avatar.png"
// questa è la sezione principale della nostra pagina profile
// riprende la pagina del mio vecchi progetto ove è stato fatto un refactor

const MyHeroProfile = () => {
  return (
    <Container className=" pt-4 ">
      <Row
        xs={12}
        sm={6}
        md={4}
        lg={3}
        // className=" row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4"
      >
        <Col lg={3} className="d-none d-lg-block "></Col>
        <Col sm={3} md={2} lg={2} className="border-bottom mb-5">
          <div>
            <img src={ProfileImage} alt="avatar" width="100%" />
          </div>
        </Col>
        <Col sm={9} md={8} lg={6} className=" border-bottom mb-5  ">
          <div className="d-flex flex-column">
            <div>
              <h1 className="border-bottom w-100 text-light ">Edit Profile</h1>
              <h4 className="bg-secondary text-white p-2">Strive Student</h4>
            </div>

            <p className="fs-4 text-secondary">Language:</p>
            <Dropdown data-bs-theme="dark" className="border-bottom">
              <Dropdown.Toggle
                className="btn text-white border border-2 border-white dropdown-toggle bg-black rounded-0 mb-3"
                variant="success"
                id="dropdown-basic"
              >
                English
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Italiano</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Detusch</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Français</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Русский</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="my-3 border-bottom">
              <p className="fs-4 text-secondary">Maturity Setting</p>
              <button className="btn text-white bg-secondary rounded-0">
                ALL MATURITY RATINGS
              </button>
              <p className="text-white pt-3">
                Show titles of all maturity ratings for this profile.
              </p>
              <button className="btn bg-dark border border-1 text-secondary rounded-0 px-4 mb-4">
                EDIT
              </button>
            </div>
            <div className="mt-3">
              <p className="fs-4 text-secondary">Autoplay controls</p>
              <Form>
                <div className="text-align-center d-flex align-items-center">
                  <Form.Control
                    type="checkbox"
                    className="form-check-input bg-dark fs-4 me-2 mb-2 rounded-0"
                    id="btn-check-outlined"
                    autocomplete="off"
                  />
                  <Form.Label
                    className="form-check-label text-white"
                    for="btn-check-outlined"
                  >
                    Autoplay next episode in a series on all devices.
                  </Form.Label>
                </div>
                <div className="text-align-center d-flex align-items-center">
                  <Form.Control
                    type="checkbox"
                    className="form-check-input bg-dark fs-4 me-2 mb-2 rounded-0"
                    id="btn-check-outlined"
                    autocomplete="off"
                  />
                  <Form.Label
                    className="form-check-label text-white"
                    for="btn-check-outlined"
                  >
                    Autoplay previews while browsing on all devices.
                  </Form.Label>
                </div>
              </Form>
            </div>
            <div className="mt-4 d-flex justify-content-around">
              <button className="btn btn-outline-light border border-1 rounded-0 text-secondary m-3 mt-4 flex-grow-1">
                SAVE
              </button>
              <button className="btn btn-outline-light border border-1 rounded-0 text-secondary m-3 mt-4 flex-grow-1">
                CANCEL
              </button>
              <button className="btn btn-outline-light border border-1 rounded-0 text-secondary m-3 mt-4 flex-grow-1">
                DELETE PROFILE
              </button>
            </div>
          </div>
        </Col>
        <Col className="col d-none d-md-block col-md-2 col-lg-2"></Col>
      </Row>
    </Container>
  )
}
export default MyHeroProfile
