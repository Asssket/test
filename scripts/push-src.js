const cmd = require('node-cmd')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Input commit message: ', commitMessage => {
    cmd.run(`git add . && git reset -- dist && git commit -m "${commitMessage}" && git push`,
);
    readline.close();
});

  