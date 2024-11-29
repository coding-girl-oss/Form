import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';



const App = () => {
  return (
    <>
    <Router>
      
      <div className="h-screen w-full bg-[url(https://tse3.mm.bing.net/th?id=OIP.oevDArCg3zMfZHJ2YTrZXAHaEK&pid=Api&P=0&h=220)] bg-center bg-no-repeat bg-cover">
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      </Routes>
      </div>
      </Router>
    </>
  );
};

export default App;
