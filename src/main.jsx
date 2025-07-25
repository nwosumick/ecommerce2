import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./Components/ShopContext/ShopContext.jsx";

createRoot(document.getElementById("root")).render(
  <ShopContextProvider>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
      ,
    </BrowserRouter>
  </ShopContextProvider>
);
