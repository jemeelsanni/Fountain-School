import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="test" element={<Test />} />
<<<<<<< HEAD
        <Route path="omo" element={<Test/>} />
=======
        <Route path="power" element={<Test />} />
>>>>>>> da19adcbf7c565c196fe392487f1ef7f797a0e6d
      </Routes>
    </div>
  );
}

export default App;
