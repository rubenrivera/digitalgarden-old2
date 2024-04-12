const fs = require("fs");


  /**
   * Checkbox mark (character inside square brackets)
   * @typedef {string} checkboxMark
   */
  /**
   * Checked status of a checkbox, true = checked, false = unchecked.
   * @typedef {boolean} checkboxStatus
   */
  /**
   * Checkbox specification
   * @typedef {Array.<checkboxMark,checkboxStatus>} checkboxSpec
   */

  /**
   * Alternate checkbox checked values
   * Checkbox marks taken from the Kepano's Minimal Theme for Obsidian
   * @type {checkboxSpec[]}
   */
  const values = [
    // [' ', false],
    // ['\u00A0', false],// non-breaking space
    // ['x', true],
    ['/', true],
    ['-', true],
    ['>', true],
    ['<', true],
    ['?', true],
    ['!', true],
    ['*', true],
    ['"', true],
    ['i', true],
    ['l', true],
    ['b', true],
    ['S', true],
    ['I', true],
    ['p', true],
    ['c', true],
    ['f', true],
    ['k', true],
    ['w', true],
    ['u', true],
    ['d', true],
  ];

  /**
   * @param {string[][]} values Pair of checked marks and status (true = checked, false = unchecked)
   */
  function testRegExp(values){
  const str = values.map(e =>
    ['/', '-', '?', '*', '+', '^', '.', '$', '^']
      .includes(e[0]) ? '\\' + e[0] : e[0])
    .join('');
  const regex = new RegExp(`^\\\[([${str}])\\\][ \u00A0]`);
  return regex;
}

module.exports = {
  values: values,
  testRegExp: testRegExp
}