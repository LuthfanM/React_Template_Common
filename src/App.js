import routes from "./navigators/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WithTracker from "./components/WithTracker";
import "./App.css";
import ThemeConfig from "./layout";
import Router from "./navigators/index";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ThemeConfig>
          <Router />
        </ThemeConfig>
      </div>
    </BrowserRouter>
  );
}

export default App;
