import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, setToys }) {
  
  const allToys = toys.map(toy => {
    return <ToyCard onUpdate={updateToy} onDelete={handleDelete} key={toy.id} toy={toy}/>
  })

  function handleDelete(id) {

    let remainingToys = toys.filter(toy => {
     return toy.id !== id
    })
    setToys(remainingToys)
  }

  function updateToy(id, likes) {

   let updatedToys = toys.map(toy => {
      if (toy.id === id) {
        // debugger 
        return {...toy, likes}
      } else {
        return toy
      }
    })

    // console.log(updatedToys[0])
    setToys(updatedToys)
  }
  
  return (
    <div id="toy-collection">{allToys}</div>
  );
}

export default ToyContainer;
