import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useNavigate } from 'react-router-dom';

function Login({regData}) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    function validate(e){
        e.preventDefault();
        if(!regData || !(regData.email == email && regData.password == password)){
            alert("Enter valid credentials")
        }else{
            alert("Login successfully")
            navigate("/dashboard")
        }
    }
  return (
    <div>
        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" onChange={(e) => setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" onChange={(e) => setPassword(e.target.value)} class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" onClick={validate} class="btn btn-primary">Login</button>
</form>
    </div>
  )
}

export default Login