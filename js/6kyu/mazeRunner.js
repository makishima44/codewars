// Task: Maze Runner
// Link: https://www.codewars.com/kata/58663693b359c4a6560001d6/train/javascript

function mazeRunner(maze, directions) {
  let row;
  let col;

  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      if (maze[i][j] === 2) {
        row = i;
        col = j;
      }
    }
  }

  for (let direction of directions) {
    if (direction === "N") {
      row--;
    } else if (direction === "S") {
      row++;
    } else if (direction === "E") {
      col++;
    } else if (direction === "W") {
      col--;
    }

    if (row < 0 || row >= maze.length || col < 0 || col >= maze.length) {
      return "Dead";
    }

    if (maze[row][col] === 1) {
      return "Dead";
    }

    if (maze[row][col] === 3) {
      return "Finish";
    }
  }

  return "Lost";
}
