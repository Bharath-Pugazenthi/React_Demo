import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserView from './UserView';
import MyForm from './Form';
import ShowUser from './ShowUser';

function App() {
  return (
      <Routes>
        <Route path="/form" element={<MyForm />} />
        <Route path="/" element={<ShowUser />} />
        <Route path="/userview" element={<UserView />} />
        <Route path="/err" element={<div>Internal server error</div>} />
      </Routes>
  );
}

export default App;
