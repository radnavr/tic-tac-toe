export const getEmptyMatrix = () => {
  return [...Array(10).keys()]
    .map(() => null)
    .map(() => [...Array(10).keys()].map(() => null));
};

export const getReversedAxisConfig = (matrix) => {
  return matrix[0].map((col, colIndex) => matrix.map((row) => row[colIndex]));
};

export const getDiagonalLRConfig = (matrix) => {
  const diagonalLRMatrix = [];

  for (let i = 5; i >= 0; i--) {
    const newRow = [];
    for (let n = i; n <= matrix.length - 1; n++) {
      newRow.push(matrix[n - i][n]);
    }
    diagonalLRMatrix.push(newRow);
  }

  for (let i = 1; i <= 5; i++) {
    const newRow = [];
    for (let n = i; n <= matrix.length - 1; n++) {
      newRow.push(matrix[n][n - i]);
    }
    diagonalLRMatrix.push(newRow);
  }

  return diagonalLRMatrix;
};

export const getDiagonalRLConfig = (matrix) => {
  const diagonalRLMatrix = [];

  for (let i = 4; i < matrix.length; i++) {
    const newRow = [];
    for (let n = i; n >= 0; n--) {
      newRow.push(matrix[i - n][n]);
    }
    diagonalRLMatrix.push(newRow);
  }

  for (let i = 1; i <= 5; i++) {
    const newRow = [];
    for (let n = i; n < matrix.length; n++) {
      newRow.push(matrix[n][matrix.length - 1 + (i - n)]);
    }
    diagonalRLMatrix.push(newRow);
  }

  return diagonalRLMatrix;
};
