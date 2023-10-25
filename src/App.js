import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LoginPage from "./Components/LoginPage/LoginPage";

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;