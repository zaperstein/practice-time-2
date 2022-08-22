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
import Songs from "./Songs"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
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
      <Route path="setlists" element={<Setlists />} >
        <Route path=":setlistId" element={<Setlist />}/>
      </Route>

    </Routes>
  </BrowserRouter>
  </UserProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
