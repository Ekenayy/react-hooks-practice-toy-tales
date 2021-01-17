import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  const toyUrl = "http://localhost:3001/toys"

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => 
    fetch(toyUrl)
      .then(r => r.json())
      .then(toys => setToys(toys))
  , [])

  // console.log(toys)

  return (
    <>
      <Header />
      {showForm ? <ToyForm toys={toys} setToys={setToys} url={toyUrl}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer setToys={setToys} toys={toys} />
    </>
  );
}

export default App;
