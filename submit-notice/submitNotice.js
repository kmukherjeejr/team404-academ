function submitAction(){
    var obj = {"heading" : document.getElementById("myTextarea1").value, "body" : document.getElementById("myTextarea2").value};
    var myJSON = JSON.stringify(obj);
    console.log(myJSON);
    jQuery.post('recieve.php', {
    myJSON: myJSON
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


// clear Text area 
var submitButton = document.querySelector('#submit-button');
var textarea1 = document.querySelector('#myTextarea1');
var textarea2 = document.querySelector('#myTextarea2');

submitButton.addEventListener('click', function () {
    textarea1.value = '';
    textarea2.value = '';
}, false);