// objects

var foo = {
  bar: 1,
  baz: 2
};

var { bar, baz } = foo;

// arrays

var nums = [1, 2, 3];
var [ num1, num2, num3 ] = nums;

// promises: destructuring results

Promise.all([promise1, promise2]).then(function(results) {
  var [ promise1, promise2 ] = results;
});

// promises: destructuring parameters

Promise.all([promise1, promise2]).then(function([promise1, promise2]) {

});

// parameters on functions

var weight = 50,
    height = 170,
    max    = 25;

function calculateBmi({ weight, height, max = 25, callback }) {
  var bmi = weight / Math.pow(height, 2);

  if (bmi > max) console.log('You are overweight');

  if (callback) callback(bmi);
}

calculateBmi({ weight, height, max });
calculateBmi({ weight, height, callback: function() {} });
