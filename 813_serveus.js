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
  Template.menu.rendered = function() {
    $(document).ready(function() {
      console.log('called render');
      $('#suggest_submit').click(function() {
        console.log('clicked');
        var suggestion = $('#suggest_box').val();
        console.log(suggestion);
        if (suggestion != ''){
          $('#suggest_box').val('');
          Suggestions.insert({item: suggestion, time_created: Date.now()});
        }
      });
    });
  };

  Template.menu.editablefn = function() {  
      console.log($('.editable')); 
      $('.editable').keypress(function() {
        console.log('key');
      });
  };

  Template.menu.menu_days = function() {
    //console.log(Menu.find({}).count());
    return Menu.find({});
  };
  Template.menu.suggestions = function() {
    return Suggestions.find({}, {sort: {time_created: -1}});
  };
  Template.menu.log = function() {
    console.log(this);
  };

  Template.menu.user_is_admin = function() {
    var user = Meteor.user();
    //console.log(user);
    if (user != null){
      if (user.profile.name === "House Member Julia") {
        return true;
      }
    }
    return false;

  };

  //contact functions
  Template.contact.rendered = function (){
    console.log('contact template rendered', this);

    $("#comment-box").val('Type comment here');

    $('#click-image-left').click(function() {
      if($('#chef-title').css("backgroundColor")=="rgb(255, 255, 255)"){
        $("#chef-title").css("backgroundColor", "rgb(255, 255, 153)");
        //console.log($('#chef-title').css("backgroundColor"));
      }
      else{
        $("#chef-title").css("backgroundColor", "white");
        //console.log($('#chef-title').css("backgroundColor"));
      }
    });

    $('#click-image-middle').click(function() {
      if($('#house-manager-title').css("backgroundColor")=="rgb(255, 255, 255)"){
        $("#house-manager-title").css("backgroundColor", "rgb(255, 255, 153)");
        //console.log($('#chef-title').css("backgroundColor"));
      }
      else{
        $("#house-manager-title").css("backgroundColor", "white");
        //console.log($('#chef-title').css("backgroundColor"));
      }
    });

    $('#click-image-right').click(function() {
      if($('#food-manager-title').css("backgroundColor")=="rgb(255, 255, 255)"){
        $("#food-manager-title").css("backgroundColor", "rgb(255, 255, 153)");
        //console.log($('#chef-title').css("backgroundColor"));
      }
      else{
        $("#food-manager-title").css("backgroundColor", "white");
        //console.log($('#chef-title').css("backgroundColor"));
      }
    });

    $("#select-all").click(function(){
     $("#chef-title").css("backgroundColor", "rgb(255, 255, 153)");
     $("#house-manager-title").css("backgroundColor", "rgb(255, 255, 153)");
     $("#food-manager-title").css("backgroundColor", "rgb(255, 255, 153)");
   });
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    Menu.remove({});
    Suggestions.remove({});

    if (Menu.find().count() === 0) {
      Menu.insert({day: "Sunday", date: "4", items:["Grilled Cheese", "Tomato Soup", "Apple Pie"]});
      Menu.insert({day: "Monday", date: "5", items:["Cheeseburgers", "Sweet Potato Fries", "Brownies"]});
      Menu.insert({day: "Tuesday", date: "6", items:["Pizza", "Caesar Salad", "Cookies"]});
      Menu.insert({day: "Wednesday", date: "7", items:["Salmon", "Asparagus", "Orzo", "Cupcakes"]});
      Menu.insert({day: "Thursday", date: "8", items:["Chicken Teriyaki Stir Fry", "Brown Rice", "Bread Pudding"]});
    }
    Suggestions.insert({item: "Brisket", time_created: Date.now()});
    Suggestions.insert({item: "Tacos, Rice, Beans", time_created: Date.now()});
    Suggestions.insert({item: "Spaghetti & meatballs", time_created: Date.now()});
    Suggestions.insert({item: "The quiche from the other night", time_created: Date.now()});
    Suggestions.insert({item: "Mac n' cheese!!!!", time_created: Date.now()});
  });
}
