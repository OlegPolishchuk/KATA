// You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal directions
// (i.e. North, East, South, West).
// Return the minimal number of steps to exit position [N-1, N-1] if it is possible to reach the exit from the starting position. Otherwise, return false.
//
//   Empty positions are marked .. Walls are marked W. Start and exit positions are guaranteed to be empty in all test cases.

function pathFinder(maze) {
  const move = ([i, j], step) => {
    if (!mazeMap[i] || !mazeMap[i][j] || mazeMap[i][j] === 'W' || mazeMap[i][j] <= step) return;

    mazeMap[i][j] = step;
    moveFurther([i, j], step + 1);
  }

  const moveFurther = ([i, j], step) => {
    move([i-1, j], step);
    move([i+1, j], step);
    move([i, j-1], step);
    move([i, j+1], step);
  }

  const mazeMap = maze.split`\n`.map(row => row.split``);

  move([0, 0], 0);
  const result = mazeMap[mazeMap.length-1][mazeMap.length-1];

  return result !== '.' && result;
}


pathFinder(`......
......
......
......
......
......`)