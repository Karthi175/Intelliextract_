import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import Header from "./components/Header/Header";
import Firstpage from "./components/Main/Firstpage";
import { Routes, Route, Link } from "react-router-dom";
// import Viewuser from "./components/User/Viewuser";
// import Viewchart from "./components/User/Viewchart";
import Profilechart from "./components/Profileuser/Profilechart";
import Dashboard from "./components/Dashboard/Dashboard";
import ContextWrapper from "./ContextWrapper";
import "./App.css";
function App() {
  return (
    <>
      <ContextWrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Firstpage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profilechart />} />
        </Routes>
      </ContextWrapper>
    </>
  );
}

export default App;
