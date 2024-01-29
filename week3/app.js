const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

//tell engine which template engine to use
app.set("view engine", "pug");

//settung to parse incoming request TODOfix cookie "cannot read properties issue"
app.use(express.urlencoded({ extended: true }));

//Assignment3 - Serve Static Files TODO DONE
app.use(express.static("public"));
app.use(cookieParser());

//helper functions
function addUntilTarget(num) {
  const correctNum = Number(num);
  let result = 0;
  if (correctNum < 0) return "Only positive integers are accepted.";
  for (i = 1; i < correctNum + 1; i++) {
    result += i;
  }
  return result.toString(); //return a string because response.send doesn't accept a number
}

//Assignment 1 - Web Server & Simple HTML Page on root URL TODO DONE
app.get("/", (request, response) => {
  response.render("layout");
});

//Assignment 2 - /getData TODO DONE
app.get("/getData", (request, response) => {
  const queryStrings = request.query;
  if (Object.keys(queryStrings).length === 0) {
    response.send("Lack of Parameter");
  } else {
    const { number } = queryStrings;
    if (isNaN(+number) || Number(number) < 0) {
      response.send(
        "Wrong Paramater. The correct format is number=[positive integer]."
      );
    }
    response.send(addUntilTarget(number));
  }
});

//Assignment 5 - /myName & HTTP Cookie TODO DONE

app.get("/myName", (request, response) => {
  response.render("myName", { name: request.cookies.name });
});

app.get("/trackName", (request, response) => {
  console.log(request.query);
  response.cookie("name", request.query.name);
  response.render("myName", { name: request.query.name });
});

//Clear cookie
app.post("/trackName", (request, response) => {
  response.clearCookie("name");
  response.redirect("/myName");
});

//Set localhost port to be 3000
app.listen(3000);
