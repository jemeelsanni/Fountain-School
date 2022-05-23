import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Omo from "./pages/Omo";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="test" element={<Test />} />
        <Route path="omo" element={<Omo />} />
      </Routes>
    </div>
  );
}

export default App;
