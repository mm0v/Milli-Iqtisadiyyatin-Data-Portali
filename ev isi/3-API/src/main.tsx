import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { DataProvider } from "./context/DataContex";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </StrictMode>
);