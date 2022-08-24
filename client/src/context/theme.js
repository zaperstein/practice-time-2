import React from "react";

const ThemeContext = React.createContext();


function ThemeProvider({ children }) {
  const lightGreen = "#5DAA68"
  const darkGreen = "#3F6844"
  const tan = "#FAF1CF"
  
  return (
   <ThemeContext.Provider value={{ lightGreen, darkGreen, tan }}>
      {children}
   </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider };