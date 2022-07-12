let board = [];
for (let i = 0; i < 10; i++) {
  board[i] = new Array(null, null, null, null, null, null, null, null, null, null);
}

let check_x = true;
let win = false;

function play(x, y) {
  if (win) {
    return;
  }
  if (board[x][y] == null) {
    if (check_x) {
      board[x][y] = "X"
    } else {
      board[x][y] = "O"
    }
    check_x = !check_x;
  } else {
    alert("Ô này đã được đánh");
    return;
  }

  let divInput = document.getElementById("cell-" + x + "-" + y);
  divInput.innerHTML = board[x][y];
  check_win(x, y, board[x][y])
}

function check_win(x, y, value) {
  //xét hàng dọc
  if ((board[x][y + 1] == value && board[x][y + 2] == value && y < 8) ||
    (board[x][y + 1] == value && board[x][y - 1] == value && y >= 1 && y < 9) ||
    (board[x][y - 1] == value && board[x][y - 2] == value && y >= 2)) {
    alert(value + " win");
    win = true
  }
}
