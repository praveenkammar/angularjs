function url()
{
    var w=document.getElementById("w").value;
    var u=w.substring(0,w.lastIndexOf("."));
    var d=w.substring(w.lastIndexOf("."));
    alert(u);
    alert(d);
    document.getElementById("u").value=u;
    document.getElementById("d").value=d;
}