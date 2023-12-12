import React from "react";
import "./App.css";
import Joke from "./components/Joke";

function App() {
  const jokes = [
    { id: 1, joke: "I'm afraid for the calender. Its days are numbered." },
    { id: 1, joke: "I used to be addicted to soap, but I'm clean now" },
  ];
  return (
    <div className="jokes">
      <h1> Jokes</h1>
      {jokes.map((joke) => (
        <Joke key={joke.id} joke={joke.joke} />
      ))}
      {/* <Joke joke={jokes[0].joke}/> */}
      {/* <Joke joke={jokes[1].joke}/> */}
    </div>
  );
}

export default App;
