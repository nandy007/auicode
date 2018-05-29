const exec = require('child_process').exec;
if(process.env.NODE_ENV !== "production"){
    const build = exec('node ./node_modules/vscode/bin/install')
    build.stdout.on('data', data => console.log('stdout: ', data))
}

require('./hack');