function addnumber()
{
    var firstnumber=parseInt(document.getElementById("firstnumber").value);
    var secondnumber=parseInt(document.getElementById("secondnumber").value);
    document.getElementById("total").value=firstnumber+secondnumber;
    if(isNaN(firstnumber)){
        alert("give only integer numbers")
    }
    if(isNaN(secondnumber)){
        alert("give only integer numbers")
    }
}