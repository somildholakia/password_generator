let box1 = document.getElementById("box1")
let box2 = document.getElementById("box2")

let charters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  "0","1","2","3","4","5","6","7","8","9",
  "!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","]","{","}",";",":",",",".","<",">","?","/","|"
];

function make(){
    let combination = ""
    for(let i =0;i<13;i++){
        let randomIndex = Math.floor(Math.random() * charters.length)
        combination += charters[randomIndex]
    }
    return combination
}

function generatePassword(){

    box1.textContent = make()
    box2.textContent = make()

}