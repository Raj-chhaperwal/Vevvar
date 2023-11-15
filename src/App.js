import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import LoginPage from "./Components/LoginPage/LoginPage";
import Header from "./Components/Header";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <>
    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <main className="content">  
              <Routes>
                <Route path="/" element={<LoginPage />}></Route>
                <Route path="/Header" element={<Header />}></Route>
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;


