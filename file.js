let btn = document.getElementById("btn");
let output = document.getElementById("output");
let number = [Math.floor(Math.random() * 100)]


btn.addEventListener("click", function () {
    let input = document.getElementById("input").value;
        
        if (input == number) {
            output.innerHTML = `You guessed right , your number was ${number} `

        }
        else if (input < number) {
            output.innerHTML = "You guessed low . Try again by entering higher value";
        };
        if(input > number) {
            output.innerHTML = "You guessed higher number. Try again by entering lower value";
        }
        
    

    
})



