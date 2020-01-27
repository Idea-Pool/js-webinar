const calc = require('../calc');
const expect = require('chai').expect;

describe ('calc', () => {
    /*
     * calc(3).v // 3
     * calc(3).add(5).v // 8
     * calc(3).minus(2).v // 1
     * calc(4).sqrt().v // 2
     * calc(3).times(10).v // 30
     * calc(10).divide(2).v // 5
     * calc(10).modulo(5).v // 0
     * calc(5).divide(0) // throw error
     * calc(-3).sqrt() // throw error
     * calc(3).add(4)
     *     .minus(3)
     *     .times(6).v // 24
     */
    // TODO: write test cases to test calculator
    it ("should have proper value!", () => {
      const c = calc(3).v;
      expect(c).not.to.be.undefined;
    });

});

//calc(3).add(5).v // 8
//calc(3).add(4)
describe ('add', () => {
   it ("should exist", () => {

  });

   it ("should be able to add 3+5", () => {
    // Given
    const c = calc(3);
    //When
    const result = c.add(5).v;
    //Then
    expect(result).to.be.equal(8);
  });

   it ("should be able to add 3+4", () => {
    const c = calc(3);
    const result = c.add(4).v;
    expect(result).to.be.equal(7);
  });
});

//calc(3).minus(2).v // 1
//       .minus(3)
describe ('minus', () => {
  it ("should exist", () => {

  });

  it ("should be able to substract 3-2", () => {
    //Given
    const c = calc (3);
    //When
    const result = c.minus(2).v;
    //Then
    expect(result).to.be.equal(1);
  });

  it ("should be able to substract 100-3", () => {
    //Given
    const c = calc (100);
    //When
    const result = c.minus(3).v;
    //Then
    expect(result).to.be.equal(97);
  });
});

// sqrt calc(4).sqrt().v // 2
// calc(-3).sqrt() // throw error
describe ('sqrt', () => {
  it ("should exist", () => {

  });

  it ("should be able to extract square 4", () => {
    //Given
    const c = calc (4);
    //When
    const result = c.sqrt().v;
    //Then
    expect(result).to.be.equal(2);
  });

  it ("should return error message in case extracting square from negative value (-3)", () => {
    const c = calc(-3);
  //  const result = c.sqrt();
    expect(() => c.sqrt(-3)).throw('Square root of negative value cannot be determined!');

  });
});

//calc(3).times(10).v // 30
//       .times(6).v // 24
 describe ('times', () => {
  it ("should exist", () => {

  });

   it ("should be able to multiply 3*10", () => {
     const c = calc(3);
     const result = c.times(10).v;
     expect(result).to.be.equal(30);
   });

   it ("should be able to multiply 4*6", () => {
      const c = calc(4);
      const result = c.times(6).v;
      expect(result).to.be.equal(24);
   });
 });

// calc(10).divide(2).v // 5
// calc(5).divide(0) // throw error
 describe ('divide', () => {
   it ("should exist", () => {
 });
//
   it ("should be able to divide 10/2", () => {
     const c = calc(10);
     const result = c.divide(2).v;
    expect(result).to.be.equal(5)
   });
//
   it ("should return Error message in case to dividing by 0", () => {
     const c = calc(5);
     //const result = c.divide(0).v;
     expect(() => c.divide(0)).throw('Division by 0 is not possible!')
    // expect(true).to.be.true

   });
 });

// calc(10).modulo(5).v // 0
 describe ('modulo', () => {
    it ("should exist", () => {
  });

    it ("should return remainder of the division ", () => {
       const c = calc(10);
       const result = c.modulo(5).v;
       expect(result).to.be.equal(0);
   });
 });
