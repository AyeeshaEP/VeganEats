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
    

  return (
    <div>
      <h4>{eatery.fields.name}</h4>
      <h5>
        <em>{eatery.fields.author}</em>
      </h5>
      <p>{eatery.fields.rating}</p>
    </div>
  );
}

export default Eatery;