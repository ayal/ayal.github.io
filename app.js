var app = angular.module('hanaxa', []);

app.controller('posts', function($scope) {
  $scope.posts = [{title: "אזהרת רווח", text: "בוגי בוגי", img: {url: "http://i.imgur.com/brJD9DJ.png", title: "what"}},
  {title: "אזהרffffת רווח", text: "בוגי בffffוגי", img: {url: "http://i.imgur.com/brJD9DJ.png", title: "what"}}];
});
