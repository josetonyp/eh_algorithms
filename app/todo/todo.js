'use strict';

angular.module('myApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/todo', {
    templateUrl: 'todo/index.html',
    controller: 'ToDoController'
  });
}])

.controller('ToDoController', ['$scope', 'todoService', '$interval', function(scope, todoService, interval) {
  scope.todoItems = {};
  scope.todoItem = { value: ""};

  interval( function(argument) {
    todoService.sync();
  } , 10 * 1000);

  var updateItemsLIst = function(){
    todoService.all().then(function(rows) {
      scope.todoItems = _.map(rows, 'doc');
      scope.$apply();
    });
  };

  var addTodoItem = function(value) {
    todoService.add(value).then(updateItemsLIst);
  };

  var removeTodoItem = function(id, rev) {
    todoService.remove(id, rev).then(updateItemsLIst);
  }

  var toggleDone = function(item) {
    item.done = !item.done;
    todoService.update(item).then(updateItemsLIst);
  };

  scope.todoSubmit = function() {
    scope.todoForm.todoItem.$setValidity('todoItem', true);
    if (scope.todoItem.value == '') {
      scope.todoForm.todoItem.$setValidity('todoItem', false);
    } else {
      addTodoItem(scope.todoItem.value);
    };
  };

  scope.removeTodoItem = removeTodoItem;
  scope.toggleDone = toggleDone;
  updateItemsLIst();
}]);
