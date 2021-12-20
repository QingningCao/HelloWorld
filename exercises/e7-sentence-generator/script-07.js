console. log("it works")

let nouns = ["heart", "dog", "cat"];
let verbs = ["look", "make", "continure"];
let adjectives = [ "good", "different", "possible"];

function sentence(){ 
let random = Math.floor(Math.random() * nouns.length)
let noun = nouns [random]
let verb = verbs [Math.floor(Math.random() * nouns.length)]
let adjective = adjectives[Math.floor(Math.random() * nouns.length)]

console.log(noun, random)
console.log(verb, random)

let sentence = `My ${noun} leaps ${adjective} when I ${verb} a randow in the sky.`;

document.getElementById('sentence').innerHTML = sentence;
}
