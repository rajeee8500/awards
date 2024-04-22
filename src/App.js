import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AboutPortal from "./Pages/AboutPortal/AboutPortal";
import AwardsList from "./Pages/AwardsList/AwardsList";
import Ongoing from "./Pages/Ongoing/Ongoing";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutPortal" element={<AboutPortal />} />
          <Route path="/awardsList" element={<AwardsList />} />
          <Route path="/ongoing" element={<Ongoing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
