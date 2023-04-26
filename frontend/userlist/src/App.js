import ButtonAdd from "./components/ButtonAdd";
import "./App.css";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import List from "./components/List";
import UserState from "./context/Users/UserState";

function App() {
  return (
    <>
    <UserState>
      <ButtonAdd />
      <List/>
      </UserState>
    </>
  );
}

export default App;
