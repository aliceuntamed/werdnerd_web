import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import LoadingScreen from "./components/ui/LoadingScreen";
import Navigation from "./components/Navigation/Navigation";
import { Footer } from "./components/layout/Footer";
import ErrorBoundary from "./components/layout/ErrorBoundary";

import { ROUTE_COMPONENTS } from "./routes";

export default function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Navigation />
        <Suspense fallback={<LoadingScreen blurBackground />}>
          <Routes>
            {Object.entries(ROUTE_COMPONENTS).map(([path, Component]) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Routes>
        </Suspense>
        <Footer />
      </ErrorBoundary>
    </Router>
  );
}
