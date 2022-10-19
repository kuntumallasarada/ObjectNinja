// // var userOne = {
// //     email : 'ryu@ninjas.com',
// //     name : 'Ryu',
// //     login(){
// //         console.log(this.email,'has logged in');
// //     },
// //     logout(){
// //         console.log(this.email, "has logged out");
// //     }

// // };
// // console.log(userOne.name);
// // userOne.name='Yoshi';
// // userOne['email'];//quotes are must

// // var prop='name';
// // userOne[prop];//quotes are not needed as we are using the value of variable
// // var prop='email';
// // userOne[prop];
// // //userOne.prop; doesn't work

// // userOne.age =25;
// // userOne.logInfo = function(){}// properties and methods can be added outside the object
     

// //Classes and Constructors
// class User{
//     constructor(email,name){
//            this.email = email;
//            this.name = name;
//            this.score=0;
//     }
//     login(){
//         console.log(this.email,'just logged in');
//         return this;
//     }
//     logout(){
//         console.log(this.email,'just logged out');
//         return this;
//     }
//     updateScore(){
//         this.score++;
//         console.log(this.email, 'score is now', this.score);
//         return this;
   
//     }

// }

// //inheritance
// class Admin extends User{
//     deleteUser(user){
//         users =users.filter(u=>{
//             return u.email !=user.email;
//         })
//     }
// }

//  var userOne = new User('ryu@ninjas.com','Ryu');
//  var userTwo = new User('yoshi@mariokorp.com','Yoshi');
// // console.log(userOne);
// // console.log(userTwo);
// // userOne.login();
// // userOne.logout();
// //userOne.login().updateScore().updateScore().logout();//methods are returning objects so can chain them together
// var admin = new Admin('shaun@ninjas.com','shaun');

// var users = [userOne,userTwo,admin];

// admin.deleteUser(userTwo);
// console.log(users);

/* prototype model*/
// prototype of an object has the functionality (diff methods) for that object type
function User(email,name){
    this.email = email;
    this.name = name;
    this.online = false;
    
    }



User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in');
}

User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'has logged out');
}

// inheritance in prototype model
function Admin(...args){
     console.log(args);
    
     User.apply(this, args);
     this.role = 'super admin';
}


 //inheriting functions of User
Admin.prototype = Object.create(User.prototype);

//Adding a method only to admin
Admin.prototype.deleteUser = function(u){
      users = users.filter(user=>{
        return user.email != u.email;
      }) ;   
};



var userOne =new User('ryu@ninjas.com','Ryu');
var userTwo = new User('yoshi@mariokorp.com','Yoshi');
var admin = new Admin('shaun@ninjas.com','shaun');
//console.log(userOne);
//userTwo.login();

var users = [userOne,userTwo,admin];
console.log(admin);
admin.deleteUser(users[1]);
console.log(users);
