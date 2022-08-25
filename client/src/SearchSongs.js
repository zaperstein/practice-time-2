import React, { useState, useContext } from "react";
import { Input, Button, HStack, Box, VStack, Text } from '@chakra-ui/react'
import { ThemeContext } from "./context/theme"
import { Search2Icon } from '@chakra-ui/icons'


function SearchSongs({ onSearch }) {
  const [search, setSearch] = useState("");
  const {tan, darkGreen, lightGreen } = useContext(ThemeContext)
  function handleSubmit(e) {
    e.preventDefault();
    onSearch(search);
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack >
      <Text fontSize="2xl">Search Songs</Text>
      <Input
        type="text"
        id="search"
        placeholder="Find a song"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
      <Button type="submit"><Search2Icon color={darkGreen}/></Button>
      </HStack>
    </form>
  );
}

export default SearchSongs;