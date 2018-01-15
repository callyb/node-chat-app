[
  {
    id: "/#12poihjenvje",
    name: "Andrew",
    room: "The Office Fans"
  }
];

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getUserDescription() {
//     return `${this.name} is ${this.age} year(s) old.`;
//   }
// }
//
// var me = new Person("Andrew", 25);
//
// var description = me.getUserDescription();
// console.log(description);

class Users {
  constructor() {
    this.users = [];
  }
  addUser(id, name, room) {
    var user = { id, name, room };
    this.users.push(user);
    return user;
  }
  removeUser(id) {
    var user = this.getUser(id);
    if (user) {
      this.users = this.users.filter(user => user.id != id);
    }
    return user;
  }

  getUser(id) {
    return this.users.filter(user => user.id === id)[0];
  }

  getUserList(room) {
    var users = this.users.filter(user => user.room === room);
    var namesArray = users.map(user => user.name);

    return namesArray;
  }
  isNameUnique(room, name) {
    var list = this.getUserList(room);
    var duplicate = list.filter(user => user === name);

    return duplicate.length ? true : false;
  }
}

module.exports = { Users };
