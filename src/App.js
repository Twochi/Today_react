import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./pages/login/Login";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;