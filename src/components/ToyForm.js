import React, {useState, useEffect} from "react";

function ToyForm( {url, toys, setToys} ) {

  const [formData, setFormData]  =  useState({
    name: "random toy",
    image: "https://asset.swarovski.com/images/$size_360/t_swa103/b_rgb:fafafa,c_scale,dpr_auto,f_auto,w_auto/5492734_png/toy-story---rex-swarovski-5492734.png",
    likes: 0
  })

  const handleChange = (e) => {
    
    let key = e.target.name
    let value = e.target.value

    setFormData({
      ...formData,
      [key]: e.target.value,
    })

  }

  function handleSubmit (e) {
    e.preventDefault()
    // console.log(formData)

    fetch(url, {
            method: "Post",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
          })
    .then(r => r.json())
    .then(toy => setToys([...toys, toy]))

    
  }

  // useEffect(() => 
  //    
  //   ,[])

  // console.log(formData)

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          value={formData.name}
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formData.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
