import "./App.css";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import Row from "./components/Row/Row";

function App() {
  const { matrix, setNewGame, turn, victory } = useContext(AppContext);

  return (
    <div className="app">
      <div className="container">
        <h1>tic-tac-toe</h1>
      </div>
      <div className="game">
        <div className="matrix">
          {matrix.map((rowArr, rowInd) => (
            <Row key={rowInd} fields={rowArr} rowInd={rowInd} />
          ))}
        </div>
        <div className="container">
          <p>
            {victory
              ? turn % 2 === 0
                ? "O"
                : "X"
              : turn % 2 === 0
              ? "X"
              : "O"}
            {victory ? " wins" : "'s turn"}
          </p>
          <button onClick={setNewGame}>new game</button>
        </div>
      </div>
    </div>
  );
}

export default App;
