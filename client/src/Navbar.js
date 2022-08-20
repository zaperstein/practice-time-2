import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./context/user";
function Navbar({ onLogout }) {
  const { user, setUser } = useContext(UserContext)

  
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
    <header>
      <h2>Welcome, {user.username}!</h2>
      <Link to="/" onClick={handleLogout}>Logout</Link>
    </header>
    <nav>
      <Link to="setlists">My Gigs</Link>
      <Link to="myinstruments">My Instruments</Link>
    </nav>
    </>
  );
}

export default Navbar;