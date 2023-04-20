import "./App.css";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import ClassicMassage from "./components/ServicesToggle/ClassicMassage";
import Lymphdrainage from "./components/ServicesToggle/Lymphdrainage";
import Maderotherapy from "./components/ServicesToggle/Maderotherapy";
import Comp from "./components/Comp";
function App() {
  const location = useLocation();
  return (
    <>
      {" "}
      <AnimatePresence onExitComplete={true}>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Comp />} />
          <Route path="/ClassicMassage" element={<ClassicMassage />} />
          <Route path="/Lymphdrainage" element={<Lymphdrainage />} />
          <Route path="/Maderotherapy" element={<Maderotherapy />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
