// https://www.codewars.com/kata/57e3f79c9cb119374600046b
function hello(name) {
    return !name || name.length === 0 ? 
    `Hello, World!` : 
    `Hello, ${name.split("")[0].toUpperCase() + name.toLowerCase().split("").slice(1,name.length).join("")}!`;
}