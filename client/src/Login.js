import { useState } from 'react';
// import { useNavigate } from "react-router-dom";
function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")
  
  // const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        username: username,
        password: password
      }),
    })
  .then((r) => {
    if (r.ok) {
      r.json().then((user) => 
      {
        onLogin(user)
        // navigate('/me') //change to user
      })
    }
    //  else {
    //   r.json().then(json => setErrors(Object.entries(json.errors)))
    // }
  });
}
  //     .then((r) => r.json())
  //     .then((user) => onLogin(user));
  // }
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input 
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}

        />
     
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;