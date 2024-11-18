import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Toast
import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Toaster position="top-center" richColors duration={2000} />
  </>
);
