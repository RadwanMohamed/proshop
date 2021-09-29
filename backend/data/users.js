import bcrypt from 'bcryptjs';
const users = [
    {
        "name" : "radwan mohamed",
        "email" : "radwan@proshop.dev",
        "password" : bcrypt.hashSync("123456",10),
        isAdmin : true
    },
    {
        "name" : "doaa omar",
        "email" : "doaa@proshop.dev",
        "password" : bcrypt.hashSync("123456",10),
        isAdmin : false
    },
    {
        "name" : "omar mohamed",
        "email" : "omar@proshop.dev",
        "password" : bcrypt.hashSync("123456",10),
        isAdmin : false
    },
    {
        "name" : "seif mohamed",
        "email" : "seif@proshop.dev",
        "password" : bcrypt.hashSync("123456",10),
        isAdmin : false
    },
    {
        "name" : "mad mohamed",
        "email" : "mad@proshop.dev",
        "password" : bcrypt.hashSync("123456",10),
        isAdmin : false
    },
    {
        "name" : "tamer mohamed",
        "email" : "tamer@proshop.dev",
        "password" : bcrypt.hashSync("123456",10),
        isAdmin : false
    },
];

export default users;