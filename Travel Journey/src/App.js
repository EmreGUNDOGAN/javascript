import React from "react";
import Data from "./components/Data";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  const datas = Data;
  const data = datas.map((item) => {
    return <Main key={item.id} item={item} />;
  });
  console.log(data);

  return (
    <div className="container">
      <Header />
      {data}
    </div>
  );
}

export default App;
