let x1 = Math.floor((Math.random() * 5) + 1);
document.getElementById("demo").innerHTML = x1;

let x2 = Math.floor((Math.random() * 5) + 1);
document.getElementById("demo2").innerHTML = x2;

let x3 = Math.floor((Math.random() * 5) + 1);
document.getElementById("demo3").innerHTML = x3;

let x4 = Math.floor((Math.random() * 5) + 1);
document.getElementById("demo4").innerHTML = x4;

let x5 = Math.floor((Math.random() * 5) + 1);
document.getElementById("demo5").innerHTML = x5;

function randomize(){
    
    if (x1 < x2 && x1 < x3 && x1 < x4 && x1 < x5){
        alert("hi")
    } else {
        let x1 = Math.floor((Math.random() * 5) + 1);
        document.getElementById("demo").innerHTML = x1;

        let x2 = Math.floor((Math.random() * 5) + 1);
        document.getElementById("demo2").innerHTML = x2;

        let x3 = Math.floor((Math.random() * 5) + 1);
        document.getElementById("demo3").innerHTML = x3;

        let x4 = Math.floor((Math.random() * 5) + 1);
        document.getElementById("demo4").innerHTML = x4;

        let x5 = Math.floor((Math.random() * 5) + 1);
        document.getElementById("demo5").innerHTML = x5;
    }
    
}