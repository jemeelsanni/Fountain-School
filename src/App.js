import { Route, Routes } from "react-router-dom";
import TeacherSignin from "./auth/TeacherSignin";
import Home from "./pages/Home";
import Test from "./pages/Test";
import SchoolFeePayment from "./pages/SchoolFeePayment";
import PrintFee from "./pages/PrintFee";
import PrintTimetable from "./pages/PrintTimetable";
import PrintResult from "./pages/PrintResult";
import MainMenu from "./pages/MainMenu";
import EditDetails from "./pages/EditDetails";

import Omo from "./pages/Omo";
import UserSignin from "./auth/UserSignin";
import PersonalDetails from "./pages/PersonalDetails";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="test" element={<Test />} />
        <Route path="power" element={<Test />} />
        <Route path="teachersignin" element={<TeacherSignin />} />
        <Route path="feepayment" element={<SchoolFeePayment />} />
        <Route path="omo" element={<Omo />} />
        <Route path="userauth" element={<UserSignin />} />
        <Route path="personal" element={<PersonalDetails />} />
        <Route path="printfee" element={<PrintFee />} />
        <Route path="printtimetable" element={<PrintTimetable />} />
        <Route path="printresult" element={<PrintResult />} />
        <Route path="mainmenu" element={<MainMenu />} />
        <Route path="editdetails" element={<EditDetails />} />
      </Routes>
    </div>
  );
}

export default App;
