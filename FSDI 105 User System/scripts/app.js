// create an object constructor for User
function User(email, password, fname, lname,color, age, address, phone, payment){
    this.email=email;
    this.password=password;
    this.firstname=fname;
    this.lastname=lname;
    this.color=color;
    this.age=age;
    this.address=address;
    this.phone=phone;
    this.payment=payment;
}
//get the inputs from the HTML using jQuery
let inputEmail = $("#inputEmail");
let inputPassword = $("#inputPassword");
let inputFirstname = $("#inputFirstname");
let inputLastname = $("#inputLastname");
let inputColor = $("#inputColor");
let inputAge = $("#inputAge");
let inputAddress = $("#inputAddress");
let inputPhone = $("#inputPhone");
let inputPayment = $("#inputPayment");




//create the register function
function register(){
    let newUser = new User(inputEmail.val(),inputPassword.val(),inputFirstname.val(),inputLastname.val(),inputColor.val(),inputAge.val(),inputAddress.val(),inputPhone.val(),inputPayment.val());
    // create a newUser

    //display the user on the console
    saveUser(newUser) // this fn is under storeManager
}

function init(){

    //hook events
    $("#btnAdd").on('click',register);
    //$("#btnAdd").onclick(register);
    $('input').on('mouseover',function(){
        $(this).css({'background-color':'dedede'});
    });
    $('input').on('mouseleave',function(){
        $(this).css({'backgorund-color':'white'});
    })
}

//**************HINT: add the onclick event on the button (register.html) */

window.onload=init;