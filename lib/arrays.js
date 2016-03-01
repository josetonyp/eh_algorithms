module.exports = {
  // As the array is ordered it is posible to use the output as count for numbers found in array
  compact: function(a) {
    return a.reduce(function(memo, num) {
      if (memo.length > -1 && memo[memo.length - 1] != num){
        memo.push(num);
      };
      return memo;
    }, []);
  },
  rotate: function(a, positions){
    return a.slice(positions).concat(a.slice(0, positions));
  }
}
