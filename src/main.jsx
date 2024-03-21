import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import store from "./redux/store.js"
import "./index.css"
import axios from "axios"

axios.defaults.baseURL = "https://crypto-server-3wsd.onrender.com";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,

)
