// I have a significant preference towards interpolation. I find it to be a lot more elegant.
// Particularly when using template literals `` and long strings or multi-line strings. For example:

var item = 'pencils';
var price = 11.99;
var location = 'Target'
var stock = 23
var distance = 3

// using concatenation, we could:

console.log(location + ' has ' + stock + ' ' + item + ' at $' + price + '. The closest ' + location + ' is ' + distance + ' miles away.')
// I find this tedious and had to parse and construct.

// using interpolation and template literals (` to the right of the 1 key), we can create a much more elegant version.
// the ${} tells javascript to insert the value contained inside the {} into the `` template.

console.log(`${location} has ${stock} ${item} at $${price}. The closest ${location} is ${distance} miles away.`)
// This is much easier to parse, contruct and alter in my opinion.
