
// A $( document ).ready() block.
$( document ).ready(function() {
    //console.log( "Josh Testing" );
  //alert("test")
  
  $(document).on("change", "#t-shirt", chkTshirt);
  
  //begin chkTshirt function
  function chkTshirt() {
    var tshirt = $("#t-shirt").val();
    //alert("works");
    
    //begin if
    
    if (tshirt == "Custom") {
      //alert("works");
      $("#custom").removeAttr("disabled"); //remove disable
      $("#custom").attr("required", true);
    } //end if tshirt
    else{
      
      $("#custom").attr("disabled", true); //diabled again
      $("#custom").val(""); //set value to empty
      $("#custom").removeAttr("required"); //remove required
    }
  } //end chkTshirt function
  
});

