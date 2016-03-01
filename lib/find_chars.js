module.exports = {

  // Implementation of a N*N order simple char serch algorithm.
  // On each interation over string 1 chars there is a full serch for given char on string 2
  nn_find_chars: function(string1, string2){
    return string1.split('').reduce( function(memo, c) {
      if (string2.includes(c)) {
        memo = memo + c;
      };
      return memo;
    }, '');
  },

  // Implementation of a N order simple char search algorithm
  // First we make a dictionary over string 1 and then we reduce string 2 looking for the presence of chars
  // The order could be consider 2 N what is conver to N
  n_find_chars: function(string1, string2){
    var dictionary = {};

    string1.split('').forEach( function(element) {
      dictionary[element] = 0;
    });

    return string2.split('').reduce(function(memo, element) {
      if (!isNaN(dictionary[element])){
        memo = memo + element;
      }
      return memo;
    }, '');
  }
}

