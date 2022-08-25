import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./context/user";
import { ThemeContext } from "./context/theme";
import { Center, Square, Circle, VStack, HStack, Button, Text } from '@chakra-ui/react'


function Navbar({ onLogout }) {
  const { user, setUser } = useContext(UserContext)
  const { darkGreen, lightGreen, tan } = useContext(ThemeContext)

  
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });;
  }

  

  return (
    <>
    <Button 
      bg={darkGreen}
      color={tan}>
      <Link to="/" onClick={handleLogout}>Logout</Link>
    </Button>
    <Center>

    <VStack
      bg={darkGreen}
      color="tan"
      w="50%"
      m={10}
      p={10}
      borderRadius="md"
      >
    <header>
      <Text fontSize='3xl'>Welcome, {user.username}!</Text>
    </header>
    <nav>
      <HStack>
        <Link to={`users/${user.id}/setlists`}>My Gigs</Link>
        <Link to={`users/${user.id}/instruments`}>My Instruments</Link>
        <Link to="/songs">All Songs</Link>
      </HStack>
    </nav>
    </VStack>
    </Center>
    </>
  );
}

export default Navbar;