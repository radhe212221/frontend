import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./comp/Auth";
import Dashboard from "./comp/Dashboard";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="" element={<Auth />} />
        <Route index path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
