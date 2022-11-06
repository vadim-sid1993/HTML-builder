const fs = require("fs");
const path = require("path");

const { stdin, stdout } = process;
fs.writeFile(path.join(__dirname, "txt.txt"), "", (error) => {
  if (error) return console.error(error.message);
});
stdout.write("Введите пожалуйста текст");
stdin.on("data", (data) => {
  if (data.toString().trim() === "exit") {
    stdout.write("Всего хорошего");
    process.exit();
  }
  fs.appendFile(path.join(__dirname, "txt.txt"), data, (err) => {
    if (err) throw err;
  });
});
process.on("SIGINT", () => {
  stdout.write("Всего хорошего");
  process.exit();
});