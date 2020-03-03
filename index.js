const {multiplyMatrices,transformMatrixFormat} = require("./lib/matrix.js");
const {rotate,translate,scale,skew} = require("./lib/transform.js");


let result = multiplyMatrices(rotate(30),translate(10,10),skew(30,45));
console.log(result,transformMatrixFormat(result));