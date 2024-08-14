import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/about-page";
import ProductsPage from "./pages/products-page";
import NewsEvents from "./pages/news&events";
import ProjectsPage from "./pages/projects-page";
import GalleryPage from "./pages/gallery-page";
import ContactPage from "./pages/contact-page";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="about" element={<AboutPage />}/>
        <Route path="products" element={<ProductsPage />}/>
        <Route path="news&events" element={<NewsEvents />}/>
        <Route path="projects" element={<ProjectsPage />}/>
        <Route path="gallery" element={<GalleryPage />}/>
        <Route path="contact" element={<ContactPage />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
