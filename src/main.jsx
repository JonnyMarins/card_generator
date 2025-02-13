import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import FlyProvaider from "./context/FlyProvaider.jsx";
import Dashboard from "./Dashboard.jsx";
import "./index.css";
import Favorites from "../pages/Favorites.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FlyProvaider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<App />} />
            <Route path="/favorites" element={<Favorites />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FlyProvaider>
  </StrictMode>
);
