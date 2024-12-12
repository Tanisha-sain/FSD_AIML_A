import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function Register({regData}) {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function getData(e){
        e.preventDefault();
        const data = {name, email, password}
        regData(data);
        alert("Registration successful");
    }
  return (
    <div>
        <h1>Register here</h1>
        <form>
        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" onChange={(e) => setName(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" onChange={(e) => setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" onChange={(e) => setPassword(e.target.value)} class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" onClick={getData} class="btn btn-primary">Register</button>
</form>
    </div>
  )
}

export default Register