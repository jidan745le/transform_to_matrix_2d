const math = require("mathjs");
const _ = require("lodash");

function multiplyMatrices(...matrices){
    return matrices.reduce((accu,matrix,idx)=>{
        return math.multiply(accu,matrix);
    }).valueOf();
}

function transformMatrixFormat(matrix){
    return _.zip(...matrix).reduce((accu,value,idx)=>{
        if(idx >1){
            return accu.concat(value.slice(0,2));
        }else{
            return accu.slice(0,2).concat(value.slice(0,2));
        }        
    })
}

module.exports = {multiplyMatrices,transformMatrixFormat};