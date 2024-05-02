import { Col, Container, Row, Nav } from "react-bootstrap"
// qui viene fatto un refactor del footer in modo da essre più leggibile in react e non creare conflitti
const MyFooter = () => {
  return (
    <Container fluid as={"footer"}>
      <Row className="justify-content-center mt-5">
        <Col className="col col-6">
          <Row>
            <Col className=" mb-2">
              <i className="bi bi-facebook footer-icon me-2"></i>
              <i className="bi bi-instagram footer-icon me-2"></i>
              <i className="bi bi-twitter-x footer-icon me-2"></i>
              <i className="bi bi-youtube footer-icon"></i>
            </Col>
          </Row>
          <Row xs={1} sm={2} md={4} lg={4}>
            <Col>
              <Row>
                <Col className=" footer-links">
                  <Nav.Link
                    className="my-1"
                    href="#Audio and Subtitles"
                    alt="footer link"
                  >
                    Audio and Subtitles
                  </Nav.Link>

                  <Nav.Link
                    className="my-1"
                    href="#Media Center"
                    alt="footer link"
                  >
                    Media Center
                  </Nav.Link>

                  <Nav.Link className="my-1" href="#Privacy" alt="footer link">
                    Privacy
                  </Nav.Link>

                  <Nav.Link
                    className="my-1"
                    href="#Contact us"
                    alt="footer link"
                  >
                    Contact us
                  </Nav.Link>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className=" footer-links">
                  <Nav.Link
                    className="my-1"
                    href="#Audio Description"
                    alt="footer link"
                  >
                    Audio Description
                  </Nav.Link>

                  <Nav.Link
                    className="my-1"
                    href="#Investor Relations"
                    alt="footer link"
                  >
                    Investor Relations
                  </Nav.Link>

                  <Nav.Link
                    className="my-1"
                    href="#Legal Notices"
                    alt="footer link"
                  >
                    Legal Notices
                  </Nav.Link>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className=" footer-links">
                  <Nav.Link
                    className="my-1"
                    href="#Help Center"
                    alt="footer link"
                  >
                    Help Center
                  </Nav.Link>

                  <Nav.Link className="my-1" href="#Jobs" alt="footer link">
                    Jobs
                  </Nav.Link>

                  <Nav.Link
                    className="my-1"
                    href="#Cookie Preferences"
                    alt="footer link"
                  >
                    Cookie Preferences
                  </Nav.Link>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className=" footer-links">
                  <Nav.Link
                    className="my-1"
                    href="#Gift Cards"
                    alt="footer link"
                  >
                    Gift Cards
                  </Nav.Link>

                  <Nav.Link
                    className="my-1"
                    href="#Terms of Use"
                    alt="footer link"
                  >
                    Terms of Use
                  </Nav.Link>

                  <Nav.Link
                    className="my-1"
                    href="#Corporate Information"
                    alt="footer link"
                  >
                    Corporate Information
                  </Nav.Link>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className=" mb-2">
              <button
                type="button"
                className="btn btn-sm footer-button rounded-0 mt-3"
              >
                Service Code
              </button>
            </Col>
          </Row>
          <Row>
            <Row className=" mb-2 mt-2 copyright">
              © 1997-2023 Netflix, Inc.
            </Row>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
export default MyFooter
