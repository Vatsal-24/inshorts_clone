import Articles from "./components/Articles";
import Header from "./components/Header";
import InfoHeader from "./components/InfoHeader";
import { Box } from "@mui/material";
import "./App.css";

const style = {
  bodyContainer: {
    margin: "40px auto 0 auto",
    width: "55%",
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
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto:wght@300&display=swap');
      </style>
    </div>
  );
}

export default App;
