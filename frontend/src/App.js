import { Box } from "@mui/system";
import Header from "./Components/header/Header";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div>
      <Header />
      <Box style={{marginTop:"54px"}}>
        <Home />
      </Box>
    </div>
  );
}

export default App;
