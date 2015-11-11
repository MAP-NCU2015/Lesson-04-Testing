 var test = require('unit.js');
	
	function once(fn) {
  var returnValue;
  var called = false;
  return function() {
    if (!called) {
      called = true;
      returnValue = fn.apply(this, arguments);
    }
    return returnValue;
  };
};
var jQuery = {
  ajax: function() {}
};
function getTodos(listId, callback) {
  jQuery.ajax({
    url: '/todo/' + listId + '/items',
    success: function(data) {
      // Node-style CPS: callback(err, data)
      callback(null, data);
    }
  });
}