import React from "react";
import Joke from "./components/Jokes";
import jokesData from "./components/jokesData";
console.log(jokesData)

function App() {
      const jokesArray = jokesData.map((joke) => {
        return <Joke setup={joke.setup} punchline={joke.punchline} />;
      });
  return (
    
    <div className="jokes--container">
     {jokesArray}
    </div>
  );
}

export default App;

