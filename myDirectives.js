var app = angular.module('directiveWorkshop')
app.directive('pending', function($q){
	  return {
    restrict: 'AE',
    scope: {
      request: '&'
    },
    template: '<span ng-show="loading">{{text}}</span><img id="loadingIcon" ng-show="!loading"  src="images/loading-x.gif"/>',
    controller: function($scope){
    },
    link: function(scope, element, attrs){//arguments entered in the link key have to be entered in this order
      //Code Here
      scope.text = 'Loading';
      scope.loading = true;
      element.on('click', function(){
        element.css('color', 'red');
        scope.loading = false;
        scope.request().then(function(){
          element.css('color', 'black');
          scope.loading = true;
        })
      })
      console.log(scope, element, attrs);
    }
  }
})

app.directive('notify', function(){
	  return {
    restrict: 'AE',
    scope: {
      title: '=',
      body: '=',
      icon: '='
    },
    template: 'Notify me!',
    controller: function($scope){
    },
    link: function(scope, element, attrs){//arguments entered in the link key have to be entered in this order
      //Code Here
    var Notification = window.Notification || window.mozNotification || window.webkitNotification;
        function spawnNotification(body, icon, title) {
          var options = {
              body: body,
              icon: icon
          }
          var n = new Notification(title,options);
        }               
    Notification.requestPermission(function (permission) {
                debugger;
        if (permission === 'denied') {
          console.log('Permission wasn\'t granted. Allow a retry.');
        return;
      } else if (permission === 'default') {
          console.log('The permission request was dismissed.');
        return;
     }
                console.log(permission);
                console.log(scope, element, attrs);
      });
      element.on('click', function(){
                console.log(scope, element, attrs);
        debugger;
        spawnNotification(scope.$parent.body, scope.$parent.icon, scope.$parent.title);
      })
    }
  }
})



//if you ever see "$$" don't touch it

//<ng-transclude></ng-transclude>  