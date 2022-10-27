import React from 'react';
import './Dashboard.css';
import {Link} from 'react-router-dom';
import { useRef, useState, useEffect } from "react";
import Navbar from '../components/Navbar';

function Dashboard() {

  const [file, setFile] = useState();
  const [preview, setPreview] = useState();
  const handleChange = (event) => {
    const selectedFile = event.target.files[0]
    setFile(selectedFile)
    const filePreview = URL.createObjectURL(selectedFile)
    setPreview(filePreview)
  }

  const [isLogin, SetIsLogin] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    useEffect(() => {
        let token = localStorage.getItem('token');
        if (token) {
            SetIsLogin(true);
        } else {
            SetIsLogin(false);
        }
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        SetIsLogin(false)
    };

  return (    
    <div className='dashboard'>
    <Navbar />
    <h1></h1>

    {file && <img src={preview} alt={file.name} style={{width: "400px"}}/>}
    <div className='fileinput'>
      <input type="file" name="file" onChange={(e) => handleChange(e)}/>
    </div>
    
    <Link to='/visualize'>
      <button className='btn-viz' onClick=''>Visualize</button>
    </Link>
    <Link to='/'>
      <button className='btn-viz' onClick={logout}>Log out</button>
    </Link>
    </div>
  );
}

export default Dashboard
