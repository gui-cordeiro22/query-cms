// Dependencies
import { FunctionComponent, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Components
import { RouteValidator } from "./route-validator";

// Pages
const HomePage = lazy(() => import("../pages/home"));

export const ApplicationRoutes: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<RouteValidator component={HomePage} />} />

          <Route path="*" element={<Navigate to={{ pathname: "/" }} />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
