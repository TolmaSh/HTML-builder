
const path = require("path");
const fs = require("fs");
const process = require("process");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const out = fs.createWriteStream(path.join(__dirname, "text.txt"));

rl.question("Write your text for file, please\n", function (text) {
    if (text.trim() === "exit") {
        rl.close();
    } else {
        out.write(text + "\n");
        rl.on("line", (data) => {
            if (data.trim() === "exit") {
                rl.close();
            } else {
                out.write(data + "\n");
            }
        });
    }
});
rl.on("close", () => {
    console.log("Bye ;)");
});