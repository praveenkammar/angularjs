
function emailanddomain()
{
var email=document.getElementById("email").value;
var emailpart=email.substring(0,email.indexOf("@"))
var domainpart=email.substring(email.indexOf("@"));

document.getElementById("emailpart").value=emailpart;
document.getElementById("domainpart").value=domainpart;

}