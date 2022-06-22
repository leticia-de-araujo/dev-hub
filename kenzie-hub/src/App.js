import "./App.css";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
import { useState } from "react";

function App() {
  const [homePage, setHomePage] = useState(false);

  return (
    <div className="App">
      <GlobalStyle />
      <Routes homePage={homePage} setHomePage={setHomePage} />
    </div>
  );
}

export default App;
