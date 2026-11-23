import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import './styles/tokens.css';
import './styles/global.css';
import './styles/utilities.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
