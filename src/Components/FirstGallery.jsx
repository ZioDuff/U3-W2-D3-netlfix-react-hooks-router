import { useEffect, useState } from "react"
import { Col, Row, Spinner } from "react-bootstrap"
import { Link } from "react-router-dom"
// qua creiamo il nostro componente questa volta a classe perchè doovremmo gestire la fetch e poi il suo "state"
const FirstGallery = (props) => {
  // questo è lo state che comprende due valori, uno per gestire l'array in arrivo dalla fetch e l'altro per gesire lo spinner in fase di caricamento
  // state = {
  //   object: [],
  //   isLoading: false,
  // }
  const [object, setObject] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  // const [isSelected, setIsSelected] = useState(null)
  // const changeSelectedFilm = (asin) => {
  //   setIsSelected(asin)
  // }

  // creiamo una funzione a parte per stabilire la nostra fetch senza doverla creare nel nostro "ComponentDidMount"
  const firstFetch = () => {
    // qui cambimao lo stato del nostro spinner per poterlo visualizzare in fase di caricamento della fetch
    setIsLoading(true)
    console.log("fetch in corso...")
    // qui rendiamo l'ultima parte della nostra API dinamica tramite le props in modo cambiarla a nostro piacimento
    fetch("http://www.omdbapi.com/?apikey=10ec8eea&s=" + props.film)
      .then((response) => {
        if (response.ok) {
          // console.log("fetch conclusa")
          return response.json()
        } else throw new Error("errore nella richesta ")
      })
      .then((response) => {
        // console.log(response.Search)
        // qui andiamo a cambiare il valore di object (presente nel nostro stato) con l'array in arrivo
        setObject(response.Search)
      })
      .catch((err) => console.log(err))
      // con il finally gli andiamo a dire che in qualsiasi caso finisca la nostra fetch lo stato dello spinnere deve ritornare false
      .finally(() => setIsLoading(false))
  }
  // componentDidMount() {
  //   qui è dove viene richiata effetivamente la fetch che partira una volta sola
  //   this.firstFetch()
  // }
  useEffect(() => {
    firstFetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {/* qui andiamo ad inserire lo spinner e lo facciamo con un "short circuit" */}
      {isLoading && <Spinner animation="border" variant="light" />}
      {/* andiamo a controllare la lunghezza dell'arraye è lo stato di del nostro spinner e solo una volta fatto cio andiamo a fare il map del nostor array */}
      {object.length > 0 && !isLoading && (
        <Row xs={1} sm={2} md={3} lg={6} className="mb-4">
          {object.slice(0, 6).map((obj) => {
            return (
              // con il map il primo figlio deve avere sempre la key di identificazione in questo caso la colonna che ospita la nostra img
              <Col key={obj.imdbID} className="col mb-2 text-center px-1">
                <Link to={`/home/Movie-details/:${obj.imdbID}`}>
                  <img
                    className="img-fluid"
                    // onClick={() => changeSelectedFilm(obj.imbdID)}
                    // style={{
                    //   border: isSelected === obj.imdbID ? "3px solid red" : "",
                    // }}
                    src={obj.Poster}
                    alt={obj.Title}
                  />
                </Link>
              </Col>
            )
          })}
        </Row>
      )}
    </>
  )
}
export default FirstGallery
