class User {
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }
    Show_Person() {
        console.log(`Name=${this.name}`);
        console.log(`Name=${this.password}`);
    }

}
module.exports = User;