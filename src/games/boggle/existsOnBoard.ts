export function existsOnBoard(board: string[][], word: string): boolean {
  const visited = Array(4)
    .fill(null)
    .map(() => Array(4).fill(false));

  function dfs(row: number, col: number, index: number): boolean {
    if (index === word.length) return true;
    if (row < 0 || row >= 4 || col < 0 || col >= 4) return false;
    if (visited[row][col]) return false;
    if (board[row][col] !== word[index]) return false;

    visited[row][col] = true;

    // Check all 8 directions
    const directions = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];

    for (const [dr, dc] of directions) {
      if (dfs(row + dr, col + dc, index + 1)) {
        return true;
      }
    }

    visited[row][col] = false;
    return false;
  }

  // Try starting from each cell
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (board[i][j] === word[0] && dfs(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
}
