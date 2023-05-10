const { read, register } = require("./operations.js");

/*  */
const arguments = process.argv.slice(2);


const action = arguments[0];

const name = arguments[1];
const age = arguments[2];
const animal = arguments[3];
const color = arguments[4];
const diagnostic = arguments[5];

if (action === "register") {
  if (
    name === undefined ||
    age === undefined ||
    animal === undefined ||
    color === undefined ||
    diagnostic === undefined
  ) {
    return console.log("⚠ Please fill in all the fields. ❗");
  } else {
    register(name, age, animal, color, diagnostic);
  }
} else if (action === "read") {
  read();
} else {
  return console.log("❌ Invalid Action ❌");
}
