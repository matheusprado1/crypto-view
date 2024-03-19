import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import CryptoHome from "./pages/CryptoHome";
import CryptoDetail from "./pages/CryptoDetail";
import NavBar from "./components/NavBar";

const App = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<CryptoHome />} />
        <Route path="coin/:id" element={<CryptoDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
