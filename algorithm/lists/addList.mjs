import fs from "fs";

function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = []; //initializes an empty array to store list elements
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.contains = contains;
}

// element를 List에 추가하는 함수
function append(element) {
  this.dataStore[this.listSize++] = element;
}

// 삭제할 element를 찾아주는 헬퍼함수
function find(element) {
  for (let i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) {
      return i;
    }
  }
  return -1;
}

// List에서 element 삭제
function remove(element) {
  let foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    --this.listSize;
    return true;
  }
  return false;
}

// List에 있는 element의 수
function length() {
  return this.listSize;
}

//  list 내용 읽기
function toString() {
  return this.dataStore;
}

// list에서 어느 위치에 insert할지 고려하기
function insert(element, after) {
  let insertPos = this.find(after);
  if (insertPos > -1) {
    this.dataStore.splice(insertPos, 0, element);
    ++this.listSize;
    return true;
  }
  return false;
}

// list의 모든 element 제거하기
function clear() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}

function contains(element) {
  for (const item of this.dataStore) {
    if (item === element) return true;
  }
  return false;
}

// --- list 순회하기 ---
function front() {
  this.pos = 0;
}

function end() {
  this.pos = this.listSize - 1;
}

function prev() {
  if (this.pos > -1) {
    --this.pos;
  }
}

function next() {
  if (this.pos < this.listSize) {
    ++this.pos;
  }
}

function currPos() {
  return this.pos;
}

function moveTo(position) {
  this.pos = position;
}

function getElement() {
  return this.dataStore[this.pos];
}
// --- list 순회하기 ---

// 영화 대여 kiosk
function createArr(filmsURL) {
  const arr = fs.readFileSync(filmsURL).toString().split("\n");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].trim();
  }
  return arr;
}

function displayList(list) {
  for (list.front(); list.currPos() < list.length(); list.next()) {
    if (list.getElement() instanceof Customer) {
      console.log(
        list.getElement()["name"] + ", " + list.getElement()["movie"]
      );
    } else {
      console.log(list.getElement());
    }
  }
}

// 렌탈 고객 생성자 함수
function Customer(name, movie) {
  this.name = name;
  this.movie = movie;
}

// 영화 대출
function checkOut(name, movie, filmList, customerList) {
  if (movieList.contains(movie)) {
    let c = new Customer(name, movie);
    customerList.append(c);
    filmList.remove(movie);
    console.log(customerList);
  } else {
    console.log(movie + " is not available");
  }
}
// 상대경로. vscode extension인 code runner로 실행할경우 프로젝트를 최상위 폴더인 js-algo에서 실행할 것.
const movies = createArr("algorithm/lists/films.txt");
const movieList = new List();
const customers = new List();
for (let i = 0; i < movies.length; ++i) {
  movieList.append(movies[i]);
}
//displayList(movieList);

// import readline from "readline";

// let name = "";
// let movie = "";

// var r = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// r.question("\n name ?", function (answer) {
//   name = answer;
//   console.log("Hi: ", answer);
//   r.close();
// });

checkout(name, movie, movieList, customers);
console.log("\nCustomer Rentals: \n ");
displayList(customers);
