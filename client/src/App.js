import {useState, useEffect} from 'react';
import Login from "./Login"
import Navbar from "./Navbar"
import Signup from "./Signup";
import { useContext } from "react";
import { UserContext } from "./context/user";

function App() {
  // const [user, setUser] = useState(null);
  const { user, setUser } = useContext(UserContext)

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
      <Login onLogin={setUser} />;
      <Signup />
      </>
    )
    }
}

export default App;