function sendmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "friendscircle015@gmail.com",
    Password : "F569124B585CF278F62A443388AF5D4192AF",
    To : 'pawarvivek1031@gmail.com',
    From : "friendscircle015@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}















// function sendmail(){

// 	var userName = document.getElementById('name').value;
// 	var phone = document.getElementById('phone').value;
// 	var email = document.getElementById('email').value;

// 	var messageBody = "Name " + userName +
// 	"<br/> Phone " + phone +
// 	"<br/> Email " + email;
// 	Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "host@gmail.com",
//     Password : "Password",
//     To : 'reviever@gmail.com',
//     From : "website@gmail.com",
//     Subject : "This is the subject",
//     Body : messageBody
// }).then(
//   message => {
//   	if(message=='OK'){
//   		swal("Secussful", "You clicked the button!", "success");
//   	}
//   	else{
//   		swal("Error", "You clicked the button!", "error");
//   	}
//   }
// );
// }