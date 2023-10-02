//1.The code returns 8, and 1846

//2.The code returns:   
//yearNeptuneDiscovered: 1846,
//yearMarsDiscovered: 1659

//3. It returns the following "Your name is Alejandro and you like purple" and "Your name is Melissa and you like green"
// and "Your name is undefined and you like green"

//4. Maya, Marisa, Chi

//5. "Raindrops on roses", "whiskers on kittens," and the rest of the song from The Sound of Music.

//6. It returns = 10, 30, 20, it is a swap.

const numbers = {
    a: 1,
    b: 2
}

const {a,b} = numbers

let numbers2 = [1, 2];
[1,2] = [2,1]

raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])
const raceResults = ([first, second, third, ...rest]) => ([first, second, third, rest])