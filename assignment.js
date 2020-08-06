// Feet To Mile convertor
/*

function feetToMile(num){
    mile=num*0.00018939;
    return mile;
}
converted=feetToMile(2000);
console.log(converted);
*/ 

// wood calculate
/*

function woodCalculator(chair,table,bed){
    totalChair=chair*1;
    totalTable=table*3;
    totalBed=bed*5;
    totalWood=totalBed+totalChair+totalTable;

    return totalWood;
}
woodNeeded=woodCalculator(14,5,13)
console.log(woodNeeded);
*/ 


// Brick calculate

/*
function brickCalculator(floorCount){
    if (floorCount <= 10 && floorCount >= 1){
        top_ten = floorCount * 15 * 1000
        return top_ten
    }
    
    else if (floorCount <= 20 && floorCount >= 11){
        top_ten = 10 * 15 * 1000
        next_ten = (floorCount - 10) * 12 * 1000
        return top_ten + next_ten
    }
    else (floorCount >= 21)
        top_ten = 10 * 15 * 1000
        next_ten = 10 * 12 * 1000
        uptTwenty = (floorCount - 20) * 10 * 1000
        return (top_ten + next_ten + uptTwenty)

}

console.log(brickCalculator(17));
*/ 



// short name
/*
function tinyFriends() {
    var myFriends = ["John", "Smith", "Doe","Mark","Marry"]
    var  smallestFriend = myFriends[0];
    for (i = 0; i < myFriends.length; i++) {
        if (myFriends[i] < smallestFriend) {
            smallestFriend = myFriends[i];
        }
    }
    return smallestFriend   
}

console.log(tinyFriends())
*/ 