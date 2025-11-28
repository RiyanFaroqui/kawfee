import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DesktopHomeX } from "./screens/DesktopHomeX";
import { BagProvider } from "./context/BagContext";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BagProvider>
      <DesktopHomeX />
    </BagProvider>
  </StrictMode>,
);
