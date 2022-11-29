import { Box } from "@mui/system";
import Header from "./Components/header/Header";
import Home from "./Components/Home/Home";
import DataProvider from "./contex/Dataprovider";

function App() {
  return (
    <DataProvider>
      <Header />
      <Box style={{marginTop:"54px"}}>
        <Home />
      </Box>
    </DataProvider>
  );
}

export default App;
