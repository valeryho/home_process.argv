
const User=require("./classes/user");
const Dog=require("./classes/dog");

const args = process.argv.slice(2);
switch (args[0])
{
case `--version`:
    console.log("v.0.1.0");
    break;
case `--help`:
    console.log("What help you need");
    break;
case `--create_user`:
         let name = args[1];
         let password = args[2];
         let human=new User(name,password);
         human.Show_Person();
        break;
case `--create_dog`:
        let name = args[1];
        let age = args[2];
        let breed = args[3];
        let dog = new Dog(name, age, breed);
        dog.Show_();
         break;
}
