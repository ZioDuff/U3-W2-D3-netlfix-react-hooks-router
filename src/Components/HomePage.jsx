import { BrowserRouter, Route, Routes } from "react-router-dom"
import MyFooter from "./MyFooter"
import MyHero from "./MyHero"
import MyNav from "./MyNav"
import TvShows from "./TvShows"
import MovieDetails from "./MovieDetails"
// questo è il componente dove andiamo a montare tutti i singoli componenti della nostra pagina e che andremo ad inseirire poi in "App.jsx"
const HomePage = () => {
  return (
    <BrowserRouter>
      <header className="App-header">
        <MyNav />
      </header>
      <Routes>
        <Route path="/" element={<MyHero />} />
        <Route path="/TvShows" element={<TvShows film={"batman"} />} />
        <Route path="/home/Movie-details/:movieId" element={<MovieDetails />} />
        {/* <Route path="*" element={<MovieDetails />} /> */}
      </Routes>
      <MyFooter />
    </BrowserRouter>
  )
}
export default HomePage
