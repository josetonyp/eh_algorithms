// As the array is ordered it is posible to use the output as count for numbers found in array
function _ArrayCompact(a) {
  return a.reduce(function(memo, num) {
    if (memo.length > -1 && memo[memo.length - 1] != num){
      memo.push(num);
    };
    return memo;
  }, []);
};

function _ArrayRotate(a, positions) {
  return a.slice(positions).concat(a.slice(0, positions));
};

function _ArrayMinPrimeFactor(n) {
  if (n==0 || n==1) return n;
  if (n%2==0) return 2;
  if (n%3==0) return 3;
  if (n%5==0) return 5;
  for (var i = 7; i*i < n; i = i + 30 ) {
    if ( n % i == 0 ) return i;
    if ( n % ( i+4 ) == 0) return i+4;
    if ( n % ( i+6 ) == 0) return i+6;
    if ( n % ( i+10 ) == 0) return i+10;
    if ( n % ( i+12 ) == 0) return i+12;
    if ( n % ( i+16 ) == 0) return i+16;
    if ( n % ( i+22 ) == 0) return i+22;
    if ( n % ( i+24 ) == 0) return i+24;
  };
  return n;
};

function _ArrayMin(a) {
  return a.filter(isFinite).sort()[0];
};

// Find the Minimal Prime Factor of every integer in the array
// Calculate the iterated LCM by keeping the accumulation in a Tail Recursive function
// Divide the integers in the array that are factor of this Minimal Prime Factor by it
// Iterate recursively over the solution

function _ArrayLcm (a, LcmAcc) {
  if (a.length == 0) {
    return LcmAcc;
  };

  if (undefined == LcmAcc) {
    LcmAcc = 1;
  };

  var MinPrimerFactorArray = a.map(_ArrayMinPrimeFactor);
  var minimalFactor = _ArrayMin(MinPrimerFactorArray)
  LcmAcc  = LcmAcc * minimalFactor;

  for (i in MinPrimerFactorArray) {
    if (MinPrimerFactorArray[i] == minimalFactor)
      a[i] = a[i] / minimalFactor;
  }

  return _ArrayLcm(a.filter(function(i){ return i > 1 }), LcmAcc);
};

module.exports = {
  compact: _ArrayCompact,
  rotate: _ArrayRotate,
  minPrimeFactor: _ArrayMinPrimeFactor,
  lcm: _ArrayLcm
};
