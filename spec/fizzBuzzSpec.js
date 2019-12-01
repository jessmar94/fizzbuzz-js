describe("FizzBuzz", function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe('multiples of 3', function() {
    it('fizzes for 3', function() {
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });
  });

  describe('multiples of 5', function() {
    it('buzzes for 5', function() {
      expect(fizzBuzz.play(5)).toEqual('Buzz');
    });
  });

  describe('non-multiples of 3 or 5', function() {
    it('returns the number', function() {
      expect(fizzBuzz.play(2)).toEqual(2);
    });
  });

  describe('multiples of 3 and 5', function() {
    it('fizzbuzzes for multiples of 3 and 5', function() {
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
    });
    it('fizzbuzzes for multiples of 3 and 5', function() {
      expect(fizzBuzz.play(30)).toEqual('FizzBuzz');
    });
  });
});
