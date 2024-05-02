import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"

const MovieDetails = () => {
  const params = useParams()
  console.log(params.movieId)
  const paramsToUse = params.movieId.split("").splice(1).join("")
  console.log(paramsToUse)
  const [object, setObject] = useState({})
  const singleFilm = () => {
    fetch("http://www.omdbapi.com/?apikey=10ec8eea&i=" + paramsToUse)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("errore nella fetch")
        }
      })
      .then((response) => {
        console.log(response)
        setObject(response)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    singleFilm()
  }, [])

  return (
    <Container>
      <Row>
        <Col>
          <div className="d-flex flex-column flex-md-row gap-4">
            <div>
              <img src={object.Poster} alt="poster" />
            </div>
            <div className="text-light">
              <h1>{object.Title}</h1>

              <h4>Actors: {object.Actors}</h4>
              <p>Released: {object.Year}</p>
              <p>
                Plot : <br />
                {object.Plot}
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default MovieDetails
