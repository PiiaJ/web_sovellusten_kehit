var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue",
    address: "Itetie 1 A, 00100 Helsinki",
    telephone: 1234567,
    printinfo: function() {
        return this.firstName + " " + this.lastName + " " + this.age + " " + this.eyecColor +" " + this.address + " " + this.telephone;
        }
};

console.log(person.printinfo());