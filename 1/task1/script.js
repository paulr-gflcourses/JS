// Create class Fighter
function Fighter(name, health, power) {
  this.name = name;
  this.health = health;
  this.power = power;
}

Fighter.prototype.setDamage = function(damage) {
  this.health = this.health - this.damage;
  console.log("health: ",this.health);
};

Fighter.prototype.hit = function(enemy, point) {
  let damage = point * enemy.power;
  enemy.setDamage(damage);
};

Fighter.prototype.knockout = function() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("time is over");
      resolve("result");
    }, 500);
  });
  return promise;
};

function ImprovedFighter(name, health, power) {
  Fighter.apply(this, arguments);
}

ImprovedFighter.prototype = Object.create(Fighter.prototype);
ImprovedFighter.prototype.constructor = ImprovedFighter;

ImprovedFighter.prototype.doubleHit = function(enemy, point) {
  Fighter.prototype.hit.call(this, enemy, point * 2);
};

function fight(){
  fighter=arguments[0];
  improvedFighter=arguments[1];
  for (var i = 2; i < arguments.length; i++) {
    fighter.hit(improvedFighter,arguments[i]);
    improvedFighter.hit(fighter, arguments[i]);
  }
}

let fighter = new Fighter("Fighter",50,2);
let improvedFighter = new ImprovedFighter("Improved fighter", 50, 3);

fight(fighter, improvedFighter, 25, 13, 45);