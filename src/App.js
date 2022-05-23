import { Route, Routes } from "react-router-dom";
import TeacherSignin from "./auth/TeacherSignin";
import Home from "./pages/Home";
import Test from "./pages/Test";
import SchoolFeePayment from "./pages/SchoolFeePayment";


import Omo from "./pages/Omo";
import UserSignin from "./auth/UserSignin";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="test" element={<Test />} />
        <Route path="power" element={<Test />} />
        <Route path="teachersignin" element={<TeacherSignin />} />
        <Route path="feepayment" element={<SchoolFeePayment/>} />
        <Route path="omo" element={<Omo />} />
        <Route path="userauth" element={<UserSignin />} />
      </Routes>
    </div>
  );
}

export default App;
