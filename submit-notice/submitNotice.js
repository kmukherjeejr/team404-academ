function submitAction(){
    var obj = {"heading" : document.getElementById("myTextarea1").value, "body" : document.getElementById("myTextarea2").value};
    var myJSON = JSON.stringify(obj);
    console.log(myJSON);
    jQuery.post('recieve.php', {
    myJSON: myJSON
}, function(response){
    // response could contain the url of the newly saved file
})
    var arr = JSON.stringify('jsonN.json');
    var arb = JSON.parse('[' + arr + ']');
    console.log(arr);
    jQuery.post('recieve2.php', {
    arr: arr
}, function(response){
    // response could contain the url of the newly saved file
})
}
//     // var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
//     // var theUrl = "recieve.php";
//     // xmlhttp.open("POST", theUrl);
//     // xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//     // xmlhttp.send(myJSON);
//     //xmlhttp = new XMLHttpRequest();
// }

// // var newData = JSON.stringify(data);
// // jQuery.post('http://example.com/saveJson.php', {
// //     newData: newData
// // }, function(response){
// //     // response could contain the url of the newly saved file
// // })