'use strict';

// Prototypes
// Prototype inheritance
// attaching method to functions 


function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
    // this.login = function(){
    //     console.log(this.email, 'Has logged in');
    // }
}
User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'Has logged in');
}
User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'Has logged out');
}

// constructor
function Admin(...args){
    User.apply(this, args);
    this.role = 'Super Admin'
}

Admin.prototype = Object.create(User.prototype)
 
let user01 = new User('luka@gmail.com', 'Luka');
let user02 = new User('john@gmail.com', 'John');
let admin01 = new Admin('mary@admins.com', 'Mary');


// user01.login();
// console.log(user01);
// user01.logout();

console.log(admin01)
admin01.login()