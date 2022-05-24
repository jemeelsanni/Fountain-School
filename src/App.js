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
import AddSubject from "./pages/AddSubject";
import AddCaAndExam from "./pages/AddCaAndExams";
import PrintStudentProfile from "./pages/PrintStudentProfile";


import Omo from "./pages/Omo";
import UserSignin from "./auth/UserSignin";
import PersonalDetails from "./pages/PersonalDetails";
import Receipt from "./pages/Receipt";
import TimeTable from "./pages/TimeTable";
import Result from "./pages/Result";
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

        <Route path="receipt" element={<Receipt />} />
        <Route path="timetable" element={<TimeTable />} />
        <Route path="result" element={<Result />} />

        <Route path="mainmenu" element={<MainMenu />} />
        <Route path="editdetails" element={<EditDetails />} />
        <Route path="addsubject" element={<AddSubject />} />
        <Route path="addcaandexam" element={<AddCaAndExam />} />
        <Route path="printstudentprofile" element={<PrintStudentProfile />} />
        

      </Routes>
    </div>
  );
}

export default App;
