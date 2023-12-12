import './App.css';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./components/home/Home";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signup/SignUp";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  );
    
}

export default App;
