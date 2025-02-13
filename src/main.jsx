import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GameHandler from "./components/GameHandler";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GameHandler />
  </StrictMode>,
);
