import Showcase from "./Showcase";
import BaseStats from "./BaseStats";
import "./App.css";
import PokeMoves from "./PokeMoves";

function App() {
  const baseStats = {
    hp: 79,
    attack: 83,
    defense: 100,
    spAttack: 85,
    spDef: 105,
    speed: 78
  };

  const handleClick = () => {
    alert(
      `Special Stats:\n\tSpecial Attack: ${baseStats.spAttack}\n\tSpecial Defense: ${baseStats.spDef}`
    );
  };

  return (
    <div className="main-wrapper background">
      <Showcase />
      <BaseStats clicker={handleClick} stats={baseStats} />
      <PokeMoves />
    </div>
  );
}

export default App;
