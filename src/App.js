import "./style/styles.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HeaderBlock, Registration, TrainingCompass } from "./Components/";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="main">
          <div className="wrap">
            <HeaderBlock />
            <Routes>
              <Route path="/*" element={<Registration />} />
              <Route path="/trainingCompass" element={<TrainingCompass />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
