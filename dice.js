function roll(){
    document.querySelector(".btn").onclick = () => {
        var randomNum1 = Math.floor(Math.random() * 6) + 1;
        var randomNum2 = Math.floor(Math.random() * 6) + 1;

        var str1 = "./images/dice" + randomNum1 + ".png";
        var str2 = "./images/dice" + randomNum2 + ".png";

        document.querySelector("#p1").setAttribute("src", str1);
        document.querySelector("#p2").setAttribute("src", str2);

        if(randomNum1 > randomNum2){
            document.querySelector(".win-msg").textContent = "Player 1 wins!🏆";
        }else if(randomNum1 == randomNum2){
            document.querySelector(".win-msg").textContent = "Draw!";
        }else{
            document.querySelector(".win-msg").textContent = "Player 2 wins!🏆";
        }
    }
}