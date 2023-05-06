function sendEmail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }

const serviceID = "service_k1ilt06";
const templateID ="template_tp5vvhs";

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert('Your Email Sent Successfully')
    }
)
.catch((err) => console.log(err));
}
var mybtnll = document.getElementById("cl"),
    myulll = document.getElementById("ul");
    mybtnll.onclick = function() {
        if(myulll.style.display == "inline-block"){
            myulll.style.display = "none";
        }else{
            myulll.style.display = "inline-block";  
        }
    };