import { BrowserRouter, Routes, Route } from "react-router-dom"
import MoviesListContainer from "./components/MovieListContainer/MovieListContainer"
import NavBar from "./components/NavBar/NavBar"

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<MoviesListContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
