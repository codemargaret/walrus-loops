
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
