import React, { useState } from "react";
import { Input, Button, HStack, Box } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'


function SearchSongs({ onSearch }) {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(search);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box >

      <Input
        type="text"
        id="search"
        placeholder="Find a song"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
      <Button type="submit"><Search2Icon/></Button>
      </Box>
    </form>
  );
}

export default SearchSongs;