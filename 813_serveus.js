Menu = new Meteor.Collection("menu");
Suggestions = new Meteor.Collection("suggestions");
Requests = new Meteor.Collection("requests");

Router.configure();

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('requests');
  this.route('menu');
  this.route('contact');
});


if (Meteor.isClient) {

  //Home functions
  Template.home.rendered = function(){
    $('#contactSticky').mouseenter(function(){
      $(this).prepend("<a href='/contact'><div class = 'hover-text text-center' id = 'contactInfo'> Contact members of the house team </div></a>");
    });

    $('#contactSticky').mouseleave (function(){
      $('#contactInfo').remove();
    });

    $('#menuSticky').mouseenter(function(){
      $(this).prepend("<a href='/menu'><div class = 'hover-text text-center' id = 'menuInfo'> View this week's menu and suggest future meals </div></a>");
    });

    $('#menuSticky').mouseleave (function(){
      $('#menuInfo').remove();
    });

    $('#requestSticky').mouseenter(function(){
      $(this).prepend("<a href='/requests'><div class = 'hover-text text-center' id = 'requestInfo'> View current food requests and add your own </div></a>");
    });

    $('#requestSticky').mouseleave (function(){
      $('#requestInfo').remove();
    });

    $(".hover-text").click(function(){
     window.location=$(this).find("a").attr("href"); 
     return false;
   });

  };

  Template.requests.requests = function () {
   return Requests.find({});
 };
 
 Template.requests.user_is_admin = function (){
 	var user = Meteor.user();
    //console.log(user);
    if (user != null){
      if (user.profile.name === "House Manager Katie") {
        return true;
      }
    }
    return false;
 };
 
 Template.requests.events({
   'click #deleteButton' : function () {
    //  console.log("trying to delete");
      Requests.remove(this._id);
    },
   'click #liked' : function(){
      Requests.update (this._id, {$inc: {likes:1}});
   },
   'click #disliked' : function(){
      Requests.update (this._id, {$inc: {unlikes:1}});
   },
  });
 
  // Menu functions
  Template.menu.events = {
    'click #save': function(event) {
      console.log('saving');
      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
      for (var j = 0; j < days.length; j++){
        var i = Menu.find({day: days[j]}).fetch();
        var food_items = [];
        for (var k = 0; k < $('.'+days[j]+'.food').children().length; k++) {
          food_items[k] = $('.'+days[j]+'.food').children()[k].innerHTML;
        }
        console.log(food_items);
        var d = $('.'+days[j]+'.date').html();
        console.log(d);
        Menu.remove({_id: i[0]._id});
        Menu.insert({date: d, items: food_items, day: days[j]});
      }
    },
    'click #suggest_submit': function(event) {
        console.log('clicked');
        var suggestion = $('#suggest_box').val();
        console.log(suggestion);
        if (suggestion != ''){
          $('#suggest_box').val('');
          Suggestions.insert({item: suggestion, time_created: Date.now()});
        }
    }
  };

  Template.menu.editablefn = function() {  
      
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
      if (user.profile.name === "House Manager Katie") {
        return true;
      }
    }
    return false;

  };

  //contact functions
  Template.contact.rendered = function (){
    console.log('contact template rendered', this);

    //$("#comment-box").val('Type comment here');

    $('#click-image-left').click(function() {
      if($('#chef-title').css("backgroundColor")=="rgb(255, 255, 255)"){
        $("#chef-title").css("backgroundColor", "rgb(255, 255, 153)");
      }
      else{
        $("#chef-title").css("backgroundColor", "white");
      }
    });

    $('#click-image-middle').click(function() {
      if($('#house-manager-title').css("backgroundColor")=="rgb(255, 255, 255)"){
        $("#house-manager-title").css("backgroundColor", "rgb(255, 255, 153)");
      }
      else{
        $("#house-manager-title").css("backgroundColor", "white");
      }
    });

    $('#click-image-right').click(function() {
      if($('#food-manager-title').css("backgroundColor")=="rgb(255, 255, 255)"){
        $("#food-manager-title").css("backgroundColor", "rgb(255, 255, 153)");
      }
      else{
        $("#food-manager-title").css("backgroundColor", "white");
      }
    });

    $("#select-all").click(function(){
     $("#chef-title").css("backgroundColor", "rgb(255, 255, 153)");
     $("#house-manager-title").css("backgroundColor", "rgb(255, 255, 153)");
     $("#food-manager-title").css("backgroundColor", "rgb(255, 255, 153)");
   });

    $('#comment-box').click(function(){
      $('#comment-box').val('');
    });
  };
  
  
  // requests functions
  Template.requests.rendered = function(){

  $(newRequest).val('');

$('#newRequest').focus();
		$("#btnSubmit").click(function(evt) {
			var requestName = $(newRequest).val();
			var request = $(newRequest).val().replace(/[ .,!?]/g,'');
			if (request == '') {return;}
			
			Requests.insert({name: ""+requestName+"", item:""+request+"", likes: 1, unlikes: 0, time_created: Date.now()});
   $(newRequest).val(''); 

 }); 
};


};

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
};
