const KEY="users";
function saveUser(user){
    let userArray = readUser(); //getting userList
    userArray.push(user);//adding a new user
    let val = JSON.stringify(userArray);//it parse the obj into string
    localStorage.setItem(KEY,val);//this send the val to the LS
    console.log("The user was sent to the LS");
}

function readUser(){
    let data = localStorage.getItem(KEY); //it gets from LS the data under "users"

    if(!data){ //NOT data?
    //if you get here it means
        return[];//creating the array
        
    }else{
        let userList = JSON.parse(data);// parse the string back into obj
        return userList;
    }
}
