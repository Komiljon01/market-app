import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Redux
import { Provider } from "react-redux";

// Store
import { store } from "./store.js";

// Toast
import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <Toaster position="top-center" richColors duration={2000} />
  </Provider>
);
