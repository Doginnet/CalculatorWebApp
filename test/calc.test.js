import {assert} from 'chai'
import {JSDOM} from 'jsdom'
import {enterNumbers} from '../calc.js'

const { window } = new JSDOM(`
  <!DOCTYPE html>
  <body>
    <button id="number-button">5</button>
    <div id="display"></div>
  </body>
`);
global.document = window.document;

describe('enterNumbers', function() {
  it('should append the clicked number to the display', function() {
    // Arrange
    const button = window.document.getElementById('number-button');
    const display = window.document.getElementById('display');

    // Act
    enterNumbers.call(button);

    // Assert
    assert.equal(display.textContent, '5');
  });
});