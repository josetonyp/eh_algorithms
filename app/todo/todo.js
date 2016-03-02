'use strict';

angular.module('myApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/todo', {
    templateUrl: 'todo/index.html',
    controller: 'ToDoController'
  });
}])

.controller('ToDoController', ['$scope', function(scope) {

  var addTodoItem = function(value) {
    scope.todoItems[(new Date).getTime()] = {
      value: value,
      done: false,
      edit: false
    };
  };

  var removeTodoItem = function(id) {
    console.log(scope.todoItems);
    console.log(id);
    scope.todoItems = _.omit(scope.todoItems, id);
  }

  var toggleDone = function(id) {
    scope.todoItems[id].done = !scope.todoItems[id].done;
    console.log(scope.todoItems);
  }

  scope.todoItems = {};
  scope.todoItem = { value: ""};

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
}]);
