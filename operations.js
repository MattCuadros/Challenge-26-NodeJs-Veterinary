const fs = require("fs");

const register = (name, age, animal, color, diagnostic) => {
  const filename = "meetings.json";
  const database = JSON.parse(fs.readFileSync(filename, "utf8"));
  database.push({ id: Date.now(), name, age, animal, color, diagnostic });
  console.log(`${name} - ${animal} Registered successfull! ✅`);
  fs.writeFileSync(filename, JSON.stringify(database));
};

const read = () => {
  const filename = "meetings.json";
  console.log(JSON.parse(fs.readFileSync(filename, "utf8")));
};

module.exports = { register, read };
