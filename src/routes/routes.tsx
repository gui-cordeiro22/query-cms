// Dependencies
import { FunctionComponent, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Components
import { RouteValidator } from "./route-validator";

// Pages
const Query = lazy(() => import("../components/query"));

export const ApplicationRoutes: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<RouteValidator component={Query} />} />

          <Route path="*" element={<Navigate to={{ pathname: "/" }} />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
