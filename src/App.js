import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="test" element={<Test />} />
        <Route path="omo" element={<Test/>} />
      </Routes>
    </div>
  );
}

export default App;
