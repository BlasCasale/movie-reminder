import { BrowserRouter, Routes, Route } from "react-router-dom"
import MoviesListContainer from "./components/MovieListContainer/MovieListContainer"
import NavBar from "./components/NavBar/NavBar"
import { LoginProvider } from './context/LoginContext.jsx'
import Register from "./components/Register/Register"
import Login from "./components/Login/Login"

function App() {

  return (
    <>
      <BrowserRouter>
        <LoginProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<MoviesListContainer />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </LoginProvider>
      </BrowserRouter>
    </>
  )
}

export default App
