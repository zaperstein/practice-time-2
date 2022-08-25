import { VStack, Input, Button, Alert, AlertIcon, HStack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { ThemeContext } from "./context/theme"
import { useContext } from "react"
// import { useNavigate } from "react-router-dom";
function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")
  const [display, setDisplay] = useState("none")
  const { darkGreen, lightGreen, tan } = useContext(ThemeContext)
  
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
     else {
    setDisplay("block")
    }
  });
}
  //     .then((r) => r.json())
  //     .then((user) => onLogin(user));
  // }
  

  return (
    
    <form onSubmit={handleSubmit}>
      <VStack p="5">
      <Input
        color="tan"
        placeholder="Username"
        _placeholder= {{color: "tan"}}
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
      <Input 
        color="tan"
        placeholder="Password"
        _placeholder= {{color: "tan"}}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <Alert style={{display: display}}status='error'>
          <HStack>
          <AlertIcon/> 
          <Text>
            Incorrect username or password
            </Text>
          </HStack>
        </Alert>
     
      <Button type="submit">Login</Button>
    </VStack>
    </form>
  );
}

export default Login;