import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Login from "./Login"
import Navbar from "./Navbar"
import Song from "./Song"
import Setlists from "./Setlists"
import Setlist from "./Setlist"
import PracticeNote from "./PracticeNote"
import Instruments from "./Instruments"
import Instrument from "./Instrument"
import UserInstruments from "./UserInstruments"
import reportWebVitals from './reportWebVitals';
import { UserProvider } from "./context/user"
import { ThemeProvider } from "./context/theme"
import Songs from "./Songs"
import { ChakraProvider, CSSReset } from '@chakra-ui/react'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <ChakraProvider >
  <CSSReset />
  <ThemeProvider>
  <UserProvider>
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<App />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/navbar" element={<Navbar />} />  
      <Route path="/songs" element={<Songs />} />

      <Route path="/practicenote" element={<PracticeNote />} />
      <Route path="/instruments" element={<Instruments />}>
        <Route path=":instrumentId" element={<Instrument/>}/>
      </Route>
      <Route path="myinstruments" element={<UserInstruments/>} />
      <Route path="users/:id/setlists" element={<Setlists />} />
      <Route path="users/:id/instruments" element={<UserInstruments />} />
      
      </Routes>
    </BrowserRouter>
    </UserProvider>
    </ThemeProvider>
    </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
