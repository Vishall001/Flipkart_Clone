import { Box } from "@mui/system";
import Header from "./Components/header/Header";
import Home from "./Components/Home/Home";
import DataProvider from "./context/Dataprovider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailView from "./Components/Details/DetailView";
import Cart from "./Components/Cart/Cart";
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: "54px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailView />} />
            <Route path="/cart" element={<Cart />} />

          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
