(function(){
Template.__define__("home", (function() {
  var self = this;
  var template = this;
  return HTML.Raw('<div id="corkboard">\n	<nav class="navbar navbar-default" role="navigation">\n	<!-- <div class="container-fluid"> -->\n	<div class="navbar-header">\n      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n        <span class="sr-only">Toggle navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n     <a class="navbar-brand font" href="index.html" style="font-size:25px; color:#478595;"> ServeUs </a> \n    </div>\n    <div class="collapse navbar-collapse" id="navigation">\n    	<ul class="nav navbar-nav nav-tabs">\n    	\n      	<li> <a href="requests.html#" class="font font-size"> Requests </a></li>\n 	  	<li><a href="menu.html#" class="font font-size"> Menu </a></li>\n    	<li><a href="contact2.html#" class="font font-size"> Contact </a></li>\n    	\n    	</ul>\n 		<ul class="nav navbar-nav navbar-right" id="login">\n 		<li class="disabled"> \n 			<form class="form-inline" role="form" id="signIn">\n  				<div class="form-group">\n   				 	<input type="email" class="form-control" id="username" placeholder="Username">\n  				</div>\n  				<div class="form-group">\n   				 	<input type="password" class="form-control" id="password" placeholder="Password">\n  				</div>\n  				<button type="submit" class="btn btn-sm" id="btnSubmit"> Login </button>\n			</form>\n			</li>\n 		</ul>\n 	</div>\n 	</nav>\n 	\n 	<div class="container">\n 		<div class="jumbotron" id="infoSection">\n  			<h1>Welcome to ServeUs!</h1>\n	  		<p style="color:#777;"> ServeUs is a platform that allows house members living in Independent Living Groups to submit food requests for bulk grocery orders, give feedback on the requests of others,\n	  		 view menu items as well as contact the house team. </p>\n  			<p>  <a class="btn btn-info btn-lg text-center" data-toggle="modal" data-target="#signinModal" id="loginbtn">Login </a> <a class="btn btn-lg" role="button" id="signupbtn" style="color:#478595"> Sign Up</a>  </p>\n		</div>\n	\n	<div class="modal fade" id="signinModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n  		<div class="modal-dialog">\n    		<div class="modal-content">\n     			 <div class="modal-header">\n      				  <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n       				 <h4 class="modal-title" id="myModalLabel">Sign In</h4>\n     			 </div>\n      			<div class="modal-body" id="modalbody">\n       				 <form class="form-inline" role="form" id="signIn">\n  						<div class="form-group">\n   				 			<input type="email" class="form-control" id="modalusername" placeholder="Username">\n		  				</div>\n  						<div class="form-group">\n   						 	<input type="password" class="form-control" id="modalpassword" placeholder="Password">\n		  				</div>\n					</form>\n      			</div>\n     			<div class="modal-footer">\n	    	    	<button type="submit" class="btn btn-sm" id="modalLogin"> Login </button>\n    	    	</div>\n    	    </div>\n    	</div>\n    	\n		<br>\n    	\n	</div>\n	\n	<div class="container">\n		<br>\n  		<div class="col-xs-4" id="requestSticky">\n  			<a href="requests.html#" class="thumbnail">\n      		<img src="stickynote.png" id="stickyImage">\n      		<div id="request">\n      			<h1 class="requests-center">Requests</h1>\n          	</div>\n          	</a> \n        </div>\n        \n        <div class="col-xs-4" id="menuSticky">\n  			<a href="menu.html#" class="thumbnail">\n      		<img src="stickynote.png" id="stickyImage">\n      		<div id="menu" class="text-center">\n      			<h1 class="menu-center">Menu</h1>\n          	</div>\n          	</a> \n        </div>\n        \n        <div class="col-xs-4" id="contactSticky">\n  			<a href="contact2.html#" class="thumbnail">\n      		<img src="stickynote.png" id="stickyImage">\n      		<div id="contact" class="text-center">\n      			<h1 class="contact-center"> Contact</h1>\n          	</div>\n          	</a> \n        </div>  \n   \n	</div>\n	</div>\n</div>');
}));

Template.__define__("hello", (function() {
  var self = this;
  var template = this;
  return [ HTML.Raw("<h1>Hello World!</h1>\n  "), function() {
    return Spacebars.mustache(self.lookup("greeting"));
  }, HTML.Raw('\n  <input type="button" value="Click">') ];
}));

Template.__define__("requests", (function() {
  var self = this;
  var template = this;
  return HTML.Raw("<h1>Requests</h1>");
}));

Template.__define__("menu", (function() {
  var self = this;
  var template = this;
  return HTML.Raw("<h1>Menu</h1>");
}));

Template.__define__("contact", (function() {
  var self = this;
  var template = this;
  return HTML.Raw("<h1>Contact</h1>");
}));

})();
