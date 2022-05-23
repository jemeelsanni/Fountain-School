import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Omo from "./pages/Omo";
import UserSignin from "./auth/UserSignin";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="test" element={<Test />} />
        <Route path="omo" element={<Omo />} />
        <Route path="userauth" element={<UserSignin />} />
      </Routes>
    </div>
  );
}

export default App;
