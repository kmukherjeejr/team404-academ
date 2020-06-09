function submitAction(){
    var obj = {"heading" : document.getElementById("myTextarea1").value, "body" : document.getElementById("myTextarea2").value};
    var myJSON = JSON.stringify(obj);
    console.log(myJSON);
    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
    var theUrl = "jsonNotice.json";
    xmlhttp.open("POST", theUrl);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(myJSON);
    //xmlhttp = new XMLHttpRequest();
}

