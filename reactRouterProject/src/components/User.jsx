import React from 'react'
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  //get id from URL
  const { id } = useParams();

  //store user data
  const [user, setUser] = useState(null);

  //call API when pages reloads
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((res)=>res.json())
    .then((data)=>{
      setUser(data);
    });
  },[]);
  return (
    <div style={{ padding:'20px' }}>
      <h2>Facebook Profile</h2>

      {/* id from url */}
      <p>
        <strong>facebook id: </strong>{id}
      </p>

      {/* show API data */}
      {user?(
        <>
        <p><strong>Name:</strong>{user.name}</p>
        <p><strong>Email:</strong>{user.email}</p>
        <p><strong>City:</strong>{user.address.city}</p>

        </>
      ):(

      <p>Loading Profile.............</p>
      )}

    </div>
  );
};

export default User