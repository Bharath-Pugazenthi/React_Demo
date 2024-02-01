import React, { useState,useEffect } from 'react';
import image from './profile.png';
import './UserCard.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserCard = (props) => {
  const navigate = useNavigate()
  

  const[isloading,setloading]=useState(true);
  const[userlist,setuserlist]=useState([]);

  // useEffect(()=>{
  //   axios.get('http://10.10.29.161:4000/api/users')
  //   .then((res)=>{
  //     setuserlist(res.data.data.users)
  //     setloading(false)
  //   })
  //   .catch((err)=>{
  //     console.log(err)
  //     navigate('/err')
  //   })
  // },[]);
  
  useEffect(()=>{
    setTimeout(()=>
    {
      setloading(false);
      setuserlist(props);
    },1000)
  },[]);

  useEffect(()=>
  {
    console.log('Component update');
  })

  useEffect(()=>{
    return()=>{
      console.log('Component unmount');
    }
  },[])
  return (
    <>
    {
      isloading?(<div>loading...</div>):(<div className="user-card">
      <img src={image} alt="Profile" />
      <h3>{props.user.name}</h3>
      <p>Userid: {props.user.id}</p>
      <p>Username: {props.user.username}</p>
      <p>Email: {props.user.email}</p>
      {/* <p>Address: {props.user.address.street}, {props.user.address.city}</p> */}
      {/* <p>Phone: {props.user.phone}</p> */}
      {/* <p>website: {props.user.website}</p> */}
    </div>)
    }
    </>
  );
};

export default UserCard;
