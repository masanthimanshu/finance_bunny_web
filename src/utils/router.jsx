import React from "react";
import { lazy, Suspense } from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../pages/home/HomeScreen"));
const DeleteAccount = lazy(() => import("../pages/delete/DeleteAccount"));
const PrivacyPolicy = lazy(() => import("../pages/privacy/PrivacyPolicy"));

export const Router = () => {
  return (
    <Suspense>
      <CssBaseline />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/delete" element={<DeleteAccount />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </Suspense>
  );
};
