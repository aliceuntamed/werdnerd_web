import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";
import { AuthProvider } from "./src/contexts/AuthContext";
// Ignore missing type declarations for CSS side-effect import
// @ts-expect-error: CSS side-effect import is handled by Vite.
import "./src/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
);
