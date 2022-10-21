// import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


// import Navbar from './components/Navbar'
// import Dashboard from"./pages/Dashboard"
// import Gateway from"./pages/Gateway"
// import Token from"./pages/Token"
// import AddUser from"./pages/AddUser"
// import Visualize from"./pages/Visualize"

// function Authentication() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path='/dashboard' element={<Dashboard/>}/>
//           <Route path='/gateway' element={<Gateway/>}/>
//           <Route path='/token' element={<Token/>}/>
//           <Route path='/adduser' element={<AddUser/>}/>
//           <Route path='/visualize' element={<Visualize/>}/>
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default Authentication;

import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import LandingPage from "./components/landing_page";
import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import Reset from "./components/reset";
import Dashboard from"./pages/Dashboard"
import Gateway from"./pages/Gateway"
import Token from"./pages/Token"
import AddUser from"./pages/AddUser"
import Visualize from"./pages/Visualize"

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-alternate">
          <Routes>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/gateway' element={<Gateway/>}/>
            <Route path='/token' element={<Token/>}/>
            <Route path='/adduser' element={<AddUser/>}/>
            <Route path='/visualize' element={<Visualize/>}/>
          </Routes>
        </div>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/userDetails" element={<UserDetails />} />
              <Route path="/reset" element={<Reset />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
