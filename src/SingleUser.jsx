import {useState, useEffect} from 'react';
import axios from 'axios';


const SingleUser = () => {

    const [posts, setposts] = useState([]);
    const [id, setid] = useState(1);

    const SingleUserLink = " https://reqres.in/api/users"

    const handlepagechangePrev = () => {
        const value = id - 1;
        setid(value);
        console.log(id, "naruto")
    }

    const handlepagechangeNext = () => {
        const value = id + 1;
        setid(value);
        console.log(id, "sasuke")
    }

    //api call :

    const APIcallAllUser = () => {
        axios
          .get(`${SingleUserLink}/${id}`)
          .then((response) => {
            console.log(response.data.data, "hinata");
            setposts(response.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };

    // use Effect

       useEffect(() => {
        APIcallAllUser()
    }, [id])
    

  return (
    <div className='super'>
        <button onClick={handlepagechangePrev}>Prev</button>
        <button onClick={handlepagechangeNext}>Next</button>

        <h1>Single Users</h1>
        {/* <ol>
            <li key={posts.id}>
                <h3>{posts.id}</h3>
                <h3>{posts.email}</h3>
                <h3>{posts.first_name}</h3>
                <h3>{posts.last_name}</h3>
                <img src={posts.avatar} />
            </li>
        </ol> */}

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
            <tr key={posts.id}>
            <td>{posts.id}</td>
            <td>{posts.email}</td>
            <td>{posts.first_name}</td>
            <td>{posts.last_name}</td>
            <td><img src={posts.avatar} /></td>
          </tr>
      
      </tbody>
    </table>

    </div>
  )
}

export default SingleUser;