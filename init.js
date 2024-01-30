const mongoose = require("mongoose");
const Chat = require("./models/chats.js");


main()
.then(()=>{
    console.log("connection succesful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}


let allChats = [
    {
        from: "priyanka",
        to:"akash",
        msg:"I Like You",
        created_at: new Date(),
    
    },
    
    {
        from: "naina",
        to:"akash rawat",
        msg:"I Miss You",
        created_at: new Date(),
    
    },
    
    {
        from: "priya",
        to:"aki",
        msg:" you are smarty :) ",
        created_at: new Date(),
    
    },
    
    
    {
        from: "annanya pandey",
        to:"simran",
        msg:" stay away from akash vo sirf mera hai ",
        created_at: new Date(),
    
    },
    
    
    ];
    
    Chat.insertMany(allChats);
    

