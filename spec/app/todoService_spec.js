'use strict';

describe('todoService', function() {
  var $window = null ;
  var $todoService = null ;
  var $todoDB = null;
  var $q = null;

  beforeEach(module('myApp'));

  beforeEach(inject(function($injector) {
    $window = $injector.get('$window');
    $q = $injector.get('$q');
    $window.PouchDB = function(dbName) {
      return {
        put: function(object) {
          // Fake PuchDB put function
          var deferred = $q.defer();
          return deferred.promise;
        }
      }
    }

    $todoDB = $injector.get('todoDB');
    $todoService = $injector.get('todoService');
  }));

  it('puts to an item to pouchDB', function () {
    spyOn($todoDB, 'put');
    $todoService.add("some todo for some day");
    expect($todoDB.put).toHaveBeenCalled();
  });

  it('returns a promise', function () {
    var addedValue = $todoService.add("some todo for some day");
    expect(addedValue.constructor.name).toBe('Promise');
  });
});
