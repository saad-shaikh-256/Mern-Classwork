import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// ===== Navbar & Footer Component =====
import Navbar from "./Navbar-Footer/Navbar";
import Footer from "./Navbar-Footer/Footer";

// ===== Component =====
import Home from "./Pages/Home";
import StudentTable from "./Pages/StudentTable";
import Counter from "./Pages/Counter";
import Calculator from "./Pages/Calculator";
import Form from "./Forms/Form";
import FormValidation from "./Forms/FormValidation";
import LocalStorageDemo from "./LocStorage/LocStorage";
import ShowLocStorage from "./LocStorage/ShowLocStorage";
import useMemoDemo from "./useMemo/useMemoDemo";
import useMemoPractical from "./useMemo/useMemoPractical";
import useEffectDemo from "./useEfect/useEffectDemo";

function App() {
  const studentMarks = [
    {
      name: "John Doe",
      marks1: Math.floor(Math.random() * 101),
      marks2: Math.floor(Math.random() * 101),
      marks3: Math.floor(Math.random() * 101),
    },
    {
      name: "Jane Smith",
      marks1: Math.floor(Math.random() * 101),
      marks2: Math.floor(Math.random() * 101),
      marks3: Math.floor(Math.random() * 101),
    },
    {
      name: "Michael Johnson",
      marks1: Math.floor(Math.random() * 101),
      marks2: Math.floor(Math.random() * 101),
      marks3: Math.floor(Math.random() * 101),
    },
    {
      name: "Emily Davis",
      marks1: Math.floor(Math.random() * 101),
      marks2: Math.floor(Math.random() * 101),
      marks3: Math.floor(Math.random() * 101),
    },
    {
      name: "Robert Brown",
      marks1: Math.floor(Math.random() * 101),
      marks2: Math.floor(Math.random() * 101),
      marks3: Math.floor(Math.random() * 101),
    },
    {
      name: "Sarah Wilson",
      marks1: Math.floor(Math.random() * 101),
      marks2: Math.floor(Math.random() * 101),
      marks3: Math.floor(Math.random() * 101),
    },
    {
      name: "David Martinez",
      marks1: Math.floor(Math.random() * 101),
      marks2: Math.floor(Math.random() * 101),
      marks3: Math.floor(Math.random() * 101),
    },
  ];

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home}></Route>

          <Route
            path="/StudentTable"
            element={<StudentTable studentMarks={studentMarks} />}
          ></Route>
          <Route path="/Counter" Component={Counter}></Route>
          <Route path="/Calculator" Component={Calculator}></Route>

          {/* Form */}
          <Route path="/Form" Component={Form}></Route>
          <Route path="/formValidation" Component={FormValidation}></Route>

          {/* Local Storage */}
          <Route path="/localStorage" Component={LocalStorageDemo}></Route>
          <Route path="/ShowlocalData" Component={ShowLocStorage}></Route>

          {/* Use Memo */}
          <Route path="/useMemoDemo" Component={useMemoDemo}></Route>
          <Route path="/useMemoPractical" Component={useMemoPractical}></Route>

          {/* Use Effect */}
          <Route path="/useEffectDemo" Component={useEffectDemo}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
