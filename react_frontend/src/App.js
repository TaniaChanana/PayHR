// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import ListEmployeeComponent from './components/ListEmployeeComponent';
// import HeaderComponent from './components/HeaderComponent';
// import FooterComponent from './components/FooterComponent';
// import CreateEmployeeComponent from './components/CreateEmployeeComponent';
// import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
// import ViewEmployeeComponent from './components/ViewEmployeeComponent';

// function App() {
//   return (
//     <div>
//         <Router>
//               <HeaderComponent />
//                 <div className="container">
//                     <Switch> 
//                           <Route path = "/" exact component = {ListEmployeeComponent}></Route>
//                           <Route path = "/employees" component = {ListEmployeeComponent}></Route>
//                           <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
//                           <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
//                           {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
//                     </Switch>
//                 </div>
//               <FooterComponent />
//         </Router>
//     </div>
    
//   );
// }

// export default App;


import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './components/home/Home';
import Birthday from './components/birthdays/Birthday';
import WorkAnniverseries from './components/workAnniversries/WorkAnniverseries';
import Holidays from './components/holidays/Holidays';
import Salary from './components/paySlip/Salary';
import AddEmployee from './components/employee/AddEmployee';
import ViewEmployee from './components/employee/ViewEmployee';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/AddEmployee" element={<AddEmployee/>}/>
          <Route exact path="/Birthday" element={<Birthday/>}/>
          <Route exact path="/WorkAnniverseries" element={<WorkAnniverseries/>}/>
          <Route exact path="/Salary" element={<Salary/>}/>
          <Route exact path="/Holidays" element={<Holidays/>}/>
          <Route exact path="/ViewEmployee" element={<ViewEmployee/>}/>

        </Routes>


      </div>
    </Router>

  );
}

export default App;
