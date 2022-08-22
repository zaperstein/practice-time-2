import React, { useState, useEffect } from 'react'

function Songs() {
const [songs, setSongs] = useState();


  useEffect(() => {
    fetch(`/songs`)
    .then((r) => r.json())
    .then(data => setSongs(data))
      },[])

  return (
    <>
      <ul>
         {songs?.map((song) => 
          <>
          <li>{song.title}</li>
          <p>Practice Note</p>
          </>
         )}
     </ul>
    </>
  )
}

export default Songs