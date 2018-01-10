function addnumber()
{
    var firstnumber=parseFloat(document.getElementById("firstnumber").value);
    var secondnumber=parseFloat(document.getElementById("secondnumber").value);
    document.getElementById("total").value=firstnumber+secondnumber;
    if(isNaN(firstnumber)){
        alert("give only floating numbers")
    }
    if(isNaN(secondnumber)){
        alert("give only floating numbers")
    }
}