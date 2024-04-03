// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Layout/Header";
import Departments from "./components/Departments"; // Make sure the path is correct
import AddDepartment from "./components/departments/AddDepartment";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/departments" element={<Departments />} />
            <Route exact path="/addDepartment" element={<AddDepartment/>}/>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
