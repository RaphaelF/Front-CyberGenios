import { GlobalStyle } from "./components/Global.tsx";
import Home from "./components/Home";
import Navbar from "./mustang-design/core/Navbar";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Home />
    </>
  );
}

export default App;
