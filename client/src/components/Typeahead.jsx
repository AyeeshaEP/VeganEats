// import { useState } from "react";


// function Typeahead(props) {
//   const [eatery, setEatery] = useState(''); 
//   or eatery go check if name or eatery

//   const filteredEateries = props.source.filter((eatery) =>
//     eatery.fields.name.toLowerCase().includes(eatery.toLowerCase)
//   );


//   return (
//     <form className="typeahead">
//       <input value={eatery} onChange={(e) => setName(e.target.value)} />
//       <div>
//         {eatery &&
//           filteredItems.map((item, index) => (
//           <p key={index}>{item.fields.name}</p>
//         ))}
//         </div>
//     </form>
//   );
// }

// export default Typeahead;