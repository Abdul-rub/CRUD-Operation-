import React from "react";
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import { Link}  from "react-router-dom";


 const Home =()=>{
   const [users,setUser] = useState([]);
   
   useEffect(()=>{
      loadUsers()
   },[])
  

   const loadUsers = async ()=>{
    const res = await axios.get("http://localhost:3003/users");
    setUser(res.data.reverse())
   }

   const deleteUser = async id =>{
    await axios.delete(`http://localhost:3003/users/${id}`)
    loadUsers();
   }



    return(
        <div className="container">
            <div className="py-4">
            <h1>Hi This is Home Page</h1>
            <table className="table border shadow">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
   {
    users.map((user,index, )=>(
        <tr>
            <th scope="row">{index+1} </th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
             <Link className="btn btn-primary" to={`/users/view/${user.id}`}>View</Link>
            <Link className="btn btn-outline-primary" to={`/users/edit/${user.id}`} >Edit</Link>
             <Link className="btn btn-danger" to='/' onClick={()=>deleteUser(user.id)}>Delete</Link> 

            </td>
        </tr>
    ))
   }
  </tbody>
</table>
            </div>
        </div>
    )
}

export default Home