/**
 * The following object must contain:
 *  `first_name`property that is of type string
 *  `last_name` property that is of type string
 *  `class_of` property that is of type number
 *   a `full_name` function that would return the concatenation of `first_name` and `last_name` properties.
 *   an `introduction` function that returns a string of a welcome message. The introduction function:
 *      * must call the `full_name()` function to present the person's name.
 *      * must use the `class_of` property in the introduction
 */
const personObject = {

first_name: "Jack",
last_name: "Braun",
class_of: 2027,

full_name: function()
{
  return this.first_name + " "  + this.last_name;
},

introduction: function()
{
  return ("Hello! I am " + this.full_name() + " and I am a part of the UC class of " + this.class_of);
}
};

module.exports = {
  personObject
};