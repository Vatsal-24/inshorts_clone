import Articles from "./components/Articles";
import Header from "./components/Header";
import InfoHeader from "./components/InfoHeader";
import { Box } from "@mui/material";

const style = {
  bodyContainer: {
    margin: "40px auto 0 auto",
    width: "60%",
  },
};
function App() {
  return (
    <div>
      <Header />
      <Box style={style.bodyContainer}>
        <InfoHeader />
        <Articles />
      </Box>
    </div>
  );
}

export default App;
