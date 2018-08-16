var romanNumerals = ["I","V","X","L","C","D","M"]
var gSomeInput;
$(document).ready(function(){


  $("form#user-form").submit(function(event) {
    event.preventDefault();
    gSomeInput = $("input#some-input").val();
    $("#roman").text(gSomeInput);

    $(".results").show();
    for (var i = 0; i < romanNumerals.length; i++) {
      var someInput1 = gSomeInput[0];
      console.log(someInput1)
    }
    if (romanNumerals.includes(someInput1)) {
      $("#please").hide();
    }
      // else (someInput1 === romanNumerals) {
    else {
        $("#please").show();
    }
    // if (gSomeInput.charAt(0) !== "I", "V", "X", "L", "C", "D", "M") {
    //   $('#please').show();}
    // if (gSomeInput.charAt(0) === "I", "V", "X", "L", "C", "D", "M") {
    //     console.log(gSomeInput);
    })

});


    console.log("outer " + gSomeInput);

  // if (someInput.charAt(0) === romanNumeral) {
  //   alert("well done")
  // } else {(someInput !== romanNumerals) {


  // }
// });
