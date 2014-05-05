Menu = new Meteor.Collection("menu");


Router.configure();

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('requests');
  this.route('menu');
  this.route('contact');
});

if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to 813_serveus.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });

  // Menu functions
  $('#suggest_submit').click(function() {
    var suggestion = $('#suggest_box').val();
    if (suggestion != ''){
      $('#suggest_box').val('');
      var li_string = '<li class = "list-group-item">'+suggestion+'</li>';
      console.log(li_string);
      $('.suggestions').prepend(li_string);
      $('.suggestions li:last-child').remove();
    }
  });

  Template.menu.menu_days = function() {
    return Menu.find({});
  };
  Template.menu.menu_items = function() {

  }
  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    if (Menu.find().count() === 0) {
      Menu.insert({day: "Sunday", date: "5/4", items:"item1", items: "item2"});
    }
  });
}
