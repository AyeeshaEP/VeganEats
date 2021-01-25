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
        {/* or history something cool */}
      </div>
    )
  }
  
  let feedback = '';

  for (let i = 0; i < eatery.fields.feedback; i++) {
    feedback += ""
  }
    
 console.log(eatery)
  return (
    <div>
      <h4>{eatery.fields.eatery}</h4>
      <h5>
        <em>{eatery.fields.style}</em>
      </h5>
      <p>{eatery.fields.description}</p>
      <img src = {eatery.fields.imageURL} />
    </div>
  
  );
}

export default Eatery;