$( document ).ready(function() {
    var comments = [];
    $( ".clckme" ).on( "click", function() {
        var inpval =  $( "#inp" ).val()
        comments.push(inpval)
        var mydiv = $("#div");
        mydiv.empty();
        console.log("hi");
        comments.forEach(function (comment) {
          mydiv.append(`<p>${comment}</p>`); 
        });
      } );
     
});