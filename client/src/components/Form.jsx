import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";

function Form(props) {
  const [eatery, setEatery] = useState('');
  const [style, setStyle] = useState('');
  const [rating, setRating] = useState(0); 
  const [feedback, setFeedback] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefailt();
    //make "creature" object
    //"creature" object have all the properties from state
    const eatery = {
      eatery,
      style,
      rating,
      feedback,
      author
    };
    //axios call to POST the new creature which i want to make feedback
    await axios.post(baseURL, { fields: eatery }, config);
    //toggling our GET request
    props.setToggleFetch((prev) => !prev);
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <h4>Enter you're fave Oakland Vegan Eatery!</h4>
      <label htmlFor="eatery">Eatery:</label>
      <input
        name="eatery"
        type="text"
        value={eatery}
      onChange={(e) => setEatery(e.target.value)}
      />
      <label htmlFor="style">Style:</label>
      <input
        name="style"
        type="text"
        value={style}
      onChange={(e) => setStyle(e.target.value)}
      />
      <label htmlFor="rating">Rating:</label>
      <input
        name="rating"
        type="number"
        min="0"
        max="5"
        value={rating}
        onChange={(e) => setRating(e.target.valueAsNumber)}
      />
      <label htmlFor="feedback">Feedback:</label>
      <input
        name="feedback"
        type="text"
        value={feedback}
      onChange={(e) => setFeedback(e.target.value)}
      />
      <label htmlFor="author">Author:</label>
      <input
        name="author"
        type="text"
        value={author}
      onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Share the Bounty!</button>
    </form>
  );
}
//instead of type "text" change it to number if numbder is needed
export default Form;