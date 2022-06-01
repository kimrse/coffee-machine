// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require("sync-input");

let stock = {
    water: 400,
    milk: 540,
    beans: 120,
    cups: 9,
    money: 550
}

const menu = {
    espresso: {water: 250, beans: 16, price: 4},
    latte: {water: 350, milk: 75, beans: 20, price: 7},
    cappuccino: {water: 200, milk: 100, beans: 12, price: 6}
}

while (true) {
    const action = input("Write action (buy, fill, take, remaining, exit):\n");
    if (action === "buy") {
        const coffee = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:\n");
        if (coffee === "back") {
            continue;
        } else {
            if (checkStock(coffee) === 1) {
                continue;
            } else {
                buy(coffee);
                console.log("I have enough resources, making you a coffee!");
            }
        }
    } else if (action === "fill") {
        fill();
    } else if (action === "take") {
        take();
    } else if (action === "remaining") {
        showStock();
    } else if (action === "exit") {
        break;
    } else {
        console.log("Input error");
    }
}

function buy(coffee) {
    checkStock(coffee);
    if (coffee === "1"){
        stock.water -= menu.espresso.water;
        stock.beans -= menu.espresso.beans;
        stock.money += menu.espresso.price;
 } else if (coffee === "2") {
        stock.water -= menu.latte.water;
        stock.milk -= menu.latte.milk;
        stock.beans -= menu.latte.beans;
        stock.money += menu.latte.price;
 } else if (coffee === "3") {
        stock.water -= menu.cappuccino.water;
        stock.milk -= menu.cappuccino.milk;
        stock.beans -= menu.cappuccino.beans;
        stock.money += menu.cappuccino.price;
 } else {
        console.log("Input error");
    }
    stock.cups -= 1;
}

function fill() {
    stock.water += Number(input("Write how many ml of water you want to add:\n"));
    stock.milk += Number(input("Write how many ml of milk you want to add:\n"));
    stock.beans += Number(input("Write how many grams of coffee beans you want to add:\n"));
    stock.cups += Number(input("Write how many disposable coffee cups you want to add:\n"));
}

function take() {
    console.log(`I gave you $${stock.money}`);
    stock.money -= stock.money;
}

function checkStock(coffee) {
    if (coffee === "1") {
        if (stock.water < menu.espresso.water) {
            console.log("Sorry, not enough water!");
            return 1;
        }
        if (stock.beans < menu.espresso.beans) {
            console.log("Sorry, not enough coffee beans!");
            return 1;
        }
    } else if (coffee === "2") {
        if (stock.water < menu.latte.water) {
            console.log("Sorry, not enough water!");
            return 1;
        }
        if (stock.beans < menu.latte.beans) {
            console.log("Sorry, not enough coffee beans!");
            return 1;
        }
        if (stock.milk < menu.latte.milk) {
            console.log("Sorry, not enough coffee milk!");
            return 1;
        }
    } else if (coffee === "3") {
        if (stock.water < menu.cappuccino.water) {
            console.log("Sorry, not enough water!");
            return 1;
        }
        if (stock.beans < menu.cappuccino.beans) {
            console.log("Sorry, not enough coffee beans!");
            return 1;
        }
        if (stock.milk < menu.cappuccino.milk) {
            console.log("Sorry, not enough coffee milk!");
            return 1;
        }
    }
    if (stock.cups <= 0) {
        console.log("Sorry, not enough cups!");
        return 1;
    }
}

function showStock() {
    console.log(`The coffee machine has:
${stock.water} ml of water
${stock.milk} ml of milk
${stock.beans} g of coffee beans
${stock.cups} disposable cups
$${stock.money} of money\n`);
}








