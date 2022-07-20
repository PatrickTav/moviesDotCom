import { Link, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import {} from 'react-icons'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
