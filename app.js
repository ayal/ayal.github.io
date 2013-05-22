var app = angular.module('hanaxa', []);

loadpost = function(posti) {
  return $.get('post-' + posti + '.html');
}

loadposts = function(i){
  loadpost(i).then(function(x){
    newpost(x);
    loadpost(i++);
  }, function(){
    render();
  });
}

app.controller('posts', function($scope) {
  $scope.posts = [];
  newpost = function(t){
  $scope.posts.push({body: t});
  };
  render = function(){
    $scope.$apply();
  }
  loadposts(0);
});
