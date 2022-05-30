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
import AdmissionLetter from "./pages/AdmissionLetter";
import PersonalDetails2 from "./pages/PersonalDetails2";
import PaymentValidity from "./pages/PaymentValidity";
import FormsAndPayment from "./pages/FormsAndPayment";
import ProceedToPayment from "./pages/ProceedToPayment";
import Calender from "./pages/Calender";

import OtherForms from "./pages/OtherForms";
import About from "./pages/web/About";
import Contact from "./pages/web/Contact";

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
        <Route path="letter" element={<AdmissionLetter />} />
        <Route path="personal2" element={<PersonalDetails2 />} />
        <Route path="forms" element={<FormsAndPayment />} />

        <Route path="mainmenu" element={<MainMenu />} />
        <Route path="editdetails" element={<EditDetails />} />
        <Route path="addsubject" element={<AddSubject />} />
        <Route path="paymentval" element={<PaymentValidity />} />
        <Route path="proceed" element={<ProceedToPayment />} />
        <Route path="addcaandexam" element={<AddCaAndExam />} />
        <Route path="printstudentprofile" element={<PrintStudentProfile />} />
        <Route path="calender" element={<Calender />} />


        <Route path="otherforms" element={<OtherForms />} />

        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

      </Routes>
    </div>
  );
}

export default App;
