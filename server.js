const express = require("express");
const people = require("./people.json");

const app = express();

app.set("view engine", "pug");

app.use(express.static(__dirname + "/public"));

/* #1
app.get("/", (req, res) => {
  res.send("Hello World!!!");
});
*/

/*
app.get("/", (req, res) => {
  res.render("index", {
    title: "Homepage",
    // name: "giannis",
  });
});

*/

/* Step 3
app.get("/", (req, res) => {
  res.render("index", {
    title: "Homepage",
    people: people.profiles,
  });
});

<!--
extends default

block content
  div.container
    each person in people
      div.person
        div.person-image(style=`background: url('/images/${person.imgSrc}') top center
        no-repeat; background-size: cover;`)
        h2.person-name
          | #{person.firstname} #{person.lastname}
        a(href=`/profile?id=${person.id}`)
          | View Profile
-->

*/

/* Step 4
app.get("/profile", (req, res) => {
  const person = people.profiles.find((p) => p.id === req.query.id);
  res.render("profile", {
    title: `About ${person.firstname} ${person.lastname}`,
    person,
  });
});

*/
const server = app.listen(8080, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
