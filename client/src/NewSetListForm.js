import React, { useContext, useState } from 'react'
import { UserContext } from "./context/user"


function NewSetListForm({setlists, setSetlists}) {
  const { user } = useContext(UserContext);
  const [name, setName] = useState("")
  

  function handleSubmit(e){

    e.preventDefault();
    
    // const newSetlist = {
    //   ...formData
    // }

    fetch('/setlists', {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          amt_of_songs: "",
          user_id: user?.id
        }),
    })
    .then((resp) => resp.json())
    .then(newSetlist => setSetlists([...setlists, newSetlist]))
};

  function handleChange(e) {
    setName(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create a new gig</h1>
      <input
        placeholder="Name"
        type="text"
        name="name"
        onChange={handleChange}
        value={name}
      />
      <button type="submit">Create</button>
    </form>
  );
}

export default NewSetListForm