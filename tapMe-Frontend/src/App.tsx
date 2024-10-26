import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ApoloComponent from "./context/customTapContext";
import "./App.css";
import MainComponent from "./components/MainComponent";
function App() {
  return (
    <>
      <Router>
        <ApoloComponent>
          <Routes>
            <Route path="/" element={<MainComponent />} />
          </Routes>
        </ApoloComponent>
      </Router>
    </>
  );
}

export default App;
