import React, { useState, useEffect } from 'react'
import Instrument from "./Instrument"

function Instruments() {
  const [instruments, setInstruments] = useState([]);


  useEffect(() => {
    fetch("/instruments")
      .then((r) => r.json())
      .then((r) => {
        setInstruments(r);
        console.log(r);
      });
  }, []);

  console.log(instruments)
  return (
    <>
    {instruments.map((instrument) => (<Instrument key={instrument.id} instrument={instrument}/>))}
    </>
  )
}

export default Instruments