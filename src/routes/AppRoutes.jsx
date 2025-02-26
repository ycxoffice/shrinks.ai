// App.jsx (updated)
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import CompanyList from "../pages/CompanyList";
import CompanyData from "../pages/CompanyData";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/companies" element={<CompanyList/>} />
      <Route path="/:companyName" element={<CompanyData />} />
    </Routes>
  );
};
export default AppRoutes;
