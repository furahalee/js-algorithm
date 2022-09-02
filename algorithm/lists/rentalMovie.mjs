import fs from "fs";
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

import readline from "readline";

// let name = "";
// let movie = "";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(line);
  rl.close();
});
rl.on("close", () => {
  console.log("입력이 끝났습니다");
});
// r.question("\n name ?", function (answer) {
//   name = answer;
//   console.log("Hi: ", answer);
//   r.close();
// });

//checkout(name, movie, movieList, customers);
//console.log("\nCustomer Rentals: \n ");
//displayList(customers);
