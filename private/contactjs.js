Contact = new Meteor.Collection("contact");

$(document).ready(function() {

  document.getElementById("text").value = '';

  var hasBeenClickedLeft = false;
  var hasBeenClickedMiddle = false;
  var hasBeenClickedRight = false;

$('#text').data("Type Comment Here");

  $("#click-image-left").click(function(evt){
    console.log("click image in here")
    console.log(document.getElementById("chef-title").style.borderColor);
    if(document.getElementById("chef-title").style.backgroundColor=="rgb(255, 255, 153)"){
      document.getElementById("chef-title").style.background="white";
      console.log(document.getElementById("chef-title").style.borderColor);
      hasBeenClickedLeft = false;
    }
    else{
      console.log("Here before change in for loop");
      document.getElementById("chef-title").style.backgroundColor="#FFFF99";
      console.log("here: " + document.getElementById("chef-title").style.borderColor);
      hasBeenClickedLeft = true;
    }
    console.log("left " + hasBeenClickedLeft);
  });

  $("#select-all").click(function(evt){
   document.getElementById("chef-title").style.backgroundColor="#FFFF99";
   document.getElementById("house-manager-title").style.background="#FFFF99";
   document.getElementById("food-manager-title").style.background="#FFFF99";
   });

  $("#chef-title").click(function(evt){
    if(document.getElementById("chef-title").style.backgroundColor=="rgb(255, 255, 153)"){
      document.getElementById("chef-title").style.background="white";
      hasBeenClickedLeft = false;
    }
    else{
      document.getElementById("chef-title").style.background="#FFFF99";
      hasBeenClickedLeft = true;
    }
    console.log("left chef title" + hasBeenClickedLeft);
  });

  $("#click-image-middle").click(function(evt){
    console.log("border color: " + document.getElementById("house-manager-title").style.backgroundColor + "here");
    if(document.getElementById("house-manager-title").style.backgroundColor=="rgb(255, 255, 153)"){
      console.log(document.getElementById("house-manager-title").style.borderColor);
      document.getElementById("house-manager-title").style.backgroundColor="";
    }
    else{
      document.getElementById("house-manager-title").style.backgroundColor="#FFFF99";
    }
  });

  $("#house-manager-title").click(function(evt){
    if(document.getElementById("house-manager-title").style.backgroundColor=="rgb(255, 255, 153)"){
      document.getElementById("house-manager-title").style.background="white";
      hasBeenClickedLeft = false;
    }
    else{
      document.getElementById("house-manager-title").style.background="#FFFF99";
      hasBeenClickedLeft = true;
    }
    console.log("left" + hasBeenClickedLeft);
  });

  /*$("#click-image-left").click(function(evt){
    if(document.getElementById("chef-title").style.backgroundColor=="rgb(255, 255, 153)"){
      document.getElementById("chef-title").style.background="white";
      hasBeenClickedLeft = false;
    }
    else{
      document.getElementById("chef-title").style.background="#FFFF99";
      hasBeenClickedLeft = true;
    }
    console.log("left" + hasBeenClickedLeft);
  });*/

  $("#click-image-right").click(function(evt){
   if(document.getElementById("food-manager-title").style.backgroundColor=="rgb(255, 255, 153)"){
      document.getElementById("food-manager-title").style.background="white";
    }
    else{
      document.getElementById("food-manager-title").style.background="#FFFF99";
    }
  });

  $("#food-manager-title").click(function(evt){
    if(document.getElementById("food-manager-title").style.backgroundColor=="rgb(255, 255, 153)"){
      document.getElementById("food-manager-title").style.background="white";
      hasBeenClickedLeft = false;
    }
    else{
      document.getElementById("food-manager-title").style.background="#FFFF99";
      hasBeenClickedLeft = true;
    }
    console.log("left" + hasBeenClickedLeft);
  });
  /*page reload on 'close' button click for submit modal*/
  $('#myModal').on('hidden.bs.modal', function () {
 // location.reload();
   document.getElementById("text").value = '';
 })

//clears text box upon click
function clearContents(element) {
  element.value = '';
}
});