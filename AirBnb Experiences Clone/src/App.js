import React from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Hero from "./components/Hero";
import data from "./data";
console.log(data)

function App() {
  const cards = data.map(card => {
    return <Cards card={card}/>

  })

  return (
    <div className="container">
      <Header />
      <Hero />
      <div className="cards-container">{cards}</div>
    </div>
  );
}

export default App;
