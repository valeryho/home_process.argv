class Dog {
    constructor(name, age, breed) {
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
    Show_() {
        console.log(`Name=${this.name}`);
        console.log(`Name=${this.age}`);
        console.log(`Name=${this.breed}`);
    }

}
module.exports = Dog;