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

Template.requests.requests = function () {
	return Requests.find({});
};
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
  
  
  // requests functions
	Template.requests.rendered = function(){
		  // add in all items that have been requested
		  
	//console.log("length ");
	//console.log ("is" + Requests.count());
	
  
    
  	
		$(newRequest).val('');
//		$('#houseTeam').prop('disabled', false);
	
	
	
		$('#newRequest').focus();
		/*var allRequests = new Array();
		var requestNames = new Array();
		allRequests.push("strawberries");
		allRequests.push ("pitachips");
	
	
		// start out with 2 stickies already
		// strawberries
		var request = 'strawberries';
		var requestName = 'strawberries';
		$('#stickies').append("<li class = 'col-xs-3' id = 'requestSticky'>" +
				"<div style = 'margin-bottom: 45%;' class='thumbnail' id='sticky" + request+"'>" +
				"<img src= 'stickynote.png' id = 'stickyImage'>" +
				"<div class = 'requestedItem'>" + // style = 'margin-top: -95%'>" +
				"<span style = 'margin-left:75%; color: #FF5959;' id = 'delete"+request+"'  > </span> <br>" +
					"<h3 style ='cursor: default' id = '"+request+"text'>" + requestName + " </h3>" + 
					"<div class = 'btn-toolbar' style= 'margin-left: 20%; margin-right: 20%'>" + 
							"<div class = 'btn-group' id ='buttons'>"+
								"<span class='badge-info' id = 'liked"+request+"'> <span class='glyphicon glyphicon-thumbs-up' style= 'cursor:default;'>" +
								" </span> </span>" + 
								"<span 'class='badge-info' id = 'numLiked" +request+"'>1</span> </div>" +
								"<span width='100px'> </span>" + 
							"<div class = 'btn-group'>"+
								"<span class='badge-info' id = 'disliked"+request+"'> <span class='glyphicon glyphicon-thumbs-down'>" +
								" </span> </span>" + 
								"<span class='badge-info' id ='numDisliked" + request+"'>0</span> </div>" + 
						"</div> </div> </div> </li> ");
			$("#likedstrawberries").click(function(evt){
				var currNum = parseInt($("#numLikedstrawberries").text());
				var newNum = currNum + 1;
				$("#numLikedstrawberries").text(newNum);
			});
			$("#dislikedstrawberries").click(function(evt){
				var currNum = parseInt($("#numDislikedstrawberries").text());
				var newNum = currNum + 1;
				$("#numDislikedstrawberries").text(newNum);
			});
  
		// pita chips
		var request = 'pitachips';
		var requestName = 'pita chips';
		$('#stickies').append("<li class = 'col-xs-3' id = 'requestSticky'>" +
		"<div style = 'margin-bottom: 45%;' class='thumbnail' id='sticky" + request+"'>" +
				"<img src= 'stickynote.png' id = 'stickyImage'>" +
				"<div class = 'requestedItem'>" + // style = 'margin-top: -95%'>" +
				"<span style = 'margin-left:75%; color: #FF5959;' id = 'delete"+request+"'  > </span> <br>" +
					"<h3 style ='cursor: default' id = '"+request+"text'>" + requestName + " </h3>" + 
					"<div class = 'btn-toolbar' style= 'margin-left: 7%; margin-right: 20%; margin-top:30%;'>" + 
							"<div class = 'btn-group' id ='buttons'>"+
								"<span class='badge-info' id = 'liked"+request+"'> <span class='glyphicon glyphicon-thumbs-up'>" +
								" </span> </span>" + 
								"<span class='badge-info' id = 'numLiked" +request+"'>1</span> </div>" +
							 
							"<div style= 'position: absolute; left: 43%' class = 'btn-group'>"+
								"<span class='badge-info' id = 'disliked"+request+"'> <span class='glyphicon glyphicon-thumbs-down'>" +
								" </span> </span>" + 
								"<span class='badge-info' id ='numDisliked" + request+"'>0</span> </div>" + 
						"</div> </div> </div> </li> ")
			$("#likedpitachips").click(function(evt){
				var currNum = parseInt($("#numLikedpitachips").text());
				var newNum = currNum + 1;
				$("#numLikedpitachips").text(newNum);
			});
			$("#dislikedpitachips").click(function(evt){
				var currNum = parseInt($("#numDislikedpitachips").text());
				var newNum = currNum + 1;
				$("#numDislikedpitachips").text(newNum);
			});
			//console.log(" here 1");
		if ( Meteor.user() != null){
			if (Meteor.user().profile.name == "House Member Julia") {
				//console.log("here 2");
				for (var i =0; i< allRequests.length; i++) {
					var request = allRequests[i];
					$('#'+request+'text').attr('contenteditable',"true");
					$('#'+request+'text').css('cursor', 'text' );
					$('#delete'+request).append("<button class = 'btn btn-sm' style='background-color:transparent' id = 'deleted" + request+"'> <span style = 'margin-left:-7px' class = 'glyphicon glyphicon-remove'></span> </button>");
					$('#deleted'+request).click(function(evt){
						$(this).parents('li').remove();	
					});
				}
			}
		};
		//console.log("here 3");*/

		$("#btnSubmit").click(function(evt) {
			//console.log(Requests.find().count(0).name);
			//console.log("pressed submit button"); 
			var requestName = $(newRequest).val();
			var request = $(newRequest).val().replace(/[ .,!?]/g,'');
			if (request == '') {return;}
			
			Requests.insert({name: ""+request+"", likes: "1", unlikes: "0"});
			
			//var liked;
			//var disliked;
			$('#stickies').append("<li class = 'col-xs-3' id = 'requestSticky'>" +
				"<div style = 'margin-bottom: 45%;' class='thumbnail' id='sticky" + request+"'>" +
				"<img src= 'stickynote.png' id = 'stickyImage'>" +
				"<div class = 'requestedItem'>"+ // style = 'margin-top: -95%'>" +
				"<span style = 'margin-left:75%; color: #FF5959;' id = 'delete"+request+"'  > </span> <br>" +
					"<h3 style ='cursor: default' id = '"+request+"text'>" + requestName + " </h3>" + 
					"<div class = 'btn-toolbar' style= 'margin-left: 10%; margin-right: 10%'>" + 
							"<div class = 'btn-group' id ='buttons'>"+
								"<span class='badge-info' id = 'liked"+request+"'> <span class='glyphicon glyphicon-thumbs-up'>" +
								" </span> </span>" + 
								"<span class='badge-info' id = 'numLiked" +request+"'>1</span> </div>" +
							"<div style= 'position: absolute; left: 57%' class = 'btn-group'>"+
								"<span class='badge-info' id = 'disliked"+request+"'> <span class='glyphicon glyphicon-thumbs-down'>" +
								" </span> </span>" + 
								"<span class='badge-info' id ='numDisliked" + request+"'>0</span> </div>" + 
						"</div> </div> </div> </li> ");
			
			$("#liked"+request).click(function(evt){
				var req = Requests.findOne({name: request});
				var num = 1+parseInt(req.likes);
				$("#numLiked" + request).text(num);
				//liked = newNum;
			});
			$("#disliked"+request).click(function(evt){
				var req = Requests.findOne({name: request});
				var num = parseInt(req.likes) -1;
				$("#numDisliked" + request).text(num);
				//disliked = newNum;
			});
			
			/*
			// fix stuff if you're a special user
			if ( Meteor.user() != null){
				if (Meteor.user().profile.name == "House Member Julia") {
			// fix so works with new thing
				$('#delete'+request).append("<button  class = 'btn btn-sm' style='background-color:transparent; margin-left:-7px' id = 'deleted" + request+"'> <span class = 'glyphicon glyphicon-remove'></span> </button>");
				$('#deleted'+request).click(function(evt){
					$(this).parents('li').remove();	
				});
				$('#'+request+'text').attr('contenteditable',"true");
				$('#'+request+'text').css('cursor', 'text' );
			}
			}*/
			$(newRequest).val(''); 
			
			console.log( "newest added " + req.name);
			
	}); 
  };
	

		};

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
  
  	var arrayRequests = Requests.find({}).fetch();
  	for (var i = 0; i < arrayRequests.length; i++){
  		var newRequest = arrayRequests[i];
  		console.log (i+" "+ newRequest.name+" "+newRequest.likes+" "+newRequest.unlikes);
  	}
 	//console.log("found:" + Requests.find({name:"apple pie"}).likes);
  
});
};