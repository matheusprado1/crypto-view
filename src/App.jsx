import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import CryptoHome from "./pages/CryptoHome";
import CryptoDetail from "./pages/CryptoDetail";

const App = () => {
  return (
    <div className="dark-theme min-h-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<CryptoHome />} />
        <Route path="/coin/:id" element={<CryptoDetail />} />
      </Routes>
    </div>
  )
}

export default App
