function sendMail() {
    // alert(params);
    // var tempParams ={
    //     from_name:document.getElementById("fromName").value,
    //     to_name:document.getElementById("toName").value,
    //     message: document.getElementById("msg").value,

    // };
    
    var fromname1 = document.getElementById("fromName").value;
    var mail1= document.getElementById("mail").value;
    var message1 = document.getElementById("message").value;
    var phno1 = document.getElementById("phno").value;
    var templateParams = {

        from_name: fromname1,
        to_name: "siva",
        message: message1,
        mail: mail1,
        phno: phno1,
    };

    emailjs.send('service_21poztq', 'template_z38z74t', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Form Submitted Successfully!");
            return true;
        }, function (error) {
            console.log('FAILED...', error);
        });

}