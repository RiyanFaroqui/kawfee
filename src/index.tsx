import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DesktopHomeX } from "./screens/DesktopHomeX";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <DesktopHomeX />
  </StrictMode>,
);
