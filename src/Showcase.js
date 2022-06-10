import blastoiseImg from "./images/avatar-blastoise.png";
import "./Showcase.css";

function Showcase() {
  const favPokemon = "Blastoise";
  const pokeCharacteristics = {
    type: "Water",
    move: "Surf"
  };

  return (
    <div className="showcase-wrapper">
      <h1>{favPokemon}'s Component</h1>
      <img src={blastoiseImg} alt="fave pokemon Blastoise" />
      <h2>
        {favPokemon}'s type is{" "}
        <span className="poke-type">{pokeCharacteristics.type}</span> and one of
        their moves is{" "}
        <span className="poke-move">{pokeCharacteristics.move}</span>.
      </h2>
    </div>
  );
}

export default Showcase;
