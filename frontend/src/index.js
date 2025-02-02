import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App";

// Extend the Chakra UI theme
const theme = extendTheme({
  colors: {
    blue: {
      50: "#eef2ff",
      500: "#6366f1", // Soft indigo
    },
  },
});

// Create a root and render the app

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
