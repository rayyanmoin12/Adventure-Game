#! /usr/bin/env node
import inquirer from 'inquirer';
class Player {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    decreaseHealth() {
        this.health -= 20;
    }
    increaseHealth() {
        this.health = 100;
    }
}
class Opponent {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    decreaseHealth() {
        this.health -= 20;
    }
}
let player = await inquirer.prompt([{
        name: "name",
        type: 'input',
        message: "What is your name? "
    }]);
let opponent = await inquirer.prompt([{
        name: "select",
        type: 'list',
        message: "Choose your opponent: ",
        choices: ["Skeleton", "Alien", "Zombie"]
    }]);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    if (opponent.select === "Skeleton") {
        let ask = await inquirer.prompt([{
                name: "opt",
                type: 'list',
                message: "What would you like to do? ",
                choices: ["Attack", "Drink potion", "Run"]
            }]);
        if (ask.opt === "Attack") {
            console.log(`${p1.name} VS ${o1.name}`);
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.decreaseHealth();
                console.log(`${p1.name} health is ${p1.health}`);
                console.log(`${o1.name} health is ${o1.health}`);
                if (p1.health <= 0) {
                    console.log("You lost the game!");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.decreaseHealth();
                console.log(`${p1.name} health is ${p1.health}`);
                console.log(`${o1.name} health is ${o1.health}`);
                if (o1.health <= 0) {
                    console.log("You Win!");
                    process.exit();
                }
            }
        }
        if (ask.opt === "Drink potion") {
            p1.increaseHealth();
            console.log(`You drank the health potion. Your health is ${p1.health}`);
        }
        if (ask.opt === "Run") {
            console.log("You decided to run away. You lost the game.");
            process.exit();
        }
    }
    if (opponent.select === "Alien") {
        let ask = await inquirer.prompt([{
                name: "opt",
                type: 'list',
                message: "What would you like to do? ",
                choices: ["Attack", "Drink potion", "Run"]
            }]);
        if (ask.opt === "Attack") {
            console.log(`${p1.name} VS ${o1.name}`);
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.decreaseHealth();
                console.log(`${p1.name} health is ${p1.health}`);
                console.log(`${o1.name} health is ${o1.health}`);
                if (p1.health <= 0) {
                    console.log("You lost the game!");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.decreaseHealth();
                console.log(`${p1.name} health is ${p1.health}`);
                console.log(`${o1.name} health is ${o1.health}`);
                if (o1.health <= 0) {
                    console.log("You Win!");
                    process.exit();
                }
            }
        }
        if (ask.opt === "Drink potion") {
            p1.increaseHealth();
            console.log(`You drank the health potion. Your health is ${p1.health}`);
        }
        if (ask.opt === "Run") {
            console.log("You decided to run away. You lost the game.");
            process.exit();
        }
    }
    if (opponent.select === "Zombie") {
        let ask = await inquirer.prompt([{
                name: "opt",
                type: 'list',
                message: "What would you like to do? ",
                choices: ["Attack", "Drink potion", "Run"]
            }]);
        if (ask.opt === "Attack") {
            console.log(`${p1.name} VS ${o1.name}`);
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.decreaseHealth();
                console.log(`${p1.name} health is ${p1.health}`);
                console.log(`${o1.name} health is ${o1.health}`);
                if (p1.health <= 0) {
                    console.log("You lost the game!");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.decreaseHealth();
                console.log(`${p1.name} health is ${p1.health}`);
                console.log(`${o1.name} health is ${o1.health}`);
                if (o1.health <= 0) {
                    console.log("You Win!");
                    process.exit();
                }
            }
        }
        if (ask.opt === "Drink potion") {
            p1.increaseHealth();
            console.log(`You drank the health potion. Your health is ${p1.health}`);
        }
        if (ask.opt === "Run") {
            console.log("You decided to run away. You lost the game.");
            process.exit();
        }
    }
} while (true);
