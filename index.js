// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    let newCat = cats.splice(3, 1 ,"Ralph");
    return newCat;
}
function destructivelyPrependCat() {
    let newCat = cats.unshift("Bob");
    return newCat;
}
function destructivelyRemoveLastCat() {
    let newCat= cats.splice(-1);
    return newCat;
}
function destructivelyRemoveFirstCat() {
    return cats.splice(0, 1);
}



function appendCat() {
    let newCat = [...cats, "Broom"];
    return newCat;
}
function prependCat() {
    let newCat = ["Arnold" , ...cats];
    return newCat;
}
function removeLastCat() {
    let newCat= cats.slice(0, 2);
    return newCat;
}
function removeFirstCat() {
    return cats.slice(1, 3);
}