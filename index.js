exports.EvenOrOdd = function(choicePlayer, movePlayer){
    var RandomNumber = Math.floor(Math.random() * 21);

    if ((choicePlayer == "EVEN" || choicePlayer == "ODD") && movePlayer < 11 && !isNaN (movePlayer)){
        if (choicePlayer == "EVEN"){
            var sumNumber = RandomNumber + movePlayer;
            if (sumNumber %2 == 0){
                return json = {result: "PLAYER WINS"}
            }
            else {
                return json = {result: "PLAYER LOSES"}
            }
        }
        else if (choicePlayer == "ODD"){
            var sumNumber = RandomNumber + movePlayer;
            if (sumNumber %2 == 1){
                return json = {result: "PLAYER WINS"}
            }
            else {
                return json = {result: "PLAYER LOSES"}
            }
        }
    }
    else if (choicePlayer != "EVEN" && choicePlayer != "ODD"){
        return json = {result: "PLAYER'S CHOICE NOT VALID, TRY AGAIN"}
    }
    else if (movePlayer > 11) {
        return json = {result: "PLAYER'S MOVE NOT VALID, TRY AGAIN"}
    }
    else if (isNaN(movePlayer)){
        return json = {result: "IS NOT A NUMBER, TRY AGAIN"}
    }
}
console.log(this.EvenOrOdd("EVEN", 10));