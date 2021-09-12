const { program } = require('commander');
const fs = require('fs/promises');

// console.log(process.argv);

//CRUD
//CREATE // READ // UPDATE //DELETE

const x = process.argv[2];

// ****run command -> npm i commander****/
//CREATE

//creating a directory
program.command('mkdir <dirname>').action(async(dirname) => {
    try {
        await fs.mkdir(dirname);
    } catch (err) {
        console.log(err)
    }
});

//creating a file //asynchronously
//first create a directory before writing to the file
program.command('mkfile <path> <content>').action(async(path, content) => {

    await fs.writeFile(path, content)
});

//READ

//en-encoding
program.command('readfile <path>').action(async(path) => {

    await fs.readFile(path, 'utf-8')
});

//rename file name
program.command('renameFile <oldfile> <newfile>').action(async(oldfile, newfile) => {

    await fs.rename(oldfile, newfile)
});

//UPDATE

//append to file
program.command('appendFile <path> <content>').action(async(path, content) => {

    await fs.appendFile(path, content)
});

//DELETE
//deleting file inside directory
program.command('removefile <path>').action(async(path) => {

    await fs.unlink(path)
});

//deleting directory
program.command('removedir <dirname>').action(async(dirname) => {
    // fs.rmdir(dirname, err => {
    //     console.log(err);
    // });

    await fs.rmdir(dirname);

});

program.parse(process.argv);