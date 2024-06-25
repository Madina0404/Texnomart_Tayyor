import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Product from "./context/productsContext.jsx";
import { XitSavdoProvider } from "./context/XitSavdoContext.jsx";
import KarzinkaProvider from "./context/BasketContext.jsx";
import LikeProvider from "./context/LikeContext.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./routes/AuthContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChakraProvider>
      <Product>
        <XitSavdoProvider>
          <KarzinkaProvider>
            <LikeProvider>
              <AuthProvider>
                <App />
              </AuthProvider>
            </LikeProvider>
          </KarzinkaProvider>
        </XitSavdoProvider>
      </Product>
    </ChakraProvider>
  </BrowserRouter>
);
