describe ("FizzBuzz", function() {
  FizzBuzz = require('../lib/FizzBuzz');
  var fizzbuzz;

  beforeEach(function(){
    fizzbuzz = new FizzBuzz();
  });

  it("Should return Fizz when given 3 as an argument", function() {
    expect(fizzbuzz.say(3)).toEqual("Fizz");
  });

  it("Should return Fizz when given 6 as an argument", function() {
    expect(fizzbuzz.say(6)).toEqual("Fizz");
  });

  it("Should return Buzz when given 5 as an argument", function() {
    expect(fizzbuzz.say(5)).toEqual("Buzz");
  });

  it("Should return Buzz when given 10 as an argument", function() {
    expect(fizzbuzz.say(10)).toEqual("Buzz");
  });

  it("Should return FizzBuzz when given 15 as an argument", function() {
    expect(fizzbuzz.say(15)).toEqual("FizzBuzz");
  });

  it("Should return FizzBuzz when given 30 as an argument", function() {
    expect(fizzbuzz.say(30)).toEqual("FizzBuzz");
  });
  it("Should return the number given if not divisible by 3, 5 or 15", function() {
    expect(fizzbuzz.say(1)).toEqual(1);
    expect(fizzbuzz.say(2)).toEqual(2);
  });
});

