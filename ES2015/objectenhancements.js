
function createInstructor(firstName, lastName){
    return  {
        firstName,
        lastName
    }
};

let favoriteNumber = 42;
let instructor = {
    firstname: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

let instructor = {
    firstName: "Colt",
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return this.firstName + " says bye!";
    }
}

function createAnimal(species, verb, noise){
    return {
        [species] : species,
        [verb] : verb,
        [noise] : noise
    }
}