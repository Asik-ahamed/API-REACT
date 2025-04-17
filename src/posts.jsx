import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Posts = () => {
  const [posts, setPosts] = useState([]);
  const link = 'https://reqres.in/api/users';

   //  const person = posts.find((post) => post.id === 2);

   const apicall = () => {
    axios
      .get(link)
      .then((response) => {
        setPosts(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

    useEffect(() => {
       apicall();
    }, []);
  

  return (
    <div className='hero'>

        <h1>Posts</h1>
        {/* <ol> */}
            {/* {posts.map((post) => (
             <li key={post.id}>
                <h2>{post.name}</h2>
                <h3>{post.username}</h3>
                <p>{post.email}</p>
             </li>
            ))} */}


               
                 {/* {posts .filter((post) => post.name.length > 2)
                 .map((post) => (
                              <li key={post.id}>
                              <h2>{post.name}</h2>
                              <p>{post.email}</p>
                              </li>
                                ))} */}


                      {/* {person && (
                     <li key={person.id}>
                     <h2>{person.name}</h2>
                     <p>{person.email}</p>
                     <p>{person.geo}</p>
                      </li>
                       )} */}

         {/* </ol> */}

          <table border="1" cellPadding="10" cellSpacing="0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Avatar</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.email}</td>
            <td>{post.first_name}</td>
            <td>{post.last_name}</td>
            <td><img src={post.avatar} /></td>
          </tr>
        ))}
      </tbody>
    </table> 

    </div>
  )
}

export default Posts;