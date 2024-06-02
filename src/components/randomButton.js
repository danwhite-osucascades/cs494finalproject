// TODO: put props in the RandomButton function parameters
// page.js should have passed in setRandomPokemon as a function

export default function RandomButton(props) {
  function handleClick() {
    props.setRandomPokemon();
    // TODO: Simply call the setRandomFunction() that was passed in as a prop.
  }
  return (
    <div className="button-container">
      <button onClick={handleClick} className="button">
        Get Random Pokemon
      </button>
    </div>
  );
}
