import Articles from "./components/Articles";
import Header from "./components/Header";
import InfoHeader from "./components/InfoHeader";
import { Box } from "@mui/material";
import "./App.css";
import useWindowDimensions from "./components/windowDimension";

const style = {
  bodyContainer: {
    margin: "40px auto 0 auto",
    width: "55%",
  },
  mediumScreenBodyContainer: {
    margin: "40px auto 0 auto",
    width: "75%",
  },
  smallScreenBodyContainer: {
    margin: "40px auto 0 auto",
    width: "85%",
  },
};
function App() {
  const { height, width } = useWindowDimensions();
  return (
    <div>
      <Header />
      <Box
        style={
          width >= 1220
            ? style.bodyContainer
            : width >= 1000
            ? style.mediumScreenBodyContainer
            : style.smallScreenBodyContainer
        }
      >
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
