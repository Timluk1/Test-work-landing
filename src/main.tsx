import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "styles/index.scss";
import "styles/reset.scss";
import App from "./App.tsx";
import { MenuContextProvider } from "context";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <MenuContextProvider>
            <App />
        </MenuContextProvider>
    </StrictMode>,
);
