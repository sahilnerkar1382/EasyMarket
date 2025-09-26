import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./landing/home/HomePage";
import Signup from "./landing/signup/Signup";
import AboutPage from "./landing/about/AboutPage";
import ProductPage from "./landing/product/ProductsPage";
import PricingPage from "./landing/pricing/PricingPage";
import SupportPage from "./landing/support/SupportPage";

import NotFound from "./landing/NotFound";
import Navbar from "./landing/Navbar";
import Footer from "./landing/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);