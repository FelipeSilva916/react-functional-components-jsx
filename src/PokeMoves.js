import React from "react";
import { moves } from "./data";
import PokeMoveCard from "./PokeMoveCard";

const PokeMoves = () => {
  return (
    <div>
      <h1>PokeMoves</h1>
      <ul>
        {moves.map((move) => (
          <PokeMoveCard key={move.id} {...move} />
        ))}
      </ul>
    </div>
  );
};

export default PokeMoves;
