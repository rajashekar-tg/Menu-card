import Navbar from "./Navbar";
import All from "./All";
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import Shakes from "./Shakes";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Nodata from "./Nodata";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <switch>
          <Routes>
            <Route path="/" element={<All />} />
            <Route path="/Breakfast" element={<Breakfast />} />
            <Route path="/Lunch" element={<Lunch />} />
            <Route path="/Shakes" element={<Shakes />} />
            <Route path="*" element={<Nodata />} />
          </Routes>
        </switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
