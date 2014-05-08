Contact = new Meteor.Collection("contact");

Template.contact.rendered = function (){
  console.log('template rendered', this);

  this.$("#text").value = '';

  $('#text').data("Type Comment Here");

  $("#click-image-left").click(function(evt){
    console.log("click image in here")
    console.log(this.$("#chef-title").style.borderColor);
    if(this.$("#chef-title").style.backgroundColor=="rgb(255, 255, 153)"){
      this.$("#chef-title").style.background="white";
      console.log(this.$("#chef-title").style.borderColor);
    }
    else{
      console.log("Here before change in for loop");
      this.$("#chef-title").style.backgroundColor="#FFFF99";
      console.log("here: " + this.$("#chef-title").style.borderColor);
    }
  });

  $("#select-all").click(function(evt){
   this.$("#chef-title").style.backgroundColor="#FFFF99";
   this.$("#house-manager-title").style.background="#FFFF99";
   this.$("#food-manager-title").style.background="#FFFF99";
 });

  $("#chef-title").click(function(evt){
    if(this.$("#chef-title").style.backgroundColor=="rgb(255, 255, 153)"){
      this.$("#chef-title").style.background="white";
    }
    else{
      this.$("#chef-title").style.background="#FFFF99";
    }
  });

  $("#click-image-middle").click(function(evt){
    console.log("border color: " + this.$("#house-manager-title").style.backgroundColor + "here");
    if(this.$("#house-manager-title").style.backgroundColor=="rgb(255, 255, 153)"){
      console.log(this.$("#house-manager-title").style.borderColor);
      this.$("#house-manager-title").style.backgroundColor="";
    }
    else{
      this.$("#house-manager-title").style.backgroundColor="#FFFF99";
    }
  });

  $("#house-manager-title").click(function(evt){
    if(this.$("#house-manager-title").style.backgroundColor=="rgb(255, 255, 153)"){
      this.$("#house-manager-title").style.background="white";
    }
    else{
      this.$("#house-manager-title").style.background="#FFFF99";
    }
  });

  $("#click-image-right").click(function(evt){
   if(this.$("#food-manager-title").style.backgroundColor=="rgb(255, 255, 153)"){
    this.$("#food-manager-title").style.background="white";
  }
  else{
    this.$("#food-manager-title").style.background="#FFFF99";
  }
});

  $("#food-manager-title").click(function(evt){
    if(this.$("#food-manager-title").style.backgroundColor=="rgb(255, 255, 153)"){
      this.$("#food-manager-title").style.background="white";
    }
    else{
      this.$("#food-manager-title").style.background="#FFFF99";
    }
  });
  /*page reload on 'close' button click for submit modal*/
  $('#myModal').on('hidden.bs.modal', function () {
 // location.reload();
 this.$("#text").value = '';
});

/*
//clears text box upon click
function clearContents(element) {
  element.value = '';
}
*/
}
