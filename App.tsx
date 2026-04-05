import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import LoadingScreen from "./src/components/ui/LoadingScreen";
import Navigation from "./src/components/Navigation/Navigation";

import { ROUTE_COMPONENTS } from "./src/routes";

export default function App() {
  return (
    <Router>
      <Navigation />
      <Suspense fallback={<LoadingScreen blurBackground />}>
        <Routes>
          {Object.entries(ROUTE_COMPONENTS).map(([path, Component]) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
}
