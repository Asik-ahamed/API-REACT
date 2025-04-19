import React, { useState } from 'react';
import axios from "axios";

const CreateUser = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const id = 20;

  const API_URL = "https://reqres.in/api/users";

  const createUser = () => {
    console.log("user", firstName, email);

    axios
      .delete(`${API_URL}/${id}`, {
        first_name: firstName,
        email: email,
      })
      .then((res) => {
        console.log("Created", res);
      })
      .catch((err) => {
        console.error("Error", err);
      });
  };

  return (
    <>
      <h2>Create User</h2>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={createUser}>Add User</button>
    </>
  );
};

export default CreateUser;
