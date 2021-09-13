import "./css/main.css";
import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";
import { BrowserRouter, Route } from "react-router-dom";

import { motion } from "framer-motion";
import Header from "./components/Header";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path="/todolist">
          <Todos />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
