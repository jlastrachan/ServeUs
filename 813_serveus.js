Menu = new Meteor.Collection("menu");
Suggestions = new Meteor.Collection("suggestions");

Router.configure();

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('requests');
  this.route('menu');
  this.route('contact');
});

if (Meteor.isClient) {

  // Menu functions
  $('#suggest_submit').click(function() {
    var suggestion = $('#suggest_box').val();
    if (suggestion != ''){
      $('#suggest_box').val('');
      Suggestions.insert({item: suggestion});
    }
  });

  Template.menu.menu_days = function() {
    console.log(Menu.find({}).count());
    return Menu.find({});
  };
  Template.menu.suggestions = function() {
    var result = [];
    var sugg = Suggestions.find({}).fetch();
    for (var i = 0; i < 5 ; i++) {
      result[i] = sugg[i];
    }
    return result;
    // TODO: Sort based on time
  };
  Template.menu.log = function() {
    console.log(this);
  };

  Template.menu.user_is_admin = function() {
    var user = Meteor.user();
    console.log(user);
    if (user != null){
      if (user.profile.name === "House Member Julia") {
        return true;
      }
    }
    return false;

  };

  //contact functions
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
  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    Menu.remove({});
    Suggestions.remove({});

    if (Menu.find().count() === 0) {
      Menu.insert({day: "Sunday", date: "5/4", items:["Grilled Cheese", "Tomato Soup", "Apple Pie"]});
      Menu.insert({day: "Monday", date: "5/5", items:["Cheeseburgers", "Sweet Potato Fries", "Brownies"]});
      Menu.insert({day: "Tuesday", date: "5/6", items:["Pizza", "Caesar Salad", "Cookies"]});
      Menu.insert({day: "Wednesday", date: "5/7", items:["Salmon", "Asparagus", "Orzo", "Cupcakes"]});
      Menu.insert({day: "Thursday", date: "5/8", items:["Chicken Teriyaki Stir Fry", "Brown Rice", "Bread Pudding"]});
    }
    Suggestions.insert({item: "Brisket"});
    Suggestions.insert({item: "Tacos, Rice, Beans"});
    Suggestions.insert({item: "Spaghetti & meatballs"});
    Suggestions.insert({item: "The quiche from the other night"});
    Suggestions.insert({item: "Mac n' cheese!!!!"});
  });
}
