import { GlobalStyle } from "./components/Global.tsx";
import Navbar from "./mustang-design/core/Navbar";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <div style={{ width: "100vw", height: "200px", background: "black" }}>
        {" "}
        HEWWO THERR
      </div>
    </>
  );
}

export default App;
