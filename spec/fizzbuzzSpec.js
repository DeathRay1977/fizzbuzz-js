describe ("Fizzbuzz", function() {
  var fizzbuzz;

  beforeEach(function(){
    fizzbuzz = new Fizzbuzz();
  });

  it("Should return Fizz when given 3 as an argument", function() {
    expect(fizzbuzz.say(3)).toEqual("Fizz");
  });


}):
