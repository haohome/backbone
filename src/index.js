import './css/style.css';


  $("<div>这是jquery生成的</div>").appendTo("body")
  console.log($("body"));
  console.log("你好");

require([
    './routes/router',
],function(Route,RouteRegister) {
    window.route = new Route;

    Backbone.history.start();
});
