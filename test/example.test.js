// IMPORT MODULES under test here:
// import example from '../src/example.js';
import isYes from '../isYes.js';

const test = QUnit.test;
const expected = false;
const answer = 'chicken';

test('Test if isYes for yes', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = true;
    const answer = 'yes';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(answer);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('Test if isYes for chicken', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(answer);


    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});