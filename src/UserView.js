import React, { useState } from 'react';
import UserCard from './UserCard';
import userData from './UserData';
import './UserView.css'; 
import { Link } from 'react-router-dom';
import MyForm from './Form';

const UserView = () => {
  const [users,setUsers] = useState(userData);
  const addUser=(newUser)=>{
    setUsers((prevUsers) => [...prevUsers, newUser]);
  }
  return (
    <div className="user-grid">
      <Link to='/form'>
        <button>create user</button>
      </Link>
      <h2>User View</h2>
      <div className="grid-container">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      {/* <MyForm addUser={addUser}/> */}
    </div>
  );
};

export default UserView;
