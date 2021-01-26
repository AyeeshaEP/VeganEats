import Typeahead from "./Typeahead/Typeahead.jsx";



function Main(props) {
  console.log(props)
  return (
    <div>
      <Typeahead source={props.eateries}>
</Typeahead>
        </div>
  )
}
export default Main;





