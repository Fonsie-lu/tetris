class Block {
  constructor(x1, y1, x2, y2, x3, y3, x4, y4) {
    this.blocks = [];
    this.blocks.push(createVector(x1, y1));
    this.blocks.push(createVector(x2, y2));
    this.blocks.push(createVector(x3, y3));
    this.blocks.push(createVector(x4, y4));
  }

  moveDown(grid) {
    this.move("down");
    for (this.tile of this.blocks) {
      if (grid[this.tile.x][this.tile.y] === 2 || this.tile.y === col) {
        collide = true;
      }
    }
    if (collide) {
      this.move("up");
    }
    return this.setBlockToGrid(grid);
  }

  moveLeft(grid) {
    this.move("left");
    for (this.tile of this.blocks) {
      if (this.tile.x < 0) {
        this.move("right");
      }
      if (grid[this.tile.x][this.tile.y] === 2) {
        this.move("right");
      }
    }
  }

  moveRight(grid) {
    this.move("right");
    for (this.tile of this.blocks) {
      if (this.tile.x === row) {
        this.move("left");
      }
      if (grid[this.tile.x][this.tile.y] === 2) {
        this.move("left");
      }
    }
  }

  setBlockToGrid(grid) {
    for (this.tile of this.blocks) {
      if (this.tile.x >= 0 && this.tile.y >= 0) {
        if (!collide) {
          grid[this.tile.x][this.tile.y] = 1;
        } else {
          grid[this.tile.x][this.tile.y] = 2;
        }
      }
    }
    return grid;
  }

  move(direction) {
    for (this.tile of this.blocks) {
      switch (direction) {
        case "down":
          this.tile.y++;
          break;
        case "up":
          this.tile.y--;
          break;
        case "right":
          this.tile.x++;
          break;
        case "left":
          this.tile.x--;
          break;
      }
    }
  }
}
