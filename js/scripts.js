var romanNumerals = ["I", "V", "X", "L", "C", "D", "M"]


$(document).ready(function(){


  $("form#user-form").submit(function(event) {
    event.preventDefault();
    var someInput = $("input#some-input").val();

  $("#roman").text(someInput);

  $(".results").show();
  if (someInput === romanNumerals) {
    alert("well done")
  } else {(someInput !== romanNumerals) {
    alert('Please enter Roman Numerals.')

  }

  });
});


console.log("muffin");
