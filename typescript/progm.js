"use strict";
// Basic Types
let id = 24;
let company = 'Atom';
let x = 'employe';
// Tuples
let person = [1, 'ameen', true];
// Tuple Array
let employee;
employee = [[1, 'john'], [2, 'jack'], [3, 'prince']];
// Union 
let pid;
pid = '22';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
