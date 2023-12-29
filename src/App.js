import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import Registration from './registration';
import Addproduct from './addproduct';
import Updateproduct from './updateproduct';
import Protect from './Protected';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/add" element={<Addproduct />} />
          <Route path="/update" element={<Updateproduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
