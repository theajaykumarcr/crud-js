import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ViewEmployee from "./components/ViewEmployee";
import EmployeeList from "./components/EmployeeList";
import PostEmployee from "./components/PostEmployee";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/view/:empid" element={<ViewEmployee />}></Route>
          <Route path="/" element={<EmployeeList />}></Route>
          <Route path="/add" element={<PostEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
