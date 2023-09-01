import axios from "axios";
import React, { useState } from "react";
import { checkToken } from "../../utilities/users-service";

function CreatePage() {
  const [formData, setFormData] = useState({
    name: "",
    genre: "",
    artist: "",
  });
  const handleChange = (event) => 
  {setFormData({...formData,[event.target.id]:event.target.value})};
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const res= await axios.post('http://localhost:3001/api/songs/create',formData)
      const data=res.data
      console.log(data)
      
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <h1>Please enter a favorite song!</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} placeholder="enter Name" name="name" id="name" />
        <br />
        <input type="text" onChange={handleChange}  placeholder="enter Genre" name="genre" id="genre" />
        <br />
        <input
          type="text" onChange={handleChange} 
          placeholder="enter artist"
          name="artist"
          id="artist"
        />
        <br />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default CreatePage;
