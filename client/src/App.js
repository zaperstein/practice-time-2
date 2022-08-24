import {useState, useEffect} from 'react';
import Login from "./Login"
import Navbar from "./Navbar"
import Signup from "./Signup";
import { useContext } from "react";
import { UserContext } from "./context/user";
import { ThemeContext } from "./context/theme"
// import { ThemeContext } from "./context/theme"
import { Stack, HStack, VStack, Avatar, Center } from '@chakra-ui/react'
function App() {
  // const [user, setUser] = useState(null);
  const { user, setUser } = useContext(UserContext)
  const { darkGreen, lightGreen, tan } = useContext(ThemeContext)
  // const { colors } = useContext(ThemeContext);
  // useEffect(() => {
    // e.preventDefault()
  //   fetch("/me").then((response) => {
  //     if (response.ok) {
  //       response.json().then((user) => setUser(user));
  //     } else {
  //       console.log("not ok")
  //     }
  //   });
  // }, []);

  

  
  function onLogout() {
    setUser(null)
  }

  if (user) {
    return <Navbar onLogout={onLogout}/>;
  } else {
    return (
      <>
      <Center>
      <VStack 
        bg={darkGreen}
        w="33%"
        mb="2"
        justifyContent="center"
        alignItems="center">
        <Avatar src='https://bit.ly/broken-link' />
        <Login onLogin={setUser} />;
        <Signup />
      </VStack>
      </Center>
      </>
    )
    }
}

export default App;