import { createContext, useEffect, useState } from "react";
import { winSeq } from "./config/seqConfig";
import {
  getEmptyMatrix,
  getReversedAxisConfig,
  getDiagonalLRConfig,
  getDiagonalRLConfig,
} from "./config/matrixConfig";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [matrix, setMatrix] = useState(getEmptyMatrix());
  const [turn, setTurn] = useState(null);
  const [victory, setVictory] = useState(null);

  const handleFieldClick = (row, column) => {
    if (victory) return;
    if (matrix[row][column]) return;
    const matrixTemp = JSON.parse(JSON.stringify(matrix));
    matrixTemp[row][column] = {
      sign: turn % 2 === 0 ? "x" : "o",
      x: column,
      y: row,
    };
    setMatrix(matrixTemp);
  };

  const handleEvaluation = (targetSign, axisToCheck, matrixConfig) => {
    matrixConfig.forEach((line) => {
      const filteredLine = line.filter((lineEl) =>
        lineEl ? lineEl.sign === targetSign : null
      );

      if (filteredLine.length < 5) return;

      const occurences = filteredLine.map((lineEl) =>
        lineEl ? lineEl[axisToCheck] : null
      );

      winSeq.forEach((seq) => {
        if (occurences.join("").includes(seq)) {
          const winStreak = filteredLine.reduce((acc, curr) => {
            if (seq.includes(curr[axisToCheck])) {
              acc.push(curr);
            }
            return acc;
          }, []);

          const victoryInfo = {
            winner: targetSign,
            winStreak: winStreak.map((obj) => `${obj.y}${obj.x}`),
          };
          setVictory(victoryInfo);
        }
      });
    });
  };

  const setNewGame = () => {
    if (victory) setVictory(null);
    setTurn(0);
    setMatrix(getEmptyMatrix());
  };

  useEffect(() => {
    if (turn) {
      setTurn((prev) => prev + 1);
    } else setTurn(1);

    if (turn < 9) return;

    if (turn % 2 === 0) {
      handleEvaluation("x", "x", matrix);
      handleEvaluation("x", "y", getReversedAxisConfig(matrix));
      handleEvaluation("x", "x", getDiagonalLRConfig(matrix));
      handleEvaluation("x", "y", getDiagonalRLConfig(matrix));
    } else {
      handleEvaluation("o", "x", matrix);
      handleEvaluation("o", "y", getReversedAxisConfig(matrix));
      handleEvaluation("o", "x", getDiagonalLRConfig(matrix));
      handleEvaluation("o", "y", getDiagonalRLConfig(matrix));
    }
  }, [matrix]);

  return (
    <AppContext.Provider
      value={{ handleFieldClick, matrix, setNewGame, turn, victory }}
    >
      {children}
    </AppContext.Provider>
  );
};
