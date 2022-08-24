import React from "react";

const ThemeContext = React.createContext();


function ThemeProvider({ children }) {
  const lightGreen = "7fb086"
  const darkGreen = "#3F6844"
  const tan = "#FAF1CF"
  
  return (
   <ThemeContext.Provider value={{ lightGreen, darkGreen, tan }}>
      {children}
   </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider };