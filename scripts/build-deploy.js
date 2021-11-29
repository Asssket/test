const cmd=require('node-cmd');
const ghpages = require('gh-pages');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Input commit message: ', commitMessage => {

    cmd.run(`set NODE_ENV=production&&webpack`,
    function(err, data, stderr){
        console.log(`${data}`);
        console.log(err == null ? '' : `Sync Err ${err}`);
        console.log(stderr == null ? '' : `Sync Err ${stderr}`);

        ghpages.publish('dist',{
            message:`${commitMessage}`
        })
}
);
    readline.close();
});