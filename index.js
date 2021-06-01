
// random_number = (min,max) => {
    //     return Math.floor(Math.random() * (max-min+1)+min);
    // }
    function random_number(min,max)
    {
        return Math.floor(Math.random() * (max-min+1)+min);
    }
    
    //! arrow functiom doesn't follow the rule of global scope and you can only use it after it is declared
    //? if using a normal function.........you can use it anywhere as it uses the global scope
    
    const rdn1 = random_number(1,6);
    

    var randomimage1 = "dice" + rdn1 + ".png"; // dice1.png - dice6.png
    var randomimagesource1 = "./images/" + randomimage1; //--> ./images/dice1.png - ./images/dice6.png

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimagesource1);

    const rdn2 = random_number(1,6);
    var randomimage2 = "dice" + rdn2 +".png"; //dice1.png - dice6.png
    var randomimagesource2 = "./images/" + randomimage2; // ./images/dice1.png - ./images/dice2.png
    console.log(randomimagesource2);

    var image2 = document.querySelectorAll("img")[1];
    
    image2.setAttribute("src",randomimagesource2);

    if(rdn1>rdn2)
    {
        document.querySelector("h1").innerHTML="Player 1 Wins";
    }
    else if(rdn2>rdn1)
    {
        document.querySelector("h1").innerHTML="Player 2 Wins";
    }
    else
    {
        document.querySelector("h1").innerHTML="Draw";
    }