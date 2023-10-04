import Navbar from "./Components/Header"
import { Routes, Route, BrowserRouter} from "react-router-dom";
import CaseStudy1 from "./Pages/Portfolio/CaseStudy1";
import CaseStudy2 from "./Pages/Portfolio/CaseStudy2";
import CaseStudy3 from "./Pages/Portfolio/CaseStudy3";
import Home from "./Pages/index"
import "./App.css"

function App() {
  return (
    <>
         <BrowserRouter>
         <Navbar/>
           <Routes>
           <Route path="/" element={<Home/>}></Route>
            <Route path="/CaseStudy1" element={<CaseStudy1/>}></Route>
            <Route path="/CaseStudy2" element={<CaseStudy2/>}></Route>
            <Route path="/CaseStudy3" element={<CaseStudy3/>}></Route>
            {/*Add route here*/}
          </Routes>
          </BrowserRouter>
    </>
  );
}

export default App;
