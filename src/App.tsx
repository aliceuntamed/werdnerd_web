import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import LoadingScreen from "./components/ui/LoadingScreen";
import Navigation from "./components/Navigation/Navigation";
import { Footer } from "./components/layout/Footer";

import { ROUTE_COMPONENTS } from "./routes";

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
      <Footer />
    </Router>
  );
}
