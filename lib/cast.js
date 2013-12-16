var resolve = require('lie-resolve');
var promise = require('lie');
function cast(thing){
    if(thing instanceof promise){
        return thing;
    }else{
        return resolve(thing);
    }
}
module.exports = cast;