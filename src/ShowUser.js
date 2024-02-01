import React from 'react';
import MyForm from './Form';
import {Link} from 'react-router-dom';
const ShowUser=()=>{
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'black',
      };
    const buttonStyle = {
        backgroundColor: 'orange',
        color: 'white',
        padding: '20px 20px',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
      };
    return(
        <Link to="/userview">
            <div style={containerStyle}>
            <center><button style={buttonStyle}>Show User</button></center>
            </div>
        </Link>
    )
}
export default ShowUser;