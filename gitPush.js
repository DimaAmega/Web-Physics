const child_process = require('child_process');
var message = process.argv.slice(2,process.argv.length).join(' ');

function ShellConsole(str){
    return new Promise(function(resolve, reject) {
        child_process.exec(str, function(error, stdout, stderr){
            if (error) {
                console.log('ОШИБКА!');
                console.log(error.stack);
                console.log('Error code: '+error.code);
                console.log('Signal received: '+error.signal);
                reject(error);
             }
             else{
                console.log('stdout: \n ' + stdout);
                console.log('stderr: \n ' + stderr);
                resolve();
             }
        });
    });
};

ShellConsole("git status")
.then(function(res){
    console.log('CHECK');
return ShellConsole("git add -A");
},function(error){ console.log(error)})
.then(function(res){
    console.log('ДЕЛАЕМ КОММИТ');
return ShellConsole(`git commit -m"${message}"`);
},function(error){ console.log(error)})
.then(function(res){
    console.log('ЗАЛИВАЕМ НА СЕРВЕР');
return ShellConsole("git push origin master");
},function(error){ console.log(error)})
.then(function(res){
    console.log('ЗАКОНЧИЛИ');
},function(error){ console.log(error)})



