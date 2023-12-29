// Bài 1:
const Sum = (a: number[]) => {
  return a.reduce((cur, acc) => cur + acc, 0);
};
console.log("Bài 1:");
console.log(Sum([3, 523, 5, 6, 7]));

// Bài 2:
interface Person {
  name: string;
  age: number;
  email: string;
}
const personInfor = (info: Person) => {
  console.log("Bài 2:");
  console.log(`My name is ${info.name}`);
  console.log(`I'm ${info.age} years old`);
  console.log(`My email is ${info.email}`);
};
personInfor({ name: "Peter", age: 20, email: "peter@abc.com" });

// Bài 3:
const firstElement = <T>(array: T[]) => {
  return array[0];
};
console.log("Bài 3:");
console.log(firstElement([3, 523, 5, 6, 7]));

// Bài 4:
enum Colors {
  RED = "RED",
  GREEN = "GREEN",
  BLUE = "BLUE",
}
const returnedColor = (color: Colors) => {
  return color;
};
console.log("Bài 4:");
console.log(returnedColor(Colors.RED));

// Bài 5
class Rectangle {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  caculateArea() {
    return this.width * this.height;
  }
}
console.log("Bài 5:");
console.log(new Rectangle(3, 5).caculateArea());

// Bài 6
const checkWork = () => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    console.log("It's work");
  };
};
class LogNumber {
  number: number;
  constructor(number: number) {
    this.number = number;
  }
  @checkWork()
  logNumber() {
    return `Number ${this.number}`;
  }
}
console.log("Bài 6:");
console.log(new LogNumber(3).logNumber());
// Bài 7:
interface Data {
  name: string;
  age: string;
}
const getData = async () => {
  try {
    const res = await fetch("http://127.0.0.1:5500/db.json");
    const data = await res.json();
    console.log("Bài 7:");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
getData();
// Bài 8:
// import {factorial, checkPrime}  from './utils'

// console.log('Bài 8:')
// console.log(factorial(5));
// console.log(checkPrime(7));

// Bài 9:
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
const productsList: Product[] = [
  { id: 1, name: "Product A", price: 40, quantity: 2 },
  { id: 2, name: "Product B", price: 90, quantity: 3 },
  { id: 3, name: "Product C", price: 504, quantity: 1 },
  { id: 4, name: "Product D", price: 2400, quantity: 2 },
  { id: 5, name: "Product E", price: 900, quantity: 4 },
];
console.log("Bài 9:");
const sumPrice = productsList.reduce((cur, acc) => {
  return cur + acc.price;
}, 0);
console.log(sumPrice);
const filteredPrice = productsList.filter((item) => item.price > 100);
console.log(filteredPrice);
const refactorProduct = productsList.map(
  (item) =>
    `Sản phẩm ${item.name} có giá ${item.price} và còn ${item.quantity} sản phẩm`
);
console.log(refactorProduct);
const sumQuantityUnder100 = productsList.reduce((cur, acc) => {
  if (acc.price < 100) {
    return cur + acc.quantity;
  }
  return cur + 0;
}, 0);
console.log(sumQuantityUnder100);
const getDiscountedProducts = (rate: number) => {
  return productsList.map((item) => {
    return { ...item, price: item.price - item.price * (rate / 100) };
  });
};
console.log(getDiscountedProducts(10));
