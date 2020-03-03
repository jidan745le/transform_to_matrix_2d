const math = require("mathjs");
function rotate(deg){
    const a = deg*(Math.PI/180);
    return math.matrix([[Math.cos(a),-Math.sin(a),0],[Math.sin(a),Math.cos(a),0],[0,0,1]]);
}

function translate(tx,ty){
    return math.matrix([[1,0,tx],[0,1,ty],[0,0,1]]);
}

function scale(sx,sy){
    return math.matrix([[sx,0,0],[0,sy,0],[0,0,1]]);
}

function skew(x,y){
    const ax = x*(Math.PI/180);
    const ay = y*(Math.PI/180);
    return math.matrix([[1,Math.tan(ax),0],[Math.tan(ay),1,0],[0,0,1]]);
}

module.exports = {
    rotate,translate,scale,skew
}