'use strict';
var rootElement = document.documentElement,
  // Gets the styles object for an element
  styles = getComputedStyle(rootElement),
  // Gets the --main-bg value from the styles object
  mainColor = styles.getPropertyValue('--main-bg');

// Ensures mainColor is a String and trims whitespace; logs "#fff"
console.log(String(mainColor).trim());
