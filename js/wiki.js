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

$(document).ready(function() {
  $("form#bob").submit(function(event) {
    var choice = $("select#choice").val();

    var result1 = ["fur", "mink", "wrap", "chinchilla"];
    var result2 = ["fur", "mink", "wrap", "chinchilla"];
      if (choice === "1") {
      result1 = result1[3]
      result2 = result2[2]
    } else if (choice === "2") {
      result1 = result1[1]
      result2 = result2[0]
      }

    $("#furoption").text(result1 + " " + result2);

    event.preventDefault();
  });
});
