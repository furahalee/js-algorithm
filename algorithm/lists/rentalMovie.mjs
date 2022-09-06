import fs from "fs";
import readline from "readline";
import List from "./List.mjs";

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
    //console.log(customerList);
  } else {
    console.log(movie + " is not available");
  }
}
// 상대경로. vscode extension인 code runner로 실행할경우 프로젝트를 최상위 폴더인 js-algo에서 실행할 것.
// code runner로 실행할 경우 텍스트 경로설정 : "algorithm/lists/films.txt"
// node로 실행할 경우 : "films.txt"
const movies = createArr("films.txt");
const movieList = new List();
const customers = new List();
for (let i = 0; i < movies.length; ++i) {
  movieList.append(movies[i]);
}
//displayList(movieList);

let name = "";
let movie = "";

let input = [];

console.log("이름과 영화 순서대로 입력");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt("> ");

rl.on("line", (line) => {
  if (line === "exit") {
    rl.close();
  }
  rl.prompt();
  console.log("입력값:", line);
  input.push(line);
});

rl.on("close", () => {
  name = input[0];
  movie = input[1];
  checkOut(name, movie, movieList, customers);
  console.log("\nCustomer Rentals: \n ");
  displayList(customers);
  console.log("now available Moive: \n");
  displayList(movieList);
  process.exit();
});
