/*$(document).ready(function() {
  $("p").click(function() {
  alert("Hi there!");
  });
});*/

$(document).ready(function() {
  $("#mailto").submit(function(event) {
  var name = $("input#name").val();
  var address = $("input#address").val();
  var city = $("input#city").val();
  var state =$("input#state").val();
  $("#finishedlabel1").text(name);
  $("#finishedlabel2").text(address);
  $("#finishedlabel3").text(city + ", " + state);
  event.preventDefault();
  });
});
