import { useState } from "react";
import axios from "axios";
import { reviewsURL, config } from "../services";

function Form(props) {
  const [eatery, setEatery] = useState('');
  const [style, setStyle] = useState('');
  const [rating, setRating] = useState(0); 
  const [feedback, setFeedback] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      eatery,
      style,
      rating,
      feedback,
      author
    };
    
    //axios call to POST the new eatery which i want to make feedback
    await axios.post(reviewsURL, { fields }, config);
    //toggling our GET request
    props.setToggleFetch((prev) => !prev);
    setEatery('');
    setStyle('');
    setRating('');
    setFeedback('');
    setAuthor('');
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <h4>Enter your fave Oakland Vegan Eatery!</h4>
      <label htmlFor="eatery">Eatery:</label>
      <input
        name="eatery"
        type="text" 
        className="newForm"
        value={eatery}
      onChange={(e) => setEatery(e.target.value)}
      />
      <label htmlFor="style">Style:</label>
      <input
        name="style"
        type="text"
        className="newForm"
        value={style}
      onChange={(e) => setStyle(e.target.value)}
      />
      <label htmlFor="rating">Rating:</label>
      <input
        name="rating"
        type="number"
        className="newForm"
        min="0"
        max="5"
        value={rating}
        onChange={(e) => setRating(e.target.valueAsNumber)}
      />
      <label htmlFor="feedback">Feedback:</label>
      <input
        name="feedback"
        type="text"
        className="newForm"
        value={feedback}
      onChange={(e) => setFeedback(e.target.value)}
      />
      <label htmlFor="author">Author:</label>
      <input
        name="author"
        type="text"
        className="newForm"
        value={author}
      onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Share the Bounty!</button>
    </form>
  );
}

export default Form;