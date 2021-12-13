import React, { useState, useEffect } from 'react';

import './App.css';
import StudentsList from './components/StudentsList';
import axios from 'axios'


function App() {
    const [studentsData, setStudentsData] = useState([])

    useEffect(() => {
      axios.get(`http://localhost:3001/students`)
      .then(res => {
        const students = res.data;
        setStudentsData(students);
      })
    },[])

    return (
      <div className="App">
        Students
        <hr/>

        <StudentsList students={studentsData}/>
      </div>
    );
}

export default App;
