import { Route, Routes } from "react-router-dom";
import Book from "./pages/web/Book";
import Services from "./pages/web/Services";
import Homepage from "./pages/web/Homepage";
import Packages from "./pages/web/Packages";
import Gallery from "./pages/web/Gallery";
import Review from "./pages/web/Review";
import Contact from "./pages/web/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="book" element={<Book />} />
        <Route path="services" element={<Services />} />
        <Route path="packages" element={<Packages />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="review" element={<Review/>} />
        <Route path="contact" element={<Contact/>} />
        
         

      </Routes>
    </div>
  );
}

export default App;
