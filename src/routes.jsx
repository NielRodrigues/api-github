import React from "react";
import { Route, Routes } from "react-router-dom";
import RepositoriesPage from "./pages/RepositoriesPage";
import Main from "./pages/Main";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/:login/repositories" element={<RepositoriesPage />} />
      <Route path="/" element={<Main />} />
    </Routes>
  );
}
