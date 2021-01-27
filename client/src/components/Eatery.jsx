import { useParams } from "react-router-dom";

function Eatery(props) {
  const params = useParams();

  const eatery = props.eateries.find(
    (eatery) => eatery.id === params.id
  );

  if (!eatery) {
    return (
      <div>
        <h4>Loading..</h4>
         </div>
    )
  }
  
  // let feedback = '';

  // for (let i = 0; i < eatery.fields.feedback; i++) {
  //   feedback += ""
  // }
  let rating = "";
  for (let i = 0; i < eatery.fields.rating; i++) {
    rating += "⭐️"
  }


 
  return (
    <div className="show">
      <h4>{eatery.fields.eatery}</h4>
      <h5>
        
        <em>Style: {eatery.fields.style}</em>
      </h5>
      <img className="foodImage"src={eatery.fields.imageURL} />
      <p>{rating}</p>
      <h3>Review</h3>
      <p>{eatery.fields.description}</p>
      
    </div>
  
  );
}

export default Eatery;