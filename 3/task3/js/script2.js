
function Event() {
  this.functions = [];
}

Event.prototype.addFunction = function (func) {
  this.functions.push(func);
};

function EventManager() {
  if (!this.hasOwnProperty('events')){
    this.events = {};
  }
  
}

EventManager.prototype.addListener = function(name, func) {
  if (name in this.events) {
    this.events[name].addFunction(func);
  } else {
    let ev = new Event();
    ev.addFunction(func);
    this.events[name] = ev;
  }
};

EventManager.prototype.dispatch = function(name, data) {
  if (name in this.events) {
    this.events[name].functions.forEach(function(f) {
      f(data);
    });
  }
};

EventManager.prototype.removeListener = function(name) {
  if (name in this.events) {
    this.events[name].functions = [];
  }
};

let eventManager = new EventManager();
const data = [1, 2, 3];

eventManager.addListener("moe luboe sobitie", function(data) {
  console.log("first function: ", data);
});

eventManager.addListener("moe luboe sobitie", function(data) {
  console.log("second function: ", data);
});

eventManager.addListener("moe luboe sobitie2", function(data) {
  console.log("first (2) function: ", data);
});

eventManager.dispatch("moe luboe sobitie", data);
eventManager.removeListener("moe luboe sobitie");
eventManager.dispatch("moe luboe sobitie", data);
eventManager.dispatch("moe luboe sobitie2", data);

