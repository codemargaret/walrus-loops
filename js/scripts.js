
$(document).ready(function(){
  var elements = ["h1", "p", "img"];
  var elementNames = ["header","paragragh","image"]
  elements.forEach(function(element){
    $(element).click(function() {
      var index = elements.indexOf(element);
      alert("This is a " + elementNames[index] + ".");
    });
  });
});

//
// $(document).ready(function() {
//   var elements = ["h1", "p", "img"];
//   // var index = elements.indexOf();
//   // var heading = elements.indexOf("h1");
//
//   elements.forEach((element)click.function(element) {
//     alert("This is a" + element + ".");
//   });

  // $("h1").click(function() {
  //   alert("This is a header.");
  // });
  //
  // $("p").click(function() {
  //   alert("This is a paragraph.");
  // });
  //
  // $("img").click(function() {
  //   alert("This is an image.");
  // });
// });
