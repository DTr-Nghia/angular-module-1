"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Bài 1:
const Sum = (a) => {
    return a.reduce((cur, acc) => cur + acc, 0);
};
console.log('Bài 1:');
console.log(Sum([3, 523, 5, 6, 7]));
const personInfor = (info) => {
    console.log('Bài 2:');
    console.log(`My name is ${info.name}`);
    console.log(`I'm ${info.age} years old`);
    console.log(`My email is ${info.email}`);
};
personInfor({ name: 'Peter', age: 20, email: 'peter@abc.com' });
// Bài 3:
const firstElement = (array) => {
    return array[0];
};
console.log('Bài 3:');
console.log(firstElement([3, 523, 5, 6, 7]));
// Bài 4:
var Colors;
(function (Colors) {
    Colors["RED"] = "RED";
    Colors["GREEN"] = "GREEN";
    Colors["BLUE"] = "BLUE";
})(Colors || (Colors = {}));
const returnedColor = (color) => {
    return color;
};
console.log('Bài 4:');
console.log(returnedColor(Colors.RED));
// Bài 5
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    caculateArea() {
        return this.width * this.height;
    }
}
console.log('Bài 5:');
console.log(new Rectangle(3, 5).caculateArea());
// Bài 6
const checkWork = () => {
    return (target, propertyKey, descriptor) => {
        console.log("It's work");
    };
};
class LogNumber {
    number;
    constructor(number) {
        this.number = number;
    }
    logNumber() {
        return `Number ${this.number}`;
    }
}
__decorate([
    checkWork()
], LogNumber.prototype, "logNumber", null);
console.log('Bài 6:');
console.log(new LogNumber(3).logNumber());
const getData = async () => {
    try {
        const res = await fetch("http://127.0.0.1:5500/db.json");
        const data = await res.json();
        console.log('Bài 7:');
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
};
getData();
const productsList = [
    { id: 1, name: 'Product A', price: 40, quantity: 2 },
    { id: 2, name: 'Product B', price: 90, quantity: 3 },
    { id: 3, name: 'Product C', price: 504, quantity: 1 },
    { id: 4, name: 'Product D', price: 2400, quantity: 2 },
    { id: 5, name: 'Product E', price: 900, quantity: 4 },
];
console.log('Bài 9:');
const sumPrice = productsList.reduce((cur, acc) => {
    return cur + acc.price;
}, 0);
console.log(sumPrice);
const filteredPrice = productsList.filter((item) => item.price > 100);
console.log(filteredPrice);
const refactorProduct = productsList.map((item) => `Sản phẩm ${item.name} có giá ${item.price} và còn ${item.quantity} sản phẩm`);
console.log(refactorProduct);
const sumQuantityUnder100 = productsList.reduce((cur, acc) => {
    if (acc.price < 100) {
        return cur + acc.quantity;
    }
    return cur + 0;
}, 0);
console.log(sumQuantityUnder100);
const getDiscountedProducts = (rate) => {
    return productsList.map((item) => {
        return { ...item, price: item.price - (item.price * (rate / 100)) };
    });
};
console.log(getDiscountedProducts(10));
const appElement = document.getElementById("app");
const boardElement = document.getElementById("board");
const ROW_COUNT = 3;
const COL_COUNT = 3;
let boardState = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];
let currentMove = "X";
let winner;
function createCell(row, col, content = "") {
    const cell = document.createElement("button");
    cell.setAttribute("data-row", row.toString());
    cell.setAttribute("data-col", col.toString());
    cell.setAttribute("data-content", content);
    cell.classList.add("cell");
    cell.addEventListener("click", () => {
        if (winner)
            return;
        if (boardState[row][col] === "") {
            boardState[row][col] = currentMove;
            winner = checkBoard(currentMove);
            if (!winner) {
                currentMove = currentMove === "X" ? "O" : "X";
            }
            renderBoard();
        }
    });
    return cell;
}
function checkBoard(player) {
    const flattenedBoard = boardState.flatMap((cell) => cell);
    if (flattenedBoard.filter((c) => c).length === 9) {
        return "Draw";
    }
    const horizontal = [0, 3, 6].map((c) => [c, c + 1, c + 2]);
    const vertical = [0, 1, 2].map((c) => [c, c + 3, c + 6]);
    const diagonal = [
        [0, 4, 8],
        [2, 4, 6]
    ];
    const allWins = [...horizontal, ...vertical, ...diagonal];
    let result = allWins.some((indices) => flattenedBoard[indices[0]] == player &&
        flattenedBoard[indices[1]] == player &&
        flattenedBoard[indices[2]] == player);
    if (result)
        return player;
    return "";
}
function renderBoard() {
    if (!appElement)
        throw new Error("Cannot find app");
    if (!boardElement)
        throw new Error("Cannot find board");
    boardElement.innerHTML = "";
    for (let i = 0; i < ROW_COUNT; i++) {
        for (let j = 0; j < COL_COUNT; j++) {
            boardElement.appendChild(createCell(i, j, boardState[i][j]));
        }
    }
    const oldMoveElement = document.getElementById("move-element");
    if (oldMoveElement) {
        oldMoveElement.remove();
    }
    const moveElement = document.createElement("p");
    moveElement.id = "move-element";
    moveElement.innerText = winner
        ? `Winner: ${winner}`
        : `Next Move: ${currentMove}`;
    moveElement.classList.add("current-move");
    appElement.insertBefore(moveElement, document.getElementById("reset"));
}
function init() {
    const resetButton = document.getElementById("reset");
    if (!resetButton)
        throw new Error("No Reset button");
    resetButton.addEventListener("click", () => {
        boardState = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
        currentMove = "X";
        winner = "";
        renderBoard();
    });
    renderBoard();
}
init();
