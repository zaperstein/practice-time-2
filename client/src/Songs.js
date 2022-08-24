import React, { useState, useEffect } from 'react'
import PracticeNotes from './PracticeNotes';
import AddPracticeNoteForm from './AddPracticeNoteForm';
import SearchSongs from './SearchSongs'

function Songs() {
const [songs, setSongs] = useState();
const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(`/songs`)
    .then((r) => r.json())
    .then(data => setSongs(data))
      },[])

      const displayedSongs = songs?.filter((song) =>
      song.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <>
      <ul>
        <SearchSongs onSearch={setSearch}/>
         {displayedSongs?.map((song) => 
          <>
          <li>{song.title}</li>
          <PracticeNotes song={song}/>
          <AddPracticeNoteForm song={song}/>
          </>
         )}
     </ul>
    </>
  )
}

export default Songs