import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { CalculatorProvider } from "./contexts/CalculatorContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CalculatorProvider>
      <App />
    </CalculatorProvider>
  </StrictMode>,
);
