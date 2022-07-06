import "./styles.css";
import { useState } from "react";
import DeleteList from "./components/DeleteList";
import CoinTossCounter from "./components/CoinTossCounter";
import Header from "./components/Header";
import Content from "./components/Content";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [results, setResults] = useState([]);

  function toggleLoggedIn() {
    setLoggedIn(!loggedIn);
  }
  return (
    <div>
      <Content loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <div>
        <DeleteList
          results={results}
          setResults={setResults}
          loggedIn={loggedIn}
        />
        <CoinTossCounter
          loggedIn={loggedIn}
          results={results}
          setResults={setResults}
        />
      </div>
    </div>
  );
}
