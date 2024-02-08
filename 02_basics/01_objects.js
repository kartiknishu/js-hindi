const sym = Symbol("mykey1");

const jsuser = {
    username: "Kartik",
    email: "user@gmail.com",
    [sym]: "key2",

}

// console.log(jsuser);

// console.log(jsuser.username);

// console.log(jsuser["username"]);

// console.log(typeof jsuser[sym]);

// jsuser.username = "nishu";

// Object.freeze(jsuser);

// jsuser.username = "kartik";

// console.log(jsuser.username);

console.log(`Hello Js user, ${jsuser.username}`);

const {username: name} = jsuser;

console.log(name);




