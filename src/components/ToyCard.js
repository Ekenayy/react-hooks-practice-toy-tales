import React, {useState} from "react";

function ToyCard( {toy, onDelete, onUpdate} ) {
  

  const { name, id, image, likes } = toy

  const [toyLikes, setToyLikes] = useState(likes+1)


  const toyUrl = "http://localhost:3001/toys"

  function handleLikes() {

    setToyLikes((toyLikes) => toyLikes + 1)
    // console.log(likes)
    // console.log(toyLikes)

    let formBody = {
      likes: toyLikes,
      id: id
    }

    fetch(`${toyUrl}/${id}`,
      {method: "PATCH",
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(formBody)
    })
      .then(res => res.json())
      .then(toy => onUpdate(toy.id, toy.likes))

  }



  function deleteMe() {

    fetch(`${toyUrl}/${id}`, {
      method: "Delete"
    })

    onDelete(id)
  }
  
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleLikes} className="like-btn">Like {"<3"}</button>
      <button onClick={deleteMe} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
