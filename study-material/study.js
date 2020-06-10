var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


function myFunction() {

  var $bar = $('.accordion').accordion();
  var groupCount = 0;
  // Create a new group
  var generateGroup = function(title){
  var group = {
  text: title,
  content: "<p class='group-content'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>"
  }  
  return group;
}
  
   
  
  $('#add-group').click(function(e){
  
  groupCount++;
  
  $bar.accordion("addGroup", generateGroup("Group" + groupCount));
  
  });
}