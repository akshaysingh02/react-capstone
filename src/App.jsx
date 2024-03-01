import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { GlobalStyle } from "./styles/Global";
import { ThemeProvider } from "styled-components";
import Register from "../pages/Register";
import Movies from "../pages/Movies";
import Display from "../pages/Display";
import Browse from "../pages/Browse";

const lightTheme = {
};

const darkTheme = {
};

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

function App() {
  const [theme, setTheme] = useState("light");

  return (

    <ThemeProvider theme={themes[theme]}>
    <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/display" element={<Display />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
