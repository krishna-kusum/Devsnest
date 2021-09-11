const { program } = require('commander');
const fs = require('fs');

// console.log(process.argv);

//CRUD
//CREATE // READ // UPDATE //DELETE

const x = process.argv[2];

// if (x == 'create-dir') {
//   fs.mkdir(process.argv[1], err => {
//     console.log(error);
//   });
// }

// ****run command -> npm i commander****/
//CREATE

//creating a directory
program.command('mkdir <dirname>').action(dirname => {
  fs.mkdir(dirname, error => {
    console.log(error);
  });
});

//creating a file //asynchronously
//first create a directory before writing to the file
program.command('mkfile <path> <content>').action((path, content) => {
  fs.writeFile(path, content, error => {
    console.log('error:- ', error);
  });
});

//READ

//Reading file
// program.command('readfile <path>').action(path => {
//   fs.readFile(path, (err, filecontent) => {
//     console.log(err);
//     console.log(filecontent);
//   });
// }); //returns buffer

//en-encoding
program.command('readfile <path>').action(path => {
  fs.readFile(path, 'utf-8', (err, filecontent) => {
    console.log(err);
    console.log(filecontent);
  });
});

//rename file name
program.command('renameFile <oldfile> <newfile>').action((oldfile, newfile) => {
  fs.rename(oldfile, newfile, err => {
    console.log(err);
  });
});

//UPDATE

//append to file
program.command('appendFile <path> <content>').action((path, content) => {
  fs.appendFile(path, content, err => {
    console.log(err);
  });
});

//DELETE
//deleting file inside directory
program.command('removefile <path>').action(path => {
  fs.unlink(path, error => {
    // console.log(error);
  });
});

//deleting directory
program.command('removedir <dirname>').action(dirname => {
  fs.rmdir(dirname, err => {
    console.log(err);
  });
});

program.parse(process.argv);
