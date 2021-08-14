//Problem 1

function seerToMon(seer) {
    // Error Handle 1
    if (typeof (seer) != 'number') {
        return console.log('please give a number');
    }
    // Error Handle 2
    else if (seer < 0) {
        return console.log('please enter positive value')
    }


    else {
        let mon1 = 40;
        let convert = seer / mon1;

        return convert;
    }
}






// Problem 2

function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {

    // Error Handle 1
    if (typeof (shirtQuantity) != 'number' || typeof (pantQuantity) != 'number' || typeof (shoeQuantity) != 'number')
    // if (typeof (shirtQuantity) != 'number' && typeof (pantQuantity) != 'number' && typeof (shoeQuantity) != 'number')
    {
        return console.log("Please Give a Number")
    }
    // Error Handle 2
    else if (shirtQuantity < 0 || pantQuantity < 0 || shoeQuantity < 0) {
        return console.log('Please Enter Positive Number')
    }

    const perShirtprice = 100;
    const perPantprice = 200;
    const perShoeprice = 500;
    // calculation
    const shirtQuantityprice = shirtQuantity * perShirtprice;
    const pantQuantityprice = pantQuantity * perPantprice;
    const shoeQuantityprice = shoeQuantity * perShoeprice;
    // adding all products quantity price
    const totalPrice = shirtQuantityprice + pantQuantityprice + shoeQuantityprice;
    return totalPrice;
}








// Problem 3

function deliveryCost(quantityShirt) {
    // Error Handle  1
    if (typeof (quantityShirt) != 'number') {
        return console.log("Please Enter valid Number")
    }
    // Error Handle  2
    if (quantityShirt < 0) {
        return console.log('Please Enter Positive Number')
    }


    const perHundredShirt = 100;
    const pertwoHundredShirt = 80;
    const perAbovetwoHundredShirt = 50;

    if (quantityShirt <= 100) {
        const totalPrice = quantityShirt * perHundredShirt;
        return totalPrice;
    }

    else if (quantityShirt > 100 && quantityShirt <= 200) {
        const totalPrice1 = 100 * perHundredShirt;
        const remainQuantityShirt = quantityShirt - 100;
        // const totalPrice2 = totalPrice1 + qunatityShirt * perHundredShirt;
        const totalPrice2 = remainQuantityShirt * pertwoHundredShirt;
        const totalPrice = totalPrice1 + totalPrice2;
        return totalPrice;
    }
    else {
        const totalPrice1 = 100 * perHundredShirt;
        const totalPrice2 = 100 * pertwoHundredShirt;
        const remainQuantityShirt = quantityShirt - 200;
        const totalPrice3 = remainQuantityShirt * perAbovetwoHundredShirt;
        const totalPrice = totalPrice1 + totalPrice2 + totalPrice3;
        return totalPrice;
    }

}







// Problem 4


function perfectFriend(friendName) {
    // let dummyName = friendName[0];
    let friendDataType = typeof (friendName);
    console.log(friendDataType);

    // Error Handle  
    if (friendDataType != 'Object') {
        return console.log('Please enter valid Array Name')
    }
    let resultName = '';
    for (const Name of friendName) {
        if (Name.length == 5) {
            resultName = Name;
            // return resultName;

        }
    }
    return resultName;


}






// Function Call Here For test

/*-------------
Problem 1
Testing Output
---------------*/

// const conversion = seerToMon(500);
// const conversion = seerToMon('sst');
// const conversion = seerToMon(-500);
// console.log(conversion);




/*-------------
Problem 2
Testing Output
---------------*/



// const productprice = totalSales(3, 3, 5);
// const productprice = totalSales(-3, -3, 5);
// const productprice = totalSales('4', '4', 6);
// console.log(productprice);


/*-------------
Problem 3
Testing Output
---------------*/


// const totalShirtprice = deliveryCost(220);
// const totalShirtprice = deliveryCost(-220);
// const totalShirtprice = deliveryCost('220');
// console.log(totalShirtprice);




/*-------------
Problem 4
Testing Output
---------------*/


// const myFivelegthfriend = ['kibriya', 'mustaf', 'roi', 'karuka', 'hilim'];
// const myFivelegthfriend = 6;
// const friendLength = perfectFriend(myFivelegthfriend);
// console.log(friendLength);