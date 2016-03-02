angular.module('myApp')
.factory('todoDB', ['$window', function($window) {
    return $window.PouchDB('todoApp');
}])

.factory('todoService', ['todoDB', function(DB) {
  return {
    add: function(value){
      return DB.put({
        value: value,
        done: false,
        edit: false,
        _id: (new Date).getTime().toString()
      });
    },

    update: function(item) {
      return DB.put(item);
    },

    all: function(){
      return DB.allDocs({
        include_docs: true
      }).then(function(data) {
        console.log(data);
        return data['rows'];
      });
    },

    remove: function(id, rev) {
       return DB.remove(id, rev);
    }
  }
}]);
