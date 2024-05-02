import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import HomePage from "./Components/HomePage"
import ProfileNetflix from "./Components/ProfileNetflix"
// qui è dove vengo effetivamente montati i nostri componenti finali per poi visualizzarli sulla nostra pagina
function App() {
  return (
    <div className="App">
      <HomePage />
      {/* <ProfileNetflix /> */}
    </div>
  )
}

export default App
